import { motion, useReducedMotion } from "framer-motion";

export default function ScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink-soft">
        Scroll to Explore
      </span>
      <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden="true">
        <rect
          x="1"
          y="1"
          width="20"
          height="32"
          rx="10"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.4"
        />
        <motion.circle
          cx="11"
          cy="10"
          r="2.1"
          fill="#ffffff"
          animate={prefersReducedMotion ? undefined : { cy: [10, 20, 10], opacity: [1, 0.2, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}
