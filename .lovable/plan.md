

## Fix: Only reduce background opacity on scroll, not text/logo

Currently the entire nav container has `opacity: scrolled ? 0.5 : 1`, which dims everything including text and logo.

### Change in `src/components/forge/Navigation.tsx`
- Remove `opacity` from the container's inline style
- Change `background` from `'white'` to use `rgba(255,255,255, scrolled ? 0.5 : 1)` so only the white background fades
- Similarly transition the `boxShadow` opacity when scrolled
- Add `transition: 'background 0.3s ease, box-shadow 0.3s ease'`

This way the pill background becomes semi-transparent on scroll while text and logo stay fully opaque.

