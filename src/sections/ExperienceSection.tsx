import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-edge px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Experience"
          intro="Two Forage job simulations, one on software engineering and one on AWS solutions architecture. These are simulated roles, completed in full."
        />

        <ol className="mt-12 space-y-14">
          {EXPERIENCES.map((exp) => (
            <li key={exp.id} className="grid grid-cols-1 gap-3 md:grid-cols-[9rem_1fr] md:gap-10">
              <p className="text-sm text-ink-dim md:pt-2">{exp.period}</p>

              <div>
                <h3 className="font-display text-2xl font-bold leading-snug sm:text-3xl">
                  <span>{exp.rolePrefix}</span>
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 text-accent2 hover:underline"
                    >
                      {exp.companyName}
                      <ArrowUpRight
                        className="h-5 w-5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <span className="text-accent2">{exp.companyName}</span>
                  )}
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{exp.summary}</p>

                {exp.modules.map((mod) => (
                  <div key={mod.title} className="mt-7 border-t border-edge pt-6">
                    <h4 className="font-display text-lg font-bold">{mod.title}</h4>
                    <ul className="mt-3 max-w-2xl space-y-2">
                      {mod.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {mod.tags.map((tag) => (
                        <li key={tag} className="rounded-md border border-edge px-2.5 py-1 font-mono text-[11px] text-ink-soft">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
