import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
}

const COUNT = 34;

export default function ParticleField() {
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: COUNT }, (_, id) => ({
        id,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 1.6,
        opacity: 0.04 + Math.random() * 0.08,
        duration: 26 + Math.random() * 26,
        delay: -Math.random() * 30,
        drift: 14 + Math.random() * 22,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -p.drift, 0],
                  x: [0, p.drift * 0.35, 0],
                }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
