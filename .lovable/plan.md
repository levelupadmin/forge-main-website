

## Fix: Nav Bar Visibility on White Backgrounds

The issue: when scrolled, the nav pill uses `rgba(255,255,255,0.15)` background with white text and white logo. Over white sections, everything disappears.

### Solution

Add a subtle **border** and **shadow** to the scrolled nav pill so it remains visible regardless of background color. Also slightly increase the background opacity when scrolled.

### Change in `src/components/forge/Navigation.tsx` (desktop pill, ~line 91-96)

- Change scrolled background from `rgba(255,255,255,0.15)` to `rgba(255,255,255,0.75)` — more opaque frosted glass that works on both dark and light backgrounds
- Change scrolled text color from `#fff` to `#222` (dark) since the pill is now more opaque/white
- Remove the `filter: invert` on the logo when scrolled (logo stays dark)
- Keep `backdropFilter: blur(20px)` for the frosted effect
- Change scrolled `boxShadow` to `0 2px 16px rgba(0,0,0,0.08)` for a subtle but visible shadow on light backgrounds

This keeps the frosted glass aesthetic while ensuring visibility on all backgrounds — the pill will look like a slightly translucent white blur over any content.

