# AGENTS.md — working guide for this repository

Guidance for coding agents (and humans) making changes to the Zoofia
artist site. Read this before editing anything.

## Commands

```sh
npm install        # install deps (bun install also works; bun.lockb is committed)
npm run dev        # Vite dev server → http://localhost:8080 (host "::" = IPv6 + localhost)
npm run build      # type-checked production build → dist/
npm run build:dev  # build in development mode (lovable-tagger active)
npm run preview    # serve the production build locally
npm run lint       # ESLint 9 flat config (eslint.config.js)
```

There are no tests in this repo. Verification is: `npm run lint` +
`npm run build` + a manual pass over the routes listed below.

## Architecture map

```
index.html                     SEO/OG/JSON-LD head; mounts #root
src/main.tsx                   createRoot → <App/>, imports index.css
src/App.tsx                    QueryClientProvider → TooltipProvider → Toaster + Sonner
                               → BrowserRouter → <Navigation/> + <Routes/>
src/pages/{Home,Music,Merch,Blog,BlogEdit,Contact,NotFound}.tsx
src/components/Navigation.tsx  fixed left rail (not in the route tree; rendered app-wide)
src/components/BandcampEmbed.tsx
src/components/EmailSignup.tsx
src/components/ui/*            shadcn/ui primitives — generated, rarely edited
src/hooks/{use-toast,use-mobile}
src/lib/utils.ts               cn()
src/index.css                  THE design system: HSL CSS vars, gradients, shadows,
                               component classes, keyframes
tailwind.config.ts             maps CSS vars to Tailwind tokens (serif/display fonts,
                               palette incl. primary-glow, sidebar scale)
vite.config.ts                 port 8080, "@" → ./src alias, lovable-tagger in dev
public/_redirects              Netlify SPA fallback
```

Routes (in `src/App.tsx`): `/` Home, `/music`, `/merch`, `/blog`,
`/blog/edit`, `/contact`, `*` NotFound.

## Conventions

- Functional components, one default export per file, named after the file.
- Styling: Tailwind utility classes first; the shared Art Nouveau classes
  (`.btn-artistic`, `.card-organic`, `.text-artistic`, `.link-flowing`,
  `.bg-gradient-warm|sunset|amber|subtle`, `.animate-gentle-float`,
  `.animate-warm-pulse`) come from `src/index.css` — reuse them instead of
  re-deriving gradients/shadows.
- Use shadcn/ui primitives from `src/components/ui` and `lucide-react` icons.
- Color/design tokens live ONLY in `src/index.css` (`:root` HSL vars) and are
  consumed via Tailwind (`bg-primary`, `text-muted-foreground`, ...). Do not
  hardcode hex colors in components.
- Page data (albums, blog posts, merch items, social links) is defined as
  const arrays inside the page components. There is no backend, no fetch
  layer; TanStack Query is wired as a provider but currently unused.
- User feedback via the `useToast` hook (`@/hooks/use-toast`).
- Commits: conventional-commit style (`feat:`, `fix:`, `refactor(scope):`, ...),
  imperative subject ≤72 chars, body explaining why.

## Gotchas

- **`src/pages/Index.tsx` is dead code** — the Lovable scaffold fallback.
  Home is `src/pages/Home.tsx`. Don't route to Index.
- **New routes must be added ABOVE the `*` catch-all** in `App.tsx`
  (there's a comment marking the spot), otherwise they never match.
- **`/blog/<slug>` links don't resolve** — Blog cards link to
  `/blog/${post.slug}` but no such route exists; deep links land on the
  404 page (locally; on the host, `_redirects` serves the app which then
  shows 404). Known gap — either add a post route or change the links.
- **Much of the UI is intentionally non-functional**: merch category
  filter buttons, wishlist hearts, "Add to Cart", "Digital Download",
  "Preview", and most Music-page buttons have no handlers.
- **BlogEdit "GitHub auth" is simulated** — the token/repo form only
  flips local state; the token is never used or stored. Never send a
  real PAT; saving posts only updates in-memory state.
- **EmailSignup and the Contact form fake success** — `setTimeout` +
  toast; wire a real service before promising delivery.
- **Dark mode is defined but unused** — `.dark` vars exist in
  `index.css` (stock shadcn palette) but nothing toggles them and the
  Art Nouveau tokens are light-only. Don't assume dark renders correctly.
- **Dev port is 8080**, not 5173 (set in `vite.config.ts`), and the
  server binds `::`.
- **`_redirects` is load-bearing** for hosting — deleting it breaks deep
  links/refreshes on the deployed site.
- The Bandcamp album ID on Home is a real numeric ID (`2424352134`);
  Music.tsx passes the string `"novus"` as `albumId`, which Bandcamp's
  embed player won't resolve as an album ID (only the external link
  works). If the Music-page player matters, swap in the numeric ID.

## Verifying changes

1. `npm run lint` — clean.
2. `npm run build` — succeeds.
3. `npm run dev`, then manually visit: `/`, `/music`, `/merch`, `/blog`,
   `/blog/edit`, `/contact`, and a bogus path (404). Check the left nav
   active state on each page and resize to mobile width (Home, Music,
   and Blog layouts are responsive).

## Pointers

- `README.md` — overview, stack, quickstart
- `CHANGELOG.md` — commit-by-commit history (post-rewrite hashes)
- `prompt.md` — full spec to recreate the site from scratch
- `architectural-diary/main.md` — narrative history + decision index
