

## Community Page Plan

### Overview
Create a dedicated `/community` route with four sections: Success Stories, Community Members Grid, Community Stats, and Community Events. Reuses the existing Navigation and Footer components, and follows the same cream background + heading styles from the homepage.

### New Files

1. **`src/data/communityData.ts`** — Centralized data for success stories, community stats, and events (placeholder content ready to be swapped with real data).

2. **`src/pages/Community.tsx`** — Main page component that composes the four sections with shared Navigation and Footer.

3. **`src/components/community/CommunityHero.tsx`** — Compact hero banner with a heading like "The Forge Community" and a short subtitle.

4. **`src/components/community/SuccessStories.tsx`** — Featured alumni cards showing photo, name, program, and a short quote/achievement. Horizontal scroll on mobile, 3-column grid on desktop.

5. **`src/components/community/CommunityMembers.tsx`** — Grid of community member cards (photo, name, role/designation) reusing data from `people.ts`. Filterable by program or role.

6. **`src/components/community/CommunityStats.tsx`** — Impact numbers strip (total members, countries, projects, editions) using the existing `useCountUp` hook and scroll animation pattern.

7. **`src/components/community/CommunityEvents.tsx`** — Cards for past/upcoming events (meetups, guest lectures, workshops) with photo, title, date, and location. Reuses community images already in `/public/images/community/`.

### Modified Files

- **`src/App.tsx`** — Add route: `<Route path="/community" element={<Community />} />`
- **`src/components/forge/Navigation.tsx`** — Update "Community" link to navigate to `/community` instead of `#community` anchor.

### Design Approach
- All sections use `var(--forge-cream)` background, `forge-heading`/`forge-subheading` classes, and `useScrollAnimation` for fade-in — matching the homepage exactly.
- Tight padding matching the reduced spacing from recent changes (`clamp(48px, 6vw, 80px)`).
- Cards use rounded corners (20px), hover scale effect, and the same typography system.

