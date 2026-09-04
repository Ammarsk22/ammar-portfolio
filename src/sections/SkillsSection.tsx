import { SKILL_CATEGORIES, SOFT_SKILLS, SPOKEN_LANGUAGES } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

export default function SkillsSection() {
  const allSkillsCount = SKILL_CATEGORIES.reduce((sum, c) => sum + c.skills.length, 0);

  return (
    <section id="skills" className="border-b border-edge px-6 py-16 sm:px-10 lg:px-14">
      <SectionHeader number="04" title="Skills & Technical Toolkit" meta={`${allSkillsCount} Skills Catalogued`} />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl border border-edge bg-glass-soft p-5 transition-colors hover:border-accent2/40"
          >
            <h3 className="text-sm font-bold text-ink">{cat.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft">{cat.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-edge bg-white/5 px-2.5 py-1 font-mono text-[11px] text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills + languages */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-edge bg-glass-soft p-5">
          <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-dim">
            Soft Skills
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-edge bg-white/5 px-3 py-1 text-xs text-ink-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-edge bg-glass-soft p-5">
          <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-dim">
            Languages
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {SPOKEN_LANGUAGES.map((lang) => (
              <span key={lang.name} className="text-xs text-ink-soft">
                <span className="font-semibold text-ink">{lang.name}</span> — {lang.level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
