

## Fix: Colorful Branded Logo Boxes

The logos appear black because the actual PNG files are likely monochrome/dark, and the boxes have a plain `#f5f5f5` background. The reference screenshot shows each logo in a **brand-colored rounded square** (like app icons) — e.g., Netflix has a black box with a red "N", Google has a white box with the colorful "G", etc.

### Changes — `src/components/forge/LearnersFrom.tsx`

1. **Add `bgColor` per company**: Each item in `row1`/`row2` gets a brand-appropriate background color for its icon box:
   - Google: `#ffffff`, McKinsey: `#00205B`, Amazon: `#232F3E`, Netflix: `#E50914`, Meta: `#0081FB`, Microsoft: `#ffffff`, Swiggy: `#FC8019`, Zomato: `#E23744`
   - Amex: `#006FCF`, Ashoka: `#ffffff`, IIM: `#1a1a1a`, Symbiosis: `#ffffff`, Christ: `#8B0000`, Govt of India: `#ffffff`, NIFT: `#ffffff`, NID: `#E44D26`

2. **Use brand bg in box**: Replace the static `backgroundColor: '#f5f5f5'` with `item.bgColor`. For dark backgrounds, the logo PNG (if white/light) will naturally pop. For light backgrounds, keep the subtle border.

3. **Remove any grayscale/filter**: Ensure no CSS filter is applied — logos render in full color.

4. **Increase box border-radius** slightly to `12px` (desktop) / `10px` (mobile) to match the more rounded app-icon style in the reference.

Single file change, no new dependencies.

