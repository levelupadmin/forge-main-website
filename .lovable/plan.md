

## Plan: Redesign PoweredBy Section — Stats + Static Logo Grid

Replace the current marquee-based PoweredBy section with a combined section inspired by the GrowthX reference: stats row on top, "Powered By" heading, then static logo grid (3 top, 2 bottom). White background, black text, on-brand styling.

### Layout (top to bottom)
1. **Stats row** — 3 stats in a horizontal row with star separators between them:
   - `600+` Dreamers
   - `25+` Editions across the world  
   - `11` Cities Explored
   - Large italic/bold numbers, smaller label text below, star (✦) separators between stats
   
2. **"Powered By" heading** — existing uppercase eyebrow style

3. **Static logo grid** — centered, 2 rows:
   - Row 1: Sony, Digitek, Sandcastles (3 logos)
   - Row 2: Indie Press, Westland Books (2 logos)
   - Grayscale logos with existing filter treatment, no animation

### Styling
- White background (#FFFFFF)
- Numbers: large clamp size, weight 700, color #222222
- Labels: smaller, weight 500, color rgba(34,34,34,0.5)
- Star separators: #222222 with low opacity
- Logos: static grid with consistent height, grayscale filters as existing
- Padding: `clamp(48px, 6vw, 72px)` top/bottom

### File Modified
- `src/components/forge/PoweredBy.tsx` — full rewrite

