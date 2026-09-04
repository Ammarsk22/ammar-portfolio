import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../lib/utils";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function StatsStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="border-b border-edge bg-bg px-6 py-8 sm:px-10 lg:px-14"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-6">
        {PERSONAL_INFO.stats.map((stat) => (
          <div key={stat.label} className="sm:border-l sm:border-edge sm:first:border-l-0 sm:pl-6 sm:first:pl-0">
            <div className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">{stat.value}</div>
            <div className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-accent2 sm:text-[11px]">
              {stat.label}
            </div>
            <div className="mt-0.5 text-xs text-ink-soft">{stat.sub}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
