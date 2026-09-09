# 003 — Bandcamp as the player and the store

- **Date:** 2025-08-20
- **Commits:** 8174e9c (introduced), f77f85d (corrected links/IDs)
- **Status:** active (with a known flaw)

## Context

The brief required "deep integration with Bandcamp (embedding songs,
linking to purchase)". Bandcamp is where Zoofia actually sells music,
so building a separate audio pipeline or checkout made no sense.

## Decision

- Wrap Bandcamp's public `EmbeddedPlayer` iframe in a reusable
  `BandcampEmbed` component (props: `albumId`, `trackId?`, `width`,
  `height`, `className`), styled with the `.bandcamp-embed` class
  (rounded, warm shadow, thick border).
  - URL scheme:
    `https://bandcamp.com/EmbeddedPlayer/album=<id>` or
    `track=<id>` with `size=large/bgcol=ffffff/linkcol=e67e22/
    tracklist=false/artwork=small/transparent=true` — the orange
    `linkcol` was chosen to sit in the site's warm palette.
- Link out for everything transactional: the Home hero's "Bandcamp"
  button, Music's "Listen on Bandcamp", the "Support Independent
  Music" CTA, and Contact's social link all target
  `https://zofiaa.bandcamp.com/` (or `/album/novus`) in a new tab.
- f77f85d fixed the integration for reality: the button URL was
  corrected to `zofiaa.bandcamp.com` and the Home embed now uses the
  real numeric album ID `2424352134`.

## Consequences

- Zero audio infrastructure; purchases, analytics, and payouts stay on
  Bandcamp.
- Known flaw: `Music.tsx` passes the string `"novus"` as `albumId`,
  which the embed player does not resolve as a numeric Bandcamp album
  ID — on that page only the external link works. The Home embed is
  the correct reference implementation.
- If Bandcamp changes its embed scheme, both call sites are insulated
  by the single wrapper component.

## Alternatives considered

- Self-hosted audio + custom player: rejected — cost and complexity
  with no commerce benefit.
- Spotify/YouTube embeds: rejected — Bandcamp pays the artist directly
  and was explicitly requested.
