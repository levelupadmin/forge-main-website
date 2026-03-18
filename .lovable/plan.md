

## Plan: Increase Community Hero Section Height

### Change
Update the padding in `CommunityHero.tsx` to give the section significantly more vertical space, so the background images are more visible and the content doesn't feel cramped between the navbar and the stats section below.

### File: `src/components/community/CommunityHero.tsx` (line 31)

Change the padding from:
```
padding: 'clamp(120px, 16vw, 200px) 24px clamp(32px, 4vw, 48px)'
```
to:
```
padding: 'clamp(160px, 22vw, 280px) 24px clamp(80px, 10vw, 140px)'
```

This increases both the top padding (more clearance from nav) and the bottom padding (more breathing room before stats), making the hero feel taller and allowing the rotating images to be more prominent.

