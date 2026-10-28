import { EDUCATION_DATA } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

export default function EducationSection() {
  return (
    <section id="education" className="border-t border-edge px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="Education" intro="Newest first." />

        <ol className="mt-12 border-l border-edge">
          {EDUCATION_DATA.map((edu) => (
            <li key={edu.id} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
              <span
                className="absolute -left-[6px] top-2 h-3 w-3 rounded-full border-2 border-bg bg-accent2"
                aria-hidden="true"
              />
              <p className="text-sm text-ink-dim">{edu.period}</p>
              <h3 className="mt-1 font-display text-xl font-bold leading-snug sm:text-2xl">{edu.degree}</h3>
              <p className="mt-1 text-ink-soft">
                {edu.institution}, {edu.location}
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                <span className="rounded-md bg-accent2-soft px-2 py-0.5 font-semibold text-accent2">
                  {edu.scoreOrStatus}
                </span>
                <span className="ml-3">{edu.boardOrAffiliation}</span>
              </p>
              {edu.details && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">{edu.details}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
