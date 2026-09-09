# Architectural Diary — Zoofia Artful Haven

Narrative history of how this site came to be, reconstructed from the
git history (five commits, all on 2025-08-20) and the code itself.
Commit hashes are post-rewrite (see CHANGELOG.md for the note on the
2026-09-08 messages-only history rewrite).

## Timeline

### 1. Scaffold (9b64075)

The project began as a Lovable/gpt-engineer template bootstrap:
`vite_react_shadcn_ts_20250728_minor` — Vite 5 + SWC, React 18,
TypeScript, Tailwind 3, the full shadcn/ui primitive library, React
Router, TanStack Query, ESLint flat config, and lockfiles (npm +
bun). At this point it was a blank single-page shell ("Welcome to Your
Blank App").

### 2. The site appears (8174e9c)

One large generated commit turned the shell into the Zoofia artist
site, driven by the user brief recorded in that commit's body:
artistic/Art Nouveau aesthetic, warm palette, playful serif fonts,
music discovery + sales, merch, email signup, blog with an editing
page, and deep Bandcamp integration. Concretely it added:

- six routes (Home, Music, Merch, Blog, BlogEdit, Contact) and a top
  navbar with a mobile hamburger menu and "Join List" CTA;
- `BandcampEmbed` (iframe wrapper), `EmailSignup`, `Navigation`;
- the Art Nouveau design system in `src/index.css` — warm coral/amber
  HSL variables, four named gradients, warm/glow/soft shadows, organic
  easing curves, Crimson Text + DM Serif Display, and the signature
  component classes (`.btn-artistic`, `.card-organic`,
  `.text-artistic`, `.link-flowing`) plus float/pulse/gradient-shift
  keyframes;
- full Zoofia SEO metadata (OG, Twitter, JSON-LD Person) in
  `index.html`.

See [decisions/001-art-nouveau-design-system.md](decisions/001-art-nouveau-design-system.md),
[decisions/003-bandcamp-integration-strategy.md](decisions/003-bandcamp-integration-strategy.md),
[decisions/004-static-content-without-backend.md](decisions/004-static-content-without-backend.md).

### 3. Design-mockup pass (590d7d3)

A redesign to "match the provided design": the home page was
restructured from a hero/featured-cards layout into a 12-column split
grid (headline + floating gradient orb left; tagline, actions, and a
Bandcamp embed right), and the top navbar was replaced with the fixed
left vertical rail (uppercase links, "CREATIVITY / POWERED BY CODE").
The hamburger menu, nav CTA, and home email-signup section were
removed in the process — the EmailSignup component survived only on
the Contact page.

See [decisions/002-fixed-left-rail-navigation.md](decisions/002-fixed-left-rail-navigation.md).

### 4. Mobile-first + real content (f77f85d)

The generated site was desktop-shaped; this pass made Home
mobile-first (stacked single column, responsive type scale, full-width
buttons, fluid embed sizing, scroll indicator hidden on mobile),
filled in the three blog posts' full article content (previously
placeholder excerpts), taught BlogEdit to list the third post and
actually append saved posts, and fixed the Bandcamp integration for
real: the button now points at `https://zofiaa.bandcamp.com/` and the
Home embed uses the real numeric album ID `2424352134`.

### 5. Hosting fix (682cac3)

The only human commit: `public/_redirects` with the Netlify catch-all
(`/* → /index.html 200`), added because the deployed SPA 404'd on any
non-root route refresh or deep link.

See [decisions/005-spa-hosting-redirects.md](decisions/005-spa-hosting-redirects.md).

## Decision index

| # | Decision | Commit |
|---|----------|--------|
| 001 | [Art Nouveau design system via CSS variables + component classes](decisions/001-art-nouveau-design-system.md) | 8174e9c |
| 002 | [Fixed left navigation rail replacing a top navbar](decisions/002-fixed-left-rail-navigation.md) | 590d7d3 |
| 003 | [Bandcamp as the player and the store](decisions/003-bandcamp-integration-strategy.md) | 8174e9c, f77f85d |
| 004 | [No backend: content as in-component literals, simulated interactions](decisions/004-static-content-without-backend.md) | 8174e9c, f77f85d |
| 005 | [SPA fallback via public/_redirects](decisions/005-spa-hosting-redirects.md) | 682cac3 |

## Open threads

- `/blog/<slug>` links have no matching route (posts aren't individually
  rendered).
- Music.tsx still passes the string `"novus"` as the embed album ID;
  only the external Bandcamp link works from that page.
- Merch commerce (cart, checkout), the email-list service behind
  EmailSignup, and BlogEdit's real GitHub persistence were all scoped
  in the original brief but remain simulated.
