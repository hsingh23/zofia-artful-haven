# prompt.md — one-shot recreation prompt

Feed this single prompt to a capable coding agent to recreate the
Zoofia Artful Haven site from scratch. It encodes every goal, stack,
layout, design, content, and integration decision embedded in the
original codebase.

---

## The prompt

Build a personal artist website for **Zoofia**, an experimental
musician, as a single-page React application. The vibe: "artistic,
non-professional yet detailed and cool" — a warm, **Art
Nouveau-inspired** visual identity (organic, handcrafted, flowing)
rather than a sleek corporate look. It must be fast and SEO-friendly.
There is **no backend**: all content is hardcoded, all "actions" are
UI prototypes. Deep **Bandcamp integration** is the commercial core.

### Tech stack (exact)

- Vite 5 (`@vitejs/plugin-react-swc`), React 18, TypeScript.
- Tailwind CSS 3 + `tailwindcss-animate` + `@tailwindcss/typography`
  (dep), PostCSS + autoprefixer.
- shadcn/ui: the full Radix primitive set (`accordion` through
  `tooltip`, incl. `button`, `card`, `badge`, `input`, `textarea`,
  `label`, `select`, `toast`/`toaster`, `sonner`, `tabs`, `carousel`,
  `chart`, `sidebar`...) with `class-variance-authority`, `clsx`,
  `tailwind-merge`, and `cmdk`.
- `react-router-dom` v6 (BrowserRouter), `@tanstack/react-query` v5
  (provider only), `lucide-react` icons, `date-fns`, `zod` +
  `react-hook-form` + `@hookform/resolvers` (deps available), `vaul`,
  `embla-carousel-react`, `recharts`, `next-themes`,
  `react-day-picker`, `input-otp`, `react-resizable-panels`.
- ESLint 9 flat config; `lovable-tagger` plugin in development mode
  only. Dev server on **port 8080**, host `::`. Path alias `@` →
  `./src`. Commit both `package-lock.json` and `bun.lockb`.

### Design system (implement exactly, in `src/index.css`)

Import from Google Fonts: **Crimson Text** (400/600 + italic) for
body, **DM Serif Display** (+ italic) for all headings (Tailwind
`font-serif` / `font-display`).

Light-mode HSL tokens in `:root` (keep a stock `.dark` block but
never toggle it — the site is light-only):

| Token | HSL | Role |
|---|---|---|
| `background` | `45 15% 97%` | warm off-white page |
| `foreground` | `25 25% 15%` | warm near-black |
| `card` / `card-foreground` | `42 20% 95%` / `25 25% 15%` | |
| `popover` | same as background | |
| `primary` / `primary-foreground` | `15 85% 55%` / `45 15% 97%` | **warm coral** |
| `primary-glow` (extra token) | `20 90% 65%` | |
| `secondary` | `35 80% 85%` | warm amber |
| `muted` / `muted-foreground` | `40 20% 90%` / `25 15% 45%` | |
| `accent` / `accent-foreground` | `25 65% 60%` / `45 15% 97%` | terracotta |
| `destructive` | `0 75% 55%` | |
| `border` / `input` | `40 15% 85%` / `40 15% 88%` | |
| `ring` | `15 85% 55%` | |
| `radius` | `0.75rem` | |

CSS variables beyond tokens:
`--gradient-warm: linear-gradient(135deg, hsl(15 85% 55%), hsl(35 80% 65%), hsl(25 70% 70%))`;
`--gradient-sunset: linear-gradient(180deg, hsl(20 90% 65%), hsl(15 85% 55%))`;
`--gradient-amber: linear-gradient(135deg, hsl(40 85% 75%), hsl(35 80% 65%))`;
`--gradient-subtle: linear-gradient(180deg, hsl(45 15% 97%), hsl(42 20% 95%))`;
shadows `--shadow-warm` (coral-tinted 30px), `--shadow-glow` (40px
coral haze), `--shadow-soft` (small neutral);
`--transition-organic: all .4s cubic-bezier(.4,0,.2,1)`;
`--transition-bounce: all .6s cubic-bezier(.68,-.55,.265,1.55)`.

Component classes (`@layer components`):
- `.btn-artistic` — `px-8 py-4 rounded-2xl font-semibold`, gradient-warm
  fill + shadow-warm; on hover lift `translateY(-2px) scale(1.02)` and
  shadow-glow; a `::before` white shine strip that sweeps across on
  hover (`-translate-x-full` → `translate-x-full`, opacity 0 → 0.2).
- `.card-organic` — `rounded-3xl p-8`, gradient-subtle bg, hairline
  border (`border-border/50`), shadow-soft; on hover lift −4px and
  shadow-warm.
