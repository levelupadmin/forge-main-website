

# Ethos Section — Narrative Animation Redesign

## Concept
Replace the static SVG Venn diagram with a **scroll-triggered, multi-stage narrative animation** that tells the story of how Learning, Travel, and Community converge to form the Forge. Each concept appears one at a time with its own moment, then they visually merge.

## Animation Sequence (triggered on scroll entry, ~4.5s total)

1. **Stage 0 (0s)** — Section fades in. "our ethos" title appears.

2. **Stage 1 (0.5s)** — **Learning** circle draws in from nothing (stroke animation) on the left side. The word "Learning" fades up below it. A short narrative line appears: *"It starts with understanding your craft."*

3. **Stage 2 (1.5s)** — **Travel** circle draws in on the right. Label + narrative: *"Then you step into the unknown."* The Learning circle shifts slightly left to make room.

4. **Stage 3 (2.5s)** — **Community** circle draws in at the bottom-center. Label + narrative: *"You find your people."* All three circles glide into the classic Venn arrangement.

5. **Stage 4 (3.5s)** — The intersection glows with a golden radial pulse. "the Forge" label fades in at center. The three narrative lines fade out, replaced by the final statement: *"We meet dreamers at the intersection of learning, travel, and community to enable them to become doers."*

## Technical Approach

### State Machine
- Use a single `useState<number>` (`stage`) that advances via `setTimeout` chain, kicked off when `isVisible` becomes true from `useScrollAnimation`.
- Each stage value (0–4) controls opacity/transform/position of all elements via inline styles with CSS transitions.

### SVG Animation
- Each circle uses `stroke-dasharray` / `stroke-dashoffset` CSS transitions (already in `forge.css`) — triggered per-stage.
- Circle positions animate via `cx`/`cy` changes using CSS `transition` on the SVG elements (will use `transform: translate()` on `<g>` wrappers for smooth GPU-accelerated movement).

### Narrative Text
- Three short narrative lines, each fading in during its circle's stage and fading out together at Stage 4.
- Final paragraph fades up at Stage 4 with a slight `translateY` ease.

### Golden Glow
- At Stage 4, a `<radialGradient>` fill on a center circle pulses once using a CSS keyframe animation (opacity 0 → 0.3 → 0.15, looping subtly).

### CSS additions to `forge.css`
- `@keyframes forge-glow-pulse` for the center intersection glow.
- Transition classes for narrative text fade (`forge-narrative-line`).

### Component Structure
- Single `Ethos.tsx` rewrite — no new files needed beyond CSS additions.
- All animation is CSS transition-driven (no animation libraries), controlled by the stage number toggling classes/styles.

### Mobile
- SVG scales via `clamp()` width as currently.
- Narrative text stacks below the diagram.
- Same timing, slightly smaller circles.

