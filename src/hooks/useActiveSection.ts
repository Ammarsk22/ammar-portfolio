import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently "active" based on scroll position,
 * so the navbar can highlight the right link as the person scrolls.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + window.innerHeight * 0.35;
        const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 40;

        if (isBottom) {
          setActiveSection(sectionIds[sectionIds.length - 1]);
        } else {
          let current = sectionIds[0];
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && scrollPosition >= el.offsetTop) {
              current = sectionIds[i];
              break;
            }
          }
          setActiveSection(current);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
