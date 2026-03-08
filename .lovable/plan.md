

## Redesign: "What is the Forge" Section

Currently it's plain centered text on a flat `#FCF7EF` background with no imagery or visual layers. Here are the options to make it visually striking while keeping the quote center-stage:

---

### Recommended Approach: Cinematic Photo Strip + Quote Hero

**Layout (top to bottom):**

1. **"What is / the Forge" heading** — kept at top, smaller, as a label
2. **Horizontal photo strip** — a row of 4-5 gallery/program images in rounded cards, slightly overlapping or with varied heights, placed behind or flanking the quote. Uses existing assets from `/images/gallery/` and `/images/programs/`. Subtle parallax or gentle float animation on scroll.
3. **The quote in massive type** — "Every next level of your life demands a different you." stays bold and centered, overlaid on a soft gradient or semi-transparent dark wash so it pops over the images
4. **Yellow accent divider** — kept as-is
5. **Description paragraph** — kept as-is below

**Visual enhancements:**
- Full-width section (remove `maxWidth: 1000`) with images bleeding edge-to-edge
- Images get a slight grayscale + warm tint filter, brightening on hover
- Soft radial gradient overlay from cream center to transparent edges so the quote text remains readable
- Staggered scroll-triggered fade-in: heading first, then images fan out, then quote scales up
- Optional: a subtle yellow glow/highlight on key words in the quote ("next level", "different you")

**Technical changes:**
- **`src/components/forge/WhatIsForge.tsx`** — rebuild with:
  - A `position: relative` full-width container
  - Image strip using a flex row of 5 images from existing gallery assets
  - Quote overlay with `z-index` above images
  - CSS keyframe animations for staggered entrance
- **`src/styles/forge.css`** — add `.forge-photo-strip` styles for the image row layout, hover effects, and responsive behavior (stack to 2 columns on mobile)

**Assets used (already in project):**
- `/images/gallery/gallery-1.png` through `gallery-5.png`
- `/images/programs/creators-hero.jpg`

No new dependencies needed.

