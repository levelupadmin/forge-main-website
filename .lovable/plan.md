

## Plan: Replace Career Photos with Community/Program Images in Hero

### Problem
The current Community Hero rotates through career/office photos (employees, office activities). These don't belong on the community page -- those are learners and community members, not staff.

### Image Selection
Replace all `/images/careers/` photos with community and program images. These show learners, workshops, and community activities:

1. `/images/programs/creators-2.jpg`
2. `/images/programs/creators-hero.jpg`
3. `/images/programs/writing-1.jpg`
4. `/images/programs/filmmaking-6.jpg`
5. `/images/programs/creators-5.jpg`
6. `/images/gallery/gallery-hero.png`
7. `/images/gallery/gallery-1.png`
8. `/images/community/community-meetups.png`

### File Change
**`src/components/community/CommunityHero.tsx`** (lines 4-13) -- Replace the `HERO_IMAGES` array with the 8 community/program/gallery images listed above. No other changes needed.

