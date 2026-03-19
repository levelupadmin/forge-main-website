

## Plan: Careers Hero — Full-Bleed Rotating Background (like Community Hero)

### What Changes
Replace the current floating/collage photo layout with a full-bleed rotating background image hero, matching the Community page pattern. The copy and CTA button move to the bottom of the section so the images are visible behind.

### Images Used
Combine the existing careers hero images plus gallery images from the careers folder:
`big-group-beach.jpg`, `team-selfie.jpg`, `panel-talk.jpg`, `kl-towers.jpg`, `beach-shoot.jpg`, `team-outdoor.jpg`, `production-room.jpg`, `trophy.jpg`, `goa-beach.jpg`, `tug-of-war.jpg`, `huddle.jpg`, `film-fest.jpg`, `beach-vibes.jpg`, `group-indoor.jpg`

### Implementation (`src/components/careers/CareersHero.tsx`)

- Remove all floating photo / mobile collage logic and data arrays
- Add a `HERO_IMAGES` array with the careers photos listed above
- Add `useState` for `activeIndex` and `useEffect` with `setInterval` (3s) to cycle through images
- Render full-bleed rotating backgrounds: each image is an absolutely positioned div with `backgroundSize: cover`, crossfading via opacity transition (1.5s)
- Add a dark overlay (`rgba(0,0,0,0.55)`) for text legibility
- Position the copy (headline, subtext, CTA) at the **bottom** of the section using `position: absolute; bottom` — same pattern as CommunityHero
- Section height: `100svh`, padding top large enough for nav clearance
- Both desktop and mobile use the same layout (no separate mobile branch needed) — just adjust font sizes responsively as before

### Technical Detail
```
section: position relative, 100svh, overflow hidden, black bg
  → N absolute divs (one per image), opacity 0/1 with 1.5s transition
  → dark overlay div
  → bottom-positioned content div (headline + subtext + button)
```

### Files Modified
- `src/components/careers/CareersHero.tsx` — full rewrite

