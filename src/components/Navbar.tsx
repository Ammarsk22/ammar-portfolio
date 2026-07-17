import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "../lib/utils";

const LINKS = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-6"
      initial={prefersReducedMotion ? false : { y: -96, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
    >
      <nav className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-edge bg-glass px-3 py-2.5 backdrop-blur-xl sm:px-4">
        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center gap-3 pl-2">
          {/* Circular Image replacing the text icon */}
          <div className="h-9 w-9 overflow-hidden rounded-full border border-white/20">
            {/* PATH UPDATED HERE: Added ./ before favicon.png */}
            <img 
              src="./favicon.png" 
              alt="Ammar Shaikh" 
              className="h-full w-full object-cover"
            />
          </div>
          {/* Updated Name */}
          <span className="hidden text-[15px] font-medium tracking-tightish sm:inline">
            Ammar Shaikh
          </span>
        </a>

        {/* Center links — desktop only */}
        <ul className="hidden items-center gap-7 text-[13.5px] font-medium text-ink-soft md:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative transition-colors duration-300 hover:text-ink"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button — desktop */}
        <motion.a
          href="./resume.pdf" // PATH UPDATED HERE
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
            className="absolute left-4 right-4 top-[72px] rounded-3xl border border-edge bg-[#0a0a0a]/90 p-5 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4 text-[15px] font-medium text-ink-soft">
              {LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="transition-colors hover:text-ink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="./resume.pdf" // PATH UPDATED HERE
              download
              className="mt-5 block rounded-full bg-white px-5 py-3 text-center text-[13px] font-semibold text-bg"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}