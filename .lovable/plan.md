

## Plan: Hero Black Background + Life at Forge Gallery + Remove ClosingCTA

### Summary

Three main changes:
1. **Mobile hero**: Switch from white to black background, white text, fix photo collage clashing with MarqueeStrip
2. **Life at Forge**: Convert from bento boxes to a photo gallery section, move it after HowWeHire
3. **Remove ClosingCTA**: Replace with a simple "Apply Now" button (linking to Tally form) placed after the gallery

---

### Changes

| File | Change |
|---|---|
| `src/components/careers/CareersHero.tsx` | Mobile: change `background: '#FFFFFF'` to `'#000000'`, text color to white, subtext to `rgba(255,255,255,0.45)`. Reposition `mobileCollagePhotos` with proper bottom padding (~60px) so they don't clash with MarqueeStrip. Change photo placeholder bg from `#e8e5de` to `#1a1a1a`. Button style to match desktop `forge-cta-light`. |
| `src/components/careers/LifeAtForge.tsx` | Complete rewrite: black background, "Life at the Forge" heading only, then a gallery grid of photo placeholders (3-column masonry-style on desktop, 2-column on mobile). Remove the text/quote overlay. Use 8-10 rounded-corner photo placeholders in varying heights for visual interest. No SectionHeader subtext. |
| `src/components/careers/ClosingCTA.tsx` | Replace entire content with a simple centered section: just an "Apply Now" button linking to `TALLY_FORM` (opens in new tab). Minimal padding, clean look. No headline, no subtext, no "Ready?" eyebrow. |
| `src/pages/Careers.tsx` | Reorder: move `<LifeAtForge />` after `<HowWeHire />` (it's currently before HowWeHire). New order: ...OpenRoles → HowWeHire → LifeAtForge → ClosingCTA → Footer. |

### Detail: LifeAtForge Gallery

- Black background section
- Simple "Life at the Forge" text centered at top (white, bold)
- Below: a grid of photo placeholders in a gallery layout
  - Desktop: 3 columns, items with varying heights (200px, 260px, 180px etc.) for masonry feel
  - Mobile: 2 columns, similar height variation
- Rounded corners (16px), `#1a1a1a` placeholder backgrounds
- Hover scale effect on each photo
- No text overlays, no quotes — just the gallery

### Detail: ClosingCTA Simplified

- White background, centered
- Single `<a>` button: "Apply Now" linking to `TALLY_FORM`, target `_blank`
- Styled like the primary dark button with amber hover glow
- Padding: 48px on mobile, 64px on desktop

