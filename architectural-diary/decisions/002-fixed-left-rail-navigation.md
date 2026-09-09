# 002 — Fixed left navigation rail replacing a top navbar

- **Date:** 2025-08-20
- **Commit:** 590d7d3
- **Status:** active

## Context

The first generated version used a conventional fixed top navbar:
logo left, links right, a hamburger drawer on mobile, and a "Join
List" CTA. The subsequent design mockup called for a more editorial,
poster-like layout, and the home page was rebuilt as a split-grid hero
at the same time.

## Decision

Replace the navbar with a single fixed element at `top-8 left-8`:

- "ZOOFIA" wordmark (DM Serif Display, gradient `.text-artistic`)
  linking home;
- vertical stack of uppercase, letter-spaced links — MUSIC, MERCH,
  BLOG, CONTACT (Home dropped; the wordmark covers it); active route
  highlighted via `useLocation`;
- small muted taglines "CREATIVITY" / "POWERED BY CODE" beneath.

All state (the `useState` hamburger toggle) and the mobile drawer were
deleted; the component went from ~93 to ~51 lines.

## Consequences

- Distinctive, simple, and stateless navigation that renders app-wide
  (outside the router tree in `App.tsx`).
- Mobile ergonomics are weaker than a drawer: the rail overlays the
  top-left of the viewport, and pages compensate with left padding at
  `lg` breakpoints (`px-4 sm:px-8 lg:px-16`) rather than reserving a
  gutter column.
- The "Join List" CTA and the home email-signup section were removed;
  EmailSignup survives only on the Contact page, reducing list-growth
  touchpoints to one.

## Alternatives considered

- Keep the top bar and only restyle it: rejected — the mockup's
  asymmetric hero reads best without a full-width header.
- Sidebar with a collapsed/expanded state: rejected as unnecessary
  complexity for four links.
