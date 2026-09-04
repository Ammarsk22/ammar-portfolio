import { useState } from "react";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import MarqueeTicker from "./components/MarqueeTicker";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";

import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import PublicationsSection from "./sections/PublicationsSection";
import ContactSection from "./sections/ContactSection";

import { PROJECTS } from "./data/portfolioData";
import { ProjectItem } from "./types";

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    if (idx < PROJECTS.length - 1) setSelectedProject(PROJECTS[idx + 1]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const idx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    if (idx > 0) setSelectedProject(PROJECTS[idx - 1]);
  };

  const selectedIdx = selectedProject ? PROJECTS.findIndex((p) => p.id === selectedProject.id) : -1;

  return (
    <div className="bg-bg text-ink min-h-screen font-sans selection:bg-accent2 selection:text-black">
      <main>
        {/* Home — cinematic spotlight-reveal hero (includes the floating navbar) */}
        <Hero />

        {/* Quick-facts strip + scrolling tech ticker */}
        <StatsStrip />
        <MarqueeTicker />

        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <PublicationsSection />
        <ContactSection />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
        hasNext={selectedIdx >= 0 && selectedIdx < PROJECTS.length - 1}
        hasPrev={selectedIdx > 0}
      />
    </div>
  );
}

export default App;
