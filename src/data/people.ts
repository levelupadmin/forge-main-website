export interface Person {
  name: string;
  designation: string;
  photo: string;
  rotation: number;
  bio?: string;
}

export const people: Person[] = [
  { name: "Chetan", designation: "Student", photo: "/images/people/person-1.png", rotation: -1.2, bio: "Dropped everything to chase the filmmaker dream" },
  { name: "Devansh", designation: "Product Manager", photo: "/images/people/person-2.png", rotation: 1.5, bio: "Weekday PM, weekend documentary maker" },
  { name: "Karmal", designation: "Freelancer", photo: "/images/people/person-3.png", rotation: -0.8, bio: "Turned a side hustle into a full-time creative career" },
  { name: "Dreamer 4", designation: "Filmmaker", photo: "/images/people/person-4.png", rotation: 1.0, bio: "Two festival selections in the first year" },
  { name: "Dreamer 5", designation: "Creator", photo: "/images/people/person-5.png", rotation: -1.5, bio: "From zero followers to a thriving community" },
  { name: "Dreamer 6", designation: "Writer", photo: "/images/people/person-6.png", rotation: 0.5, bio: "Published first novel at 23" },
  { name: "Dreamer 7", designation: "Artist", photo: "/images/people/person-7.png", rotation: -1.0, bio: "Quit corporate to paint full-time" },
  { name: "Dreamer 8", designation: "Photographer", photo: "/images/people/person-8.png", rotation: 1.3, bio: "Now shooting campaigns for global brands" },
  { name: "Dreamer 9", designation: "Entrepreneur", photo: "/images/people/person-9.png", rotation: -0.5, bio: "Built a creative agency straight out of the Forge" },
];
