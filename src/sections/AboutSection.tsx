import { Code, Smartphone, Cloud, Layers, Target, Sparkles, LucideIcon } from "lucide-react";
import { PERSONAL_INFO, MINDSET_PILLARS } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

const ICONS: Record<string, LucideIcon> = { Code, Smartphone, Cloud, Layers, Target, Sparkles };

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-edge px-6 py-16 sm:px-10 lg:px-14">
      <SectionHeader number="03" title="About Me" meta="Core Focus Areas" />

      <div className="mt-10 max-w-3xl">
        <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{PERSONAL_INFO.bio}</p>
      </div>

      {/* Focus panel */}
      <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-edge bg-glass-soft p-6 sm:p-8 lg:grid-cols-2">
        <div className="space-y-3">
          <span className="inline-block rounded-full border border-accent2/30 bg-accent2-soft px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-accent2">
            PWA &amp; Firebase Engineering
          </span>
          <ul className="space-y-2 pt-2 text-sm text-ink-soft">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent2" /> Offline-first architecture &amp; Firestore data
              design
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent2" /> Role-based auth &amp; secure client-side flows
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent2" /> Responsive, installable UI across devices
            </li>
          </ul>
        </div>
        <div className="space-y-3 border-t border-edge pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-dim">
            Full-Stack Direction
          </span>
          <h3 className="text-lg font-bold text-ink">
            Growing from vanilla JS foundations into a full-stack React engineer.
          </h3>
          <p className="text-sm leading-relaxed text-ink-soft">
            Core technologies &amp; frameworks: React.js, TypeScript, Firebase, Tailwind CSS, Node.js.
          </p>
        </div>
      </div>

      {/* Mindset pillars */}
      <div className="mt-14 space-y-6">
        <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-dim">
          What I Care About as a Developer
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MINDSET_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.iconName] ?? Sparkles;
            return (
              <div
                key={pillar.id}
                className="group rounded-xl border border-edge bg-glass-soft p-5 transition-all duration-300 hover:border-accent2/40 hover:bg-glass"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-white/5 text-accent2 transition-colors group-hover:bg-accent2 group-hover:text-black">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h4 className="text-sm font-bold text-ink">{pillar.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
