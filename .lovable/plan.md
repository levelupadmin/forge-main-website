

## Center the "Join 600+ Dreamers from" Section Vertically

The section currently has `padding: '32px 0 20px'` — more top padding than bottom, pushing it toward the bottom of the gap. To visually center it between the Community section above and the Transformation Stories section below, we should equalize the vertical padding.

### Change

**`src/components/forge/LearnersFrom.tsx`** (line 71)
- Change `padding: '32px 0 20px'` to `padding: '20px 0 32px'` — less top padding, more bottom padding, shifting the content upward and centering it in the visual gap.