- `.text-artistic` — gradient-warm background clipped to text, animated
  `gradient-shift` (background-position oscillation, 4s ease-in-out
  infinite).
- `.link-flowing` — inline-block; `::after` underline (`h-0.5`,
  bg-primary) grows from `w-0` to `w-full` on hover over 0.4s.
- `.bandcamp-embed` — `rounded-2xl overflow-hidden`, shadow-soft, 2px
  border.

Utilities: `bg-gradient-warm`, `bg-gradient-sunset`,
`bg-gradient-amber`, `bg-gradient-subtle`, `animate-gentle-float`
(keyframes: 6s translateY −10/−5px with ±1deg rotation), and
`animate-warm-pulse` (shadow-soft ↔ shadow-warm, 3s). Map tokens +
`primary.glow` + fonts into `tailwind.config.ts`.

### App shell

`src/main.tsx` mounts `App` inside `createRoot`. `App` composes
`QueryClientProvider` → `TooltipProvider` → shadcn `Toaster` + Sonner
`Toaster` → `BrowserRouter` → `Navigation` + `Routes`. Routes (new
ones above the `*` catch-all): `/` Home, `/music`, `/merch`, `/blog`,
`/blog/edit`, `/contact`, `*` NotFound (simple gray 404 with console
error logging the pathname). Keep an unused scaffold `Index.tsx`
fallback page out of the route table.

**Navigation** (app-wide, outside routes): fixed `top-8 left-8`, z-50,
stateless. "ZOOFIA" wordmark (text-2xl, font-display, `.text-artistic`)
links to `/`. Below it, a vertical stack of uppercase letter-spaced
links — MUSIC, MERCH, BLOG, CONTACT — active route in `text-primary`,
otherwise `text-muted-foreground` hovering to primary. At the bottom:
muted 12px taglines "CREATIVITY" and "POWERED BY CODE". No hamburger,
no CTA button.

### Pages

**Home (`/`)** — mobile-first 12-col grid (`lg:grid-cols-12`). Left
half: a `w-24 sm:w-32 h-*` gradient-warm circle at 80% opacity with
`animate-gentle-float`; then "Meet **Zoofia**" (Zoofia in
`.text-artistic`; scale `text-4xl sm:text-6xl lg:text-8xl`), centered
on mobile / left-aligned on desktop; a 12–16px `h-1` gradient-warm
underline bar. Right half: full-height panel with
`bg-gradient-subtle`; tagline "Creating soundscapes that blend organic
textures with digital innovation. Experience the intersection of
creativity, technology, and artistic expression." (`text-lg` →
`text-2xl`); two buttons stacked full-width on mobile / inline on
desktop — "Listen Now" (`.btn-artistic`, links `/music`) and an
outline rounded-xl "Bandcamp" button (ExternalLink icon, opens
`https://zofiaa.bandcamp.com/` in a new tab); below, a `BandcampEmbed`
with `albumId="2424352134"`, `height={200}`, max-w-sm. Fixed
bottom-right "SCROLL DOWN" + ArrowDown indicator, hidden below `lg`.
Then a three-column section (`md:grid-cols-3`) — MUSIC / MERCH / BLOG,
each `font-display` heading, one-line muted description, and a
`.link-flowing` "Explore Music →"-style link.

