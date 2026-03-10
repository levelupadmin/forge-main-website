export interface Program {
  tag: string;
  title: string;
  description: string;
  href: string;
  nextEdition: string | null;
  photos: string[];
}

export const programs: Program[] = [
  {
    tag: "Filmmaking",
    title: "the Forge Filmmaking Bootcamp",
    description: "An intensive no bullsh*t filmmaking bootcamp where you learn by writing, directing, shooting you own shortfilm in 15 days flat with the guidance of mentors who have been nominated for the emmys, created netflix orginals while living with like minded filmmakers and storytellers.",
    href: "/filmmaking",
    nextEdition: "Goa · Apr 2025",
    photos: [
      "/images/programs/filmmaking-5.jpg",
      "/images/programs/filmmaking-8.jpg",
      "/images/programs/filmmaking-7.jpg",
      "/images/programs/filmmaking-6.jpg",
    ],
  },
  {
    tag: "Content Creation",
    title: "the Forge Creator Residency",
    description: "An invite-only 12-day residency for founders and creators who want to build a real personal brand through content on social media by learning directly from top creators, making real content every day, and living with like minded community of builder.",
    href: "https://creators.forgebylevelup.com",
    nextEdition: "Goa · May 2025",
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
    tag: "Screenwriting and Authoring",
    title: "the Forge Writing Retreat",
    description: "Give us 6 days, and we'll help you forge a freshly minted book manuscript, screenplay or film treatment with 20 overcaffeinated writers by your side.",
    href: "https://creators.forgebylevelup.com/writing",
    nextEdition: "Dehradun · Mar 2025",
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
