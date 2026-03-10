export interface Program {
  tag: string;
  tabLabel: string;
  title: string;
  description: string;
  href: string;
  nextEdition: string | null;
  photos: string[];
  duration: string;
  format: string;
  highlights: string[];
}

export const programs: Program[] = [
  {
    tag: "Filmmaking",
    tabLabel: "Make Films",
    title: "the Forge Filmmaking Bootcamp",
    description: "An intensive no bullsh*t filmmaking bootcamp where you learn by writing, directing, shooting your own short film in 15 days flat with the guidance of mentors who have been nominated for the Emmys and created Netflix originals.",
    href: "/filmmaking",
    nextEdition: "Goa · Apr 2025",
    duration: "15 Days",
    format: "Residential",
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
  },
  {
    tag: "Content Creation",
    tabLabel: "Create Content",
    title: "the Forge Creator Residency",
    description: "An invite-only 12-day residency for founders and creators who want to build a real personal brand through content on social media by learning directly from top creators and making real content every day.",
    href: "https://creators.forgebylevelup.com",
    nextEdition: "Goa · May 2025",
    duration: "12 Days",
    format: "Application-Only",
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
  },
  {
    tag: "Screenwriting & Authoring",
    tabLabel: "Write Stories",
    title: "the Forge Writing Retreat",
    description: "A 6-day writing retreat for screenwriters and authors, designed to help you step away from the noise of daily life and fully immerse yourself in your story with bestselling authors and produced screenwriters.",
    href: "https://creators.forgebylevelup.com/writing",
    nextEdition: "Dehradun · Mar 2025",
    duration: "6 Days",
    format: "Residential",
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
  },
];
