

## Plan: Careers Page Visual Improvements

### 1. Hero Photo Layout: Semi-Circle Arc (Bottom Only)

Remove the 4 floating photo placeholders above the headline (top-left, top-right, and the two top-center ones). Reposition the remaining photos into a **U-shaped arc** (open at the top) wrapping around the bottom half of the hero, framing the headline and CTA from the sides and below.

**File:** `src/components/careers/CareersHero.tsx`

New `floatingPhotos` array repositioned:
- 3 photos on the left side (from ~35% to ~80% vertical)
- 3 photos on the right side (mirrored)
- 3 photos along the bottom center
- Total: ~9 photos forming a U/semi-circle shape
- Remove all entries with `top` values below 20% (the ones currently at 3-12% top and 35% left/30% right that sit above the headline)
- Mobile: keep 4-5 smaller photos only on the sides and bottom

### 2. Visual Enhancements for Conversion

**A. "Why The Forge" section (HonestCase.tsx)** — Add a subtle counter/number badge to each card that's larger and more prominent (like a watermark number behind the content, similar to how WhoBelongsHere does ghost numbers). This creates visual depth and consistency across sections.

**B. Open Roles section (OpenRoles.tsx)** — Add a pulsing green dot next to the "Open Now" badge on each role row to signal active hiring urgency. Also add a small role count header like "5 roles open right now" above the role list to create urgency.

**C. Closing CTA section (ClosingCTA.tsx)** — The current padding (80px) creates a lot of dead space between "How We Hire" and the CTA. Tighten it. Also add a subtle animated border/glow effect on the "See Open Roles" button to draw attention.

**D. Voice of Team cards (VoiceOfTeam.tsx)** — Add quotation mark styling (a large decorative open-quote) at the top of each testimonial card in yellow (#FFBC3B) to make them feel more like real testimonials.

**E. Marquee Strip (MarqueeStrip.tsx)** — The stat numbers that are highlighted should use the `forge-gradient-text` class instead of flat `#FFBC3B` to match the hero gradient branding.

### Files to Change

| File | Changes |
|---|---|
| `src/components/careers/CareersHero.tsx` | Reposition photos into bottom semi-circle arc, remove top photos |
| `src/components/careers/OpenRoles.tsx` | Add pulsing green dot to "Open Now" badges, add role count line |
| `src/components/careers/ClosingCTA.tsx` | Reduce top padding, add subtle glow on primary CTA button |
| `src/components/careers/VoiceOfTeam.tsx` | Add decorative quote mark to each testimonial card |
| `src/components/careers/MarqueeStrip.tsx` | Apply gradient class to highlighted stat numbers |

### Hero Semi-Circle Detail

```text
        ┌─────────────────────────────┐
        │                             │
        │     Build a Dream that      │
        │       outlasts you          │
        │                             │
        │     [subtext paragraph]     │
        │                             │
        │      [Join the Dream]       │
        │                             │
   ┌──┐ │                         ┌──┐│
   │📷│ │                         │📷││
   └──┘ │                         └──┘│
   ┌──┐ │                         ┌──┐│
   │📷│ │                         │📷││
   └──┘ │                         └──┘│
        │  ┌──┐    ┌──┐    ┌──┐       │
        │  │📷│    │📷│    │📷│       │
        │  └──┘    └──┘    └──┘       │
        └─────────────────────────────┘
```

Photos positioned only from ~40% downward vertically, creating a cradle effect around the CTA and below. The top of the viewport stays clean with just the headline.

