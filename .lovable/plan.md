

## Experiences Section Redesign: Horizontal Bento with Toggle Tabs

Redesign the Experiences section to match the reference — a full-width horizontal bento card per program, with a vertical photo carousel on the left and program info on the right, navigated via toggle buttons under the heading.

### Layout

```text
┌─────────────────────────────────────────────────┐
│         Explore                                  │
│     The Forge Experiences                        │
│  [Make Films] [Create Content] [Write Stories]   │  ← toggle pills
│                                                  │
│  ┌──────────────────────────────────────────┐    │
│  │  ┌────────────┐   TAG                    │    │
│  │  │            │   Title                  │    │
│  │  │  Photo     │   Description            │    │
│  │  │  Carousel  │   Highlights / badges    │    │
│  │  │            │   Next Edition badge     │    │
│  │  │  (dots)    │   [Request Invite →]     │    │
│  │  └────────────┘                          │    │
│  └──────────────────────────────────────────┘    │
│              ← prev    • • •    next →            │
└─────────────────────────────────────────────────┘
```

### Changes

**`src/data/programs.ts`**
- Add `tabLabel` field to each program (e.g. "Make Films", "Create Content", "Write Stories")
- Add `highlights` array of strings per program (bullet points like "Full pipeline — screenwriting, directing...", matching the reference style)
- Add `duration` and `format` metadata strings (e.g. "15 Days", "Residential", "Application-Only")

**`src/components/forge/Experiences.tsx`** — Full rewrite:
- **State**: `activeProgram` index (default 0), `currentPhoto` index for the active program's photo carousel
- **Toggle pills**: Row of pill buttons under heading, one per program using `tabLabel`. Active pill gets filled orange style, others outlined
- **Horizontal bento card**: Dark background (#1A1A1A), rounded corners, two-column grid layout (~45% photo, ~55% content)
  - **Left**: Photo carousel with crossfade transitions using existing photos, dot indicators below
  - **Right**: Tag (orange uppercase), title (large white bold), description (grey text), metadata badges row (duration, format, etc.), highlights with orange checkmarks, "Request Invite →" CTA button
- **Prev/Next arrows**: Left and right of the bento card to switch between programs (update `activeProgram`)
- **Bottom dots**: Indicate which program is active
- **Mobile**: Stack vertically — photo carousel on top, content below. Toggle pills become horizontally scrollable. Prev/next arrows hidden, swipe or dots to navigate

### On mobile
- Toggle pills scroll horizontally
- Bento card stacks vertically (photo on top, info below)
- Left/right arrows hidden, use dots or toggle pills to switch programs

