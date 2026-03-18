

## Plan: Rework Community Hero Section

### Changes (single file: `src/components/community/CommunityHero.tsx`)

**1. Remove "The Community" eyebrow text** (line 63)
Delete the `<p className="forge-subheading">The Community</p>` entirely.

**2. Make heading and subtext smaller, push to bottom**
- Change section padding so content sits near the bottom: heavy top padding, minimal bottom padding (e.g. `padding: 'clamp(260px, 35vw, 420px) 24px clamp(40px, 5vw, 60px)'`).
- Reduce heading font size: override with inline style `fontSize: 'clamp(24px, 4vw, 38px)'`, `maxWidth: 560px`.
- Reduce subtext font size to 14px, max-width 440px.
- Align text to bottom-left instead of center (`textAlign: 'left'`).

**3. Remove team/careers photos from the image array**
Replace `/images/careers/group-indoor.jpg` with a program/community group image (e.g. `/images/programs/creators-7.jpg`). This removes the Level Up team photo that belongs on the Careers page only.

Updated `HERO_IMAGES`:
```ts
const HERO_IMAGES = [
  '/images/programs/creators-7.jpg',       // replaces careers/group-indoor.jpg
  '/images/programs/creators-3.jpg',
  '/images/programs/writing-1.jpg',
  '/images/programs/filmmaking-6.jpg',
  '/images/programs/creators-5.jpg',
  '/images/programs/creators-4.jpg',
  '/images/programs/writing-3.jpg',
  '/images/community/community-meetups.png',
];
```

