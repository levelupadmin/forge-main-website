

## Make Alumni Cards Larger

The current cards are 150-180px wide and feel cramped. The reference shows much larger cards (~250px+ wide) with generous spacing.

### Changes to `src/components/community/MeetTheTribe.tsx`:

- Increase card `minWidth`/`maxWidth` from 150-180px to **250-280px** (mobile: 200-220px)
- Increase gap between cards from 14-20px to **24px**
- Increase name font size from 14px to **16px**
- Increase descriptor font size from 11px to **13px**
- Keep the 3:4 aspect ratio and 2-row scrollable layout

