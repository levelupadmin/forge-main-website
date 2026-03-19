

## Plan: Add 4 New Alumni Testimonials & Reorder

### What changes
1. **Copy 4 videos** to `public/videos/testimonials/`: sharon.mp4, kiruba.mp4, prithvik.mp4, pradeep.mp4
2. **Update `src/data/testimonials.ts`** — add 4 new entries and reorder all 10 to alternate programs:

```
1. Anurag — Filmmaking Bootcamp
2. Sharon Priyanka — Creator Residency
3. Freddy George — Writing Retreat
4. Kiruba Shankar — Creator Residency
5. Aanchal Chaturvedi — Filmmaking Bootcamp
6. Bishal Paul — Writing Retreat
7. Pradeep Tyson — Creator Residency
8. Ashwin Venkatesh — Filmmaking Bootcamp
9. Ananya Ramprasad — Writing Retreat
10. Prithvik — Creator Residency
```

No component changes needed — `Testimonials.tsx` already renders from the data array with auto-playing video previews and modal playback.

