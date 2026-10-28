import { useEffect, useMemo, useRef, useState } from "react";

interface SpotlightOptions {
  /** Radius of the spotlight in CSS pixels. */
  radius?: number;
  /** Smoothing factor for the cursor-follow lerp, 0–1. Lower = smoother/slower. */
  lerp?: number;
}

/**
 * Builds a radial gradient mask on a hidden canvas and keeps a reveal layer's
 * mask-position glued to the (smoothed) cursor. The gradient is drawn with
 * transparency (alpha), because CSS masks built from an image read the alpha
 * channel in Chrome, Safari and Firefox. An opaque grayscale gradient would
 * show up as a hard-edged square instead of a soft circle.
 */
export function useSpotlightMask({ radius = 280, lerp = 0.1 }: SpotlightOptions = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const [maskDataUrl, setMaskDataUrl] = useState<string>("");

  const size = radius * 2;

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Generate the gradient texture once.
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = radius;
    const cy = radius;
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);

    // Stops expressed as [offset, opacity%]: fully revealed in the middle,
    // fading smoothly to nothing at the edge.
    const stops: Array<[number, number]> = [
      [0, 100],
      [0.35, 100],
      [0.55, 75],
      [0.72, 40],
      [0.88, 15],
      [1, 0],
    ];

    stops.forEach(([offset, pct]) => {
      gradient.addColorStop(offset, `rgba(0,0,0,${pct / 100})`);
    });

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    setMaskDataUrl(canvas.toDataURL("image/png"));
  }, [radius, size]);

  // Cursor tracking with rAF + lerp smoothing, applied imperatively for perf.
  useEffect(() => {
    const container = containerRef.current;
    const reveal = revealRef.current;
    if (!container || !reveal) return;

    let target = { x: window.innerWidth / 2, y: window.innerHeight * 0.4 };
    const current = { ...target };
    let raf = 0;
    let hasInteracted = false;

    // Without a mouse there is nothing to follow, so the spotlight drifts on its
    // own until the first touch or move, otherwise the reveal portrait is never seen.
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const shouldDrift = !hasMouse && !reducedMotion;

    const applyPosition = (x: number, y: number) => {
      const rect = container.getBoundingClientRect();
      const left = x - rect.left - radius;
      const top = y - rect.top - radius;
      reveal.style.maskPosition = `${left}px ${top}px`;
      reveal.style.setProperty("-webkit-mask-position", `${left}px ${top}px`);
    };

    const onPointerMove = (e: PointerEvent) => {
      hasInteracted = true;
      target = { x: e.clientX, y: e.clientY };
    };

    const tick = (time: number) => {
      if (shouldDrift && !hasInteracted) {
        const rect = container.getBoundingClientRect();
        const t = time / 1000;
        target = {
          x: rect.left + rect.width * (0.5 + 0.28 * Math.sin(t * 0.55)),
          y: rect.top + rect.height * (0.38 + 0.16 * Math.sin(t * 0.8 + 1)),
        };
      }
      const factor = reducedMotion ? 1 : lerp;
      current.x += (target.x - current.x) * factor;
      current.y += (target.y - current.y) * factor;
      if (hasInteracted || reducedMotion || shouldDrift) {
        applyPosition(current.x, current.y);
      }
      raf = requestAnimationFrame(tick);
    };

    // Gentle default presence near the headline before first interaction.
    applyPosition(target.x, target.y);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [radius, lerp, reducedMotion]);

  return { containerRef, revealRef, maskDataUrl, maskSize: size };
}
