

## Plan: Rotating Hero Background Images with Crossfade

### What changes
Update `CommunityHero.tsx` to cycle through 8 background images with a smooth crossfade transition every 3 seconds. Reduce the overlay opacity from 0.7 to 0.55 so images are more visible.

### Image selection (8 images from existing assets)
1. `/images/careers/big-group-beach.jpg`
2. `/images/careers/team-outdoor.jpg`
3. `/images/careers/beach-vibes.jpg`
4. `/images/careers/huddle.jpg`
5. `/images/careers/team-selfie.jpg`
6. `/images/programs/creators-2.jpg`
7. `/images/programs/filmmaking-6.jpg`
8. `/images/programs/writing-1.jpg`

### Implementation

**`src/components/community/CommunityHero.tsx`**

- Add `useState` + `useEffect` to cycle `activeIndex` every 3 seconds
- Render all 8 images as absolutely positioned divs stacked at z-index 0
- Each image div gets `opacity: 1` when active, `opacity: 0` when inactive, with `transition: opacity 1.5s ease-in-out`
- Reduce dark overlay from `rgba(0,0,0,0.7)` to `rgba(0,0,0,0.55)` for more image visibility
- No other files changed; no CSS file changes needed

### Technical detail

```text
┌─────────────────────────────┐
│  img[0]  opacity: 1 or 0   │  ← all stacked, absolute
│  img[1]  opacity: 1 or 0   │
│  ...                        │
│  img[7]  opacity: 1 or 0   │
│  dark overlay (z:1)         │
│  text content (z:2)         │
└─────────────────────────────┘
```

Each image transitions over 1.5s. The interval fires every 3s, giving a gentle crossfade effect.

