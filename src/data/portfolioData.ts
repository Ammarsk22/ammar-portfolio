import {
  ProjectItem,
  ExperienceItem,
  SkillCategory,
  EducationItem,
  ResearchPublicationItem,
  MindsetCard,
} from "../types";

export const PERSONAL_INFO = {
  name: "Ammar Shaikh",
  shortName: "Ammar",
  initials: "AS.",
  role: "Full Stack Developer",
  tagline: "FULL STACK DEVELOPER • PWA & FIREBASE ENGINEERING",
  location: "Shindkheda, Dhule, Maharashtra, India",
  email: "ammarsk200422@gmail.com",
  phone: "+91 84216 96734",
  whatsappUrl:
    "https://wa.me/918421696734?text=Hi%20Ammar%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  githubUrl: "https://github.com/Ammarsk22",
  githubUsername: "Ammarsk22",
  linkedinUrl: "https://www.linkedin.com/in/skammar22/",
  linkedinUsername: "skammar22",
  instagramUrl: "https://www.instagram.com/sk_ammar_22/",
  status: "Open to Full-Stack & Frontend Opportunities",
  statusShort: "Open to work",
  bio: "Aspiring web developer and B.Tech Computer Technology student with hands-on experience building responsive, cloud-based applications. Strong grasp of frontend technologies, Progressive Web App development, and UI/UX principles — eager to contribute clean code and user-centric design to a team that ships real products.",
  resumeUrl: "./resume.pdf",
  stats: [
    { label: "DEGREE STATUS", value: "B.Tech", sub: "Computer Technology" },
    { label: "PROJECTS SHIPPED", value: "4+", sub: "Real-World Apps" },
    { label: "CORE STACK", value: "JS + Firebase", sub: "PWA Engineering" },
    { label: "FORAGE TRACKS", value: "2", sub: "SE & AWS Simulations" },
  ],
};

