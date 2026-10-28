import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "../data/portfolioData";
import { ProjectItem } from "../types";
import SectionHeader from "../components/SectionHeader";

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const FILTERS = ["All", "System", "PWA", "Frontend"];

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="border-t border-edge px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Projects"
          intro="Real apps for real users, from a cloud ERP for a family printing business to a masjid community site. Open any project for the full case study."
        />

        <div className="mt-10 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by type">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-bg"
                    : "border-edge text-ink-soft hover:border-ink/40 hover:text-ink"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 border-t border-edge">
          {filtered.map((project) => (
            <li
              key={project.id}
              className="group relative border-b border-edge transition-colors duration-300 focus-within:bg-glass-soft hover:bg-glass-soft"
            >
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[11rem_1fr_auto] md:gap-8 md:px-4">
                <div className="text-sm text-ink-dim">
                  <p>{project.year}</p>
                  <p className="mt-1">{project.status}</p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent2 sm:text-3xl">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-left after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                      <span className="sr-only"> — open case study</span>
                    </button>
                  </h3>
                  <p className="mt-1 font-serif-italic text-lg text-ink-soft sm:text-xl">{project.tagline}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                    {project.shortDescription}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <li key={tech} className="rounded-md border border-edge px-2 py-0.5 font-mono text-[11px] text-ink-soft">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden h-12 w-12 items-center justify-center self-center rounded-full border border-edge text-ink transition-all duration-300 group-hover:border-accent2 group-hover:bg-accent2 group-hover:text-on-accent md:flex"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-accent2 hover:text-accent2"
          >
            See more repositories on GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
