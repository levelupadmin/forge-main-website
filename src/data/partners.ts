export interface Partner {
  name: string;
  logo: string;
  category: string;
  description: string;
  discount?: string;
  image: string;
}

export const partnerCategories = [
  'Cinema Cameras',
  'Creator Tech',
  'Publishing',
  'Scripting',
] as const;

export const partners: Partner[] = [
  {
    name: "Partner 1",
    logo: "/images/partners/partner-1.png",
    category: "Cinema Cameras",
    description: "Professional cinema cameras and accessories for filmmakers at the Forge. Members get exclusive access to the latest gear during residencies.",
    discount: "20% off rentals",
    image: "/images/programs/filmmaking-1.png",
  },
  {
    name: "Partner 2",
    logo: "/images/partners/partner-2.png",
    category: "Cinema Cameras",
    description: "High-end lenses and stabilisation systems trusted by industry professionals worldwide.",
    discount: "15% off purchases",
    image: "/images/programs/filmmaking-2.png",
  },
  {
    name: "Partner 3",
    logo: "/images/partners/partner-3.png",
    category: "Creator Tech",
    description: "Cutting-edge creator tools and software that power the next generation of digital storytelling.",
    discount: "Free 6-month license",
    image: "/images/programs/creators-1.jpg",
  },
  {
    name: "Partner 4",
    logo: "/images/partners/partner-4.png",
    category: "Publishing",
    description: "India's leading independent publishing house, offering Forge writers a fast-track submission pipeline.",
    discount: "Priority submissions",
    image: "/images/programs/writing-hero.png",
  },
  {
    name: "Partner 5",
    logo: "/images/partners/partner-5.png",
    category: "Scripting",
    description: "Industry-standard scripting software used by screenwriters and showrunners across Bollywood and beyond.",
    discount: "30% off annual plan",
    image: "/images/programs/creators-2.jpg",
  },
  {
    name: "Partner 6",
    logo: "/images/partners/partner-6.png",
    category: "Creator Tech",
    description: "Audio and podcasting tools designed for creators who want studio-quality production on the go.",
    discount: "Exclusive bundle pricing",
    image: "/images/programs/creators-3.jpg",
  },
];
