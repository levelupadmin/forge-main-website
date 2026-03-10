

## "Why the Forge Was Built" Section

### Design Approach (informed by Refero references)

Inspired by Matter's manifesto-style "About" page and Kickstarter's bold mission statement blocks, the section will use a **stacked typographic narrative** on a dark (#222222) background with white text. Each paragraph appears as its own block, staggered with scroll-triggered fade-in. The opening line ("We were tired of watching creative people not create.") will be oversized and bold, acting as the emotional hook. The closing line will use a yellow (#FFBC3B) underline highlight on "start", mirroring the existing highlight style used in WhatIsForge.

### Layout

```text
┌──────────────────────────────────────────┐
│  Dark background (#222222)               │
│                                          │
│  [amber subheading] WHY IT WAS BUILT     │
│                                          │
│  "We were tired of watching              │
│   creative people not create."           │
│   (large, bold, ~clamp(28px,5vw,48px))   │
│                                          │
│  ── thin amber divider ──                │
│                                          │
│  Paragraph 2 (medium weight, ~20px)      │
│  "There were hundreds of courses..."     │
│                                          │
│  Paragraph 3 (medium weight)             │
│  "We knew the missing piece..."          │
│                                          │
│  ── thin amber divider ──                │
│                                          │
│  Closing line (bold, larger)             │
│  "...It was built to help you start."    │
│   ("start" has yellow underline highlight)│
│                                          │
└──────────────────────────────────────────┘
```

### Technical Plan

1. **Create `src/components/forge/WhyBuilt.tsx`**
   - Dark section with `#222222` background, white text, center-aligned
   - Amber subheading: "WHY IT WAS BUILT" (using `forge-subheading--light`)
   - Four text blocks with the provided copy, each wrapped in `forge-fade-up` with staggered `transitionDelay`
   - Opening line rendered at hero-like size; middle paragraphs at a comfortable reading size (~20px); closing line bold and slightly larger
   - Thin amber dividers (48px wide, 2px tall, `#FFBC3B`) between the opener and body, and between body and closer
   - The word "start" in the final line gets the yellow underline highlight treatment (same as "different you" in WhatIsForge)
   - Uses `useScrollAnimation` and `useIsMobile` hooks for consistency

2. **Add to `src/pages/Index.tsx`**
   - Place `<WhyBuilt />` after `<LearnersFrom />` and before `<WhatIsForge />`, so the narrative flows: who learns here, why it was built, what it is

### Copy (verbatim, with typo fix: "ove" to "over")

- **Opening:** "We were tired of watching creative people not create."
- **Para 2:** "There were hundreds of courses. There was knowledge all over the internet. But they went back to their lives, back to the routine, and nothing changed."
- **Para 3:** "We knew the missing piece was not more learning. It was a place designed to create, with the right people around you, where not creating was simply not an option."
- **Closing:** "The Forge was not created to dream. It was built to help you **start**."

