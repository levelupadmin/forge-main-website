## Move Community Marquee from Home Page to Community Page

The two-row infinite-scroll marquee (`Community` component at `src/components/forge/Community.tsx`) with 20 members currently lives on the home page. It needs to move to the Community page, replacing the existing `MeetTheTribe` component which serves the same purpose ("Meet your friends for life"). one row should scroll left another to the right 

&nbsp;

### Changes

**1. `src/pages/Index.tsx**` — Remove `<Community />` and its import. The Gallery section stays.

**2. `src/pages/Community.tsx**` — Replace `<MeetTheTribe />` with the `Community` marquee component. Import it from `@/components/forge/Community`. The marquee's dark background (#222222) will need to be adapted to fit the Community page's light theme, OR we keep it as a dark section contrast block (it already has its own background). Since the Community page already has dark sections (hero), keeping the dark marquee works well.

**3. `src/components/forge/Community.tsx**` — Update the header text to match the Community page's existing copy:

- Eyebrow: "Our Alma Mater" (instead of "People of the Forge")  
- Headline: "Meet your friends for life" (instead of "Meet the Dreamers.")
- Subtext: "Our alumni are India's Top Creatives, Founders, Filmmakers, Storytellers and Creators who make you feel like you never want to leave the Forge."

**4. Data consolidation** — The marquee uses `src/data/community.ts` (20 members with local photos). `MeetTheTribe` uses `src/data/communityData.ts` (fewer members). The marquee data is the newer, more complete dataset, so we keep using it as-is.

### Section order on Community page

Hero → Stats → **Community Marquee** (replaces MeetTheTribe) → Testimonials → Beyond the Program → Trusted Across Borders → Footer