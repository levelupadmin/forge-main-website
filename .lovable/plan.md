

## Plan: Fix PoweredBy, Stats, Intro Animation, and Spacing

### Summary
Multiple changes across a few files: split the current PoweredBy section back into two separate concerns (stats section + scrolling marquee), fix spacing, restore the intro loading screen without the video.

---

### 1. Split PoweredBy into Stats Section + Scrolling Marquee

**Stats section** (new approach in `PoweredBy.tsx`):
- Remove the static logo grid — logos move back to a scrolling marquee below
- Keep the stats row (600+, 25+, 11) but fix styling:
  - Remove `fontStyle: 'italic'` — use normal/straight weight
  - Replace ✦ star separators with on-brand elements (small golden dot or a thin vertical gold line `|` using the brand color `#FFBC3B`)
  - Add subtle color: numbers in `#222222`, or accent the numbers with the brand gradient
  - On mobile: ensure "11 Cities Explored" stays on one line — reduce font sizes or use `whiteSpace: 'nowrap'` and smaller gap
- Move the stats section closer to HeroBar (reduce top padding)
- Extend the section slightly (add a bit more horizontal breathing room)

**Scrolling marquee** (restore old pattern):
- Below the stats, restore the "Powered By" heading + single-row infinite scrolling marquee of partner logos (Sony, Digitek, Sandcastles, Indie Press, Westland) using the existing `marquee-scroll-left` CSS animation
- Logos duplicated 4x for seamless loop, single horizontal line, white background, grayscale filters, edge fade masks
- Tight spacing between stats and marquee, and between marquee and WhatIsForge

### 2. Tighten WhatIsForge Top Padding
- In `WhatIsForge.tsx`, reduce the top padding so it sits closer to the PoweredBy/marquee section above

### 3. Restore Intro Animation
- Add `IntroAnimation` back to `Index.tsx` 
- In `IntroAnimation.tsx`, remove the `<video>` element entirely — go straight from black screen to logo fade-in
- Adjust timings: Stage 0 is just black, Stage 1 (at ~800ms) logo fades in, Stage 3 tagline, Stage 4 overlay fades out

---

### Files Modified
- `src/components/forge/PoweredBy.tsx` — rewrite: stats with fixed styling + scrolling logo marquee
- `src/components/forge/WhatIsForge.tsx` — reduce top padding
- `src/components/forge/IntroAnimation.tsx` — remove video, keep logo + tagline animation
- `src/pages/Index.tsx` — add IntroAnimation import and render

