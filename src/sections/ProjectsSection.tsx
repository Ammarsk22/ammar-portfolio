import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { PROJECTS, PERSONAL_INFO } from "../data/portfolioData";
import { ProjectItem } from "../types";
import SectionHeader from "../components/SectionHeader";

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ["ALL", "SYSTEM", "PWA", "FRONTEND"];

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="border-b border-edge px-6 py-16 sm:px-10 lg:px-14">
      <SectionHeader number="01" title="Projects" meta="Featured Work & Case Studies" />

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-10 pt-6">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 font-mono text-xs font-bold tracking-wider transition-colors sm:text-sm ${
                isActive ? "bg-accent2 text-black" : "bg-glass text-ink-soft hover:bg-white/10 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-edge bg-glass-soft transition-all duration-300 hover:border-accent2/50 hover:bg-glass"
          >
            {/* Browser-frame mockup */}
            <div className="relative overflow-hidden border-b border-edge bg-black/60">
              <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-3.5 py-2.5 font-mono text-[11px] text-ink-dim">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-2 hidden text-[10px] text-ink-dim sm:inline">
                    ammarsk22.dev/{project.id}
                  </span>
                </div>
                <div className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] font-bold text-accent2">
                  PROJ-{project.number}
                </div>
              </div>

              <div className="dot-grid relative flex h-48 flex-col justify-between bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-black p-5 transition-transform duration-300 group-hover:scale-[1.015] sm:h-56">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded bg-white/10 px-2.5 py-1 font-mono text-[10px] text-ink-soft">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-ink-dim">{project.year}</span>
                </div>

                <div className="relative z-10 my-auto space-y-1 text-center">
                  <div className="text-lg font-bold tracking-tight text-ink sm:text-xl">{project.title}</div>
                  <div className="line-clamp-1 font-mono text-xs text-accent2">{project.tagline}</div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-ink transition-colors group-hover:border-accent2 group-hover:bg-accent2 group-hover:text-black">
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-ink transition-colors group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 p-5 sm:p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-accent2">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-ink-dim">{project.year.split(" ")[0]}</span>
              </div>
              <div className="line-clamp-1 font-mono text-xs uppercase tracking-wider text-ink-dim">
                {project.tagline}
              </div>
              <p className="line-clamp-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-edge bg-white/5 px-2 py-0.5 font-mono text-[11px] text-ink"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="rounded border border-edge bg-white/5 px-2 py-0.5 font-mono text-[11px] text-ink-dim">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-sm font-medium text-ink transition-colors hover:border-accent2 hover:text-accent2"
        >
          <span>See more repositories on GitHub</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
