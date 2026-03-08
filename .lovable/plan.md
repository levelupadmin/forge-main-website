

# The Forge by LevelUp — Homepage Implementation Plan

## Overview
Build a complete, narrative-first premium homepage for "the Forge" — India's premier offline creative residency. The site is a single-page scrolling experience with 14 sections, fully responsive (mobile-first), using Open Sauce One font, custom CSS (no Tailwind utility classes per spec), and placeholder content ready for real assets.

## Design System Setup
- Custom CSS design system with the specified color palette (#FFBC3B, #FFA800, #DD6F15, #222222, #FCF7EF)
- Open Sauce One font via Google Fonts CDN
- Global styles: antialiased text, smooth scrolling, consistent spacing/radius/shadow tokens
- All animations via CSS transitions + IntersectionObserver (no animation libraries)
- Responsive breakpoints: 320px / 768px / 1024px / 1280px+

## Data Layer (`/src/data/`)
Create separate data files for easy content updates:
- `programs.ts` — 3 experience cards with photos, tags, descriptions, next edition info
- `partners.ts` — brand partner logos
- `testimonials.ts` — alumni video testimonials with Vimeo IDs
- `mentors.ts` — 6 mentor profiles
- `people.ts` — 9 "People of the Forge" profiles

## Sections (in order)

1. **Hero** — Full-viewport dark cinematic section with gradient overlays, radial glow, headline "Where Dreamers Become Doers.", and "Explore Experiences" pill CTA that smooth-scrolls to Experiences section. Video placeholder with fallback gradient.

2. **Impact Numbers (Bento Boxes)** — Three dark boxes in a row (600+ Dreamers, 25+ Editions, 10+ Cities) with background photos at low opacity. Numbers count up on scroll entry. Stays 3-column even on mobile.

3. **What is the Forge?** — Centered editorial section with stacked title, pull quote, gold rule divider, and descriptive paragraph. Fade-up on scroll.

4. **Learn. Do. Become.** — Three stacked steps with bold keywords and craft-focused descriptions. Staggered fade-in animation on scroll.

5. **The Forge Experiences** — Three program cards (Filmmaking Bootcamp, Creator Residency, Writing Retreat) with auto-advancing photo carousels, indicator dots, "Next Edition" badges, and "Learn More" links.

6. **Our Ethos (Venn Diagram)** — Full-bleed dark section with animated SVG Venn diagram showing Learning, Travel, and Community circles intersecting at "the Forge." Circles draw in with stroke animation.

7. **Mentors** — Horizontal scroll row of mentor cards with grayscale-to-color hover effect. 6 placeholder slots.

8. **People of the Forge** — Dark rounded card on off-white canvas. Two staggered rows (5+4) of slightly rotated portrait photos. Mobile: horizontal scroll.

9. **Brand Partners** — Logo grid (4-col desktop, 2-col mobile) in white pill containers. Grayscale default, full color on hover.

10. **Community** — Bold header with gold underline on "Community." Five full-bleed expandable image panels that grow on hover. "Join the Community" CTA.

11. **Behind the Scenes Gallery** — CSS masonry grid (3-col desktop, 2-col mobile) with mixed aspect ratio photos. Hover brightness/scale effect.

12. **Alumni Testimonials** — Horizontal scroll of video cards with custom thumbnails, play button overlay, and inline Vimeo embed on click. 6 placeholder slots.

13. **Closing Statement** — "Start at the Forge." headline with "Apply Now" CTA. Minimal, impactful.

14. **Footer** — Three-column layout (brand + socials, navigation links, program links) with bottom copyright bar. Dark background.

## Navigation
- Floating white pill nav with links + "Apply Now" button
- Scroll-triggered style change (transparent → frosted glass)
- Mobile: hamburger menu opening full-screen dark overlay
- Smooth scroll to sections on nav click

## Animations
- IntersectionObserver-based fade-up on all major sections
- Number counter animation for impact stats
- SVG stroke-dasharray animation for Venn diagram
- Drag-to-scroll for horizontal scroll sections
- CSS crossfade for program card photo carousels
- All hover transitions 200-300ms ease

## Key Technical Notes
- No Tailwind utility classes in the final output — custom CSS throughout
- All placeholder images clearly marked with `{/* REPLACE: description */}` comments
- Lucide React for icons
- All content sourced from data files for easy updates

