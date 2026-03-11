

## Mobile Layout Polish & "USA" Text Fix

### Issues identified from mobile screenshots (390×844 viewport)

1. **"United States of America" wraps to two lines** in the Global Community grid — change to "USA"
2. **PoweredBy section**: Gap between logos and next section (WhatIsForge) is fine after recent changes, but the section padding could be tightened slightly on mobile
3. **TrustedAcrossBorders stat cards**: The 3 cards (Dreamt In / Countries / Cities) wrap awkwardly on mobile — two cards on first row, one lonely card on second row taking full width. Should use a proper 2+1 or 3-column mobile grid
4. **TrustedAcrossBorders top padding**: `clamp(48px, 6vw, 80px)` is generous on mobile — reduce to `40px` for tighter flow
5. **TrustedAcrossBorders subtitle margin**: `margin: '0 auto 48px'` is too much on mobile — reduce to `32px`
6. **Globe section margin**: `marginTop: 40` on the Global Community card is fine, but the globe's container could be tighter on mobile
7. **WhatIsForge section**: Bottom padding `clamp(24px, 4vw, 48px)` is fine
8. **Community section heading**: `marginBottom: 48` could be `32px` on mobile for tighter layout
9. **Testimonials heading**: `marginBottom: 56` is generous for mobile — reduce

### File changes

**`src/components/forge/TrustedAcrossBorders.tsx`**
- Change `'United States of America'` to `'USA'` in the `LOCATIONS` array
- Reduce mobile top/bottom section padding from `clamp(48px, 6vw, 80px) 20px` to `40px 20px`
- Reduce subtitle `margin` from `48px` bottom to `32px` on mobile
- Make stat cards grid: use `display: grid; gridTemplateColumns: repeat(2, 1fr)` on mobile with the third card spanning full width, or use `repeat(3, 1fr)` for a tight 3-col layout

**`src/components/forge/Community.tsx`**
- Reduce heading `marginBottom` from `48` to `32` on mobile

**`src/components/forge/Testimonials.tsx`**
- Reduce heading `marginBottom` from `56` to `32` on mobile

**`src/components/forge/WhatIsForge.tsx`**
- Reduce top padding on mobile from `clamp(48px, 6vw, 80px)` to `40px`

**`src/components/forge/Gallery.tsx`**
- Reduce heading `marginBottom` from `24` to `16` on mobile

**`src/components/forge/Ethos.tsx`**
- Reduce bottom padding on mobile from `24px` to `16px` for tighter transition to Mentors

