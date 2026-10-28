import { MARQUEE_TECH } from "../data/portfolioData";

export default function MarqueeTicker() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div
      className="w-full select-none overflow-hidden border-y border-edge bg-surface py-3.5"
      aria-hidden="true"
    >
      <div className="animate-marquee">
        {[0, 1].map((block) => (
          <div key={block} className="flex shrink-0 items-center">
            {items.map((tech, idx) => (
              <div key={`${block}-${idx}`} className="flex items-center">
                <span className="font-display text-base font-medium text-ink-soft sm:text-lg">{tech}</span>
                <span className="mx-5 h-1.5 w-1.5 rounded-full bg-accent2 sm:mx-7" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
