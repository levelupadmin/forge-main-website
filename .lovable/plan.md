

## Plan: Mobile Optimization + Logo Navigation Fix

### Issues Identified
1. **Logo click**: Currently only scrolls to top (`window.scrollTo`). On the `/community` page, clicking the logo should navigate back to the homepage (`/`).
2. **"Be a Mentor" in nav**: The pill isn't extending to fit it properly — user wants it removed from the nav links entirely.
3. **Mobile layout issues across multiple sections**: Footer uses a 4-column grid that overflows on mobile, Experiences uses `repeat(3, 1fr)` which is too tight on mobile, and other sections need responsive adjustments.

### Changes

**1. `src/components/forge/Navigation.tsx`**
- Remove "Be a Mentor" from `rightLinks` array (keep only Community + Careers)
- Update logo click: use `navigate('/')` + scroll to top instead of just `window.scrollTo`, so it works from any page

**2. `src/components/forge/Footer.tsx`**
- Change the 4-column grid (`2fr 1fr 1fr 1fr`) to stack on mobile using a media-query-friendly approach: switch to `gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'` or use responsive classes
- Ensure logo, nav links, programs, and contact info stack vertically on small screens

**3. `src/components/forge/Experiences.tsx`**
- Change `gridTemplateColumns: 'repeat(3, 1fr)'` to be responsive: 1 column on mobile, 3 on desktop. Use `repeat(auto-fit, minmax(300px, 1fr))` or conditional rendering with `useIsMobile`

**4. `src/styles/forge.css`**
- Add responsive footer grid rule so columns stack below 768px
- Ensure experience cards go single-column on mobile

**5. Other mobile touch-ups across sections**
- Review and fix any sections with horizontal overflow or elements that don't fit on 375px screens (e.g., LearnDoBecome bento boxes already use `flex-wrap: wrap` so should be fine)

### Technical Approach
- Use `useIsMobile()` hook (already exists) for conditional grid layouts where CSS alone isn't sufficient
- Use `useNavigate` in Navigation.tsx for logo click (already imported)
- Minimal CSS additions in `forge.css` for footer responsive grid

