

## Plan: Full-Screen Intro Animation

### New File: `src/components/forge/IntroAnimation.tsx`

A self-contained component that manages the entire intro sequence using React state + CSS transitions.

**State:** `stage` number (0-7), `removed` boolean

**Timeline (all driven by `setTimeout` in a single `useEffect`):**
- Stage 0 (0ms): Dark screen, scroll locked via `document.body.style.overflow = 'hidden'`
- Stage 1 (600ms): Logo fades in (opacity 0→1, scale 0.96→1, transition 1.2s ease-out)
- Stage 2 (1900ms): Amber line width animates 0→48px (transition 0.5s)
- Stage 3 (2400ms): Tagline "where Dreamers become Doers" fades in (transition 0.4s)
- Stage 4 (3400ms): All inner content fades out (opacity→0, transition 0.6s)
- Stage 5 (4000ms): Overlay itself fades out (opacity→0, transition 0.8s), unlock scroll
- Stage 6 (4800ms): Set `removed = true`, component returns `null`

**Scroll lock:** Applied on mount, removed at stage 5. Cleanup in useEffect return.

**Logo:** Uses `/images/forge-logo-transparent.png` with `filter: brightness(0) invert(1)` for white-on-dark. Width: 200px desktop, 140px mobile (via `useIsMobile`).

**Tagline styling:** 14px, color `#888480`, letter-spacing 0.08em, centered, 12px below amber line.

All animations use inline `style` with `transition` properties — no JS frame loops.

### Modify: `src/components/forge/Hero.tsx`

Add a prop or local state `introComplete` that starts `false`. The hero wrapper gets:
- `opacity: 0, transform: translateY(20px)` initially
- `transition: opacity 0.8s ease-out, transform 0.8s ease-out`
- When intro completes (via a custom event `forge-intro-done` dispatched by IntroAnimation at stage 5), set to `opacity: 1, transform: translateY(0)`

### Modify: `src/pages/Index.tsx`

- Import and render `<IntroAnimation />` before all other content
- IntroAnimation dispatches `window.dispatchEvent(new Event('forge-intro-done'))` at stage 5 so Hero can react

### Files

| File | Action |
|---|---|
| `src/components/forge/IntroAnimation.tsx` | Create — full overlay + timed sequence |
| `src/components/forge/Hero.tsx` | Add intro-aware reveal animation |
| `src/pages/Index.tsx` | Add `<IntroAnimation />` |

