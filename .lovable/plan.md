## Mobile Fixes Plan

Seven targeted fixes across multiple files:

### 1. Hero copy in 2 lines (Hero.tsx)

- On mobile, reduce font size and adjust the `<br />` placement so the headline fits in 2 lines
- Change mobile font-size from `clamp(30px, 7vw, 64px)` to ~`clamp(24px, 6vw, 64px)`and remove the`  
` on mobile so text wraps naturally into 2 lines

### 2. Learners logo row gap reduced by 60% (LearnersFrom.tsx)

- Change `gap-2` (8px) on the flex column to ~`gap-0.5`or inline style`gap: 3px` on mobile
- Also reduce logo height on mobile from `h-20` (80px) to `h-12` (48px) and the row container height from 100 to ~60

### 3. "The Forge was not created to dream / start" in one line (WhyBuilt.tsx)

- Reduce mobile font size from `clamp(20px, 5vw, 28px)` to `clamp(16px, 4.2vw, 28px)` so it fits on one line at 390px

### 4. Experiences toggle pills visible without scrolling (forge.css)

- Remove `overflow-x: auto` on mobile `.experiences-toggle-row`
- Add `flex-wrap: wrap; justify-content: center;`
- Reduce pill padding on mobile from `10px 24px` to `8px 16px` and font-size to 12px so all 3 fit in one row

### 5. Ethos section bottom spacing removed (Ethos.tsx)

- The `minHeight: 600` on mobile creates excess space below content
- Remove `minHeight` on mobile or reduce it significantly, and trim padding

### 6. Globe visible on mobile (TrustedAcrossBorders.tsx)

- Remove the `{!isMobile && <GlobeMap />}` conditional
- Always render `<GlobeMap />`, but scale it down on mobile (e.g., `maxWidth: 280`)

### 7. Career Outcomes cards layout fix (TransformationStories.tsx)

- Mobile cards have `minWidth: 300` which overflows 390px viewport
- Change to `minWidth: 260` or `min-width: calc(85vw)` and reduce photo height from 240 to 180

### 8. Impact Numbers bento layout improvement (ImpactNumbers.tsx)

- Current mobile: 3 equal columns with tiny square cards
- Change to a 2-column layout with varied spans: first 2 cards side by side, 3rd full-width, last 2 side by side
- Increase `minHeight` from 120 to 160 on mobile
- Increase font sizes for numbers and labels  
  
Also remove small horizontal bars dividers across the page

### Files to edit

- `src/components/forge/Hero.tsx` - mobile font size adjustment
- `src/components/forge/LearnersFrom.tsx` - reduce row gap and logo size on mobile
- `src/components/forge/WhyBuilt.tsx` - smaller font for closing statement on mobile
- `src/styles/forge.css` - toggle pills wrap instead of scroll on mobile
- `src/components/forge/Ethos.tsx` - remove minHeight and bottom spacing on mobile
- `src/components/forge/TrustedAcrossBorders.tsx` - show globe on mobile
- `src/components/forge/TransformationStories.tsx` - fix card width overflow
- `src/components/forge/ImpactNumbers.tsx` - better bento layout on mobile