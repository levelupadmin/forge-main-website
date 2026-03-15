

## Fix: Intro Animation Z-Index Above Navbar

The intro overlay and the navbar both use `z-index: 100`, so the navbar renders on top. Simple fix: bump the intro animation's z-index to `150` so it covers the navbar during playback.

### File to Change

| File | Change |
|---|---|
| `src/components/forge/IntroAnimation.tsx` | Change `zIndex: 100` → `zIndex: 150` |

One-line fix.

