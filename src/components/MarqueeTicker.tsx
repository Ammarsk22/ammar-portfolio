import { MARQUEE_TECH } from "../data/portfolioData";

export default function MarqueeTicker() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div className="w-full select-none overflow-hidden border-b border-edge bg-[#0a0a0a] py-2.5">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((block) => (
          <div key={block} className="flex shrink-0 items-center">
            {items.map((tech, idx) => (
              <div
                key={`${block}-${idx}`}
                className="flex items-center font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-soft sm:text-xs"
              >
                <span className="cursor-default transition-colors hover:text-ink">{tech}</span>
                <span className="mx-4 font-bold text-accent2 sm:mx-5">/</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
