

## Plan: Mobile Optimization for Careers Page

### Problem
On mobile (390px), every section renders as single-column full-width stacked blocks. WhoBelongsHere (6 cards), HonestCase (4 cards), and LifeAtForge (5 boxes) all look identical in structure, creating a repetitive scroll.

### Changes

| File | Change |
|---|---|
| `src/components/careers/CareersHero.tsx` | Tighten mobile padding, reduce dead space above headline, make photos slightly larger and better positioned |
| `src/components/careers/SectionHeader.tsx` | Reduce mobile headline size from `clamp(40px, ...)` to `clamp(28px, 6vw, 36px)`, reduce subtext font to 15px, tighten margins |
| `src/components/careers/WhoBelongsHere.tsx` | Switch mobile grid from `1fr` to `repeat(2, 1fr)` so 6 cards render in a 2-column grid. Reduce card padding and minHeight for mobile. |
| `src/components/careers/HonestCase.tsx` | On mobile, render pillar cards as a horizontally scrollable row (scroll-snap) instead of stacked. Each card ~280px wide, flex-shrink 0. Breaks the vertical monotony. |
| `src/components/careers/LifeAtForge.tsx` | On mobile, use `repeat(2, 1fr)` grid for the 4 smaller boxes (2x2) instead of stacking. Keep the hero box full-width on top. Reduce minHeight from 200px to 140px. |
| `src/components/careers/VoiceOfTeam.tsx` | Reduce mobile card width from 320px to 280px for better peek-through of next card |
| `src/components/careers/OpenRoles.tsx` | Tighten mobile role row padding from 20px to 16px |
| `src/components/careers/HowWeHire.tsx` | Reduce step paddingBottom from 52px to 36px on mobile |
| `src/components/careers/ClosingCTA.tsx` | Reduce mobile headline from 44px to 32px |

### Layout Variety Strategy

The key idea is to break the "everything is 1-column stacked" pattern by giving each section a distinct mobile layout:

- **Hero**: Centered text, floating photos (already distinct)
- **MarqueeStrip**: Horizontal scroll (already distinct)
- **HonestCase**: Horizontal scroll cards (new - breaks pattern)
- **WhoBelongsHere**: 2-column compact grid (new - breaks pattern)
- **VoiceOfTeam**: Horizontal scroll cards (already distinct)
- **OpenRoles**: List rows (already distinct)
- **LifeAtForge**: 1 hero + 2x2 grid below (new - breaks pattern)
- **HowWeHire**: Timeline (already distinct)
- **ClosingCTA**: Centered text (already distinct)

### Detail: WhoBelongsHere 2-Column Mobile

Cards switch from `gridTemplateColumns: '1fr'` to `'repeat(2, 1fr)'`. Reduce padding from `40px 36px` to `24px 20px`, minHeight from 280px to 200px, font sizes scaled down slightly (title 18px, body 12px, icon 22px).

### Detail: HonestCase Horizontal Scroll

Replace the grid with a horizontal scrollable container on mobile:
- `display: flex`, `overflowX: auto`, `scrollSnapType: 'x mandatory'`
- Each card: `width: 280px`, `flexShrink: 0`, `scrollSnapAlign: 'start'`
- Hidden scrollbar, with left padding 24px
- This creates visual variety since no other white-bg section uses horizontal scroll

### Detail: LifeAtForge Mixed Grid

On mobile, the hero box stays full-width at 220px height. The 4 smaller boxes use `gridTemplateColumns: 'repeat(2, 1fr)'` with minHeight 140px, creating a compact 2x2 below the hero.

