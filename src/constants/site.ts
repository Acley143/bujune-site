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
  headshotUrl: '/headshot.jpg',
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
 * Project cards shown on the homepage. `layout: 'wide'` spans two columns,
 * `layout: 'tall'` spans two rows. Add/remove/edit entries here to update your
 * portfolio - no CMS needed.
 *
 * NOTE: thumbnail images below are placeholders (they don't exist yet) — drop real
 * screenshots into public/projects/ and update the `url` fields to match.
 */
export const PROJECTS: Project[] = [
  {
    title: 'Tracedog',
    visible: true,
    layout: 'wide',
    thumbnail: { url: '/projects/tracedog.jpg', title: 'Tracedog' },
    // Repo is currently private - this link will 404 for visitors until it's made public
    link: { title: 'Tracedog', url: 'https://github.com/Acley143/Tracedog' },
  },
  {
    title: 'C Compiler',
    visible: true,
    layout: 'tall',
    thumbnail: { url: '/projects/c-compiler.jpg', title: 'C Compiler' },
    link: { title: 'C Compiler', url: 'https://github.com/Acley143/c-compiler' },
  },
  {
    title: 'Competitive Chess Engine',
    visible: true,
    thumbnail: { url: '/projects/chess-engine.jpg', title: 'Competitive Chess Engine' },
  },
  {
    title: 'Beam',
    visible: true,
    thumbnail: { url: '/projects/beam.jpg', title: 'Beam' },
  },
];
