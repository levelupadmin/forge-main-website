

# Mobile Aesthetic & UX Overhaul

After reviewing every section on mobile (390px), here are the specific issues and improvements needed to make the mobile experience feel premium, polished, and emotionally impactful.

---

## Issues Found

1. **Hero**: Video background appears mostly black/dark gradient — no visible video content on mobile. The headline sits very low with a lot of dead space above it.
2. **HeroBar**: "From the House of LevelUp Learning" text wraps awkwardly on small screens.
3. **WhatIsForge**: Photo strip images are tiny (200px height, 3 squeezed images). The scroll-highlight text is too large on mobile (`clamp(20px, 3vw, 32px)`) making it a wall of text.
4. **LearnDoBecome**: The 3 dark bento boxes stack vertically but each one is quite tall — could be tighter.
5. **Ethos**: The SVG Venn diagram uses `clamp(360px, 55vw, 620px)` width — on 390px mobile this is 360px which overflows or looks cramped. Narrative text area has fixed `height: 56` which clips on mobile.
6. **Mentors (Mobile)**: Stacked cards are good but all 4+ mentors listed at once creates a very long scroll. No visual hierarchy between them.
7. **TrustedAcrossBorders**: The 4 metric cards stack as single column — works but the globe section below renders a large blank white space (the orthographic globe is hard to see/interact with on mobile). This section feels like it belongs to a different brand (red colors, "Sales Regions" legend).
8. **ImpactNumbers**: Currently single-column stack on mobile but memory says it should be 3-column. The cards are 180px min-height each — manageable.
9. **BrandPartners**: The partner image has `aspectRatio: 4/5` which is very tall on mobile, pushing content far down.
10. **Community**: Bento cards work but heights could be tighter.
11. **GlobalReach (3D Globe)**: At 55% scroll the entire viewport was blank — the 3D globe either fails to render or takes too long on mobile. This is a major UX problem.
12. **Gallery**: 2-column masonry on mobile works but 18 images is excessive — creates a very long scroll.
13. **Testimonials**: Horizontal scroll of 9:16 cards is good on mobile.
14. **TransformationStories**: Horizontal scroll snap cards work well.
15. **NotSureCTA**: Solid on mobile.
16. **FAQ**: Clean, works well.
17. **Footer**: Single column, centered — good but the footer grid sections (Navigate, Programs, Get in Touch) are left-aligned which looks inconsistent with the centered brand column above.
18. **Navigation mobile menu**: Full-screen black overlay is functional but visually basic.

---

## Plan

### 1. Hero — Better mobile composition
- Reduce hero height to `100svh` (safe viewport height) to avoid address bar issues
- Move headline slightly higher (bottom: 100px instead of 64px)
- Add a subtle animated gradient shimmer overlay so the "dark/empty" feeling is replaced with visual richness even when video loads slowly
- Add the tagline "India's most immersive creative education experience" in small caps below the CTA

### 2. WhatIsForge — Tighter mobile layout
- Reduce mobile photo height from 200px to 160px
- Reduce the scroll-highlight description font-size on mobile to `clamp(17px, 4.5vw, 24px)`
- Tighten padding between photo strip and description

### 3. Ethos — Mobile-optimized Venn
- Reduce SVG width on mobile to `min(300px, 80vw)`
- Increase narrative text container height on mobile from 56px to 72px to prevent clipping
- Reduce overall section `minHeight` on mobile from 750px to 600px

### 4. Mentors — Mobile carousel instead of stack
- Replace the stacked card list with a swipeable horizontal scroll (like Testimonials)
- Show one card at a time with scroll-snap, instead of all 4+ cards stacked vertically
- This dramatically reduces scroll length and feels more premium

### 5. GlobalReach — Fix blank section on mobile
- On mobile, hide the 3D Canvas entirely (it's already at 0.5 opacity and likely failing to render)
- Show a static fallback: a simple dark section with the stats and country list without the globe
- This eliminates the blank viewport problem

### 6. TrustedAcrossBorders — Remove or retheme for mobile
- The "Sales Regions" / "Company Presence" legend and red-colored globe don't match the Forge brand at all — this seems like leftover from a different project
- On mobile, simplify: show only the 4 metric cards in a 2x2 grid and the country list
- Hide the orthographic globe map on mobile (it's interactive and doesn't work well on touch)

### 7. ImpactNumbers — 3-column mobile layout (per memory)
- Change mobile grid from `1fr` to `repeat(3, 1fr)` as specified in project memory
- Reduce min-height on mobile and font sizes to fit 3 columns

### 8. Gallery — Reduce image count on mobile
- Show only 8-10 images on mobile instead of all 18
- Reduce image border-radius to 8px on mobile for a tighter, more refined grid

### 9. BrandPartners — Tighter mobile card
- Change mobile partner image aspect ratio from `4/5` to `16/10` (landscape) to reduce vertical space
- This keeps the image impactful without dominating the screen

### 10. Footer — Centered mobile layout
- Center-align all footer column content on mobile (Navigate, Programs, Get in Touch) to match the brand column
- Reduce gap between footer sections

### 11. Mobile menu — Premium feel
- Add a fade-in animation to the mobile menu overlay
- Add subtle staggered fade-in for each menu link
- Add the Forge logo at the top of the mobile menu

### 12. LearnDoBecome — Tighter mobile spacing
- Reduce padding inside bento boxes on mobile
- Reduce gap between boxes from 20px to 12px on mobile

---

## Files to modify

| File | Changes |
|------|---------|
| `Hero.tsx` | Use `100svh`, reposition headline, add tagline |
| `WhatIsForge.tsx` | Smaller mobile photos, smaller description font |
| `Ethos.tsx` | Smaller SVG on mobile, taller narrative area, shorter section |
| `Mentors.tsx` | Replace mobile stack with horizontal scroll-snap carousel |
| `GlobalReach.tsx` | Hide 3D Canvas on mobile, show static fallback |
| `TrustedAcrossBorders.tsx` | 2x2 metric grid on mobile, hide globe map on mobile |
| `ImpactNumbers.tsx` | 3-column grid on mobile per memory constraint |
| `Gallery.tsx` | Limit to 10 images on mobile |
| `BrandPartners.tsx` | Landscape aspect ratio for mobile partner image |
| `Footer.tsx` | Center-align all mobile footer sections |
| `Navigation.tsx` | Animated mobile menu with logo and stagger |
| `LearnDoBecome.tsx` | Tighter mobile padding and gaps |

All changes use pure custom CSS (no Tailwind per project rules). No new dependencies needed.

