

## Learn from the Best — Interactive Carousel Redesign

### Concept

A cinematic horizontal carousel on a white background. The active mentor is enlarged center-stage with their full-size portrait, name, designation, and credential badges. Adjacent mentors peek from the sides at reduced scale and opacity, creating depth. Clicking or using arrow buttons transitions smoothly between mentors.

### Visual Design

```text
┌─────────────────────────────────────────────────────────────┐
│                     Learn from                              │
│                      the best                               │
│     "Every mentor is a practitioner, not a professor."      │
│                                                             │
│  ┌──────┐      ┌────────────────────┐        ┌──────┐      │
│  │      │      │                    │        │      │      │
│  │ prev │      │   ACTIVE MENTOR    │        │ next │      │
│  │ faded│      │   (large photo)    │        │ faded│      │
│  │ small│      │                    │        │ small│      │
│  │      │      │                    │        │      │      │
│  └──────┘      │  ┌──────────────┐  │        └──────┘      │
│                │  │ Name         │  │                       │
│    ◄           │  │ Designation  │  │          ►            │
│                │  │ 🏆 Badge 🏆  │  │                       │
│                │  └──────────────┘  │                       │
│                └────────────────────┘                       │
│                                                             │
│              ● ● ● ○ ● ●  (dot indicators)                 │
└─────────────────────────────────────────────────────────────┘
```

### Data Changes (`src/data/mentors.ts`)

- Add `credentials` field (array of strings) to the `Mentor` interface — e.g. `["Emmy Winner", "50+ Films", "NYT Bestseller"]`
- Add credential data for each mentor

### Component Changes (`src/components/forge/Mentors.tsx`)

- **White background** section with dark text
- **State-driven carousel**: `activeIndex` state, with prev/next navigation
- **Active card**: Large photo (~400px tall), big name, designation, and golden credential badges below
- **Side cards**: Scaled down (0.7), reduced opacity (0.5), partially visible, clickable to select
- **Smooth CSS transitions**: `transform`, `opacity`, and `scale` with 0.5s ease on all cards
- **Navigation**: Left/right arrow buttons styled minimally, plus dot indicators at the bottom
- **Photo treatment**: Large rounded rectangle with subtle shadow for the active mentor; the photo fills the frame elegantly
- **Credential badges**: Small pill-shaped tags with a subtle gold/amber accent (`#FFBC3B` border or background)
- **No external libraries** — pure CSS transitions and React state

### Interactions

- Click side mentor or arrows to navigate
- Active mentor transitions with scale + fade animation
- Cards slide horizontally using CSS `translateX` based on `activeIndex`

