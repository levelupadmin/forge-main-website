

## Plan: Change Nav CTA to "Be a Mentor"

**What**: Replace the "Request an Invite" button in the top navigation bar with a "Be a Mentor" CTA that links to the `#mentors` section (or a dedicated mentor application flow).

**Changes**:

### `src/components/forge/Navigation.tsx`
- Change the CTA button text from "Request an Invite" to "Be a Mentor"
- Change the `scrollTo('#experiences')` to `scrollTo('#mentors')` so it takes users to the Mentors section where they can learn about mentoring at the Forge

That's a single-line text + href change in the navigation component. The floating CTA at the bottom-right will still say "Request an Invite" and point to Experiences, so both conversion paths remain active.

