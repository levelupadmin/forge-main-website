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
    name: "Sony",
    logo: "/images/partners/sony-logo.png",
    category: "Cinema Cameras",
    description: "Learn Filmmaking with Industry Leading Netflix Grade equipment from Sony.",
    discount: "20% discount on Cinema line cameras and lenses",
    image: "/images/partners/cinema-cameras.jpg",
  },
  {
    name: "Digitek",
    logo: "/images/partners/digitek-logo.png",
    category: "Creator Tech",
    description: "India's Largest Creator Tech brand, of course we had to partner with them.",
    discount: "10% discount on creator equipment",
    image: "/images/partners/creator-tech.jpg",
  },
  {
    name: "Indie Press & Westland Books",
    logo: "/images/partners/publishing-logos.png",
    category: "Publishing",
    description: "One of India's Largest Self Publishers backed by a legendary traditional publishing house powering our writing retreat.",
    discount: "Top writers get funded",
    image: "/images/partners/publishing.jpg",
  },
  {
    name: "Sandcastles.ai",
    logo: "/images/partners/sandcastles-logo.png",
    category: "Scripting",
    description: "AI writing software built by Kallaway, global content creator with 1B+ Views and 1M+ followers.",
    discount: "50% for the first 3 months",
    image: "/images/partners/scripting.png",
  },
];
