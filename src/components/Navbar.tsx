import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "../lib/utils";
import { useActiveSection, scrollToSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const activeSection = useActiveSection(LINKS.map((l) => l.id));

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-6"
      initial={prefersReducedMotion ? false : { y: -96, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
    >
      <nav className="flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border border-edge bg-glass px-3 py-2.5 backdrop-blur-xl sm:px-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex shrink-0 items-center gap-3 pl-1"
        >
          <div className="h-9 w-9 overflow-hidden rounded-full border border-white/20">
            <img src="./favicon.png" alt="Ammar Shaikh" className="h-full w-full object-cover" />
          </div>
          <span className="hidden text-[15px] font-medium tracking-tightish lg:inline">
            Ammar Shaikh
          </span>
        </a>

        {/* Center links — desktop only */}
        <ul className="hidden items-center gap-1 text-[12.5px] font-medium text-ink-soft xl:flex">
          {LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-300 ${
                    isActive ? "bg-accent2-soft text-accent2" : "hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Compact links for md–xl */}
        <ul className="hidden items-center gap-4 text-[13px] font-medium text-ink-soft md:flex xl:hidden">
          {["home", "projects", "experience", "about", "contact"].map((id) => {
            const link = LINKS.find((l) => l.id === id)!;
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`transition-colors duration-300 ${isActive ? "text-accent2" : "hover:text-ink"}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume button — desktop */}
        <motion.a
          href="./resume.pdf"
          download
          className="hidden shrink-0 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-bg md:inline-block"
          whileHover={{
            y: -3,
            scale: 1.03,
            boxShadow: "0 12px 30px -8px rgba(255,255,255,0.35)",
          }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          Download Resume
        </motion.a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-glass backdrop-blur-xl md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute left-4 right-4 top-[72px] max-h-[75vh] overflow-y-auto rounded-3xl border border-edge bg-[#0a0a0a]/95 p-5 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 text-[15px] font-medium text-ink-soft">
              {LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`block rounded-xl px-3 py-2.5 transition-colors ${
                        isActive ? "bg-accent2-soft text-accent2" : "hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href="./resume.pdf"
              download
              className="mt-4 block rounded-full bg-white px-5 py-3 text-center text-[13px] font-semibold text-bg"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
