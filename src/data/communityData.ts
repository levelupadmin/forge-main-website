export interface TribeMember {
  name: string;
  photo: string;
  descriptor: string;
  instagram?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  photo: string;
  program: string;
}

export interface CommunityPerk {
  title: string;
  description: string;
  icon: string;
}

export interface CommunityStat {
  number: number;
  suffix: string;
  label: string;
}

export const tribeMembers: TribeMember[] = [
  { name: 'Chetan Choudhary', photo: '/images/alumni/chetan.png', descriptor: 'Independent Filmmaker', instagram: 'https://instagram.com/chetan' },
  { name: 'Devansh', photo: '/images/alumni/devansh.jpg', descriptor: 'Product Manager & Creator', instagram: 'https://instagram.com/devansh' },
  { name: 'Kiruba Shankar', photo: '/images/alumni/kiruba.jpg', descriptor: 'Content Creator', instagram: 'https://instagram.com/kiruba' },
  { name: 'Vishal Paul', photo: '/images/alumni/vishal.jpg', descriptor: 'Writer & Author', instagram: 'https://instagram.com/vishal' },
  { name: 'Karmal', photo: '/images/alumni/karmal.png', descriptor: 'Freelance Writer', instagram: 'https://instagram.com/karmal' },
  { name: 'Taj Mola', photo: '/images/people/person-1.png', descriptor: 'Filmmaker & Storyteller', instagram: 'https://instagram.com/tajmola' },
  { name: 'Shoaib', photo: '/images/people/person-2.png', descriptor: 'Science on Beats', instagram: 'https://instagram.com/shoaib' },
  { name: 'Anurag', photo: '/images/people/person-3.png', descriptor: 'Independent Filmmaker', instagram: 'https://instagram.com/anurag' },
  { name: 'Aanchal Chaturvedi', photo: '/images/people/person-4.png', descriptor: 'Content Creator', instagram: 'https://instagram.com/aanchal' },
  { name: 'Ashwin Venkatesh', photo: '/images/people/person-5.png', descriptor: 'Account Manager', instagram: 'https://instagram.com/ashwin' },
  { name: 'Freddy George', photo: '/images/people/person-6.png', descriptor: 'Podcaster', instagram: 'https://instagram.com/freddy' },
  { name: 'Ananya Ramprasad', photo: '/images/people/person-7.png', descriptor: 'Actor & Writer', instagram: 'https://instagram.com/ananya' },
  { name: 'Priya Sharma', photo: '/images/people/person-8.png', descriptor: 'Documentary Filmmaker', instagram: 'https://instagram.com/priya' },
  { name: 'Rohit Menon', photo: '/images/people/person-9.png', descriptor: 'Screenwriter', instagram: 'https://instagram.com/rohit' },
  { name: 'Nisha Kapoor', photo: '/images/people/person-1.png', descriptor: 'Brand Strategist', instagram: 'https://instagram.com/nisha' },
  { name: 'Arjun Das', photo: '/images/people/person-2.png', descriptor: 'Photographer', instagram: 'https://instagram.com/arjun' },
  { name: 'Meera Iyer', photo: '/images/people/person-3.png', descriptor: 'Creative Director', instagram: 'https://instagram.com/meera' },
  { name: 'Siddharth Rao', photo: '/images/people/person-4.png', descriptor: 'Founder & CEO', instagram: 'https://instagram.com/siddharth' },
  { name: 'Kavya Nair', photo: '/images/people/person-5.png', descriptor: 'Poet & Author', instagram: 'https://instagram.com/kavya' },
  { name: 'Vikram Joshi', photo: '/images/people/person-6.png', descriptor: 'Music Producer', instagram: 'https://instagram.com/vikram' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'The Forge gave me the confidence to tell stories that matter. I walked in unsure, and walked out with a film I\'m proud of.',
    name: 'Chetan Choudhary',
    photo: '/images/alumni/chetan.png',
    program: 'Filmmaking Bootcamp',
  },
  {
    quote: 'I found my voice and a community that believed in me. The connections I made here changed the trajectory of my career.',
    name: 'Devansh',
    photo: '/images/alumni/devansh.jpg',
    program: 'Creator Residency',
  },
  {
    quote: 'The mentors pushed me beyond what I thought was possible. Every day felt like a masterclass in creativity.',
    name: 'Karmal',
    photo: '/images/alumni/karmal.png',
    program: 'Writing Retreat',
  },
  {
    quote: 'Every day at the Forge felt like a masterclass in creativity. The people, the energy — nothing compares.',
    name: 'Kiruba Shankar',
    photo: '/images/alumni/kiruba.jpg',
    program: 'Filmmaking Bootcamp',
  },
  {
    quote: 'The Forge is where I learned to trust my instincts as a writer. The community keeps me going even months later.',
    name: 'Vishal Paul',
    photo: '/images/alumni/vishal.jpg',
    program: 'Writing Retreat',
  },
  {
    quote: 'The connections I made here changed the trajectory of my career. We still collaborate on projects together.',
    name: 'Anurag',
    photo: '/images/people/person-3.png',
    program: 'Filmmaking Bootcamp',
  },
];

export const communityPerks: CommunityPerk[] = [
  {
    title: 'City & Edition-Based Groups',
    description: 'Stay connected with your batch through private groups that keep the conversations, collaborations, and friendships alive.',
    icon: 'users',
  },
  {
    title: 'City Meetups',
    description: 'Regular meetups in Mumbai, Delhi, Bangalore, and more — because the best ideas happen over chai and conversation.',
    icon: 'map-pin',
  },
  {
    title: 'Weekly Community Workshops',
    description: 'Online sessions every week with fellow Forge alumni and mentors — keep learning, keep creating, keep growing.',
    icon: 'video',
  },
  {
    title: 'Alumni Perks from Brand Partners',
    description: 'Exclusive discounts and early access from our partners — gear, software, experiences, and more.',
    icon: 'gift',
  },
  {
    title: 'Collaborative Projects',
    description: 'Find your next co-creator from the Forge network. Films, podcasts, books — the best work happens together.',
    icon: 'sparkles',
  },
];

export const communityStats: CommunityStat[] = [
  { number: 500, suffix: '+', label: 'Community Members' },
  { number: 12, suffix: '', label: 'Countries Represented' },
  { number: 85, suffix: '+', label: 'Projects Launched' },
  { number: 20, suffix: '+', label: 'Editions Completed' },
];
