

## Plan: Apply Gradient to "Dream" + Add More Photo Placeholders

### Changes

| File | Change |
|---|---|
| `src/components/careers/CareersHero.tsx` | 1. Apply `forge-gradient-text` class to "Dream" (same animated gold gradient as "Immersive" on home page). 2. Match home hero font style: `fontWeight: 700`, `fontSize: clamp(30px, 7vw, 64px)` desktop / `clamp(24px, 6vw, 40px)` mobile. 3. Add 4 more floating photo placeholders (total ~12) to fill gaps, especially bottom-center and mid areas. 4. On mobile, show a subset of smaller floating boxes instead of hiding all. 5. Ensure "Join the Dream" scrolls to `#roles` (already works). |

### Details

- **Gradient on "Dream"**: Replace the inline `color: '#FFBC3B'` span with `className="forge-gradient-text"` and remove the inline fontStyle italic (the gradient text doesn't need italic since the home page "Immersive" isn't italic either).
- **Font sizing**: Match home hero exactly: `clamp(30px, 7vw, 64px)` desktop, `clamp(24px, 6vw, 40px)` mobile, `fontWeight: 700`, `letterSpacing: -1`.
- **More placeholders**: Add ~4 more entries to the `floatingPhotos` array targeting bottom-center, top-center, and mid-left/right gaps. On mobile, render a smaller subset (4-5 boxes) at reduced sizes.

Single file edit, no new files needed.

