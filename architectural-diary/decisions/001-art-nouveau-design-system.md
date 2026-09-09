# 001 — Art Nouveau design system via CSS variables + component classes

- **Date:** 2025-08-20
- **Commit:** 8174e9c (introduced), f77f85d (responsive tuning)
- **Status:** active

## Context

The brief called for "an artistic, non-professional yet detailed and
cool aesthetic" with "warm, Art Nouveau-inspired color themes and
playful fonts", on top of a stock shadcn/ui + Tailwind scaffold whose
default palette is cool slate.

## Decision

Keep shadcn's CSS-variable contract but replace every token in
`src/index.css` with a warm Art Nouveau palette, and add a small
hand-written layer of component classes and keyframes on top of
Tailwind rather than configuring everything through
`tailwind.config.ts`:

- Palette (light only): background `45 15% 97%` (warm off-white),
  foreground `25 25% 15%`, primary coral `15 85% 55%` (+ a
  `--primary-glow` token), secondary amber `35 80% 85%`, terracotta
  accent `25 65% 60%`, muted warm browns, radius `0.75rem`.
- Named gradients (`--gradient-warm/sunset/amber/subtle`), warm glow
  shadows, and two easing curves (`--transition-organic`,
  `--transition-bounce`) as CSS variables.
- Google Fonts: Crimson Text for body, DM Serif Display for headings
  (exposed as Tailwind `font-serif` / `font-display`).
- Signature classes in `@layer components`: `.btn-artistic` (gradient
  fill, hover lift + white shine sweep via `::before`), `.card-organic`
  (rounded-3xl, subtle gradient, hover lift), `.text-artistic`
  (gradient-clipped text with a 4s `gradient-shift` animation),
  `.link-flowing` (underline that grows on hover), `.bandcamp-embed`.
- Motion utilities `animate-gentle-float` (6s drift/rotate) and
  `animate-warm-pulse`.

`tailwind.config.ts` maps the variables to Tailwind tokens (including
the extra `primary.glow`) so pages stay utility-first.

## Consequences

- Consistent, recognizable identity with very little per-page styling;
  pages mostly compose `card-organic`/`btn-artistic`/gradients.
- The stock `.dark` variable block was left in place but never themed,
  so dark mode is effectively unsupported.
- Because tokens are HSL triples, new colors must be added as variables
  (and mapped in Tailwind) rather than inline hex values.

## Alternatives considered

- Extending `tailwind.config.ts` only: rejected — gradients, shine
  effects, and keyframes don't map cleanly to config, and keeping them
  in one CSS file makes the system inspectable in one place.
- A component library theme (e.g. Theme UI): unnecessary for a static
  shadcn-based site.
