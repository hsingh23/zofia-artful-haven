# Changelog

All notable changes to this project are documented in this file.
Commits are listed newest-first.

> **History note (2026-09-08):** the five original commit messages (mostly
> bot-generated placeholders such as "Use tech stack
> vite_react_shadcn_ts_20250728_minor") were rewritten in place via a
> messages-only `git filter-branch`. Commit trees and file contents are
> byte-identical to before; only the messages and therefore the commit
> hashes changed. This changelog lists the post-rewrite hashes.

## 2025-08-20

### 682cac3 — build: add Netlify SPA fallback rewrite in public/_redirects
- Add `public/_redirects` with a catch-all rule sending every path to
  `/index.html` with HTTP 200 so client-side routes survive direct
  visits and refreshes on the static host.
- Only commit authored by a human (Harsh Singh); the rest were generated
  by gpt-engineer-app[bot].

### f77f85d — feat: make site mobile-first, add blog content, and fix Bandcamp links
- Rework Home into a mobile-first stacked layout with responsive type,
  buttons, and fluid Bandcamp embed sizing; hide the scroll indicator on
  mobile.
- Replace placeholder blog excerpts with full multi-section article
  content for all three posts; BlogEdit lists a third post and appends
  saved posts to the in-memory list.
- Correct the Bandcamp button to `https://zofiaa.bandcamp.com/` and use a
  real album ID (2424352134) in the Home embed.

### 590d7d3 — refactor(ui): redesign home layout with fixed side navigation
- Replace the hero/featured-cards home page with a 12-column split-grid
  layout: floating gradient orb + "Meet Zoofia" headline on the left,
  tagline, Listen/Bandcamp actions, and a Bandcamp embed on the right.
- Swap the top navbar (with hamburger menu) for a fixed vertical left
  rail with uppercase links; drop the email signup section and Join
  List CTA from the home page and nav.

### 8174e9c — feat: build multi-page artist site with Art Nouveau theme
- Add Home, Music, Merch, Blog, BlogEdit, and Contact routes plus
  Navigation, BandcampEmbed, and EmailSignup components.
- Introduce the warm Art Nouveau design system in `src/index.css`
  (coral/amber/terracotta palette, gradient utilities, organic
  animations, Crimson Text + DM Serif Display fonts).
- Replace Lovable boilerplate metadata with Zoofia SEO, Open Graph,
  Twitter card, and Schema.org JSON-LD tags.

### 9b64075 — chore: scaffold Vite + React + shadcn/ui TypeScript starter
- Import the Lovable `vite_react_shadcn_ts` template: Vite/TS/Tailwind
  config, ESLint flat config, the full shadcn/ui component set, a
  react-router shell with Index and NotFound pages, and lockfiles.
- No application features yet; the starting point for 8174e9c.
