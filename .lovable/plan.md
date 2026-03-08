

# Learn → Do → Become: Vertical Narrative Redesign

Replace the bland "science behind the Forge" header and plain list with a **vertical storytelling timeline** that feels like a journey downward.

## Design

### Header
- Kill "the science behind / the Forge". Replace with a single large line: **"learn. do. become."** in bold, spaced-out lowercase — clean and confident.

### Vertical Timeline
- A thin golden line (`#FFBC3B`) runs down the center, drawing itself via `stroke-dashoffset` on scroll entry.
- Three stops along the line, each with:
  - A small golden dot/node on the line
  - The step word large and bold on one side
  - The description paragraph on the other side
  - Steps alternate left/right (desktop), all left-aligned on mobile
- Each step staggers in with `forge-fade-up` as the line reaches it

### Narrative Enhancement
- Add a short italic lead-in phrase above each description to create flow:
  1. **learn** — *"Every master was once a student."* + existing text
  2. **do** — *"Knowledge without action is just theory."* + existing text  
  3. **become** — *"This is where you transform."* + existing text

### Mobile
- Line runs down the left edge, all content right-aligned to it
- Same staggered animation, tighter spacing

## Technical
- Single file edit: `src/components/forge/LearnDoBecome.tsx`
- SVG line with `stroke-dashoffset` transition (same pattern as Ethos)
- Existing `useScrollAnimation` hook + `forge-fade-up` class
- No new dependencies

