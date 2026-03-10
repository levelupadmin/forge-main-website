

## Bottom-Anchored Mobile Nav Pill

Move the mobile navigation pill from the top to the bottom of the viewport for easier thumb access on phones.

### Changes — `src/components/forge/Navigation.tsx`

1. **Position**: Change `top: 16` to `bottom: 24` for the mobile nav `<nav>` element (remove `top` on mobile)
2. **Frosted glass on scroll**: Apply the same `scrolled` ternary used on desktop — `rgba(255,255,255,0.75)` + `backdrop-filter: blur(20px)` when scrolled, solid white otherwise
3. **Transition**: Add `transition: all 0.3s ease` to the mobile pill for smooth state changes
4. **Safe area**: Add `paddingBottom` consideration for devices with home indicators (env(safe-area-inset-bottom))

No changes to the full-screen mobile menu overlay, desktop nav, or any other components.

