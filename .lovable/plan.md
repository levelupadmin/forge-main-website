## Impact Numbers — Bento Grid Cards Redesign

### Design

- **Black background** section with heading "Good Vibes. Greater Impact."
- **Bento grid layout** with 5 stat cards of varying sizes:
  - **600+ Alumni** and **250+ Shortfilms** — large cards (span 1 column each, taller)
  - **85+ Creators Built** — wide card (spans 2 columns)
  - **60+ Scripts** and **200+ Collaborations** — standard cards
- Each card: dark charcoal (`#1A1A1A`) background, subtle golden border on hover (`rgba(255,188,59,0.35)`), rounded corners (16px)
- Numbers in large amber (`#FFBC3B`), labels in muted white, count-up animation on scroll
- Cards use `forge-card-glow` hover effect (already in CSS) for lift + golden glow
- Staggered `forge-fade-up` entry animations  
Images behind each bento card

### Layout (Desktop)

```text
┌──────────┬──────────┬────────────────────┐
│  600+    │  250+    │      85+           │
│  Alumni  │ Shortfilms│  Creators Built   │
├──────────┴──────────┼─────────┬──────────┤
│        60+          │       200+         │
│       Scripts       │  Collaborations    │
└─────────────────────┴────────────────────┘
```

### Mobile

- Single column stack, all cards full-width

### Integration

- Rewrite `src/components/forge/ImpactNumbers.tsx` with bento grid
- Add `<ImpactNumbers />` to `Index.tsx` after `<LearnersFrom />`

### Technical

- Reuse existing `useScrollAnimation`, `useCountUp`, `useIsMobile` hooks
- Reuse `forge-card-glow` and `forge-fade-up` CSS classes
- CSS Grid with `grid-template-columns` and `grid-column: span X` for asymmetric layout