export const MARQUEE_TECH = [
  "JAVASCRIPT (ES6+)",
  "REACT.JS",
  "TYPESCRIPT",
  "HTML5",
  "CSS3",
  "TAILWIND CSS",
  "BOOTSTRAP",
  "FIREBASE",
  "FIRESTORE",
  "PWA",
  "CHART.JS",
  "NODE.JS",
  "GIT & GITHUB",
  "PYTHON",
  "JAVA",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "shaikh-digital-erp",
    number: "01",
    title: "Shaikh Digital ERP",
    tagline: "Cloud ERP for the flex printing industry",
    category: "SYSTEM",
    year: "2025 — Present",
    status: "Actively maintained",
    shortDescription:
      "A cloud-based ERP built for a real flex-printing business — inventory tracking, GSTR-1 export, dual-mode invoice printing, and offline-capable PWA support.",
    overview:
      "Shaikh Digital ERP is a multi-page Firebase-powered PWA built to run the day-to-day operations of a family printing and advertising business: orders, inventory, billing, and staff access, all from one dashboard that works even with patchy internet.",
    problem:
      "The business was tracking orders, dues, and stock by hand, which meant slow billing, no GST-ready records, and no way to see supplier dues or vendor ledgers at a glance.",
    solution:
      "Built a role-based (Admin/Staff) ERP on Firebase with an offline-first PWA shell, a dual-printing pipeline for A4 invoices and thermal receipts, GSTR-1 export, and a full inventory system with weighted-average cost calculations synced in real time.",
    features: [
      "Dual-printing mode — full A4 invoices and thermal receipt printing from the same order",
      "GSTR-1 export for tax filing, plus UPI QR codes generated directly on invoices",
      "Inventory management with a vendor ledger and supplier-dues tracking",
      "Role-based access control separating Admin and Staff permissions",
      "WhatsApp payment reminders sent straight from the dashboard",
      "Offline-capable PWA shell so billing keeps working through connectivity drops",
      "Biometric (WebAuthn) and Google login, plus a full dark mode",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Firebase", "Firestore", "PWA"],
    highlights: [
      "Dual A4 / Thermal Printing Pipeline",
      "Offline-First PWA Architecture",
      "Vendor Ledger & Supplier Dues Tracking",
    ],
    githubUrl: "https://github.com/Ammarsk22",
  },
  {
    id: "fintrack-pro",
    number: "02",
    title: "FinTrack Pro",
    tagline: "Personal expense manager, cloud-synced",
    category: "PWA",
    year: "Aug 2025 — Nov 2025",
    status: "Completed",
    shortDescription:
      "A cloud-powered personal finance tracker with voice-input transactions, multi-account support, OCR receipt scanning, and biometric login.",
    overview:
      "FinTrack Pro is a Firebase-backed expense manager built as a Progressive Web App, designed to make logging and understanding day-to-day spending fast enough that people actually keep it up.",
    problem:
      "Most expense trackers ask for too many taps per entry, so people stop logging within a week — and few offer a fast way to digitize a paper receipt.",
    solution:
      "Combined voice-input transaction logging with Tesseract.js OCR for scanning paper receipts, Chart.js visual breakdowns, and WebAuthn biometric login, wrapped in an installable offline-capable PWA with swipe gestures for quick actions.",
    features: [
      "Voice input for adding transactions hands-free",
      "OCR receipt scanning via Tesseract.js to auto-fill entries from a photo",
      "Multi-account support with recurring transaction templates",
      "Visual spending analysis and category breakdowns using Chart.js",
      "WebAuthn biometric login and swipe gestures for quick actions",
      "Savings goal tracking, dark mode, and CSV export for financial audits",
    ],
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "Firebase", "Chart.js", "Tesseract.js"],
    highlights: ["Voice & OCR-Powered Entry", "WebAuthn Biometric Login", "Chart.js Spending Analytics"],
    githubUrl: "https://github.com/Ammarsk22",
  },
  {
    id: "faizan-e-madina",
    number: "03",
    title: "Faizan-E-Madina Sunni Masjid",
    tagline: "Community web app, built with Kasim Shah",
    category: "FRONTEND",
    year: "2026 — Present",
    status: "In progress",
    shortDescription:
      "A community web app for a masjid — prayer times, announcements, and community info — built collaboratively with fellow developer Kasim Shah.",
    overview:
      "A React + Vite + Tailwind CSS frontend for a masjid's community platform, built in collaboration with Kasim Shah, focused on giving the community a fast, reliable, mobile-friendly home for prayer times and announcements.",
    problem:
      "The community needed a single reliable place — reachable from any phone — for prayer timings and announcements, without depending on scattered WhatsApp forwards.",
    solution:
      "Building out the frontend in React with Vite and Tailwind CSS: fixing responsive layout issues across devices, resolving component bugs, and shipping a Toast notification system for real-time feedback across the app.",
    features: [
      "Fully responsive layout tuned across phone, tablet, and desktop breakpoints",
      "Component-level bug fixes across the shared UI library",
      "A Toast notification system for real-time in-app feedback",
      "Built and reviewed collaboratively with a co-developer using Git workflows",
    ],
    techStack: ["React.js", "Vite", "Tailwind CSS"],
    highlights: ["Built in Collaboration with a Co-Developer", "Toast Notification System", "Cross-Device Responsive Fixes"],
    githubUrl: "https://github.com/Ammarsk22",
  },
  {
    id: "photo-contest-app",
    number: "04",
    title: "Photo Contest Registration App",
    tagline: "Contest entries with auto-generated certificates",
    category: "FRONTEND",
    year: "Feb 2025 — Mar 2025",
    status: "Completed",
    shortDescription:
      "A contest registration site with real-time photo previews, strict form validation, and automatically generated participant certificates.",
    overview:
      "A lightweight registration platform built for a photography contest, designed so entrants could see their photo preview instantly and walk away with a certificate the moment they registered.",
    problem:
      "Manual contest registration meant slow sign-ups, no immediate confirmation for entrants, and certificates that had to be created and sent out by hand afterward.",
    solution:
      "Built a client-side registration flow with live photo preview, strict form validation before submission, and instant certificate generation using jsPDF — no server round-trip needed for the certificate itself.",
    features: [
      "Real-time photo preview as entrants upload their submission",
      "Strict client-side form validation before entries are accepted",
      "Auto-generated, downloadable participant certificates via jsPDF",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "jsPDF"],
    highlights: ["Instant jsPDF Certificate Generation", "Real-Time Photo Preview", "Zero-Backend Client Flow"],
    githubUrl: "https://github.com/Ammarsk22",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "forage-aws",
    rolePrefix: "Virtual Solutions Architect Intern at ",
    companyName: "Forage — AWS Simulation",
    companyLink: "https://www.theforage.com/",
    period: "MAY 2025",
    summary:
      "Completed a job-simulation track built around AWS Solutions Architecture, designing scalable, cloud-based hosting setups inside a mock AWS environment.",
    modules: [
      {
        number: "01",
        title: "Cloud Architecture Design",
        tags: ["AWS", "Cloud Architecture", "System Design"],
        bullets: [
          "Designed scalable, cloud-based hosting architectures within a simulated AWS environment.",
          "Reasoned through service selection and infrastructure trade-offs the way a solutions architect would on a real client engagement.",
        ],
      },
    ],
  },
  {
    id: "forage-se",
    rolePrefix: "Virtual Software Engineer Intern at ",
    companyName: "Forage",
    companyLink: "https://www.theforage.com/",
    period: "NOV 2024",
    summary:
      "Completed a software engineering job-simulation covering the everyday tasks of an engineering team, from proposing a feature to shipping a fix.",
    modules: [
      {
        number: "01",
        title: "Engineering Practice Simulation",
        tags: ["JavaScript", "OOP", "Debugging"],
        bullets: [
          "Wrote a feature proposal and implemented object creation for a simulated product feature.",
          "Completed bug-fixing tasks and proposed system improvements against a real-world-style codebase.",
        ],
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Building responsive, accessible interfaces and installable PWAs.",
    skills: [
      "JavaScript (ES6+)",
      "React.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "PWA Development",
      "UI/UX Design",
    ],
  },
  {
    id: "backend-cloud",
    name: "Backend & Cloud",
    description: "Firebase-first backends, authentication, and cloud data.",
    skills: ["Firebase", "Firestore", "Firebase Auth", "Node.js", "REST APIs", "WebAuthn"],
  },
  {
    id: "tools",
    name: "Developer Tools & Environment",
    description: "Everyday tooling for building, testing, and shipping.",
    skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "Postman", "Canva"],
  },
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages for application logic and coursework.",
    skills: ["JavaScript", "Python", "Java", "C", "TypeScript"],
  },
  {
    id: "cs-fundamentals",
    name: "CS Fundamentals",
    description: "The theory underneath the code — data structures, algorithms, and OOP.",
    skills: [
      "Arrays, Linked Lists, Trees, Hash Maps",
      "Sorting, Searching, Recursion",
      "Inheritance & Polymorphism",
      "Encapsulation & Abstraction",
    ],
  },
];

