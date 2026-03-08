## TripleTen Site Review — Design Ideas for the Forge

After reviewing TripleTen's homepage, here are the key sections and design patterns worth considering for the Forge site, mapped against what you already have:

---

### Sections You Already Have (Well Covered)

- Hero with CTA and people photos — you have this
- Program cards — your Experiences section covers this
- Mentors/Instructors — you have Mentors
- Testimonials/Stories — you have Testimonials + Success Stories
- Community section — you have Community
- FAQ — you have FAQ
- Footer — you have Footer
- Impact numbers — you have ImpactNumbers

---

### New Sections Worth Adding

**3. Career Outcomes / Transformation Stories**
TripleTen has a powerful "before → after" alumni section: "Switched from [old job] to [new role]" with photos, quotes, and LinkedIn links. Your existing Success Stories page could be enhanced with this format — showing the transformation journey more prominently on the homepage.

**4. "Not Sure?" CTA / Quiz Section**  
A full-width banner asking "Not sure which experience is right for you?" with a CTA to book a call. Simple to build, high conversion value.  
  
Add back the our learners are from section after the hero section  
All of the backgrounds that are off white make it pure white and look premium and all of the grey box backgrounds make it pure black, all of it should be either full pure white and pure black

---

### Design Patterns Worth Borrowing

- **Tabbed content blocks**: TripleTen's "Land the job" section uses horizontal tabs (Get job-ready / Get noticed / Build a portfolio / Find your edge) that swap content. Could work for showing different aspects of the Forge experience.
- **Split testimonial layout**: Quote on one side, photo on the other, with a subtle background card. More editorial than your current video-card approach.
- **Sticky contact/booking form**: Bottom-of-page form with a two-step flow. Could be adapted as a "Book a Call" or "Apply Now" section.

---

### Recommended Priority (3 sections to add)

1. **Social Proof / Press Bar** — quick to build, high trust value
2. **"Not Sure?" CTA Banner** — simple full-width section with a single CTA
3. **Transformation Stories** — enhanced before→after alumni cards on the homepage

### Technical Approach

- Each new section would be a standalone component in `src/components/forge/`
- Added to `Index.tsx` in the appropriate position
- Uses existing forge CSS classes (`forge-fade-up`, `forge-heading`, etc.)
- No new dependencies needed