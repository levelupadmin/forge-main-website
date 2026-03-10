export interface Testimonial {
  thumbnail: string;
  vimeoId: string;
  name: string;
  program: string;
}

export const testimonials: Testimonial[] = [
  { thumbnail: "/images/alumni/chetan.png", vimeoId: "1104689757", name: "Anurag, Independent Filmmaker", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/images/alumni/devansh.jpg", vimeoId: "1104689748", name: "Aanchal Chaturvedi, Content Creator", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/images/alumni/karmal.png", vimeoId: "1104689769", name: "Ashwin Venkatesh, Account Manager", program: "the Forge Filmmaking Bootcamp" },
  { thumbnail: "/images/people/person-1.png", vimeoId: "1106996548", name: "Freddy George, Podcaster", program: "the Forge Writing Retreat" },
  { thumbnail: "/images/people/person-2.png", vimeoId: "1106996517", name: "Bishal Paul, Founder & Author", program: "the Forge Writing Retreat" },
  { thumbnail: "/images/people/person-3.png", vimeoId: "1106996572", name: "Ananya Ramprasad, Actor", program: "the Forge Writing Retreat" },
];
