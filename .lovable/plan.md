

## Plan: Update "Trusted Across Borders" Globe

### Changes

**1. Add India to highlighted countries**
- Add `'India'` to the `HIGHLIGHTED_COUNTRIES` array
- Add an India presence marker to `PRESENCE_MARKERS`
- Add India to the `COUNTRY_GRID`

**2. Replace react-simple-maps globe with 3D Three.js globe**

Replace the current flat `ComposableMap` (orthographic SVG) with a proper 3D rotating globe using `@react-three/fiber` + `@react-three/drei`, matching the style already used in `GlobalReach.tsx`:

- Use the existing earth texture (`/textures/earth.jpg`) on a sphere with low opacity for a subtle, premium look
- Add a wireframe overlay for depth
- Place amber/red dot markers on highlighted countries using `latLngToVector3` conversion
- Add pulsing glow rings on key presence locations (Germany, Poland, India)
- Slow auto-rotation
- Globe initially rotated to show Europe + India together (roughly longitude 50, showing both regions)
- Dark background behind the globe area (contained, not full section) or keep white with the globe having its own contrast

**3. Adjust globe rotation to show both Europe and India**
- Set initial Y rotation to center around longitude ~50 so both Europe and the Indian subcontinent are visible on the globe simultaneously

**4. Keep existing metric cards, heading, and country grid unchanged**
- Only the `GlobeMap` component gets replaced with a new `Globe3D` component using Three.js Canvas

### Technical approach
- Reuse the `latLngToVector3`, `CountryMarkers`, and `GlowRings` patterns from `GlobalReach.tsx`
- The globe container will have a dark background (`#111`) with rounded corners to contrast against the white section
- Existing dependencies (`three`, `@react-three/fiber`, `@react-three/drei`) are already installed

