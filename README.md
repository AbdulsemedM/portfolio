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

Deploy to [Vercel](https://vercel.com) by connecting this repository.

### Environment variables (all optional)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL used for canonical, Open Graph, sitemap and robots. Defaults to `https://abdulsemedm.vercel.app`. Set this when moving to a custom domain. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXXXXX`). Analytics loads only when set. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token. |

## Project Structure

- `app/` — Next.js App Router pages and layout
- `components/` — UI sections and shared primitives
- `data/` — Typed content (projects, experience, tech stack)
- `lib/` — Constants and utilities
- `public/` — Static assets including `resume.pdf`
- `legacy/` — Previous Vite portfolio (reference only)

## Customization

- Update project data in `data/projects.ts`
- Update contact info in `lib/constants.ts`
