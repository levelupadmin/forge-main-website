

## Heading Font Size Uniformity Audit — Mobile

### Current State

The `.forge-heading` CSS class defines headings at `clamp(40px, 6vw, 64px)`, which resolves to **40px** on a 390px mobile viewport. Most sections use this class correctly, but several override it with smaller values, creating visual inconsistency.

### Sections Using Standard `.forge-heading` (40px on mobile) — No changes needed
- What is the Forge
- Learn/Do/Become
- Experiences
- Ethos
- Community
- Backed by the Best
- Gallery
- Mentors
- Our Students are Everywhere

### Sections With Non-Uniform Heading Sizes — Need fixing

| Section | Current mobile size | Should be |
|---|---|---|
| **Career Outcomes** (TransformationStories) | `clamp(32px, 5vw, 52px)` = ~32px | 40px (standard) |
| **Good Vibes / Impact Numbers** | `clamp(28px, 7vw, 40px)` = ~28px | 40px (standard) |
| **Not Sure Which Experience** (NotSureCTA) | `clamp(28px, 5vw, 48px)` = ~28px | 40px (standard) |
| **FAQ** | hardcoded `28px` | 40px (standard) |

### Intentionally Different — No changes
- **ClosingStatement**: `clamp(48px, 7vw, 88px)` — deliberately oversized hero closing
- **WhyBuilt h2**: `clamp(24px, 7vw, 36px)` — this is a statement/quote, not a section title

### Changes

1. **TransformationStories.tsx** (line 50): Remove the `fontSize` override so it uses the `.forge-heading` class default
2. **ImpactNumbers.tsx** (line 42): Change to `clamp(40px, 6vw, 64px)` to match standard
3. **NotSureCTA.tsx** (line 33): Change to `clamp(40px, 6vw, 48px)` to match standard on mobile while capping at 48px on desktop
4. **FAQ.tsx** (line 58): Remove the `fontSize` override so the `.forge-heading` class applies uniformly

