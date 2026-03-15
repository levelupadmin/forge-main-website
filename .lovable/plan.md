## Plan: Image Updates, Layout Tightening, and Section Fixes

### 1. Replace Impact Numbers Background Images

Update the `stats` array in `ImpactNumbers.tsx` with contextually relevant photos:


| Stat                | Current Image | New Image                            | Rationale                      |
| ------------------- | ------------- | ------------------------------------ | ------------------------------ |
| 600+ Alumni         | gallery-1.png | `/images/programs/creators-hero.jpg` | Group of students/participants |
| 250+ Shortfilms     | gallery-2.png | `/images/programs/filmmaking-5.jpg`  | People shooting films          |
| 85+ Creators Built  | gallery-3.png | `/images/programs/creators-3.jpg`    | Creators in action             |
| 60+ Scripts         | gallery-4.png | `/images/programs/writing-hero.png`  | People writing                 |
| 200+ Collaborations | gallery-5.png | `/images/programs/creators-1.jpg`    | Group/teamwork scene           |


### 2. Compress NotSureCTA Section

In `NotSureCTA.tsx`:

- Reduce `lineSpacing` from `64/120` to `16/24` (mobile/desktop) so the two lines sit close together
- Reduce section padding from `80px/140px` to `48px/64px` (mobile/desktop)
- Reduce gap between lines and CTA buttons from `56px/80px` to `32px/40px`
- Reduce social proof margin from `48px/64px` to `24px/32px`

### 3. Fix Kiruba's Photo Position

In `TransformationStories.tsx`, adjust Kiruba's card image:

- Change `objectPosition` to `center 20%` on Kiruba's photo specifically to shift the image down and show more of his face/upper body

### 4. Uniform Section Gaps Across Homepage

Standardize all section padding to a tighter, consistent value. Target: `clamp(48px, 6vw, 72px)` vertical padding for all sections.  
  
Also go ahead and change the content in the come for the learning stay for the community to   
Make friends for life with like minded dreamers, builders and creators like you. 

Files to update:

- **ImpactNumbers.tsx**: `clamp(80px, 10vw, 140px)` → `clamp(48px, 6vw, 72px)`
- **Ethos.tsx**: `clamp(40px, 6vw, 72px)` → keep (already tight)
- **Community.tsx**: `clamp(72px, 8vw, 120px)` → `clamp(48px, 6vw, 72px)`
- **WhyBuilt.tsx**: `clamp(80px, 10vw, 120px)` → `clamp(48px, 6vw, 72px)`
- **NotSureCTA.tsx**: handled above
- **FAQ.tsx**: `100px` → `clamp(48px, 6vw, 72px)`
- **Gallery.tsx**: `80px` → `clamp(48px, 6vw, 72px)`
- **WhatIsForge.tsx**: already tight, keep as-is

### Files to Change


| File                                             | What                                       |
| ------------------------------------------------ | ------------------------------------------ |
| `src/components/forge/ImpactNumbers.tsx`         | Replace background images, tighten padding |
| `src/components/forge/NotSureCTA.tsx`            | Compress section dramatically              |
| `src/components/forge/TransformationStories.tsx` | Adjust Kiruba's photo objectPosition       |
| `src/components/forge/Community.tsx`             | Reduce top padding                         |
| `src/components/forge/WhyBuilt.tsx`              | Reduce padding                             |
| `src/components/forge/FAQ.tsx`                   | Reduce padding                             |
| `src/components/forge/Gallery.tsx`               | Reduce padding                             |
