# Personal portfolio site

A Next.js + React + MUI portfolio site, forked from a friend's site and stripped down to a fully
static build — no CMS, database, or third-party API accounts required.

## Editing your content

All of your personal content lives in one file: [`src/constants/site.ts`](src/constants/site.ts).
Edit `SITE_NAME`, `INTRO`, `INTRO_LINKS`, `FOOTER_LINKS`, and `PROJECTS` there to add your bio,
social links, and project cards. Put any images you reference (headshot, project thumbnails) in
`public/`.

## Commands

- `pnpm install` installs all dependencies for the project
- `pnpm dev` starts the development server
- `pnpm build` runs a prod build
- `pnpm serve` runs a server with the built site
- `pnpm format` runs Prettier to format the files
- `pnpm lint` / `pnpm lint:types` run ESLint / TypeScript checks

## Deploying

This project deploys to [Vercel](https://vercel.com) with zero configuration. Push to a GitHub
repo, import it in Vercel, and point your domain (e.g. bujune.com) at the deployment.
