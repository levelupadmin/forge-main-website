

## Plan: Fix Community Hero Images

### Problems
1. `creators-hero.jpg` — solo close-up of one person (Anshul). Must be removed.
2. One slide shows a black screen — likely `gallery-hero.png` or `gallery-1.png` (dark/transparent PNG). Must be replaced.

### Changes

**File: `src/components/community/CommunityHero.tsx`** (lines 4-13)

Replace the `HERO_IMAGES` array with these 8 group-friendly images, removing the solo shot and the problematic dark images:

```ts
const HERO_IMAGES = [
  '/images/programs/creators-2.jpg',
  '/images/programs/creators-3.jpg',      // replaces creators-hero.jpg (solo)
  '/images/programs/writing-1.jpg',
  '/images/programs/filmmaking-6.jpg',
  '/images/programs/creators-5.jpg',
  '/images/programs/creators-4.jpg',      // replaces gallery-hero.png (black screen)
  '/images/programs/writing-3.jpg',       // replaces gallery-1.png
  '/images/community/community-meetups.png',
];
```

All replacements use program photos (JPGs) which are reliable and show groups of people in workshop/learning settings. The two gallery PNGs that may have been causing the black screen are removed.

