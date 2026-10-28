import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../data/portfolioData";
import { asset, EASE } from "../lib/utils";
import type { Theme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";

interface HeaderMobileProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

/** Sticky top bar with a full-screen menu, for screens narrower than lg. */
export default function HeaderMobile({ activeSection, onNavigate, theme, onToggleTheme }: HeaderMobileProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // let the menu close and the scroll lock release before scrolling
    window.setTimeout(() => onNavigate(id), 60);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 lg:hidden">
      <div className="flex h-14 items-center justify-between border-b border-edge bg-bg/85 px-4 backdrop-blur-xl">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex items-center gap-2.5"
        >
          <img src={asset("favicon.png")} alt="" className="h-8 w-8 rounded-lg" />
          <span className="font-display text-base font-bold text-ink">{PERSONAL_INFO.name}</span>
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} className="h-9 w-9" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-ink"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Site navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-x-0 bottom-0 top-14 overflow-y-auto bg-bg/95 px-6 py-8 backdrop-blur-xl"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        go(link.id);
                      }}
                      aria-current={isActive ? "location" : undefined}
                      className={`block border-b border-edge py-3.5 font-display text-2xl font-semibold ${
                        isActive ? "text-accent2" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={asset(PERSONAL_INFO.resumeUrl)}
              download="Ammar_Shaikh_Resume.pdf"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-bg"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download résumé
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
