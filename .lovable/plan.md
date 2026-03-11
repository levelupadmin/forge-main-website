

## Powered By Section — Infinite Scrolling Marquee with Gradient Edges

### What changes

Convert the static logo row into an **infinite left-scrolling marquee** with white gradient fade on both edges.

### Logo sizes
- Increase all logos by 50% **except Sandcastles** (stays at current size)
  - Sony: base `48→72` desktop, `36→54` mobile (already no scale modifier)
  - Digitek: already has `scale: 1.5`, bump to `scale: 2.25` (1.5 × 1.5)
  - Sandcastles: keep current size (`scale: 1`)
  - Indie Press: `scale: 1.5`
  - Westland: `scale: 1.5`

### Marquee implementation
- Duplicate the logos array twice inside a scrolling `div` (standard infinite marquee trick)
- Use CSS `@keyframes marquee-left` (already exists in `forge.css`) or inline keyframes to translate the inner container from `0` to `-50%` infinitely
- Outer container: `overflow: hidden`, `position: relative`, full width
- Inner container: `display: flex`, `animation: marquee-left 20s linear infinite`

### Gradient fade edges
- Two pseudo-element-style overlays (implemented as absolutely positioned divs) on left and right edges
- `background: linear-gradient(to right, #FFFFFF, transparent)` on left
- `background: linear-gradient(to left, #FFFFFF, transparent)` on right  
- Width ~80px each, full height, `pointer-events: none`

### File changes
- **`src/components/forge/PoweredBy.tsx`** — Rewrite the logo container to a marquee with gradient overlays and updated scale values

