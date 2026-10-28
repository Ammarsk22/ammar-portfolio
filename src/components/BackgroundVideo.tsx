import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

interface BackgroundVideoProps {
  src: string;
  poster: string;
  className?: string;
}

/**
 * Decorative looping video that fills its parent. The poster image is always
 * rendered; the video only loads on wide screens, when the visitor has not
 * asked for reduced motion or data saving, and it pauses while off-screen.
 */
export default function BackgroundVideo({ src, poster, className }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    setAllowVideo(!reduceMotion && wide && !saveData);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!allowVideo || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => undefined);
        else video.pause();
      },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [allowVideo]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      {allowVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
        />
      )}
    </div>
  );
}
