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
    nextEdition: "Goa \u00B7 Apr 2025",
    photos: [
      "/images/programs/filmmaking-1.png",
      "/images/programs/filmmaking-2.png",
      "/images/programs/filmmaking-3.png",
      "/images/programs/filmmaking-4.png",
    ],
  },
  {
    tag: "Creator Residency",
    title: "the Forge Creator Residency",
    description: "Build your personal brand through content with like-minded founders and creators.",
    href: "/creator-residency",
    nextEdition: "Manali \u00B7 Jun 2025",
    photos: [
      "/images/gallery/gallery-6.png",
      "/images/gallery/gallery-7.png",
      "/images/gallery/gallery-8.png",
      "/images/gallery/gallery-9.png",
    ],
  },
  {
    tag: "Writing",
    title: "the Forge Writing Retreat",
    description: "Retreat away from the noise and focus on your story with your writing community.",
    href: "/writing-retreat",
    nextEdition: null,
    photos: [
      "/images/gallery/gallery-1.png",
      "/images/gallery/gallery-2.png",
      "/images/gallery/gallery-3.png",
      "/images/gallery/gallery-4.png",
    ],
  },
];
