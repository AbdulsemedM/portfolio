# Abdulsemed Mussema — Portfolio

Investor-grade personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) by connecting this repository. No extra configuration required.

## Project Structure

- `app/` — Next.js App Router pages and layout
- `components/` — UI sections and shared primitives
- `data/` — Typed content (projects, experience, tech stack)
- `lib/` — Constants and utilities
- `public/` — Static assets including `resume.pdf`
- `legacy/` — Previous Vite portfolio (reference only)

## Customization

- Replace the profile placeholder in `components/About.tsx` with `/public/images/profile.jpg`
- Update project data in `data/projects.ts`
- Update contact info in `lib/constants.ts`
