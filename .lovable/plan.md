

## Navigation: Scroll Opacity + Hover Dim Effect

Two subtle behaviors to add to the desktop nav:

### 1. Scroll: Reduce nav opacity
- Track scroll position with `useEffect` + scroll listener
- When `scrollY > 50`, reduce the nav pill's opacity (e.g. from 1.0 to ~0.5)
- When user stops scrolling or scrolls back near top, restore full opacity
- Smooth CSS transition on opacity (~300ms)

### 2. Hover: Dim sibling links
- Track which link is hovered via state (`hoveredIndex`)
- When a link is hovered, reduce opacity of all OTHER links to ~0.4
- The hovered link stays at full opacity
- On mouse leave from the nav container, restore all links to full opacity
- Smooth CSS transition on each link's opacity (~200ms)

### Files to change
**`src/components/forge/Navigation.tsx`**
- Add `useEffect` with scroll listener tracking `scrollY`, set a `scrolled` state when past threshold
- Apply `opacity` and `transition` to the nav pill container based on `scrolled`
- Add `hoveredIndex` state, `onMouseEnter`/`onMouseLeave` on each link button
- Apply conditional opacity to each link: full if hovered or none hovered, dimmed otherwise
- Mobile nav unchanged

