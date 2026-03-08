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
      "/placeholder.svg", /* REPLACE: Filmmaking bootcamp photo 1 */
      "/placeholder.svg", /* REPLACE: Filmmaking bootcamp photo 2 */
      "/placeholder.svg", /* REPLACE: Filmmaking bootcamp photo 3 */
      "/placeholder.svg", /* REPLACE: Filmmaking bootcamp photo 4 */
    ],
  },
  {
    tag: "Creator Residency",
    title: "the Forge Creator Residency",
    description: "Build your personal brand through content with like-minded founders and creators.",
    href: "/creator-residency",
    nextEdition: "Manali \u00B7 Jun 2025",
    photos: [
      "/placeholder.svg", /* REPLACE: Creator residency photo 1 */
      "/placeholder.svg", /* REPLACE: Creator residency photo 2 */
      "/placeholder.svg", /* REPLACE: Creator residency photo 3 */
      "/placeholder.svg", /* REPLACE: Creator residency photo 4 */
    ],
  },
  {
    tag: "Writing",
    title: "the Forge Writing Retreat",
    description: "Retreat away from the noise and focus on your story with your writing community.",
    href: "/writing-retreat",
    nextEdition: null,
    photos: [
      "/placeholder.svg", /* REPLACE: Writing retreat photo 1 */
      "/placeholder.svg", /* REPLACE: Writing retreat photo 2 */
      "/placeholder.svg", /* REPLACE: Writing retreat photo 3 */
      "/placeholder.svg", /* REPLACE: Writing retreat photo 4 */
    ],
  },
];
