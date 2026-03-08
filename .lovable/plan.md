

## Mobile Overhaul Plan

Eight issues to fix across the homepage mobile experience:

### 1. Mobile Navigation -- Pill Format
**File: `Navigation.tsx` + `forge.css`**
- Replace the hamburger menu with a compact white pill on mobile: Forge logo centered, with a small hamburger icon on the right that opens the full-screen menu
- The pill sits fixed at top center, matching the desktop aesthetic but smaller (logo height ~36px, tighter padding)
- CSS: remove `display: none` on `.forge-desktop-nav` for mobile; instead show a separate `.forge-mobile-pill` element

### 2. Hero Text -- Force Two Lines
**File: `Hero.tsx`**
- Change `fontSize: 'clamp(44px, 6vw, 80px)'` to `clamp(36px, 9vw, 80px)` so "Where Dreamers" and "Become Doers." stay on exactly two lines on mobile (the `<br />` already exists)
- The current 44px minimum is too large for 375px screens, causing a third line

### 3. "What is the Forge" -- 3 Photos Behind Quote on Mobile
**File: `WhatIsForge.tsx`**
- On mobile (`useIsMobile`), only show 3 photos instead of 5 in the photo strip
- Keep the overlay quote "Every next level of your life..." on top with the same radial gradient mask
- This prevents the cramped 5-photo layout

### 4. People of the Forge -- 6 People in 3x2 Grid
**File: `PeopleOfForge.tsx`**
- Replace the horizontal scroll on mobile with a 3-column, 2-row grid showing 6 people (`people.slice(0, 6)`)
- Remove the Polaroid/box border styling on mobile -- just show circular or borderless photos at a larger size (~100px)
- Remove rotation on mobile for cleaner alignment
- Keep name + designation below each photo

### 5. Brand Partners -- Horizontal Category Tabs + Stacked Content
**File: `BrandPartners.tsx`**
- On mobile, replace the 3-column layout with:
  - Horizontal scrollable row of category pill buttons (Cinema Cameras | Creator Tech | Publishing | Scripting)
  - Below: full-width partner image
  - Below image: logo, description, and discount badge stacked vertically
- Use `useIsMobile()` to conditionally render the mobile layout

### 6. Gap Between Community and "Backed by the Best"
**File: `Community.tsx` or `BrandPartners.tsx`**
- Reduce bottom padding on the Community section and top padding on BrandPartners for mobile to tighten the gap

### 7. Global Reach -- Mobile Fix
**File: `GlobalReach.tsx`**
- On mobile, change the locations grid from `repeat(4, 1fr)` to `repeat(2, 1fr)` so country names don't overflow
- Reduce `minHeight` from 700 to ~500 on mobile
- Keep the 3D globe but reduce its visual weight

### 8. Footer Logo -- Visible on Black Background
**File: `Footer.tsx`**
- The logo uses `filter: 'brightness(0) invert(1)'` which should make it white on black. If it's showing as a white box, increase the logo `height` from 56 to ~72px and add `display: 'block'` to ensure it renders properly
- On mobile, center-align the brand column content

### Bonus: Section Suggestion
The user asked if any sections should be added. A good addition would be an **FAQ / "How It Works"** accordion section before the footer -- answering common questions like "Who is this for?", "How long are the programs?", "What do I get?", "How do I apply?". This gives visitors a final push toward conversion. Will note this as a suggestion but not implement it in this round.

### Files Modified
1. `src/components/forge/Navigation.tsx` -- mobile pill nav
2. `src/components/forge/Hero.tsx` -- font size clamp fix
3. `src/components/forge/WhatIsForge.tsx` -- 3 photos on mobile
4. `src/components/forge/PeopleOfForge.tsx` -- 3x2 grid, no box
5. `src/components/forge/BrandPartners.tsx` -- horizontal tabs + stacked
6. `src/components/forge/Community.tsx` -- reduce gap
7. `src/components/forge/GlobalReach.tsx` -- 2-col locations, smaller height
8. `src/components/forge/Footer.tsx` -- logo fix + mobile centering
9. `src/styles/forge.css` -- mobile pill nav styles

