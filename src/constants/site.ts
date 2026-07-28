import type { Link, Project } from 'types/content';

/**
 * Shown in the browser tab and social share cards. Edit these to rebrand the site.
 */
export const SITE_NAME = 'Acley Bujune';
export const HOMEPAGE_TITLE = 'software engineer + systems builder';

/**
 * Short text shown as the logo in the header (e.g. initials or a short wordmark)
 */
export const SITE_INITIALS = 'ab.';

/**
 * Intro card content on the homepage
 */
export const INTRO = {
  headshotUrl: '/headshot.svg',
  heading: "Hi, I'm Acley Bujune.",
  paragraphs: [
    "I'm a Computer Science student at Dakota State University and co-founder of Elevate Company Limited, where I build software, AI, and data engineering solutions for clients across East Africa. I like working on systems that dig into how and why things fail — causal analysis engines, compilers, chess engines — and turning that into something people can actually use.",
  ],
};

/**
 * Icon links shown next to the intro (LinkedIn, GitHub, email, etc). `icon` maps to
 * built-in icons in components/utilComponents/Link.tsx (e.g. 'github', 'linkedin', 'email').
 */
export const INTRO_LINKS: Link[] = [
  { title: 'GitHub', url: 'https://github.com/Acley143', icon: 'github' },
  { title: 'LinkedIn', url: 'https://linkedin.com/in/acley-bujune', icon: 'linkedin' },
  { title: 'Email', url: 'mailto:acleybujune@gmail.com', icon: 'email' },
];

/**
 * Footer icon links
 */
export const FOOTER_LINKS: Link[] = INTRO_LINKS;

/**
 * Path to your resume PDF in public/ - shown as a downloadable "Resume" card
 */
export const RESUME_URL = '/resume.pdf';

/**
 * GitHub username used to pull recent public activity client-side (no auth needed)
 */
export const GITHUB_USERNAME = 'Acley143';

/**
 * Chips shown in the Skills card
 */
export const SKILLS: string[] = [
  'Python',
  'TypeScript',
  'JavaScript',
  'Java',
  'C++',
  'C',
  'SQL',
  'Go',
  'Rust',
  'C#',
  'HTML/CSS',
  'React',
  'Node.js',
  'Spring Boot',
  'Fastify',
  'Bun',
  'Kafka',
  'Docker',
  'Kubernetes',
  'AWS (ECS, S3, RDS)',
  'Terraform',
  'Git',
  'Linux',
  'SQLite',
  'OpenTelemetry',
  'Puppeteer',
  'Zod',
  'RESTful APIs',
  'Microservices',
  'Distributed Systems',
  'System Design',
];

/**
 * Honors/awards shown in the Achievements card
 */
export const ACHIEVEMENTS: { title: string; description: string }[] = [
  {
    title: 'Beadle Honors Program',
    description: 'Selected for academic excellence at Dakota State University, 3.75 GPA',
  },
  {
    title: 'NanoCon 2025 — 1st Place',
    description: 'Won among 30+ teams for best AI/systems project',
  },
  {
    title: 'Black Students Association — Officer',
    description: 'Leading community outreach and campus diversity initiatives for 200+ students',
  },
];

/**
 * Project cards shown on the homepage. `layout: 'wide'` spans two columns,
 * `layout: 'tall'` spans two rows. Add/remove/edit entries here to update your
 * portfolio - no CMS needed.
 *
 * NOTE: thumbnail images below are generated placeholder graphics (public/projects/*.svg) —
 * swap the `url` fields for real screenshots whenever you have them.
 */
export const PROJECTS: Project[] = [
  {
    title: 'Tracedog',
    visible: true,
    layout: 'wide',
    thumbnail: { url: '/projects/tracedog.svg', title: 'Tracedog' },
    // Repo is currently private - this link will 404 for visitors until it's made public
    link: { title: 'Tracedog', url: 'https://github.com/Acley143/Tracedog' },
  },
  {
    title: 'C Compiler',
    visible: true,
    layout: 'tall',
    thumbnail: { url: '/projects/c-compiler.svg', title: 'C Compiler' },
    link: { title: 'C Compiler', url: 'https://github.com/Acley143/c-compiler' },
  },
  {
    title: 'Competitive Chess Engine',
    visible: true,
    thumbnail: { url: '/projects/chess-engine.svg', title: 'Competitive Chess Engine' },
  },
  {
    title: 'Beam',
    visible: true,
    thumbnail: { url: '/projects/beam.svg', title: 'Beam' },
  },
];
