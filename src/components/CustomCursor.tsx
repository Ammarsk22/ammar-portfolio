import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, summary, label, [role="button"], [data-cursor="hover"]';
const TEXT_FIELD = "input, textarea, select";

type CursorState = "idle" | "link" | "text";

/**
 * A small dot plus a trailing ring. It only exists for mouse-like pointers
 * (never touch), keeps the normal caret over form fields, and the native
 * cursor is only hidden once the first real mouse move has been seen.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!canHover || !dot || !ring) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const html = document.documentElement;

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let visible = false;

    const setState = (state: CursorState) => {
      dot.dataset.state = state;
      ring.dataset.state = state;
    };

    const show = (on: boolean) => {
      dot.style.opacity = on ? "1" : "0";
      ring.style.opacity = on ? "1" : "0";
      visible = on;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        rx = x;
        ry = y;
        html.classList.add("has-custom-cursor");
        show(true);
      }
      const target = e.target as Element | null;
      if (target?.closest(TEXT_FIELD)) setState("text");
      else if (target?.closest(INTERACTIVE)) setState("link");
      else setState("idle");
    };

    const onLeave = () => show(false);

    const tick = () => {
      const ease = reduceMotion ? 1 : 0.2;
      rx += (x - rx) * ease;
      ry += (y - ry) * ease;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      html.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" data-state="idle" aria-hidden="true">
        <span className="cursor-ring__shape" />
      </div>
      <div ref={dotRef} className="cursor-dot" data-state="idle" aria-hidden="true">
        <span className="cursor-dot__shape" />
      </div>
    </>
  );
}
