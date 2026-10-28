import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeaderMobile from "./components/HeaderMobile";
import MarqueeTicker from "./components/MarqueeTicker";
import Preloader from "./components/Preloader";
import ProjectModal from "./components/ProjectModal";
import ScrollProgress from "./components/ScrollProgress";
import Sidebar from "./components/Sidebar";

import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import PublicationsSection from "./sections/PublicationsSection";
import ContactSection from "./sections/ContactSection";

import { useActiveSection, scrollToSection } from "./hooks/useActiveSection";
import { useTheme } from "./hooks/useTheme";
import { NAV_LINKS, PROJECTS } from "./data/portfolioData";
import { ProjectItem } from "./types";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);
const INTRO_KEY = "as-intro-seen";

/** The intro plays once per browser session, and never for people who prefer reduced motion. */
function shouldSkipIntro(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  try {
    return sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
}

function jumpToTop() {
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);

  const [introDone, setIntroDone] = useState<boolean>(shouldSkipIntro);
  const [introKey, setIntroKey] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // No scrolling while the intro is on screen.
  useEffect(() => {
    if (introDone) return;
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = "hidden";
    jumpToTop();
    return () => {
      html.style.overflow = previous;
    };
  }, [introDone]);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* private mode: the intro will simply play again next visit */
    }
    setIntroDone(true);
  }, []);

  const replayIntro = () => {
    try {
      sessionStorage.removeItem(INTRO_KEY);
    } catch {
      /* ignore */
    }
    jumpToTop();
    setIntroDone(false);
    setIntroKey((k) => k + 1);
  };

  const selectedIdx = selectedProject ? PROJECTS.findIndex((p) => p.id === selectedProject.id) : -1;
  const goNext = () => selectedIdx >= 0 && selectedIdx < PROJECTS.length - 1 && setSelectedProject(PROJECTS[selectedIdx + 1]);
  const goPrev = () => selectedIdx > 0 && setSelectedProject(PROJECTS[selectedIdx - 1]);

  return (
    <div className="min-h-screen bg-bg font-sans text-ink">
      <ScrollProgress />
      <CustomCursor />

      <AnimatePresence>{!introDone && <Preloader key={introKey} onDone={finishIntro} />}</AnimatePresence>

      <a
        href="#main"
        className="sr-only z-[250] rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} theme={theme} onToggleTheme={toggleTheme} />

      <div className="lg:ml-64">
        <HeaderMobile
          activeSection={activeSection}
          onNavigate={scrollToSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main id="main" tabIndex={-1} className="outline-none">
          <Hero ready={introDone} onNavigate={scrollToSection} />
          <MarqueeTicker />
          <ProjectsSection onSelectProject={setSelectedProject} />
          <ExperienceSection />
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <PublicationsSection />
          <ContactSection />
        </main>

        <Footer onScrollToTop={() => scrollToSection("home")} onReplayIntro={replayIntro} />
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={goNext}
        onPrev={goPrev}
        hasNext={selectedIdx >= 0 && selectedIdx < PROJECTS.length - 1}
        hasPrev={selectedIdx > 0}
      />
    </div>
  );
}
