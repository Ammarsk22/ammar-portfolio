import { SKILL_CATEGORIES, SOFT_SKILLS, SPOKEN_LANGUAGES } from "../data/portfolioData";
import { asset } from "../lib/utils";
import SectionHeader from "../components/SectionHeader";
import BackgroundVideo from "../components/BackgroundVideo";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-edge px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Skills"
          intro="What I build with every day, and the computer science underneath it."
        />

        <div className="mt-10 border-t border-edge">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="grid grid-cols-1 gap-4 border-b border-edge py-7 md:grid-cols-[15rem_1fr] md:gap-10"
            >
              <div>
                <h3 className="font-display text-lg font-bold">{cat.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">{cat.description}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-edge bg-glass-soft px-2.5 py-1 font-mono text-xs text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-8 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-bold">Working with others</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill) => (
                <li key={skill} className="rounded-full border border-edge px-3 py-1 text-sm text-ink-soft">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">Languages I speak</h3>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
              {SPOKEN_LANGUAGES.map((lang) => (
                <li key={lang.name}>
                  <span className="font-semibold text-ink">{lang.name}</span>, {lang.level.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How I work: robot video on the right, stays dark in both themes */}
        <div className="theme-dark mt-16 grid overflow-hidden rounded-3xl border border-edge bg-bg text-ink md:grid-cols-2">
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Modern tools, solid fundamentals</h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              I use AI assistants and modern tooling to move faster on drafts and debugging. What ships is still code
              I can read, test and explain, with data structures, OOP and a clean Firestore data model underneath.
            </p>
          </div>
          <div className="relative min-h-[15rem] md:min-h-[20rem]">
            <BackgroundVideo src={asset("media/robot.mp4")} poster={asset("media/robot-poster.webp")} />
          </div>
        </div>
      </div>
    </section>
  );
}
