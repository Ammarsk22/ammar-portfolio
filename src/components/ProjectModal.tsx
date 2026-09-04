import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { ProjectItem } from "../types";
import { EASE } from "../lib/utils";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function ProjectModal({ project, onClose, onNext, onPrev, hasNext, hasPrev }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-edge bg-[#0a0a0a] p-6 sm:rounded-3xl sm:p-10"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-edge bg-glass text-ink-soft transition-colors hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="pr-12">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent2">
                <span>{project.category}</span>
                <span className="text-ink-dim">•</span>
                <span className="text-ink-dim">{project.year}</span>
                <span className="text-ink-dim">•</span>
                <span className="text-ink-dim">{project.status}</span>
              </div>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 font-serif-italic text-base text-ink-soft">{project.tagline}</p>
            </div>

            {/* Overview */}
            <div className="mt-6 space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-dim">Overview</div>
              <p className="text-sm leading-relaxed text-ink-soft sm:text-[15px]">{project.overview}</p>
            </div>

            {/* Problem / Solution */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-edge bg-glass-soft p-4">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-dim">Problem</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.problem}</p>
              </div>
              <div className="rounded-xl border border-accent2/30 bg-accent2-soft p-4">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-accent2">Solution</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.solution}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-6 space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-dim">Highlights</div>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-lg border border-edge bg-white/5 px-3 py-1.5 text-xs font-medium text-ink"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-6 space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-dim">
                Key Features
              </div>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-0.5 font-mono text-ink-dim">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mt-6 space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink-dim">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-edge bg-white/5 px-2.5 py-1 font-mono text-xs text-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-bg"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-edge bg-glass px-5 py-2.5 text-xs font-bold text-ink"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>

            {/* Prev/Next */}
            <div className="mt-8 flex items-center justify-between border-t border-edge pt-5">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft transition-colors hover:text-ink disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
                Prev
              </button>
              <button
                onClick={onNext}
                disabled={!hasNext}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft transition-colors hover:text-ink disabled:opacity-30"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
