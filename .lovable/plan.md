## Redesign Community Page

Inspired by theexperience.co/community, we'll restructure the Forge community page with these sections in order:

### New Page Structure

1. **Hero** (keep, update copy) — "The people who make the Forge what it is.." with subtitle about the Forge community
2. **Stats Bar** (keep as-is) — 500+, 12, 85+, 20+
3. **Meet your Friends for Life** (new section, replaces CommunityMembers) — Featured notable alumni in a clean grid with photo, name, and one-line descriptor. No filter pills, no role categories. Just a curated list of top people.
4. **Testimonials / Reviews** (replaces SuccessStories) — Text+ photo testimonial cards with quotes, name, and which program they attended. no video. Simple quote cards in a grid.
5. **Beyond the Program** (new section, replaces CommunityEvents) — "The program ends. The community doesn't." section with perks: City & Edition based groups, City meetups, Online Weekly Community Workshop, Alumni perks from brand partners, Collaborative projects. Paired with community photos.
6. **Footer**

### Detailed Changes

`**src/data/communityData.ts**` — Restructure data:

- Remove `SuccessStory` and `CommunityEvent` types
- Add `TribeMember` type: `{ name, photo, descriptor }` for notable alumni (Taj Mola, Shoaib/Science on Beats, Vishal Paul, Kiruba Shankar, Chetan Choudhary, Devansh, etc.). Use existing photos from `/images/alumni/` and `/images/people/` for those we have; placeholder images for others.
- Add `Testimonial` type: `{ quote, name, program }` — reuse existing quote data from `successStories`
- Add `communityPerks` array: Private batch groups, City meetups, Alumni perks, Collaborative projects — each with a title and description
- Keep `communityStats` as-is

`**src/components/community/CommunityHero.tsx**` — Update copy:

- Subheading: "The Community"
- Heading: "The people who make it unforgettable."
- Subtitle: "Every program becomes a story. And the best stories need the right characters."

`**src/components/community/MeetTheTribe.tsx**` (new file, replaces `CommunityMembers.tsx`):

- Header: "Meet the Tribe" / "Interesting people, interesting conversations"
- Subtitle: "Our members are founders, filmmakers, writers, and creators. The kind of people who make a 6-day residency feel like a lifetime."
- Grid of notable members (3-4 columns desktop, 2 on mobile) — circular or rounded square photo + name + one-line descriptor underneath
- No filter pills

`**src/components/community/CommunityTestimonials.tsx**` (new file, replaces `SuccessStories.tsx`):

- Header: "What they said" / "Strangers became collaborators. Collaborators became friends."
- Simple quote cards with large quotation mark, quote text, name, program badge
- 2-3 column grid desktop, scrollable on mobile

`**src/components/community/BeyondTheProgram.tsx**` (new file, replaces `CommunityEvents.tsx`):

- Header: "Beyond the Program" / "The program ends. The community doesn't."
- Intro: "When you join a Forge program, you're not just signing up for 6 days. You're getting a lifetime pass to a community of like-minded creators who actually stay in touch."
- 4 perks in a 2x2 grid: Private batch groups, City meetups, Alumni perks, Collaborative projects — each with title + short description
- Community photos from `/images/community/` alongside the perks

`**src/pages/Community.tsx**` — Update imports:

- Replace `SuccessStories` → `CommunityTestimonials`
- Replace `CommunityMembers` → `MeetTheTribe`
- Replace `CommunityEvents` → `BeyondTheProgram`
- New order: Hero → Stats → MeetTheTribe → Testimonials → BeyondTheProgram → Footer

**Note on photos**: We only have real photos for Chetan, Devansh, Karmal, Kiruba, Vishal, and person-1 through person-9. For notable alumni like Taj Mola and Shoaib (Science on Beats), we'll use placeholder people images until you provide real ones.