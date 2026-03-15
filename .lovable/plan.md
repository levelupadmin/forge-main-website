

## Plan: Multiple Fixes Across Homepage

### 1. Fix Ethos Animation — Only Play on Scroll

**Problem:** The `useScrollAnimation` hook correctly gates the animation with `isVisible`, but the component initializes `stage` at `0` and the timers start when `isVisible` becomes true. The issue is the `useScrollAnimation` threshold is `0.2` — if the section is partially in the viewport on load (or preloaded by the browser), it fires immediately.

**Fix in `src/components/forge/Ethos.tsx`:**
- Keep `stage` at `0` initially (no animation plays)
- The existing `useEffect` already checks `if (!isVisible) return;` — this is correct
- The real fix: ensure animation hasn't already triggered by also checking if the section is actually below the fold. Add a guard so the observer doesn't fire until the user has scrolled at least once, or increase threshold to `0.4` so more of the section must be visible before triggering.

### 2. Update Ethos Narrative Content

**Change in `src/components/forge/Ethos.tsx`:**

Replace `narrativeSteps` to remove camera references and focus on learning, travel, and community:
```
'It starts with a dream.'
'You seek knowledge beyond classrooms and textbooks.'
'Then you pack your bags and step into the world.'
'You find your people. The ones who get it.'
'And at the intersection of all three...'
```

### 3. Update Navigation Links

**Change in `src/components/forge/Navigation.tsx`:**
- `Experiences` → `href: '#experiences'` (already correct)
- `About` → `href: '#about'` (already correct, points to WhatIsForge section)
- `Community` → `href: '/community', isRoute: true` (already correct)
- `Careers` → `href: '/careers', isRoute: true` (change from `#careers` to route)

### 4. Create Careers Page (Placeholder)

**New file `src/pages/Careers.tsx`** — Simple placeholder page with Navigation, a "Careers" heading, "Coming Soon" message, and Footer.

**Update `src/App.tsx`** — Add route `/careers`.

### 5. Fix Gap Above "Join 600+ Dreamers" Section

**Problem:** The `Community` section has large padding (`clamp(72px, 8vw, 120px)`) and `LearnersFrom` has `padding: '20px 0 32px'`. The gap between Community and LearnersFrom looks uneven.

**Fix in `src/components/forge/LearnersFrom.tsx`:** Reduce top padding, and in `src/components/forge/Community.tsx`, tighten bottom padding to make spacing uniform between sections.

### 6. Update NotSureCTA Headlines

**Change in `src/components/forge/NotSureCTA.tsx`:**

Replace `narrativeLines` with:
```
"Not sure which experience is right for you?"  (highlight: false)
"Let us help you get started."  (highlight: true)
```

Remove the third "Now it's your turn" line. Keep the CTA buttons (Book a Call / Email Us) as-is.

### 7. FAQ — Leave for User-Provided Content

The user said they'll provide the correct FAQ content. I'll add a note that this is pending, but won't change FAQ text now. I can update it once they provide the content.

---

### Files to Change
| File | What |
|---|---|
| `src/components/forge/Ethos.tsx` | Fix scroll trigger, update narrative text |
| `src/components/forge/Navigation.tsx` | Change Careers to route link |
| `src/pages/Careers.tsx` | New placeholder page |
| `src/App.tsx` | Add /careers route |
| `src/components/forge/LearnersFrom.tsx` | Adjust top padding |
| `src/components/forge/Community.tsx` | Adjust bottom padding |
| `src/components/forge/NotSureCTA.tsx` | Update headlines |

**Note:** FAQ content update is pending your input — please share the correct Q&As whenever ready.