export const SOFT_SKILLS = ["Teamwork", "Communication", "Leadership", "Problem-Solving", "Adaptability"];
export const SPOKEN_LANGUAGES = [
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Marathi", level: "Native" },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-btech",
    degree: "Bachelor of Technology (B.Tech) in Computer Technology",
    institution: "Ahinsa Institute of Technology",
    location: "Dondaicha, Maharashtra, India",
    period: "Aug 2023 — Present",
    scoreOrStatus: "Pursuing",
    boardOrAffiliation: "Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere, Raigad",
    details: "Coursework spanning full-stack web development, database systems, and computer networks.",
  },
  {
    id: "edu-hsc",
    degree: "Higher Secondary Certificate (Class XII — Science)",
    institution: "M.H.S.S. High School & Jr. College",
    location: "Shindkheda, Dhule, Maharashtra, India",
    period: "Feb 2023",
    scoreOrStatus: "63.17%",
    boardOrAffiliation: "Maharashtra State Board of Secondary & Higher Secondary Education (MSBSHSE), Pune",
    details: "Science stream with Physics, Chemistry, and Mathematics.",
  },
  {
    id: "edu-ssc",
    degree: "Secondary School Certificate (Class X)",
    institution: "M.H.S.S. High School & Jr. College",
    location: "Shindkheda, Dhule, Maharashtra, India",
    period: "March 2021",
    scoreOrStatus: "77.20%",
    boardOrAffiliation: "Maharashtra State Board of Secondary & Higher Secondary Education (MSBSHSE), Pune",
  },
];

