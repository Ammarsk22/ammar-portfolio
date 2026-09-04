import { EDUCATION_DATA } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";

export default function EducationSection() {
  return (
    <section id="education" className="border-b border-edge px-6 py-16 sm:px-10 lg:px-14">
      <SectionHeader number="05" title="Education & Academic Background" meta={`${EDUCATION_DATA.length} Academic Entries`} />

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-edge bg-[#0a0a0a] p-6 shadow-xl sm:p-8">
        {/* Backdrop */}
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, rgba(86,0,20,0.35), transparent 60%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-accent2/50 hover:bg-white/[0.06] sm:p-7"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-accent2/20 transition-colors duration-300 group-hover:bg-accent2" />

              <div className="relative z-10 mb-8 flex flex-col space-y-2 pl-2">
                <div className="mb-1 font-mono text-xs font-semibold tracking-widest text-ink-soft transition-colors group-hover:text-accent2 sm:text-sm">
                  {edu.period}
                </div>
                <h3 className="text-lg font-bold leading-snug text-ink sm:text-xl">{edu.degree}</h3>
                <div className="text-sm text-ink-soft">
                  {edu.institution}, {edu.location}
                </div>
              </div>

              <div className="relative z-10 mt-auto space-y-4 pl-2">
                <div className="inline-flex items-center rounded border border-accent2/30 bg-accent2-soft px-3 py-1.5 font-mono text-xs text-ink shadow-sm">
                  {edu.scoreOrStatus}
                </div>
                <div className="space-y-1.5 border-t border-white/10 pt-4 text-xs text-ink-dim transition-colors group-hover:border-white/20">
                  <div className="font-mono text-[11px]">
                    <span className="font-semibold text-ink-soft">Affiliation:</span> {edu.boardOrAffiliation}
                  </div>
                  {edu.details && <p className="text-[11px] leading-relaxed text-ink-dim">{edu.details}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
