export interface Testimonial {
  thumbnail: string;
  vimeoId: string;
  name: string;
  program: string;
}

export const testimonials: Testimonial[] = [
  { thumbnail: "/images/alumni/chetan.png", vimeoId: "123456789", name: "Chetan Choudhary", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/images/alumni/devansh.jpg", vimeoId: "123456789", name: "Devansh", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/images/alumni/karmal.png", vimeoId: "123456789", name: "Karmal", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/images/people/person-1.png", vimeoId: "123456789", name: "Alumni 4", program: "the Forge Creator Residency" },
  { thumbnail: "/images/people/person-2.png", vimeoId: "123456789", name: "Alumni 5", program: "the Forge Creator Residency" },
  { thumbnail: "/images/people/person-3.png", vimeoId: "123456789", name: "Alumni 6", program: "the Forge Writing Retreat" },
];
