

## Add Gallery Section Back to Home Page

The Gallery component is already imported in `Index.tsx` (line 19) but isn't included in the rendered JSX. It was likely removed during a previous reorganization.

### Change

**`src/pages/Index.tsx`** — Add `<Gallery />` after `<Community />` (between Community and LearnersFrom), placing it as a visual break between the community marquee and the learners section.

Updated section order:
- ...Mentors → Community → **Gallery** → LearnersFrom → TransformationStories...

This is a one-line addition. The Gallery component itself (three-row infinite marquee with lightbox) is fully intact and ready to render.

