

## Replace SVG Wave Icons with Logo Wave Asset

The uploaded image contains the Forge logo with three gradient waves (amber to light yellow). These waves should replace the hand-coded SVG wave icons used across the site.

### Where waves currently exist (to be replaced)

1. **`src/components/forge/WhatIsForge.tsx`** (line 74-86) — 4-wave SVG icon next to "the Forge?" heading
2. **`src/components/forge/LearnDoBecome.tsx`** (lines 4-17) — `WaveIcon` component used:
   - Next to "the Forge" heading (line 62)
   - Inside each Learn/Do/Become card (line 108)

### Plan

1. **Copy the uploaded logo** to `public/images/forge-waves.png`
2. **Create a reusable `ForgeWaves` component** (or just use an `<img>` tag) that renders the wave portion of the logo. Since the uploaded image includes the full logo with text, we'll crop visually by using CSS `object-fit`/`object-position` or simply use the image as-is at small sizes where the white text won't show on light backgrounds (but will on dark).

   Actually, the logo text is white — on the dark cards in LearnDoBecome it would show. Better approach: **extract just the waves portion** by using the image and sizing it so only the left wave part is visible, or just use the full image at appropriate sizes where it works as a decorative element.

   Simplest reliable approach: Use the full logo image as the wave icon, since:
   - In LearnDoBecome: dark background → white text will show (not ideal)
   - In WhatIsForge: cream background → white text invisible (works)

   **Best approach**: Save the image and use it, but constrain the `<img>` to show primarily the waves. We can use `overflow: hidden` with a container that clips the right portion. Or we simply use the image at a small height where the text detail becomes negligible.

   Given the uploaded image has waves on the left ~40% and text on the right ~60%, we can use a container with `overflow: hidden` and a narrower width to crop to just the waves.

### Implementation

1. Copy `user-uploads://forge_logo_with_lines-2.png` → `public/images/forge-waves.png`

2. **`src/components/forge/WhatIsForge.tsx`**: Replace the SVG (lines 74-86) with an `<img>` of the waves, sized to match (~40-60px wide), using overflow hidden to crop to just the wave portion.

3. **`src/components/forge/LearnDoBecome.tsx`**: Replace the `WaveIcon` SVG component with an `<img>` tag using the same wave asset, sized appropriately for each usage (heading icon ~40px, card icons ~32px).

