

## Wider Top-Centered Mobile Nav Pill

### Changes — `src/components/forge/Navigation.tsx`

1. **Move to top**: Change mobile positioning from `bottom: max(24px, env(...))` to `top: max(16px, env(safe-area-inset-top, 16px))`. Update auto-hide transform from `translateY(calc(100% + 40px))` to `translateY(calc(-100% - 40px))` (slides up off-screen instead of down).

2. **Wider rectangular pill**: Change mobile pill padding from `6px 8px 6px 16px` to `6px 8px 6px 16px` with added `width: calc(100vw - 32px)` so it stretches across the screen with 16px margins on each side. Logo stays left, hamburger stays right, with `justifyContent: 'space-between'` instead of gap-based layout.

3. **Keep all existing behavior**: Frosted glass on scroll, auto-hide on scroll down / reveal on scroll up, same transitions and cubic-bezier easing. Full-screen menu overlay unchanged.

