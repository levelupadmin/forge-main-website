## Plan

### Fix 1: Desktop Nav Pill Spacing

**File: `Navigation.tsx**`

The asymmetry is caused by both link containers using `flex: 1` — they expand to fill equal space, but since the text widths differ (left: "Experiences" + "About" vs right: "Community" + "Careers"), the gap between the last link and the pill edge is uneven.

**Fix:** Remove `flex: 1` from both left and right link `<div>`s. This makes the pill auto-size to its content, with the `padding: '8px 32px'` on the outer container providing equal spacing on both edges. The logo's `padding: '0 24px'` already centers it symmetrically between the two groups.

### Fix 2: Suggested Sections & Polish

After reviewing the current page structure (Hero → HeroBar → WhatIsForge → LearnDoBecome → Experiences → Ethos → Mentors → PeopleOfForge → BrandPartners → Community → GlobalReach → Gallery → Testimonials → Footer), here are recommended additions:

1. **FAQ Accordion** — Before the Footer, a clean accordion answering 5-6 common questions (Who is this for? How long are programs? What's the investment? How do I apply?). Uses the existing Radix accordion component. Reduces friction for prospective students.

### Files to Modify

- `src/components/forge/Navigation.tsx` — remove `flex: 1` from link containers
- `src/components/forge/FAQ.tsx` — new accordion section
- `src/pages/Index.tsx` — add new sections to page