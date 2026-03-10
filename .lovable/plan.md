

## Auto-Hide Mobile Nav on Scroll Down, Reveal on Scroll Up

### What it does
The bottom mobile nav pill will slide off-screen when scrolling down (maximizing content area) and smoothly slide back up when scrolling up. Combined with the frosted glass effect. Desktop nav is unchanged.

### Changes — `src/components/forge/Navigation.tsx`

1. **Add state**: `navVisible` (boolean, default `true`) and `lastScrollY` ref to track scroll direction
2. **Update scroll handler** (mobile only):
   - Compare current `scrollY` to `lastScrollY` — if scrolling down and past 100px, set `navVisible = false`; if scrolling up, set `navVisible = true`
   - Keep existing `scrolled` logic for frosted glass
3. **Apply transform on mobile `<nav>`**: When `navVisible` is false, translate the pill down off-screen (`translateY(calc(100% + 40px))`). Use `transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)` for a premium spring-like slide
4. **Keep frosted glass**: The existing `scrolled` ternary on the mobile pill stays as-is

Single file change, ~15 lines of new logic.

