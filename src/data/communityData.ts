export interface SuccessStory {
  name: string;
  photo: string;
  program: string;
  quote: string;
  achievement: string;
}

export interface CommunityEvent {
  title: string;
  photo: string;
  date: string;
  location: string;
  type: 'meetup' | 'workshop' | 'guest-lecture';
}

export interface CommunityStat {
  number: number;
  suffix: string;
  label: string;
}

export const successStories: SuccessStory[] = [
  {
    name: 'Chetan Choudhary',
    photo: '/images/alumni/chetan.png',
    program: 'Filmmaking Bootcamp',
    quote: '"The Forge gave me the confidence to tell stories that matter."',
    achievement: 'Directed an award-winning short film within 6 months of graduating.',
  },
  {
    name: 'Devansh',
    photo: '/images/alumni/devansh.jpg',
    program: 'Creator Residency',
    quote: '"I found my voice and a community that believed in me."',
    achievement: 'Grew his YouTube channel to 100K subscribers in one year.',
  },
  {
    name: 'Karmal',
    photo: '/images/alumni/karmal.png',
    program: 'Writing Retreat',
    quote: '"The mentors pushed me beyond what I thought was possible."',
    achievement: 'Published her debut novel and landed a literary agent.',
  },
  {
    name: 'Priya Sharma',
    photo: '/images/people/person-4.png',
    program: 'Filmmaking Bootcamp',
    quote: '"Every day at the Forge felt like a masterclass in creativity."',
    achievement: 'Now working as a cinematographer on indie productions.',
  },
  {
    name: 'Rohan Mehta',
    photo: '/images/people/person-5.png',
    program: 'Creator Residency',
    quote: '"The connections I made here changed the trajectory of my career."',
    achievement: 'Co-founded a creative studio with fellow Forge alumni.',
  },
  {
    name: 'Ananya Das',
    photo: '/images/people/person-6.png',
    program: 'Writing Retreat',
    quote: '"The Forge is where I learned to trust my instincts as a writer."',
    achievement: 'Screenplay selected for a national film festival.',
  },
];

export const communityStats: CommunityStat[] = [
  { number: 500, suffix: '+', label: 'Community Members' },
  { number: 12, suffix: '', label: 'Countries Represented' },
  { number: 85, suffix: '+', label: 'Projects Launched' },
  { number: 20, suffix: '+', label: 'Editions Completed' },
];

export const communityEvents: CommunityEvent[] = [
  {
    title: 'Forge Community Meetup — Mumbai',
    photo: '/images/community/community-meetups.png',
    date: 'March 15, 2026',
    location: 'Mumbai, India',
    type: 'meetup',
  },
  {
    title: 'Masterclass: Visual Storytelling',
    photo: '/images/community/learning-experiences.png',
    date: 'February 22, 2026',
    location: 'Online',
    type: 'workshop',
  },
  {
    title: 'Guest Lecture: The Art of Documentary',
    photo: '/images/community/guest-lectures.png',
    date: 'January 18, 2026',
    location: 'Goa, India',
    type: 'guest-lecture',
  },
  {
    title: 'Creator Showcase Night',
    photo: '/images/community/celebrates-you.png',
    date: 'December 8, 2025',
    location: 'Delhi, India',
    type: 'meetup',
  },
  {
    title: 'Writing Workshop: Finding Your Voice',
    photo: '/images/community/productions.png',
    date: 'November 12, 2025',
    location: 'Online',
    type: 'workshop',
  },
];
