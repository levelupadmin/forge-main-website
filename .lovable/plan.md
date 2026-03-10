

## Experiences Section Updates

Multiple changes to the bento card layout, data, and styling.

### 1. Data changes in `src/data/programs.ts`

- Update `Program` interface: add `nextEditions` array (replacing `nextEdition` string), split duration into `durationPills` array of strings
- **Toggle labels**: Change `tabLabel` to "Filmmaking", "Content Creation", "Writing"
- **Remove tag** field (no longer shown above title)
- **Descriptions**: Restore original full descriptions from initial data
- **Duration pills**:
  - Filmmaking: `["7 Days Online", "8 Days Offline"]`
  - Creator Residency: `["5 Days Online", "7 Days Offline"]`
  - Writing Retreat: `["6 Days", "Residential"]` (unchanged style)
- **Next editions** (array, shown as overlay on photos):
  - Filmmaking: `["Goa · Apr 2026"]`
  - Creator Residency: `["Goa · May 2026", "Bali · Jun 2026"]`
  - Writing Retreat: `["Coorg · Jul 2026"]`

### 2. Component changes in `src/components/forge/Experiences.tsx`

- Remove the `<div className="experiences-tag">` line (tag text now lives in toggle labels)
- Replace metadata badges: render `program.durationPills` as individual badges instead of single duration + format + nextEdition
- Add a **location overlay** on the photo carousel (top-left, semi-transparent dark chip) showing each item in `program.nextEditions`
- Toggle pill text uses new `tabLabel` values

### 3. CSS changes in `src/styles/forge.css`

- **Photo extends to bottom**: Remove the `experiences-photo-dots` bar background and padding. Instead, overlay the dots at the bottom of the photo container using `position: absolute; bottom: 12px`. Remove the flex-direction column layout that separates photo and dots
- **Toggle pill active color**: Change from `#DD6F15` (orange) to `#FFBC3B` (yellow) for `.experiences-toggle-pill.active`, with `color: #222` for contrast
- **Location overlay**: New `.experiences-location-overlay` class — positioned top-left of photo container, semi-transparent dark background, white text, small font

### Technical details

- The photo container already uses `position: relative` + `absolute` images filling `inset: 0`, so making dots overlay is straightforward — just position them absolute within the same container
- Location chips overlay similarly at `top: 16px; left: 16px`
- The `experiences-photo-side` no longer needs `flex-direction: column` since dots move inside the photo container

