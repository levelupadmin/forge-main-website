

## Plan: Fix Navigation Scrolling, Remove Intro Video, Move LearnersFrom to Community

### Problem Summary
1. Clicking "Experiences" or "About" from other pages navigates to homepage but doesn't scroll — the intro animation blocks scrolling for ~5 seconds and `document.body.style.overflow = 'hidden'` prevents it.
2. The "Made at the Forge" intro video plays every time the homepage loads — user wants it removed.
3. The "Join 600+ Dreamers from" logo marquee section should also appear on the Community page, placed after the Stats section.

### Changes

**1. Remove IntroAnimation from homepage (`src/pages/Index.tsx`)**
- Remove the `IntroAnimation` import and `<IntroAnimation />` from the render.
- The scroll-to-hash `useEffect` timeout can be reduced from 500ms to 100ms since there's no intro delay anymore.

**2. Fix Hero visibility (`src/components/forge/Hero.tsx`)**
- The Hero currently waits for a `forge-intro-done` event to become visible (opacity 0 → 1). With the intro removed, it will never appear. Remove the `introComplete` state gating and always render the hero fully visible.

**3. Fix cross-page hash navigation (`src/components/forge/Navigation.tsx`)**
- The current `navigate('/' + link.href)` approach relies on the Index page's `useEffect` to scroll after navigation, but with React Router the hash change may not re-trigger. Ensure the hash scroll works reliably by keeping the current approach but with the reduced timeout (which now works since there's no intro blocking).

**4. Add LearnersFrom to Community page (`src/pages/Community.tsx`)**
- Import `LearnersFrom` from `@/components/forge/LearnersFrom`.
- Place `<LearnersFrom />` after `<CommunityStats />` and before `<CommunityMarquee />`.

### Files Modified
- `src/pages/Index.tsx` — remove IntroAnimation, reduce scroll timeout
- `src/components/forge/Hero.tsx` — remove intro-done gating
- `src/pages/Community.tsx` — add LearnersFrom section

