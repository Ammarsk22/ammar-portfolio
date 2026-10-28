import { ArrowUp, RotateCcw } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface FooterProps {
  onScrollToTop: () => void;
  onReplayIntro: () => void;
}

export default function Footer({ onScrollToTop, onReplayIntro }: FooterProps) {
  return (
    <footer className="border-t border-edge px-6 py-8 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-lg font-bold text-ink">{PERSONAL_INFO.name}</p>
          <p className="mt-0.5 text-xs text-ink-dim">
            © 2026 · Built with React, Vite, Tailwind CSS and Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReplayIntro}
            className="inline-flex items-center gap-2 rounded-lg border border-edge px-3.5 py-2 text-sm text-ink-soft transition-colors hover:bg-glass hover:text-ink"
          >
            <RotateCcw className="h-3.5 w-3.5 text-accent2" aria-hidden="true" />
            Replay intro
          </button>
          <button
            type="button"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-2 rounded-lg border border-edge px-3.5 py-2 text-sm text-ink-soft transition-colors hover:bg-glass hover:text-ink"
          >
            <ArrowUp className="h-3.5 w-3.5 text-accent2" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