**Music (`/music`)** — header band (`bg-gradient-subtle`) with huge
"Music" title (`.text-artistic` on the word) and subtitle "Exploring
the intersection of human creativity and digital expression". Featured
album block (2-col): left — "Novus" (`text-4xl/5xl`) with a 2024 pill
badge, description "A journey through experimental soundscapes and
innovative musical territories.", a numbered track list (1–5:
Opening Ritual, Digital Dreams, Organic Synthesis, Temporal Flux,
Closing Circle) with ghost Play buttons that fade in on row hover;
actions: "Listen on Bandcamp" (`.btn-artistic` →
`https://zofiaa.bandcamp.com/album/novus`) + outline "Digital
Download" (disabled in spirit, no handler). Right — `BandcampEmbed`
(`height={400}`, max-w-md) wrapped in `animate-gentle-float` (pass
album ID `"novus"` here, matching the original's known flaw). "More
Releases" band on gradient-subtle: three `.card-organic` placeholders
(Coming Soon / Singles / Collaborations) with gradient-warm/amber/
sunset `w-32 h-32` rounded-2xl tiles, Play icon, disabled buttons.
Final CTA card: "Support **Independent Music**" → `.btn-artistic`
"Visit Zoofia on Bandcamp".

**Merch (`/merch`)** — same header style ("Merch", subtitle
"Artistic merchandise crafted with the same attention to detail as the
music"). Category filter row: All, Music, Art, Apparel, Print (All
solid, rest outline; non-functional). Grid `md:2 lg:3` of four
`.card-organic` products, each an `aspect-square` gradient-warm tile
with a white ShoppingBag icon, "Limited" badge (bg-accent) when
applicable, and a black/50 "Sold Out" overlay when out of stock:

1. Novus Vinyl Record — $35 — Music — limited, in stock
2. Art Nouveau Poster Set — $25 — Art — limited, in stock
3. Zoofia Logo Tee — $28 — Apparel — not limited, in stock
4. Creative Process Zine — $15 — Print — limited, SOLD OUT

Each card: name + price (text-primary), description, category badge,
"Add to Cart"/"Sold Out" `.btn-artistic` (disabled when out) and an
outline Heart icon button (no handlers). Featured band:
"Supporter's Bundle" `.card-organic` — gradient-sunset tile right;
left: copy "Get everything in one special package: Novus vinyl, poster
set, exclusive zine, and a personal thank you note. Limited to 100
bundles.", price row **$89** with $103 struck through and a "Save $14"
accent badge, "Only 23 left in stock" with a filled Star, full-width
`.btn-artistic` "Get Supporter's Bundle". Footer trust row (3 cols):
Free Shipping (orders over $50 worldwide), Handcrafted, Limited
Editions — circular `bg-primary/10` icon medallions.

**Blog (`/blog`)** — header band ("Blog"). Toolbar: search Input
(Search icon, filters title+excerpt case-insensitively) + category
buttons All/Process/Music/Art/Personal + outline "Edit Blog" button
(Edit icon → `/blog/edit`). Two-col card grid of three `.card-organic`
posts (author "zoofia"):

1. "The Art of Sound Design: Creating Organic Textures" — 2024-01-15,
   8 min read, Process, tags sound design/production/creativity,
   slug `art-of-sound-design`
2. "Behind the Scenes: Novus Album Creation" — 2024-01-10, 12 min
   read, Music, tags novus/album/behind-the-scenes, slug
   `novus-album-creation`
3. "Art Nouveau Influence in Modern Digital Art" — 2024-01-05, 6 min
   read, Art, tags art nouveau/inspiration/visual art, slug
   `art-nouveau-influence`

Each post carries a full multi-section markdown body (## headings,
lists, and a Bandcamp link in post 2) stored in the literal. Cards:
outline category Badge; `text-2xl` title linking to `/blog/<slug>`
(`.link-flowing`); excerpt; meta row (Calendar icon + long-form date,
Clock icon + read time); Tag-chip row; ghost "Read full article →".
Empty-state for no matches. Newsletter band: "Never Miss a **Story**"
card with a non-wired "Subscribe to Updates" `.btn-artistic`.

**BlogEdit (`/blog/edit`)** — two states. **Unauthenticated:** centered
`.card-organic` with a gradient-warm circle + Key icon, "Blog
**Management**", copy "Connect your GitHub repository to manage blog
posts with MDX format"; password Input "GitHub Personal Access Token"
(hint: needs repo write access), URL Input "GitHub Repository URL"
(placeholder `https://github.com/username/blog-posts`), full-width
`.btn-artistic` "Connect to GitHub" (Github icon) — any both-filled
submit sets authenticated + success toast; missing fields → destructive
toast. Setup-instructions list (create token → write perms → repo →
`/posts/*.mdx`). **Authenticated:** header band "Blog **Editor**" +
"Connected to GitHub" status; 3-col layout — left card lists the three
existing posts (title, slug, "published" badge, Edit/Eye buttons);
right (2-col) "Create New Post": Title Input that auto-generates the
slug (lowercase, non-alphanumerics → `-`, trimmed), editable Slug
Input, native `<select>` category (Process/Music/Art/Personal), a
min-h-400px mono Textarea with an MDX placeholder (headings, bold/
italic, fenced code, bullets), "Save Post" `.btn-artistic` (appends to
the post list + toast; clears form) and an outline "Preview" button.
**Everything is local state; the token is never used, stored, or
sent.**

**Contact (`/contact`)** — header band ("Contact", "Let's connect and
create something beautiful together"). 2-col: left `.card-organic`
"Send a **Message**" form — Name + Email (2-col), Subject, Message
(min-h-150px), all required; submit fires a "Message sent! 🎵" toast
and sends nothing. Right stack: "Get in Touch" card — Email
`hello@zzzoofia.com` (for collaborations, bookings, general) and
Response Time "Usually within 24-48 hours", each with
`bg-primary/10` rounded icon tiles; "Connect Elsewhere" card with rows
Bandcamp (→ `https://zofiaa.bandcamp.com/album/novus`) and Email
(`mailto:hello@zzzoofia.com`); "Collaboration" card (open to music,
visual art, interdisciplinary projects). Then the **EmailSignup**
component: centered `.card-organic`, gradient-warm circle + Mail icon
with `animate-gentle-float`, "Join the **Creative Journey**", copy
about exclusive updates / behind-the-scenes / first access to limited
drops, email Input + "Join List" `.btn-artistic` that shows a spinner
for a simulated 1s call then a welcome toast, fine print "No spam,
just art. Unsubscribe anytime." FAQ band: 2×2 grid — commissions
(yes, custom pieces), licensing (films/podcasts), mixing/mastering
(own work only), support (buy on Bandcamp / merch / share).

### Data model (all in-component literals)

```ts
album   = { title, year, description, bandcampUrl, albumId, tracks: string[] }
post    = { id, title, excerpt, content /* markdown */, author, date,
            readTime, category, tags: string[], slug }
merch   = { id, name, price, description, image /* placeholder key */,
            category, limited, inStock }
social  = { name, url, description }
```

### External APIs / URLs (by name)

- Bandcamp EmbeddedPlayer (public iframe, no key):
  `https://bandcamp.com/EmbeddedPlayer/album=<id>...` or
  `track=<id>...` with
  `size=large/bgcol=ffffff/linkcol=e67e22/tracklist=false/artwork=small/transparent=true`.
  Real album ID for Home: `2424352134`.
- Bandcamp store: `https://zofiaa.bandcamp.com/` and
  `https://zofiaa.bandcamp.com/album/novus`.
- Email: `mailto:hello@zzzoofia.com`.
- Google Fonts CSS2: Crimson Text + DM Serif Display.
- No backend APIs, no keys, no environment variables.

### SEO head (`index.html`)

Title "Zoofia - Artistic Music & Creative Expression"; meta
description "Discover Zoofia's unique artistic music, merch, and
creative blog. Experience warm Art Nouveau-inspired design and
innovative musical expression."; author/keywords (zoofia, music,
artist, art nouveau, bandcamp, creative, blog, merch); canonical
`https://www.zzzoofia.com/`; full Open Graph (type website, og:image
`https://www.zzzoofia.com/og-image.jpg`, site_name Zoofia); Twitter
summary_large_image (site/creator `@zoofia`); and a Schema.org
JSON-LD `Person` block for Zoofia.

### Static assets

`public/_redirects` containing exactly `/*    /index.html   200`
(Netlify SPA fallback — load-bearing), `robots.txt`, `favicon.ico`,
`placeholder.svg`.

### Build order (phases)

1. Scaffold the Vite+React+TS+Tailwind+shadcn template, alias `@`,
   port 8080, ESLint, both lockfiles, blank Index/NotFound shell.
2. Design system: fonts, tokens, gradients, shadows, transitions,
   component classes, keyframes; wire `tailwind.config.ts`.
3. Shell: App providers, route table, fixed left Navigation rail.
4. BandcampEmbed + EmailSignup components.
5. Pages in order: Home → Music → Merch → Blog → BlogEdit → Contact;
   fill all literals/content.
6. SEO head + robots/favicon + `_redirects`.
7. Mobile-first responsive pass (stacked <lg, split grid ≥lg; hide
   scroll indicator on mobile).

### Acceptance criteria

- All routes render: `/`, `/music`, `/merch`, `/blog`, `/blog/edit`,
  `/contact`; unknown paths show the 404 page; nav highlights the
  active route.
- Left rail visible on every page; no horizontal scroll at 375px
  width; Home/Music/Blog adapt from stacked to two-column at `lg`.
- The gradient palette, `.btn-artistic` shine, `.card-organic` lift,
  `.text-artistic` animated gradient text, and floating orb animation
  are all present and smooth.
- Home shows a working Bandcamp player (album 2424352134); every
  Bandcamp button opens the correct URL in a new tab.
- Blog search + category filters work over the three posts; empty
  state renders; "Edit Blog" reaches the editor.
- BlogEdit gates on the token form, transitions with toasts, lists 3
  posts, auto-slugs titles, and appends saved posts locally.
- Contact form and EmailSignup show their toasts; no network calls
  are made anywhere in the app.
- `npm run lint` and `npm run build` pass; `dist/` contains
  `_redirects`; refresh on `/music` serves the app (SPA fallback).
