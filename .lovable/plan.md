## Update Transformation Stories Content

Replace the three alumni cards with real stories. Photos will be provided by the user later — for now, keep existing photo paths as placeholders.

### Data Changes in `src/components/forge/TransformationStories.tsx` (lines 6–31)

**Card 1 — Chetan Choudhary** (keep photo path)

- Before: `Engineering Student` → stays the same
- After: `Independent Filmmaker` → stays the same
- Program: `Filmmaking Bootcamp` → stays the same
- Quote → refined version: *"I walked in with one amateur short film under my belt. After the Forge, I went on to work with some of India's biggest music directors on music videos, ads, and short films. Today, I'm developing my own feature film - a longer version of the short I made at the Forge, with crewmates I found at forge.."*

**Card 2 — Bishall Paul** (replace Karmal, move to slot 2, photo placeholder `/images/alumni/vishal.jpg` — user will provide)

- Before: `Business Owner`
- After: `Bestselling Author`
- Program: `Writing Retreat`
- Quote: *"I came to the Forge with an unfinished story and left with the clarity to complete it. Today, I'm an Amazon bestseller in my category, going on book tours and reaching readers I never thought possible, all from a manuscript that took shape in just six days."*

**Card 3 — Kiruba Shankar** (replace Devansh, photo placeholder `/images/alumni/kiruba.jpg` — user will provide)

- Before: `Founder`
- After: `Creatorpreneur`
- Program: `Creator Residency`
- Quote: *"Before the Forge, I relied entirely on paid marketing and averaged 800 views per video. Right after the program, two of my videos went viral reaching 500K to 1M views. Now my farm stays are fully booked for the next 3 months through organic content alone."*

### Order

1. Chetan (Filmmaking) → 2. Bishall (Writing) → 3. Kiruba (Creator Residency)

No layout or styling changes needed. Once approved, I'll update the data and you can share the photos for Vishal and Kiruba to drop into `/public/images/alumni/`.