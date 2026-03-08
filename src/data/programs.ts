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
    description: "Learn filmmaking by creating your own short film in an intensive bootcamp.",
    href: "/filmmaking",
    nextEdition: "Goa · Apr 2025",
    photos: [
      "/images/programs/filmmaking-1.png",
      "/images/programs/filmmaking-2.png",
      "/images/programs/filmmaking-3.png",
      "/images/programs/filmmaking-4.png",
    ],
  },
  {
    tag: "Content Creation",
    title: "the Forge Creator Residency",
    description: "A 7-day invite-only residency where handpicked individuals learn to create viral content and build their personal brand on Instagram, TikTok or YouTube.",
    href: "https://creators.forgebylevelup.com",
    nextEdition: "Goa · May 2025",
    photos: [
      "/images/programs/creators-hero.jpg",
      "/images/programs/creators-1.jpg",
      "/images/programs/creators-2.jpg",
      "/images/programs/creators-3.jpg",
    ],
  },
  {
    tag: "Screenwriting and Authoring",
    title: "the Forge Writing Retreat",
    description: "Give us 6 days, and we'll help you forge a freshly minted book manuscript, screenplay or film treatment with 20 overcaffeinated writers by your side.",
    href: "https://creators.forgebylevelup.com/writing",
    nextEdition: "Dehradun · Mar 2025",
    photos: [
      "/images/programs/writing-hero.png",
      "/images/programs/creators-4.jpg",
      "/images/gallery/gallery-1.png",
      "/images/gallery/gallery-2.png",
    ],
  },
];
