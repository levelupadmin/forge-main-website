## Mobbin-Style Logo + Text Marquee for "Our Students Are From"

Redesign the LearnersFrom section to match the Mobbin reference: each item shows the company **logo icon + company name text** side by side, rendered large and bold in black, scrolling in an infinite marquee across 3 rows.

### Changes — `src/components/forge/LearnersFrom.tsx`

1. **Logo + Text layout**: Each marquee item becomes a flex row with the logo image (40-48px height) and the company name in bold, large text (~28px desktop, ~20px mobile) next to it, separated by a small gap. Text is black, semi-bold (600-700 weight).
2. **Styling updates**:
  - Remove `grayscale` and low `opacity` from logos — show them in full color at ~40-48px height
  - Company name text: `fontSize: 28px` (desktop) / `20px` (mobile), `fontWeight: 700`, `color: '#1a1a1a'`
  - Generous horizontal spacing between items (`gap: 48-64px`)
  - Keep white background, keep existing marquee animation classes
3. **Keep**: Scroll animation, section header, marquee duplication logic, mobile responsiveness.

Single file change, no new dependencies.