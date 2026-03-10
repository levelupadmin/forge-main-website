

## Nav Bar: Frosted Glass Effect on Scroll

The reference image shows a Metalab-style frosted glass navigation bar — semi-transparent background with a `backdrop-filter: blur()` effect, making the content behind it visible but blurred.

### Change in `src/components/forge/Navigation.tsx`

Update the desktop nav pill container styles (line ~91-98):

- **When scrolled**: `background: 'rgba(255,255,255,0.15)'`, `backdropFilter: 'blur(20px)'`, `WebkitBackdropFilter: 'blur(20px)'` — gives the frosted glass look
- **When not scrolled**: Keep current solid white `rgba(255,255,255,1)` with no blur
- **Text color**: Switch to white (`color: '#fff'`) when scrolled since the background becomes transparent/dark-ish over content
- Add `transition: 'all 0.3s ease'` for smooth transition between states
- Reduce `boxShadow` when scrolled to `0 4px 24px rgba(0,0,0,0.05)` or `0 2px 12px rgba(255,255,255,0.1)` for a subtle glow

This keeps the nav solid white at the top and transitions to a frosted glass pill when scrolling, matching the Metalab reference.

