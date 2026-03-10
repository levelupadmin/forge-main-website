

## "Not Sure Which Experience" → Editorial Scroll-In CTA

Rewrite `src/components/forge/NotSureCTA.tsx` as a theatrical, narrative-driven closer where lines reveal one by one on scroll, building to the CTA.

### Layout
```text
┌──────────────────────────────────────────────────┐
│  [Black bg + subtle amber radial glow]           │
│                                                  │
│     "You've seen the work."      (fades in)      │
│                                                  │
│     "You've met the mentors."    (fades in)      │
│                                                  │
│     "Now it's your turn."        (amber, bold)   │
│                                                  │
│     [ Book a Call → ]  [ Email Us → ]            │
│                          (fades in last)         │
│                                                  │
└──────────────────────────────────────────────────┘
```

### Implementation

- Each narrative line + the CTA row gets its own `IntersectionObserver` (threshold ~0.5) so they reveal as user scrolls through
- Lines use large serif-like sizing: `clamp(24px, 4vw, 48px)`, weight 400, `rgba(255,255,255,0.85)`
- Final line ("Now it's your turn.") in `#FFBC3B`, weight 700
- Generous vertical spacing between lines (~80-120px) to create scroll room
- CTA buttons: amber pill for "Book a Call" (WhatsApp link), ghost pill for "Email Us" — same style as current
- Subtle ambient `radial-gradient` glow behind center
- Mobile: smaller font sizes, reduced spacing (~48-64px between lines)
- Uses existing `useIsMobile` hook; internal `useReveal` hook per element
- Single file change: `src/components/forge/NotSureCTA.tsx`

