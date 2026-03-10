

## Redesign: "Why It Was Built" Section

### Current State
Plain black background with centered white text — heading, two paragraphs, and a closing statement. No imagery, no visual drama. Reads like a text block, not a manifesto.

### Design Direction: "Cinematic Scroll Manifesto"

Inspired by Framer's dark hero storytelling, Squarespace's editorial mission sections, and Adidas's full-bleed narrative layouts from Refero. The idea: transform this from a text block into a **scroll-driven cinematic reveal** where each line of the manifesto appears as an event, interleaved with imagery.

### Layout

```text
┌─────────────────────────────────────────────────┐
│  [Full black background, radial amber glow]     │
│                                                 │
│           Why It Was Built                      │
│                                                 │
│  ┌─────────────┐   "We were tired of watching   │
│  │  photo-1    │    creative people              │
│  │  (tilted)   │    not create."                 │
│  └─────────────┘                                 │
│                                                 │
│  ───────── thin amber divider ──────────        │
│                                                 │
│    "There were hundreds    ┌─────────────┐      │
│     of courses..."         │  photo-2    │      │
│                            │  (tilted)   │      │
│                            └─────────────┘      │
│                                                 │
│  ───────── thin amber divider ──────────        │
│                                                 │
│  ┌─────────────┐  "We knew the missing          │
│  │  photo-3    │   piece was not more            │
│  │  (tilted)   │   learning..."                  │
│  └─────────────┘                                 │
│                                                 │
│  ───────── thin amber divider ──────────        │
│                                                 │
│         THE FORGE WAS NOT CREATED TO DREAM.     │
│         It was built to help you START.          │
│         [oversized, amber glow behind "start"]  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Key Design Elements

1. **Alternating text + image rows**: Each narrative beat is paired with a small, slightly rotated photo (from existing `/images/programs/` assets — people creating, writing, filming). Text on one side, image on the other, alternating left/right. This breaks the monotony and adds visual proof to the words.

2. **Staggered scroll reveals**: Each row fades up independently as it enters the viewport using `IntersectionObserver` (one observer per row, not the whole section). Creates a choreographed, cinematic feel as you scroll.

3. **Thin amber gradient dividers** between each row — subtle `linear-gradient(90deg, transparent, rgba(255,188,59,0.3), transparent)` lines that separate beats without being heavy.

4. **The closing statement gets dramatic treatment**: Much larger typography (clamp 36-72px), with the word "start" having an animated amber glow/pulse behind it (using a `radial-gradient` pseudo-element that scales up on reveal). This is the emotional climax.

5. **Ambient background**: Subtle radial gradient glow at center (`rgba(255,188,59,0.06)`) that intensifies as you scroll deeper, plus the existing film grain overlay from `FilmGrain` component.

6. **Photos**: Small polaroid-like images (180-220px wide) with slight rotation (random -3deg to 3deg), subtle border (`1px solid rgba(255,255,255,0.08)`), and a faint box-shadow. They float beside the text, not dominating it.

### Mobile Adaptation
- Images stack above each text block (centered, smaller ~140px)
- Text remains centered
- Closing statement scales down but retains the glow effect
- Dividers remain but narrower

### Technical Details
- **Single file change**: `src/components/forge/WhyBuilt.tsx` — full rewrite
- Uses existing hooks: `useScrollAnimation`, `useIsMobile`
- Creates multiple `IntersectionObserver` instances (one per row) for independent reveals
- Images sourced from existing `/images/programs/` directory (e.g., `writing-1.jpg`, `filmmaking-5.jpg`, `creators-1.jpg`)
- CSS keyframe for the amber glow pulse on "start" added inline
- No new dependencies required

