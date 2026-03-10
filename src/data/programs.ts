export interface Program {
  tabLabel: string;
  title: string;
  description: string;
  href: string;
  nextEditions: string[];
  photos: string[];
  durationPills: string[];
  highlights: string[];
  poweredBy: { name: string; logo: string }[];
}

export const programs: Program[] = [
  {
    tabLabel: "Filmmaking",
    title: "the Forge Filmmaking Bootcamp",
    description: "An intensive no bullsh*t filmmaking bootcamp where you learn by writing, directing, shooting your own short film in 15 days flat with the guidance of mentors who have been nominated for the Emmys, created Netflix originals while living with like minded filmmakers and storytellers.",
    href: "/filmmaking",
    nextEditions: ["Goa · Apr 2026"],
    durationPills: ["7 Days Online", "8 Days Offline"],
    highlights: [
      "Full pipeline — screenwriting, directing, cinematography, editing",
      "Mentored by Emmy-nominated & Netflix original creators",
      "Write, direct & shoot your own short film",
      "Live with like-minded filmmakers & storytellers",
    ],
    photos: [
      "/images/programs/filmmaking-5.jpg",
      "/images/programs/filmmaking-8.jpg",
      "/images/programs/filmmaking-7.jpg",
      "/images/programs/filmmaking-6.jpg",
    ],
    poweredBy: [
      { name: "Sony", logo: "/images/partners/sony-logo.png" },
    ],
  },
  {
    tabLabel: "Content Creation",
    title: "the Forge Creator Residency",
    description: "An invite-only 12-day residency for founders and creators who want to build a real personal brand through content on social media by learning directly from top creators, making real content every day, and living with a like minded community of builders.",
    href: "https://creators.forgebylevelup.com",
    nextEditions: ["Goa · May 2026", "Bali · Jun 2026"],
    durationPills: ["5 Days Online", "7 Days Offline"],
    highlights: [
      "Learn directly from top creators with millions of followers",
      "Create real content every single day",
      "Build a personal brand that drives business",
      "Live with a community of builders & founders",
    ],
    photos: [
      "/images/programs/creators-hero.jpg",
      "/images/programs/creators-1.jpg",
      "/images/programs/creators-2.jpg",
      "/images/programs/creators-3.jpg",
      "/images/programs/creators-5.jpg",
      "/images/programs/creators-6.jpg",
      "/images/programs/creators-7.jpg",
      "/images/programs/creators-8.jpg",
    ],
    poweredBy: [
      { name: "Digitek", logo: "/images/partners/digitek-logo.png" },
    ],
  },
  {
    tabLabel: "Writing",
    title: "the Forge Writing Retreat",
    description: "A 6-day writing retreat for screenwriters and authors, designed to help you step away from the noise of daily life and fully immerse yourself in your story, set in a scenic destination where you learn from bestselling authors and produced screenwriters while living alongside a like-minded community of storytellers.",
    href: "https://creators.forgebylevelup.com/writing",
    nextEditions: ["Coorg · Jul 2026"],
    durationPills: ["6 Days", "Residential"],
    highlights: [
      "Immerse yourself in your story in a scenic destination",
      "Learn from bestselling authors & produced screenwriters",
      "Structured workshops + dedicated writing time",
      "Live alongside a community of storytellers",
    ],
    photos: [
      "/images/programs/writing-1.jpg",
      "/images/programs/writing-2.jpg",
      "/images/programs/writing-3.jpg",
      "/images/programs/writing-4.jpg",
      "/images/programs/writing-5.jpg",
      "/images/programs/writing-6.jpg",
      "/images/programs/writing-7.jpg",
      "/images/programs/writing-8.jpg",
    ],
    poweredBy: [
      { name: "Indie Press", logo: "/images/partners/indiepress-logo-white.png" },
      { name: "Westland Books", logo: "/images/partners/westland-logo-white.png" },
    ],
  },
];