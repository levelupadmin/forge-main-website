

## Plan: Add "Powered By" Section + Move "LearnersFrom" Down

### Changes

**1. New component: `src/components/forge/PoweredBy.tsx`**
- White background section, placed directly after `HeroBar`
- Heading: "POWERED BY" in uppercase, black, large font weight
- Five partner logos displayed in a single centered row (or wrapped on mobile): Sony, Digitek, Sandcastles, Indie Press, Westland Books
- Logos rendered at large size (~60-80px height) using existing files: `sony-logo.png`, `digitek-logo.png`, `sandcastles-logo.png`, `indiepress-logo.png`, `westland-logo.png`
- All logos rendered in grayscale via CSS `filter: grayscale(100%)`
- Static layout, no scrolling/marquee
- Scroll-triggered fade-in using `useScrollAnimation`

**2. Update `src/pages/Index.tsx`**
- Import `PoweredBy` and place it right after `HeroBar` (before `WhatIsForge`)
- Move `LearnersFrom` from its current position (after HeroBar) to after `Community`

### New section order (relevant portion):
```
Hero → HeroBar → PoweredBy (NEW) → WhatIsForge → ... → Community → LearnersFrom (MOVED) → TransformationStories → ...
```

