export interface Testimonial {
  thumbnail: string;
  vimeoId: string;
  name: string;
  program: string;
}

export const testimonials: Testimonial[] = [
  { thumbnail: "/placeholder.svg", vimeoId: "123456789", name: "Alumni 1", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/placeholder.svg", vimeoId: "123456789", name: "Alumni 2", program: "the Forge Creator Residency" },
  { thumbnail: "/placeholder.svg", vimeoId: "123456789", name: "Alumni 3", program: "the Forge Writing Retreat" },
  { thumbnail: "/placeholder.svg", vimeoId: "123456789", name: "Alumni 4", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/placeholder.svg", vimeoId: "123456789", name: "Alumni 5", program: "the Forge Creator Residency" },
  { thumbnail: "/placeholder.svg", vimeoId: "123456789", name: "Alumni 6", program: "the Forge Writing Retreat" },
];
/* REPLACE: All thumbnails with real alumni photos, all vimeoIds with real Vimeo video IDs */
