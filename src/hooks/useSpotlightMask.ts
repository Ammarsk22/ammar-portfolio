import { useEffect, useMemo, useRef, useState } from "react";

interface SpotlightOptions {
  /** Radius of the spotlight in CSS pixels. */
  radius?: number;
  /** Smoothing factor for the cursor-follow lerp, 0–1. Lower = smoother/slower. */
  lerp?: number;
}

/**
 * Builds a radial gradient mask on a hidden canvas and keeps a reveal layer's
 * mask-position glued to the (smoothed) cursor. The gradient is rendered in
 * grayscale rather than alpha so it behaves identically as a luminance mask
 * across engines that default -webkit-mask-image to luminance.
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

    // Stops expressed as [offset, intensity%] per spec — rendered as grayscale
    // luminance rather than alpha for cross-browser mask reliability.
    const stops: Array<[number, number]> = [
      [0, 100],
      [0.35, 100],
      [0.55, 75],
      [0.72, 40],
      [0.88, 15],
      [1, 0],
    ];

    stops.forEach(([offset, pct]) => {
      const v = Math.round((pct / 100) * 255);
      gradient.addColorStop(offset, `rgb(${v},${v},${v})`);
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

    const tick = () => {
      const factor = reducedMotion ? 1 : lerp;
      current.x += (target.x - current.x) * factor;
      current.y += (target.y - current.y) * factor;
      if (hasInteracted || reducedMotion) {
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
