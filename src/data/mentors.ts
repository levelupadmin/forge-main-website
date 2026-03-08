export interface Mentor {
  name: string;
  designation: string;
  photo: string;
  credentials: string[];
}

export const mentors: Mentor[] = [
  {
    name: "Mentor 1",
    designation: "Filmmaker",
    photo: "/images/mentors/mentor-1.png",
    credentials: ["50+ Films", "National Award Winner", "Cannes Selection"],
  },
  {
    name: "Mentor 2",
    designation: "Director",
    photo: "/images/mentors/mentor-2.png",
    credentials: ["Emmy Nominee", "200M+ Views", "Netflix Original"],
  },
  {
    name: "Mentor 3",
    designation: "Cinematographer",
    photo: "/images/mentors/mentor-3.png",
    credentials: ["BAFTA Nominated", "30+ Features", "Masterclass Instructor"],
  },
  {
    name: "Mentor 4",
    designation: "Writer",
    photo: "/images/mentors/mentor-4.png",
    credentials: ["NYT Bestseller", "Screenplay Award", "Published Author"],
  },
  {
    name: "Mentor 5",
    designation: "Editor",
    photo: "/images/mentors/mentor-5.png",
    credentials: ["Oscar-Winning Film", "15+ Years", "Industry Veteran"],
  },
  {
    name: "Mentor 6",
    designation: "Producer",
    photo: "/images/mentors/mentor-6.png",
    credentials: ["₹500Cr+ Box Office", "Sundance Alumnus", "Studio Head"],
  },
];
