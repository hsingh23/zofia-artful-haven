# Zoofia — Artful Haven

Personal artist website for **Zoofia**, an experimental musician. A
single-page React application that presents music (with deep Bandcamp
integration), merchandise, a blog with a mock MDX editor, and contact
info — wrapped in a warm, Art Nouveau-inspired visual identity.

The site is intentionally frontend-only: no backend, no database, no
environment variables. All content (albums, posts, merch items) lives as
literals inside the page components.

## Features

- **Fixed left navigation rail** — "ZOOFIA" wordmark, uppercase links
  (MUSIC / MERCH / BLOG / CONTACT) with active-route highlighting, and
  the taglines "CREATIVITY / POWERED BY CODE".
- **Home** — 12-column split hero: floating gradient orb + "Meet
  Zoofia" headline on one side; tagline, "Listen Now" and Bandcamp
  buttons, and an embedded Bandcamp player on the other; followed by a
  three-column MUSIC/MERCH/BLOG section.
- **Music** — featured album *Novus* (2024) with track list, Bandcamp
  embeds, purchase links, "more releases" placeholders, and a
  support-independent-music CTA.
- **Merch** — product grid with limited-edition badges, sold-out
  overlays, category filter buttons, and a featured Supporter's Bundle.
- **Blog** — searchable/filterable post list (categories: Process,
  Music, Art, Personal) with three fully written articles, plus an
  `/blog/edit` mock MDX editor gated by a simulated GitHub
  token/repo form (nothing is persisted).
- **Contact** — message form (toast confirmation), contact/social
  links, FAQ, and an email-list signup with simulated loading.
- **Art Nouveau design system** — coral/amber/terracotta palette,
  gradient text and buttons, organic float/pulse animations, flowing
  link underlines, Crimson Text + DM Serif Display typography.
- **SEO** — descriptive title/meta, canonical URL, Open Graph, Twitter
  cards, and Schema.org JSON-LD in `index.html`.
- **SPA hosting support** — `public/_redirects` provides the Netlify
  catch-all rewrite so deep links don't 404.

## Tech stack

- [Vite 5](https://vitejs.dev/) + SWC, [React 18](https://react.dev/), TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/) + `tailwindcss-animate`, PostCSS
- [shadcn/ui](https://ui.shadcn.com/) (full Radix UI primitive set) + `class-variance-authority`, `clsx`, `tailwind-merge`
- [React Router v6](https://reactrouter.com/), [TanStack Query v5](https://tanstack.com/query)
- [lucide-react](https://lucide.dev/) icons, Radix-based toasts (`use-toast`), `sonner`
- `lovable-tagger` (development only), ESLint 9 flat config

## Quickstart

Requires Node.js and npm (or bun — a `bun.lockb` is also committed).

```sh
npm install       # or: bun install
npm run dev       # dev server on http://localhost:8080
```

Other scripts:

```sh
npm run build       # production build (dist/)
npm run build:dev   # development-mode build
npm run preview     # preview the production build
npm run lint        # ESLint
```

No environment variables are needed.

## Project structure

```
src/
  main.tsx              # entry — mounts App, imports index.css
  App.tsx               # providers + route table
  index.css             # Art Nouveau design system (CSS vars, component classes, keyframes)
  pages/                # Home, Music, Merch, Blog, BlogEdit, Contact, NotFound (Index is an unused fallback)
  components/
    Navigation.tsx      # fixed left rail nav
    BandcampEmbed.tsx   # Bandcamp iframe wrapper
    EmailSignup.tsx     # email-list CTA with simulated submit
    ui/                 # shadcn/ui primitives (button, card, dialog, ...)
  hooks/                # use-toast, use-mobile
  lib/utils.ts          # cn() class merge helper
public/
  _redirects            # Netlify SPA fallback: /* -> /index.html 200
  robots.txt, favicon.ico, placeholder.svg
```

Routes: `/`, `/music`, `/merch`, `/blog`, `/blog/edit`, `/contact`,
plus a `*` catch-all (404). New routes must be registered **above** the
catch-all in `src/App.tsx`.

## Deploying

The project was generated with Lovable
([project link](https://lovable.dev/projects/de698b56-d350-4535-b534-591fb85cf321)),
which publishes to static hosting; `public/_redirects` handles the SPA
fallback there (and on Netlify). For any static host: run
`npm run build` and serve `dist/` with `/* -> /index.html 200` rewrite
behavior enabled.

## Docs

- [`CHANGELOG.md`](CHANGELOG.md) — every commit, newest first
- [`AGENTS.md`](AGENTS.md) — agent/developer working guide (commands, architecture, gotchas)
- [`prompt.md`](prompt.md) — one-shot prompt that recreates this site from scratch
- [`architectural-diary/`](architectural-diary/) — decision log and narrative history
