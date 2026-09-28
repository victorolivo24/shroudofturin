# Shroud of Turin Interactive Atlas

An interactive, museum-style introduction to the Shroud of Turin for curious visitors. Each exhibit
"room" asks one question and lets the visitor examine the evidence, with supporting and skeptical
readings side by side.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build + type check
npm run lint
```

## How it is organised

- `src/app/page.tsx` — the lobby: introduction and floor map of rooms.
- `src/data/rooms.ts` — the list of rooms (title, question, teaser, card image). Add a room here and
  register its component in `src/app/rooms/[slug]/page.tsx`.
- `src/app/rooms/[slug]/page.tsx` — renders a room inside `RoomLayout` (room strip, headline, next door).
- `src/sections/` — one component per room's exhibits.
- `src/lib/visited.ts` — remembers which rooms this browser has visited (localStorage only).
- `src/app/sources/page.tsx` — full reference list.
