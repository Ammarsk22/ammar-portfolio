import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { scrollToSection } from "../hooks/useActiveSection";

export default function Footer() {
  return (
    <footer className="border-t border-edge px-6 py-8 sm:px-10 lg:px-14">
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h3 className="text-xl font-bold tracking-tight text-ink">{PERSONAL_INFO.name}</h3>
          <p className="mt-1 font-mono text-xs text-ink-dim">{PERSONAL_INFO.role}</p>
        </div>

        <div className="text-center font-mono text-[11px] text-ink-dim sm:text-xs">
          <span className="whitespace-nowrap">© 2026 Ammar Shaikh. Built with React, Vite &amp; Tailwind.</span>
        </div>

        <button
          onClick={() => scrollToSection("home")}
          className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-glass-soft px-3.5 py-2 text-ink-soft transition-colors hover:bg-glass hover:text-ink"
        >
          <ArrowUp className="h-3.5 w-3.5 text-accent2" />
          <span className="whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-wider">
            Back to Top
          </span>
        </button>
      </div>
    </footer>
  );
}
