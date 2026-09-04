export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceModule {
  number: string;
  title: string;
  tags: string[];
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  rolePrefix?: string;
  companyName: string;
  companyLink?: string;
  period: string;
  summary: string;
  modules: ExperienceModule[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreOrStatus: string;
  boardOrAffiliation: string;
  details?: string;
}

export interface ResearchPublicationItem {
  id: string;
  title: string;
  journalOrConference: string;
  authors: string[];
  highlightAuthor: string;
  role: string;
  year: string;
  paperType: string;
  status: string;
  doiOrLink?: string;
  abstract: string;
  keywords: string[];
  keyHighlights: string[];
}

export interface MindsetCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
