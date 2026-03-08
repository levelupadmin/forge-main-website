export interface Person {
  name: string;
  designation: string;
  photo: string;
  rotation: number;
}

export const people: Person[] = [
  { name: "Chetan", designation: "Student", photo: "/images/people/person-1.png", rotation: -1.2 },
  { name: "Devansh", designation: "Product Manager", photo: "/images/people/person-2.png", rotation: 1.5 },
  { name: "Karmal", designation: "Freelancer", photo: "/images/people/person-3.png", rotation: -0.8 },
  { name: "Dreamer 4", designation: "Filmmaker", photo: "/images/people/person-4.png", rotation: 1.0 },
  { name: "Dreamer 5", designation: "Creator", photo: "/images/people/person-5.png", rotation: -1.5 },
  { name: "Dreamer 6", designation: "Writer", photo: "/images/people/person-6.png", rotation: 0.5 },
  { name: "Dreamer 7", designation: "Artist", photo: "/images/people/person-7.png", rotation: -1.0 },
  { name: "Dreamer 8", designation: "Photographer", photo: "/images/people/person-8.png", rotation: 1.3 },
  { name: "Dreamer 9", designation: "Entrepreneur", photo: "/images/people/person-9.png", rotation: -0.5 },
];
