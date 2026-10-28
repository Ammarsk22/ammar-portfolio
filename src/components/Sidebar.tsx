import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../data/portfolioData";
import { asset, EASE } from "../lib/utils";
import type { Theme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

/** Fixed left rail for desktop. Phones and tablets get HeaderMobile instead. */
export default function Sidebar({ activeSection, onNavigate, theme, onToggleTheme }: SidebarProps) {
  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-edge bg-bg px-5 py-7 lg:flex"
      aria-label="Site navigation"
    >
      <div>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("home");
          }}
          className="flex items-center gap-3 px-1"
        >
          <img src={asset("favicon.png")} alt="" className="h-10 w-10 rounded-xl" />
          <span>
            <span className="block font-display text-[17px] font-bold leading-tight text-ink">
              {PERSONAL_INFO.name}
            </span>
            <span className="block text-xs text-ink-dim">{PERSONAL_INFO.role}</span>
          </span>
        </a>

        <nav className="mt-10">
          <ul className="space-y-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative flex items-center rounded-lg px-3 py-2 text-[14.5px] transition-colors duration-300 ${
                      isActive ? "font-semibold text-accent2" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 rounded-lg bg-accent2-soft"
                        transition={{ duration: 0.45, ease: EASE }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="space-y-3">
        <p className="flex items-center gap-2 px-1 text-xs text-ink-soft">
          <span className="relative flex h-2 w-2">
            <span className="pulse-status absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {PERSONAL_INFO.statusShort}
        </p>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} variant="labelled" />
        <a
          href={asset(PERSONAL_INFO.resumeUrl)}
          download="Ammar_Shaikh_Resume.pdf"
          className="flex items-center justify-center gap-2 rounded-lg bg-ink px-3 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download résumé
        </a>
      </div>
    </aside>
  );
}
