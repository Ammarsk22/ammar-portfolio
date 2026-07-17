import { motion, useReducedMotion } from "framer-motion";
import { EASE, cn } from "../lib/utils";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "span" | "div";
  className?: string;
  startDelay?: number;
  staggerPerChar?: number;
  charDuration?: number;
}

/**
 * Splits text into characters and reveals them one after another with a
 * blur + fade + slide-up entrance. Spaces are preserved as non-collapsing.
 */
export default function AnimatedText({
  text,
  as = "span",
  className,
  startDelay = 0,
  staggerPerChar = 0.028,
  charDuration = 0.6,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as];
  const chars = Array.from(text);

  if (prefersReducedMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerPerChar,
        delayChildren: startDelay,
      },
    },
  };

  const char = {
    hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: charDuration, ease: EASE },
    },
  };

  return (
    <Tag
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={char}
          className="inline-block"
          style={{ whiteSpace: c === " " ? "pre" : "normal" }}
          aria-hidden="true"
        >
          {c}
        </motion.span>
      ))}
    </Tag>
  );
}
