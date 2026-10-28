import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <h4 className="font-display text-base font-bold text-ink">{title}</h4>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export default function ProjectModal({ project, onClose, onNext, onPrev, hasNext, hasPrev }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const isOpen = Boolean(project);

  // Keep the latest handlers in a ref so the effect below only runs on open/close.
  const handlers = useRef({ onClose, onNext, onPrev, hasNext, hasPrev });
  handlers.current = { onClose, onNext, onPrev, hasNext, hasPrev };

  // Lock page scroll, listen for keys, and give focus back to the card that opened it.
  useEffect(() => {
    if (!isOpen) return;
    opener.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      const h = handlers.current;
      if (e.key === "Escape") h.onClose();
      if (e.key === "ArrowRight" && h.hasNext) h.onNext();
      if (e.key === "ArrowLeft" && h.hasPrev) h.onPrev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      opener.current?.focus?.();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-edge bg-surface p-6 text-ink sm:rounded-3xl sm:p-10"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-edge text-ink-soft transition-colors hover:bg-glass hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-12">
              <p className="text-sm text-ink-dim">
                <span className="font-semibold text-accent2">{project.category}</span>
                {" · "}
                {project.year}
                {" · "}
                {project.status}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
              <p className="mt-1 font-serif-italic text-xl text-ink-soft">{project.tagline}</p>
            </div>

            <Block title="Overview">
              <p className="text-[15px] leading-relaxed text-ink-soft">{project.overview}</p>
            </Block>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-edge p-4">
                <h4 className="font-display text-base font-bold">The problem</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.problem}</p>
              </div>
              <div className="rounded-xl border border-accent2/30 bg-accent2-soft p-4">
                <h4 className="font-display text-base font-bold text-accent2">What I built</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.solution}</p>
              </div>
            </div>

            <Block title="Highlights">
              <ul className="flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <li key={h} className="rounded-lg border border-edge bg-glass-soft px-3 py-1.5 text-xs font-medium">
                    {h}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Key features">
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Tech stack">
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <li key={t} className="rounded-md border border-edge bg-glass-soft px-2.5 py-1 font-mono text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </Block>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-edge px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-glass"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Open live demo
                </a>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-edge pt-5">
              <button
                type="button"
                onClick={onPrev}
                disabled={!hasPrev}
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                Previous project
              </button>
              <button
                type="button"
                onClick={onNext}
                disabled={!hasNext}
                className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink disabled:opacity-30"
              >
                Next project
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
