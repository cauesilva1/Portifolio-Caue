export const site = {
  name: "Caue Silva",
  brand: "Caue",
  role: "Software Developer",
  location: "Toronto, ON",
  availability: "Seeking a junior software developer role — on-site or remote",
  heroLine: "Frontend and backend, strongest in React, Next.js, and TypeScript.",
  email: "cauecatonesilva@gmail.com",
  phoneDisplay: "+1 519 918 6506",
  phoneTel: "+15199186506",
  whatsapp: "15199186506",
  resumeUrl: "/cv/caue-silva-resume.pdf",
  socials: {
    github: "https://github.com/cauesilva1",
    linkedin:
      "https://www.linkedin.com/in/cauecatonesilva1551/?locale=en-US",
    instagram: "https://www.instagram.com/cauecsilva",
  },
  about: [
    "I'm Caue Catone Silva — a software developer in Toronto, strongest in React, Next.js, and TypeScript, with experience across frontend and backend.",
    "At Consultare Software I build web interfaces for a pre-launch startup, including dashboard screens and reusable component sets, and work with backend engineers on API contracts.",
    "Before that I built internal tooling at Oi — dashboards, a log viewer, and the Node.js and SQL services behind them — plus public projects like Contribly and OmniScout.",
  ],
} as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer, Contract",
    company: "Consultare Software",
    period: "May 2025 – Present",
    location: "Remote",
    points: [
      "Build web interfaces for a pre-launch startup with React, Next.js, and TypeScript, including dashboard screens and reusable component sets.",
      "Work with backend engineers to define API contracts and integrate frontend modules across core dashboard workflows.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Oi",
    period: "Oct 2021 – Dec 2023",
    location: "Brazil",
    points: [
      "Built visual dashboards for the internal engineering team showing microservices activity across services.",
      "Mapped API relationships across microservices so the team could see which API handled each request.",
      "Built a log viewer the team used to trace issues across services.",
      "Maintained SQL Server and MySQL schemas and Node.js and Express endpoints behind these internal tools.",
    ],
  },
];

export const education = {
  school: "FASIPE",
  degree: "Associate Degree in Analysis and Systems Development",
  period: "2023",
  location: "Brazil",
} as const;

export const certification = {
  name: "AWS Partner: AWS Well Architected Proficient",
  period: "Issued Oct 2023",
} as const;

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  group: "featured" | "other";
};

export const projects: Project[] = [
  {
    title: "OmniScout",
    blurb:
      "Multi-sport scouting platform for soccer and basketball — rankings, dashboards, filters, and automated ESPN data sync.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    liveUrl: "https://football-intelligence-plataform-8u9.vercel.app",
    repoUrl: "https://github.com/cauesilva1/Football-intelligence-plataform",
    image: "/images/projects/omniscout.jpg",
    group: "featured",
  },
  {
    title: "Contribly",
    blurb:
      "Open-source matchmaking — discover repos, swipe interest, match with maintainers, and continue the conversation in-app.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    liveUrl: "https://contribly.vercel.app",
    repoUrl: "https://github.com/cauesilva1/contribly",
    image: "/images/projects/contribly.jpg",
    group: "featured",
  },
  {
    title: "Companion",
    blurb:
      "Pixel-art companion for iPhone — personality, dynamic sky, home-screen widgets, and cloud-first life simulation on Supabase.",
    stack: ["Swift", "iOS", "Supabase", "Widgets"],
    repoUrl: "https://github.com/cauesilva1/Companion-App",
    image: "/images/projects/companion.jpg",
    group: "featured",
  },
  {
    title: "Job Tracker SaaS",
    blurb:
      "Application tracker with auth, role-aware UI, interactive dashboards, and reusable component architecture.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    liveUrl: "https://job-tracker-saas-five.vercel.app",
    repoUrl: "https://github.com/cauesilva1/Job-Tracker-SaaS",
    image: "/images/projects/job-tracker.jpg",
    group: "other",
  },
  {
    title: "Reflexão Diária",
    blurb:
      "AI daily reflections (biblical or psychological) with auth, multilingual support, and saved history.",
    stack: ["Next.js", "FastAPI", "Supabase", "OpenAI"],
    liveUrl: "https://reflex-o-diaria.vercel.app/login",
    repoUrl: "https://github.com/cauesilva1/reflex-o-Diaria",
    image: "/images/projects/reflexao-diaria.jpg",
    group: "other",
  },
  {
    title: "Ticket Generator",
    blurb:
      "Campus event tool that generates personalized tickets from GitHub profile data.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ticket-generate.vercel.app",
    repoUrl: "https://github.com/cauesilva1/Ticket-Generate",
    image: "/images/projects/ticket-generator.jpg",
    group: "other",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT authentication"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Supabase", "Prisma"],
  },
  {
    label: "Tools",
    items: ["Git", "CI/CD", "Agile"],
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
