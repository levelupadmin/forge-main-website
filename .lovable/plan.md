## WhyBuilt Section — Mobile Text Alignment, Font Size & Heading Fix

### Changes to `src/components/forge/WhyBuilt.tsx`

1. **Yellow subheading text**: Change from "Why It Was Built" (duplicate of main heading) to something **"Our Beginning"** — a distinct label that makes sense above the main heading.
2. **Main heading casing**: Change from "Why It Was Built" to **"Why it was Built"** — lowercase "it" and "was", uppercase "Why" and "Built".
3. **Mobile text alignment**: In `BeatCard`, force `textAlign` to `'left'` on mobile instead of `'center'`. Currently line 57 sets `const textAlign = isMobile ? 'center' : beat.align` — change to always `'left'`.
4. **Mobile font size reduction**: Reduce the mobile text `fontSize` from `clamp(16px, 4.5vw, 20px)` to something smaller like `clamp(14px, 3.8vw, 17px)`.