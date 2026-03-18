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
    quote: 'I had never held a camera or seen a real shoot in my life. After making my own short film here, I can say I am a filmmaker. When I look back, I will always remember and cherish what I gained from these eight days.',
    name: 'Gagandeep Singh Bhatia',
    photo: null as unknown as string,
    program: 'FILMMAKING BOOTCAMP',
  },
  {
    quote: 'If you\'re someone who wants to start creating content but has no clue where to begin, this is your sign. Forge gave me exactly what I was missing: clarity, direction, and the confidence to just start.',
    name: 'Sagar Malik',
    photo: null as unknown as string,
    program: 'CREATOR RESIDENCY',
  },
  {
    quote: 'This cohort is like Hogwarts for writers. The location was enchanting, the mentors are visionary sages, and the peers were carefully chosen from diverse backgrounds. Forge truly lives up to its name. I would highly recommend it to everyone looking to literally level up.',
    name: 'Abhinav Bainslay',
    photo: null as unknown as string,
    program: 'WRITING RETREAT',
  },
  {
    quote: 'I started the course as a Finance coach unsure about creating content. I came out after seven days with a deep understanding of storytelling, hooks, and scripting for Instagram. Would recommend this to any creator who wants to know how to become more viral.',
    name: 'Prashant',
    photo: null as unknown as string,
    program: 'CREATOR RESIDENCY',
  },
  {
    quote: 'Fantastic experience. I got my direction in life on what I want to become, and that is a Film Director.',
    name: 'Dhruv Bhawsar',
    photo: '/images/community/dhruv-bhawsar.png',
    program: 'FILMMAKING BOOTCAMP',
  },
  {
    quote: 'What I did not imagine happened. I managed to write a synopsis for an entire web series of ten episodes with well-developed characters. All thanks to the space and mentorship provided by Forge.',
    name: 'Sudhir Narayana',
    photo: null as unknown as string,
    program: 'WRITING RETREAT',
  },
  {
    quote: 'Forge took me from just posting to actually understanding what is going on behind the screen. It was not content chaos or info overload, just learning that actually lands. Somewhere between reels and realisations, I found a stronger creator voice. And a crew I am definitely keeping for life.',
    name: 'Sathimaa',
    photo: null as unknown as string,
    program: 'CREATOR RESIDENCY',
  },
  {
    quote: 'It honestly helped boost my confidence. I feel a lot freer when it comes to experimenting and exploring. At no point did the mentors leave us in the process. They made sure we finished our script, our shoot, everything.',
    name: 'Prachy Singh',
    photo: null as unknown as string,
    program: 'FILMMAKING BOOTCAMP',
  },
  {
    quote: 'As a full-time filmmaker, I must commend Forge for successfully condensing the entire process of filmmaking, from ideation to final output, into just seven days. Covering direction, scriptwriting, cinematography, and editing within such a short timeframe is no small feat, yet Forge made it genuinely enjoyable.',
    name: 'Dhanvignesh',
    photo: null as unknown as string,
    program: 'FILMMAKING BOOTCAMP',
  },
  {
    quote: 'Forge. Level Up. These are two words I will never forget. In a single line, Forge has forged me to Level Up.',
    name: 'Subhash',
    photo: null as unknown as string,
    program: 'WRITING RETREAT',
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
    description: 'Regular meetups in Mumbai, Delhi, Bangalore, and more. Because the best ideas happen over chai and conversation.',
    icon: 'map-pin',
  },
  {
    title: 'Weekly Community Workshops',
    description: 'Online sessions every week with fellow Forge alumni and mentors. Keep learning, keep creating, keep growing.',
    icon: 'video',
  },
  {
    title: 'Alumni Perks from Brand Partners',
    description: 'Exclusive discounts and early access from our partners. Gear, software, experiences, and more.',
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
