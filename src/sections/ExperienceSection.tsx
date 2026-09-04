import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-edge px-6 py-16 sm:px-10 lg:px-14">
      <SectionHeader number="02" title="Experience" meta={`${EXPERIENCES.length} Simulated Roles`} />

      <div className="mt-12 space-y-14">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="space-y-6">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="flex flex-wrap items-center gap-1.5 text-2xl font-bold text-ink sm:text-[28px]">
                  <span>{exp.rolePrefix}</span>
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 text-accent2 transition-colors hover:underline"
                    >
                      <span>{exp.companyName}</span>
                      <ArrowUpRight className="h-5 w-5 stroke-[2.5] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="text-accent2">{exp.companyName}</span>
                  )}
                </h3>
                <span className="font-mono text-xs font-medium tracking-wider text-ink-dim sm:text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="mt-3 max-w-4xl text-sm leading-relaxed text-ink-soft sm:text-base">
                {exp.summary}
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {exp.modules.map((mod, mIdx) => (
                <div key={mIdx} className="space-y-3.5 border-t border-edge py-4 first:border-t-0 first:pt-0">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-accent2">{mod.number}</span>
                      <span className="font-mono text-xs font-bold tracking-wide text-ink sm:text-sm">
                        {mod.title}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {mod.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-edge bg-white/5 px-3 py-1 font-mono text-xs text-ink"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    {mod.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                        <span className="select-none font-mono font-medium text-ink-dim">—</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-10 border-t border-edge pt-8">
        <div className="grid grid-cols-1 gap-6 divide-y divide-edge sm:grid-cols-3 sm:gap-6 sm:divide-x sm:divide-y-0">
          <div className="sm:pr-6">
            <div className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">2</div>
            <div className="mt-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-ink-dim sm:text-xs">
              Forage Simulations
            </div>
          </div>
          <div className="pt-6 sm:pt-0 sm:px-6">
            <div className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">SE + AWS</div>
            <div className="mt-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-ink-dim sm:text-xs">
              Simulation Tracks
            </div>
          </div>
          <div className="pt-6 sm:pt-0 sm:pl-6">
            <div className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">4+</div>
            <div className="mt-1.5 font-mono text-[11px] font-medium uppercase tracking-widest text-ink-dim sm:text-xs">
              Real Projects Shipped
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
