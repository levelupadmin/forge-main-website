

## Footer Redesign — Sessions-inspired layout

Restructure the footer into a cleaner, more impactful layout inspired by the reference screenshot.

### Layout Structure

**Top section** (above divider):
- **Left**: Forge logo (`/images/forge-logo-lines.png`)
- **Right**: Bold tagline — "Start at the Forge." in large white text

**Divider**: thin `rgba(255,255,255,0.1)` line

**Middle section** (below first divider):
- **Left column**: "Follow us on Instagram" label + Instagram icon (clickable link to `https://www.instagram.com/forgebylevelup/`)
- **Right columns** (3 columns): Navigation links in **pure white (#FFFFFF)**, uppercase, bold — same groupings (Navigate, Programs, Contact) but with white text instead of dim grey

**Divider**: another thin line

**Bottom bar**:
- **Left**: `© 2025 the Forge by LevelUp Learning.`
- **Center**: WhatsApp icon + Email (Mail) icon — clickable, linking to `https://wa.me/919791520177` and `mailto:forge@leveluplearning.in`
- **Right**: "Privacy Policy" / "Terms of Service"

### Key Style Changes
- Remove the "Learn. Do. Become." strip at top of footer
- All nav link text: **pure white `#FFFFFF`**, uppercase, bold (like the reference)
- Remove the old description paragraph and social icon row from brand column
- Remove "Back to top" button
- Contact section becomes icon-only (WhatsApp + Mail) in the bottom bar instead of a separate column

### File Changes
- **`src/components/forge/Footer.tsx`**: Full rewrite of the footer component

