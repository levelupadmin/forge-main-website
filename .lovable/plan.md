

# New Section: 3D Globe with Impact Stats

Create a new "Trusted Worldwide" / global reach section inspired by the reference image, featuring a slowly rotating 3D globe centered on India with stat cards overlaid.

## Design (Matching Reference)

- **Light background** (`#FCF7EF` cream) section
- **Bold headline**: "Trusted across borders" — large, left-aligned
- **4 stat cards** in a horizontal row above the globe: frosted glass/white cards with uppercase label, icon, and large number with colored "+" suffix
  - "FOUNDED IN" — 2019
  - "DREAMERS" — 600+
  - "EDITIONS" — 25+
  - "CITIES EXPLORED" — 10+
- **3D Globe** behind/below the cards, centered on India (~20.5°N, 78.9°E), rotating very slowly
- **Bottom panel**: "We are worldwide" with a grid of country/city names

## Technical

### New dependencies needed
- `three@^0.160.0`
- `@react-three/fiber@^8.18.0`
- `@react-three/drei@^9.122.0`

### New file: `src/components/forge/GlobalReach.tsx`
- Uses `<Canvas>` from R3F with a `<Sphere>` geometry for the globe
- Globe texture: use a free world map texture (or generate a simplified one with `drei`'s `useTexture`)
- Alternatively, use `drei`'s `<Globe>` or a custom mesh with a publicly available earth texture image placed in `public/`
- Rotation: `useFrame` with very slow `rotation.y += 0.001` per frame
- Initial rotation set so India faces the camera
- Stat cards and text are regular HTML elements positioned over/around the canvas using CSS
- The Canvas sits in a container with `position: relative`, cards use `position: relative` with `z-index` above
- Count-up animation on numbers using existing `useCountUp` hook
- Scroll-triggered visibility via existing `useScrollAnimation` hook

### Globe approach
- Use a simple sphere with an earth texture (natural earth / blue marble style in grayscale to match the light, muted aesthetic of the reference)
- Download or reference a free earth texture, copy to `public/textures/earth.jpg`
- Apply as a `<meshStandardMaterial map={texture} />` with reduced opacity/saturation to keep it subtle
- Ambient + directional light for soft illumination

### Layout structure
```text
┌─────────────────────────────────────┐
│ "Trusted across borders"            │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐        │
│ │2019│ │600+│ │ 25+│ │ 10+│        │
│ └────┘ └────┘ └────┘ └────┘        │
│         ┌──────────────┐            │
│         │  3D Globe     │           │
│         │  (India center)│          │
│         └──────────────┘            │
│ "We are worldwide"                  │
│  India · Dubai · Bali · ...         │
└─────────────────────────────────────┘
```

### Index.tsx
- Import `GlobalReach` and place it after `ImpactNumbers` (or replace it — will ask)

### Styling
- All inline styles + custom CSS classes in `forge.css` (no Tailwind per project rules)
- Cards: white background, subtle shadow, rounded corners, uppercase small label, large bold number

