

## Redesign: "Why It Was Built" — Full-Bleed Cinematic Scroll Reveal

### Problem
Current layout has tiny images (200px), bold first row text, non-standard heading, and no real scroll-reveal animation. It feels like a text block with thumbnails, not a manifesto.

### New Approach: Stacked Full-Bleed Image Cards

Each narrative beat becomes a **full-width card** with a large background image (dark overlay) and text overlaid on top. As the user scrolls, each card fades up independently. This is inspired by GlossGenius's editorial about page and cinematic brand storytelling layouts.

```text
┌─────────────────────────────────────────────────┐
│           WHY IT WAS BUILT                      │
│        Why It Was Built                         │
│   (standard forge-subheading + forge-heading)   │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │  │
│  │ ▓▓  FULL-WIDTH IMAGE (filmmaking-5)   ▓▓ │  │
│  │ ▓▓  dark overlay + text bottom-left   ▓▓ │  │
│  │ ▓▓                                    ▓▓ │  │
│  │ ▓▓  "We were tired of watching        ▓▓ │  │
│  │ ▓▓   creative people not create."     ▓▓ │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ ▓▓  FULL-WIDTH IMAGE (creators-1)     ▓▓ │  │
│  │ ▓▓  text bottom-right                 ▓▓ │  │
│  │ ▓▓                                    ▓▓ │  │
│  │ ▓▓  "There were hundreds of courses..." ▓ │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │ ▓▓  FULL-WIDTH IMAGE (writing-1)      ▓▓ │  │
│  │ ▓▓  text bottom-left                  ▓▓ │  │
│  │ ▓▓                                    ▓▓ │  │
│  │ ▓▓  "We knew the missing piece..."    ▓▓ │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│       The Forge was not created to dream.       │
│       It was built to help you START.           │
│       [amber glow + underline on "start"]       │
└─────────────────────────────────────────────────┘
```

### Key Design Decisions

1. **Standard heading format**: Use `forge-subheading--light` + `forge-heading--light` (centered, consistent with all other sections).

2. **Full-bleed image cards**: Each row is a large rounded card (~60vh height on desktop, ~50vh mobile) with the program photo as `background-image`, a dark gradient overlay (`linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%)`), and narrative text positioned at the bottom.

3. **Uniform text style**: All three narrative texts use the same weight (400), same color (`rgba(255,255,255,0.9)`), same size — no bold first row. Text is `clamp(18px, 2.2vw, 24px)` with generous line-height.

4. **Text alignment alternates**: Left-aligned on odd cards, right-aligned on even cards (desktop). Centered on mobile.

5. **Scroll-triggered reveals**: Each card uses `IntersectionObserver` (threshold 0.15) to trigger a fade-up + slight scale animation (from `scale(0.97)` to `scale(1)`) independently. Staggered, cinematic feel.

6. **Closing statement**: Two clear lines — "The Forge was not created to dream." then "It was built to help you start." — with the amber glow and underline on "start" preserved. `clamp(36px, 4.5vw, 64px)` on desktop.

7. **Spacing**: Small gap (24-32px) between image cards. No amber dividers (the images themselves create visual separation).

### Technical Details
- **Single file**: `src/components/forge/WhyBuilt.tsx` — full rewrite
- Reuses `useIsMobile` hook
- Internal `useRowAnimation` hook kept for per-card IntersectionObserver
- Images from existing `/images/programs/` assets
- No new dependencies

