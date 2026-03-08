

## Ethos Section Fixes

### Problem Analysis
1. **Overflow**: The SVG viewBox is `0 0 500 500` but circles (r=140, centered at 250,250) scatter to positions that push them well outside the viewBox — Learning goes to x=90 (extends to x=-50), Travel to x=410 (extends to x=550), Community to y=390 (extends to y=530). This causes clipping during the scatter animation.

2. **Circle alignment**: The scatter and final positions don't account for the circle radius, causing imprecise overlap in the merged Venn state.

3. **Center label**: "the Forge" text should be replaced with the Forge logo image (white version).

### Changes — `src/components/forge/Ethos.tsx`

**Expand the viewBox** to `0 0 700 700`, re-center everything to `cx=350, cy=350`, and reduce the circle radius from 140 to 110. This gives enough room for scatter positions without overflow.

**Adjust scatter positions** proportionally:
- Learning: scatter (-140, -50), final (-65, -50)
- Travel: scatter (140, -50), final (65, -50)  
- Community: scatter (0, 120), final (0, 65)

**Replace center text** with an `<image>` element using the existing `/images/forge-logo.png` with a CSS filter (`brightness(0) invert(1)`) to make it white — same technique used in the Footer. Remove the two `<text>` elements ("the" and "Forge").

**Reduce label text offsets** to match the smaller circle radius so labels stay inside their respective circles.

### Files Modified
- `src/components/forge/Ethos.tsx` — viewBox expansion, new center coordinates, reduced radius, adjusted scatter/final positions, logo `<image>` element replacing text

