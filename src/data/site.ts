export const site = {
  name: "Caue Silva",
  brand: "Caue",
  role: "Front-end Developer",
  location: "Toronto, ON",
  availability: "Open to new opportunities — on-site or remote",
  heroLine: "Shipping responsive, product-driven interfaces.",
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
    "I'm Caue Catone Silva — a Front-end Developer in Toronto building responsive, user-focused apps with React, Next.js, and TypeScript.",
    "At Consultarer I ship real user-facing features, dynamic dashboards, and reusable UI systems while collaborating closely with backend teams.",
    "I also keep building personal products end to end — analytics platforms, browser games, and SaaS tools — with a strong Node.js and SQL foundation.",
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
    role: "Front-end Developer",
    company: "Consultarer",
    period: "May 2025 – Present",
    location: "Remote, Canada",
    points: [
      "Build and ship responsive features with React, Next.js, and TypeScript.",
      "Implement dynamic dashboards with real-time API integration.",
      "Design reusable component systems and optimize UI performance across devices.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Oi",
    period: "Oct 2021 – Dec 2023",
    location: "Brazil",
    points: [
      "Developed and maintained RESTful APIs with Node.js and Prisma.",
      "Designed relational schemas in MySQL and SQL Server.",
      "Supported front-end integration through clear API design and documentation.",
    ],
  },
];

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
    title: "Lenda da Quadra",
    blurb:
      "Browser basketball career sim — steal NBA legend attributes, craft an identity, and compete for titles.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    liveUrl: "https://lenda-da-quadra.vercel.app",
    repoUrl: "https://github.com/cauesilva1/LendaDaQuadra",
    image: "/images/projects/lenda-da-quadra.jpg",
    group: "featured",
  },
  {
    title: "Geracional",
    blurb:
      "Football manager in the browser — real squads, transfer budgets, salary caps, and club rebuild loops.",
    stack: ["Next.js", "TypeScript"],
    liveUrl: "https://geracional-do-campo.vercel.app",
    repoUrl: "https://github.com/cauesilva1/GeracionalDoCampo",
    image: "/images/projects/geracional.jpg",
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
    title: "ProjectMatch",
    blurb:
      "Open-source matching platform — GitHub auth, project discovery, issue exploration, and responsive UI.",
    stack: ["Next.js", "TypeScript", "Firebase", "GitHub API"],
    liveUrl: "https://projetcmatch-client.vercel.app",
    repoUrl: "https://github.com/cauesilva1/projetcmatch-client",
    image: "/images/projects/projectmatch.jpg",
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
    label: "Front-end",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Back-end foundation",
    items: ["Node.js", "REST APIs", "Prisma", "Supabase", "Firebase"],
  },
  {
    label: "Data & tooling",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Git", "CI/CD", "Agile"],
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
