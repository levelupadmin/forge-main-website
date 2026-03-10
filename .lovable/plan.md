## Gallery Redesign: Infinite Scroll Marquee Rows

The reference screenshot shows a dark background gallery with 3 horizontal rows of images that scroll infinitely (marquee-style), similar to the existing "Our Students Are From" marquee. Each row scrolls in alternating directions.

### Current State

- Masonry grid layout with CSS `columns: 3`
- Static images with scroll-triggered fade-in
- Lightbox on click
- White background

### Plan

**1. Restructure Gallery layout (Gallery.tsx)**

- Make headings black
- Split the 18 images into 3 rows of 6
- Each row is an infinitely scrolling horizontal marquee (CSS animation)
- Row 1 & 3 scroll left, Row 2 scrolls right (alternating)
- Duplicate images in each row for seamless infinite loop
- Images have uniform height per row with varying widths, rounded corners, small gaps
- Keep lightbox functionality on click
- Full-width section (edge-to-edge, no max-width constraint)

**2. Add CSS marquee styles (forge.css)**

- `.gallery-row`: `display: flex`, `overflow: hidden`, `width: 100%`
- `.gallery-track`: `display: flex`, `gap: 12px`, CSS `@keyframes scroll-left` / `scroll-right` with `translateX` animation
- Row heights: ~180px per row (slightly varied)
- Animation duration ~30-40s for smooth infinite scroll
- `animation-play-state: paused` on hover for interactivity
- Images: `object-fit: cover`, `border-radius: 8px`, fixed height, `min-width` to maintain aspect

**3. Mobile adjustments**

- Reduce row height to ~120px
- Faster or same animation speed
- Keep all 3 rows but with fewer base images if needed