export const MINDSET_PILLARS: MindsetCard[] = [
  {
    id: "clean-code",
    title: "Clean, Readable Code",
    description: "Writing maintainable, well-structured code that's easy to hand off or come back to.",
    iconName: "Code",
  },
  {
    id: "offline-first-pwa",
    title: "Offline-First PWA Design",
    description: "Building installable apps that keep working through patchy connectivity, not just on a good Wi-Fi day.",
    iconName: "Smartphone",
  },
  {
    id: "firebase-cloud",
    title: "Firebase & Cloud Architecture",
    description: "Structuring Firestore data and auth so real, growing businesses can rely on it.",
    iconName: "Cloud",
  },
  {
    id: "responsive-ux",
    title: "Responsive & Accessible UX",
    description: "Fluid layouts and pixel-aware detail across mobile, tablet, and desktop viewports.",
    iconName: "Layers",
  },
  {
    id: "real-world-problem-solving",
    title: "Real-World Problem Solving",
    description: "Translating an actual family business's operational headaches into working software people use daily.",
    iconName: "Target",
  },
  {
    id: "continuous-learning",
    title: "Continuous Growth & Curiosity",
    description: "Expanding from a vanilla JS + Firebase foundation into React, TypeScript, and Node.js.",
    iconName: "Sparkles",
  },
];

export const RESEARCH_PUBLICATIONS: ResearchPublicationItem[] = [
  {
    id: "pub-01",
    title: "DIGITAL MINDS, TROUBLED HEARTS: A SURVEY ON TECHNOLOGY AND MENTAL HEALTH AMONG YOUNG ADULTS",
    journalOrConference: "Journal of Academic Trends & Innovative Research (JATIR) (ISSN: 3139-8464)",
    authors: [
      "Fakir Mohammad Kasim Salim Shah",
      "Khatib Faizan Atauddin",
      "Shaikh Ammar Shaikh Vajid",
      "Prof. Kalpesh Marathe",
    ],
    highlightAuthor: "Shaikh Ammar Shaikh Vajid",
    role: "Co-Author / Research Team Member",
    year: "June 2026",
    paperType: "Peer-Reviewed Research Paper",
    status: "Published",
    doiOrLink: "https://jatir.org/article.php?paperid=140305",
    abstract:
      "Today, smartphones, social media, and artificial intelligence are a core part of how young people live, learn, socialise, and see themselves. For the 15–26 age group, being online is as natural as breathing — but this constant digital immersion comes at a cost that we are only beginning to understand. This paper investigates how technology use affects the psychological well-being of young adults in India, with a focus on undergraduate students, using a mixed-methods design of a structured survey plus a review of academic literature across six mental health dimensions: anxiety, sleep disruption, concentration difficulty, social comparison, loneliness, and AI-induced career anxiety.",
    keywords: ["Mental Health", "Social Media", "AI Anxiety", "FOMO", "Screen Time", "Digital Addiction", "Digital Well-being"],
    keyHighlights: [
      "Contributed to a peer-reviewed study on the psychological impact of technology and social media on young adults in India.",
      "Helped build the research infrastructure and survey used to gather real respondent data across six mental health dimensions.",
      "Formatted and prepared the final paper; findings were presented at a departmental evaluation.",
    ],
  },
];
