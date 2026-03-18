

## Plan: Community Page Polish

Three changes: unify background color, reduce spacing, capitalize "People", add hero background image, add 4 new members.

### 1. Unify Community marquee background to pure black

**`src/components/forge/Community.tsx`**
- Change section background from `#222222` to `#000000` (matches `var(--forge-black)`)
- Change card background from `#2a2a2a` to `#1a1a1a`
- Update edge fade gradients from `#222222` to `#000000`

### 2. Reduce section spacing across Community page

**`src/components/community/CommunityHero.tsx`**
- Reduce bottom padding from `clamp(48px, 6vw, 80px)` to `clamp(32px, 4vw, 48px)`

**`src/components/forge/Community.tsx`**
- Reduce section padding from `120px 0` / `80px 0` to `80px 0` / `60px 0`
- Reduce header margin-bottom from 64/48 to 48/36

**`src/components/community/CommunityStats.tsx`**
- Reduce padding from `clamp(48px, 6vw, 80px)` to `clamp(32px, 4vw, 56px)`

**`src/components/community/CommunityTestimonials.tsx`**
- Reduce padding similarly

### 3. Capitalize "People" in hero and add background image

**`src/components/community/CommunityHero.tsx`**
- Change "people" to "People" in the heading: "The People who make the Forge what it is."
- Add a background image with a dark overlay. Use one of the existing group photos (e.g., `/images/careers/big-group-beach.jpg` or `/images/gallery/gallery-hero.png`) as a subtle background with heavy dark overlay (~0.7 opacity black) so text remains legible. The image will be positioned as `background-size: cover` behind the hero content.

### 4. Add 4 new community members

**`src/data/community.ts`**
- Add to end of `communityRow1`:
  - Aanchal Chaturvedi (Content Creator, instagram, photo: null)
  - Mangesh Rangnekar (Content Creator, instagram, photo: null)
- Add to end of `communityRow2`:
  - Mohamed Thajamul (Content Creator, instagram, photo: null)
  - Sujoy (Content Creator Mumbai, instagram, photo: null)

All 4 have `photo: null` — the existing initials placeholder logic handles this already.

