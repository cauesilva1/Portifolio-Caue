export const site = {
  name: "Caue Silva",
  brand: "Caue",
  role: "Front-end Developer",
  location: "Toronto, ON",
  availability: "Open to full-time — on-site or remote",
  heroLine: "Clear, fast interfaces with personality.",
  email: "Cauecatonesilva@gmail.com",
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
    "I'm Caue Catone Silva — a Front-end Developer based in Toronto, building web products with React, Next.js, and TypeScript.",
    "I care about clean UI, solid UX, and shipping interfaces that feel fast and intentional. Recently I've been shipping multi-sport analytics, browser games, and SaaS tools end to end.",
    "I'm looking for a full-time role (on-site or remote) where I can grow as a front-end engineer and keep shipping real product.",
  ],
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
      "Multi-sport intelligence platform for soccer and basketball — scouting, rankings, dashboards, and automated data sync.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase"],
    liveUrl: "https://football-intelligence-plataform-8u9.vercel.app",
    repoUrl: "https://github.com/cauesilva1/Football-intelligence-plataform",
    image: "/images/projects/omniscout.jpg",
    group: "featured",
  },
  {
    title: "Lenda da Quadra",
    blurb:
      "Browser basketball career simulator — steal NBA legend attributes, build your identity, and compete for titles.",
    stack: ["Next.js", "TypeScript", "Prisma"],
    liveUrl: "https://lenda-da-quadra.vercel.app",
    repoUrl: "https://github.com/cauesilva1/LendaDaQuadra",
    image: "/images/projects/lenda-da-quadra.jpg",
    group: "featured",
  },
  {
    title: "Geracional",
    blurb:
      "Football manager in the browser — real squads, transfer budgets, salary caps, and club reconstruction.",
    stack: ["Next.js", "TypeScript"],
    liveUrl: "https://geracional-do-campo.vercel.app",
    repoUrl: "https://github.com/cauesilva1/GeracionalDoCampo",
    image: "/images/projects/geracional.jpg",
    group: "featured",
  },
  {
    title: "Job Tracker SaaS",
    blurb:
      "Job application tracker with auth, dashboard analytics, status pipelines, and auto-extraction from job boards.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    liveUrl: "https://job-tracker-saas.vercel.app",
    repoUrl: "https://github.com/cauesilva1/Job-Tracker-SaaS",
    image: "/images/projects/job-tracker.jpg",
    group: "other",
  },
  {
    title: "ProjectMatch",
    blurb:
      "Platform that matches developers with open-source projects — GitHub auth, project discovery, and issue exploration.",
    stack: ["Next.js", "TypeScript", "Firebase", "GitHub API"],
    liveUrl: "https://projetcmatch-client.vercel.app",
    repoUrl: "https://github.com/cauesilva1/projetcmatch-client",
    image: "/images/projects/projectmatch.jpg",
    group: "other",
  },
  {
    title: "Reflexão Diária",
    blurb:
      "AI-powered daily reflections — biblical or psychological — with auth, multilingual support, and saved history.",
    stack: ["Next.js", "FastAPI", "Supabase", "OpenAI"],
    liveUrl: "https://reflex-o-diaria.vercel.app/login",
    repoUrl: "https://github.com/cauesilva1/reflex-o-Diaria",
    image: "/images/projects/reflexao-diaria.jpg",
    group: "other",
  },
  {
    title: "Ticket Generator",
    blurb:
      "University project that generates personalized tickets from GitHub profile data for campus events.",
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
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Back-end & data",
    items: ["Node.js", "Supabase", "Firebase", "Prisma", "PostgreSQL"],
  },
  {
    label: "Product & tooling",
    items: ["Git", "Vercel", "REST APIs", "Auth (OAuth)", "Responsive UI"],
  },
] as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
