## Plan: Careers Page Overhaul

### Summary of Changes

1. **All backgrounds to pure black (#000000) or pure white (#FFFFFF)** across every section
2. **Replace CareersFooter with the shared Footer** from the home page
3. **Fix "LevelUp"** (remove space) in WhoBelongsHere headline
4. **Remove all em dashes** from content across all careers components and jobs data
5. **Redesign the "Why The Forge" (HonestCase) section** with a cleaner layout
6. **Reduce section padding** globally
7. **Build a hero section** inspired by the Sana reference (headline centered, floating team photo boxes around it)
8. **Consistent heading sizes** matching home page (`clamp(40px, 6vw, 64px)`)

---

### Files to Change


| File                                        | Action | Summary                                                                                                    |
| ------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| `src/pages/Careers.tsx`                     | Edit   | Replace hero placeholder with new `CareersHero`, swap `CareersFooter` for shared `Footer`                  |
| `src/components/careers/CareersHero.tsx`    | Create | New hero with centered headline + floating photo boxes                                                     |
| `src/components/careers/HonestCase.tsx`     | Edit   | New layout: full-width section with 4 pillar cards in a clean 2x2 grid (no bento photo mix), pure white bg |
| `src/components/careers/WhoBelongsHere.tsx` | Edit   | Fix "LevelUp", black card bg `#000000` not `#222222`, remove em dash from subtext                          |
| `src/components/careers/VoiceOfTeam.tsx`    | Edit   | Background `#000000`, card bg updates                                                                      |
| `src/components/careers/MarqueeStrip.tsx`   | Edit   | Background `#000000`, edge fades to `#000000`                                                              |
| `src/components/careers/OpenRoles.tsx`      | Edit   | Wildcard card bg `#000000`                                                                                 |
| `src/components/careers/HowWeHire.tsx`      | Edit   | Background `#000000`, step dot bg `#000000`                                                                |
| `src/components/careers/LifeAtForge.tsx`    | Edit   | Reduce padding                                                                                             |
| `src/components/careers/ClosingCTA.tsx`     | Edit   | Reduce padding                                                                                             |
| `src/components/careers/SectionHeader.tsx`  | Edit   | Match home page heading size `clamp(40px, 6vw, 64px)`, reduce bottom margin from 72px to 48px              |
| `src/components/careers/CareersFooter.tsx`  | Delete | No longer needed                                                                                           |
| `src/data/jobs.ts`                          | Edit   | Replace all em dashes with commas or periods                                                               |


---

### Hero Section Design (CareersHero.tsx)

Inspired by the Sana reference screenshot: clean, centered headline on a pure black background with scattered/floating team photo boxes positioned around the text.

- Background: `#000000`, full viewport height (`100svh`)
- Centered headline: "Build a Dream that outlasts you" in Open Sauce One 800, `clamp(36px, 5.5vw, 64px)`, white, with "Dream" in italic #FFBC3B
- Subtext below: "Nothing like the Forge exists in the world. So it takes some crazy people to believe in it. This page is for you if you're crazy enough to dream as big as us."
- CTA button: "Join the Dream" pill, scrolls to #roles
- 6-8 floating photo placeholder boxes (dark gray `#1a1a1a` with border-radius 12-16px) positioned absolutely around the headline at various angles and sizes, with subtle CSS rotation and hover scale effects
- Photos will be replaced later when user provides images

### HonestCase Redesign

Replace the complex bento grid (photos mixed with cards) with a cleaner layout:

- Keep the same header
- 4 pillar cards in a 2-column grid (desktop), 1-column (mobile)
- Cards: `#F7F5F0` background, 20px radius, clean number/title/body layout
- Remove photo placeholders entirely (the photos were dark empty boxes anyway)
- Each card gets a subtle left amber accent line (4px wide, 40px tall)

### Padding Reduction

- Desktop section padding: `120px 80px` becomes `80px 80px`
- Mobile section padding: `64px 24px` becomes `48px 24px`
- SectionHeader margin-bottom: `72px` becomes `48px`

### Em Dash Removal

All `—` characters replaced with commas, periods, or restructured sentences across:

- `src/data/jobs.ts` (compensation lines, bullet points)
- `src/components/careers/HonestCase.tsx` (subtext)
- `src/components/careers/WhoBelongsHere.tsx` (subtext)

### Background Color Updates

Every `#222222` background becomes `#000000`:

- MarqueeStrip, VoiceOfTeam, HowWeHire section backgrounds
- WhoBelongsHere dark cards
- OpenRoles wildcard card
- HowWeHire step dots, timeline track context
- Edge fade gradients in MarqueeStrip

Card internal grays (like `#2e2e2e`, `#333333`) stay as-is since user said "bento boxes can be gray".