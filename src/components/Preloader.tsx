import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { asset, EASE } from "../lib/utils";

interface PreloaderProps {
  /** Called when the counter reaches 100 and the hero images are ready. */
  onDone: () => void;
}

const MIN_DURATION = 1700; // ms, so the intro never feels like a flash
const MAX_WAIT = 4500; // ms, never block the site on a slow connection

const HERO_IMAGES = ["images/Base_image.webp", "images/Reveal_image.webp"];

/**
 * Short intro. The counter is tied to something real: it holds at 92 until
 * both hero portraits have loaded. It closes like a camera iris, which echoes
 * the cursor spotlight in the hero it reveals.
 */
export default function Preloader({ onDone }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    let imagesReady = false;
    let finished = false;
    let raf = 0;
    let timer = 0;
    const start = performance.now();

    const loads = HERO_IMAGES.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = img.onerror = () => resolve();
          img.src = asset(src);
        })
    );
    const giveUp = new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT));
    Promise.race([Promise.all(loads), giveUp]).then(() => {
      imagesReady = true;
    });

    const tick = (now: number) => {
      const t = Math.min((now - start) / MIN_DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const cap = imagesReady ? 100 : 92;
      const value = Math.min(Math.round(eased * 100), cap);
      setCount(value);

      if (value >= 100 && !finished) {
        finished = true;
        timer = window.setTimeout(() => doneRef.current(), 280);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      className="theme-dark fixed inset-0 z-[200] flex items-center justify-center bg-bg text-ink"
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)", transition: { duration: 1.05, ease: EASE } }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(38% 38% at 50% 50%, rgba(255,61,99,0.14), transparent 72%)" }}
      />

      <div className="relative flex flex-col items-center text-center">
        <motion.img
          src={asset("favicon.png")}
          alt=""
          className="h-20 w-20 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
        />
        <motion.p
          className="mt-6 font-display text-2xl font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        >
          Ammar Shaikh
        </motion.p>
        <motion.p
          className="mt-1 font-serif-italic text-xl text-ink-soft"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>
      </div>

      <div className="absolute inset-x-6 bottom-9 flex items-end justify-between sm:inset-x-10">
        <span className="text-xs text-ink-dim">Loading portfolio</span>
        <span className="font-display text-5xl font-semibold tabular-nums leading-none sm:text-6xl">
          {String(count).padStart(3, "0")}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-ink/10">
        <div className="h-full bg-accent2" style={{ width: `${count}%` }} />
      </div>
    </motion.div>
  );
}
