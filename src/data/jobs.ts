export const TALLY_FORM = 'https://tally.so/r/mO8eZ8';

export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  compensation: string;
  status: string;
  neededPills: string[];
  about: string[];
  whatYouWillDo: string[];
  whoWeAreLookingFor: string[];
  notForYou?: string[];
}

export const jobs: JobRole[] = [
  {
    id: 'social-media-content-creator',
    title: 'Social Media Content Creator',
    department: 'Marketing',
    location: 'Chennai · In-office · Full-time / Intern',
    compensation: 'Starts at ₹3.6 LPA, goes up based on portfolio and vibe',
    status: 'Open Now',
    neededPills: [
      'Perennially on social media',
      'Immaculate taste',
      'Extremely articulate',
      'High agency',
      'Great vibes',
      'Top 1% viral sense',
      'Deep Instagram instinct',
      'Can package ideas sharply',
      'Can write think and ship fast',
      'Understands internet pop and startup culture',
      'Knows what feels native vs forced',
      'Good with people shoots chaos and video content',
    ],
    about: [
      "You will own our social media pages with over 300,000 followers and one of India's largest creative communities, and be responsible for its growth with our creative team. Not posting and scheduling or the follower count. Actual growth. Engagement. Views. Non-follower reach. Brand recall. Better ideas. Better hooks. Better execution.",
      'You will work closely with videographers, editors, and designers to take content from idea to publish. This role is primarily for Instagram and X. You should know how to spot trends early, pull mind-blowing references, manage and direct creation end to end, and build pages that have a fan following.',
      'No fixed experience required. Zero experience is fine. Bad taste is not.',
    ],
    whatYouWillDo: [
      'Own the content calendar and publish consistently across Instagram and X',
      'Spot trends early and move fast, before they are everywhere',
      'Script, shoot, and direct short-form content end to end',
      'Pull sharp references and bring them into the team before briefings',
      'Write captions, hooks, and copy that stop the scroll',
      'Manage comment sections, engage with the community, and build brand voice',
      'Collaborate with videographers, editors, and designers from idea to post',
      'Track performance and use it to make the next thing better',
    ],
    whoWeAreLookingFor: [
      'You live on Instagram and X and you have a genuine feel for what works',
      'You have a portfolio, even personal pages count if they show taste',
      'D2C, startup, or education content experience is a big plus',
      'Travel or event coverage experience is a plus',
      'You are not introverted, not cringe, and not looking for a slow, comfy content job',
    ],
  },
  {
    id: 'business-development-executive',
    title: 'Business Development Executive',
    department: 'Growth',
    location: 'Chennai · In-office',
    compensation: 'To be updated, drop your CV and we will discuss',
    status: 'Open Now',
    neededPills: [],
    about: [
      'Full job description coming soon. We are hiring a sharp, high-energy Business Development Executive to build partnerships, open new channels, and bring qualified leads into our programs.',
      'If you have a background in sales, partnerships, or growth and you care about creative education, write to us directly.',
    ],
    whatYouWillDo: [
      'Identify and close partnerships with colleges, communities, and brands',
      'Build and manage a pipeline of active partnerships with clear KPIs',
      'Represent LevelUp Learning at events, panels, and industry gatherings',
      'Work closely with the admissions team to track how partner leads convert',
    ],
    whoWeAreLookingFor: [
      'You close deals, not just open conversations',
      'You are comfortable picking up the phone and pitching something you believe in',
      'You understand how creative communities in India think and what they respond to',
    ],
  },
  {
    id: 'operations-associate',
    title: 'Operations Associate',
    department: 'Admissions and Operations',
    location: 'Chennai · In-office · 6-day work week',
    compensation: 'Starts at ₹2.4 LPA, goes up based on experience and fit',
    status: 'Open Now',
    neededPills: [],
    about: [
      'We are hiring an Operations Associate to help run the engine behind our programs. This is a high-responsibility, customer-facing role for someone who is organised, dependable, calm under pressure, and strong at execution.',
      'A large part of this role happens on the computer and across communication tools, but the impact is very real. You will help make sure our online programs run smoothly, our learners stay informed, our support stays sharp, and our offline residencies are coordinated well.',
      'This role is ideal for someone who likes structure, follow-through, communication, and being the person who makes sure nothing slips.',
    ],
    whatYouWillDo: [
      'Moderate Zoom calls for our weekend courses and workshops',
      'Send reminder emails, WhatsApp messages, and group communications',
      'Call learners to remind them about sessions, attendance, and assignment submissions',
      'Support onboarding calls for new students joining our programs',
      'Handle customer support across parts of the business and resolve queries clearly and quickly',
      'Coordinate travel-related logistics for our offline residencies',
      'Coordinate with vendors for online and offline programs including goodie bags and other requirements',
      'Work closely with internal teams to ensure communication, delivery, and learner experience stay strong',
    ],
    whoWeAreLookingFor: [
      'Highly organised and detail-oriented',
      'Communicates clearly and confidently',
      'Comfortable speaking to customers, learners, vendors, and team members every day',
      'Can manage follow-ups well and does not let things drop',
      'Dependable, proactive, and good at handling moving parts',
      'Comfortable working weekends with weekly off on weekdays',
      'Calm, responsive, and solution-oriented in a fast-moving environment',
    ],
    notForYou: [
      'You dislike customer interaction',
      'You are not comfortable with follow-ups and routine execution',
      'You want a purely creative or non-operational role',
      'You are not comfortable working weekends',
      'You struggle with time sensitivity, communication, or attention to detail',
    ],
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    department: 'Marketing',
    location: 'Chennai · On-site or Remote',
    compensation: 'Starts at ₹2.4 LPA, goes up based on experience and portfolio',
    status: 'Open Now',
    neededPills: [
      'Great taste',
      'Strong design and storytelling sense',
      'Canva or Photoshop expert',
      'Strong social media design instinct',
      'Understands paid ad creatives',
      'Understands carousels',
      'Adapts brand guidelines without repetition',
      'Strong references brain',
      'Can bring ideas not just execute briefs',
      'Motion design basics are a plus',
      'Knows how to use AI to speed up workflows',
    ],
    about: [
      "You will work on social media creatives, paid ad creatives, carousels, campaign assets, and brand-led design across our pages with 300K+ followers, building India's largest community of creatives.",
      'This is not a role for someone who only knows how to make things look nice. We want someone with taste, visual judgment, storytelling instinct, and a strong understanding of how design works on the internet.',
      'You should know how to work inside an existing brand system, adapt guidelines well, and still keep the output fresh. Experience with Canva or Photoshop is mandatory. Motion design is a plus. Taste is not optional.',
    ],
    whatYouWillDo: [
      'Design static and animated assets for Instagram, YouTube thumbnails, and paid ads',
      'Build carousels, campaign creatives, and brand-led social content',
      'Work inside our existing brand system and keep the output fresh',
      'Collaborate closely with marketing, writing, and content teams',
      'Bring strong visual references to the table and help shape better ideas',
      'Design event materials and collateral for program editions',
      'Use AI tools to speed up your workflow without making the work feel lazy',
    ],
    whoWeAreLookingFor: [
      'Your portfolio shows real work, not just student projects',
      'You design with intent, every visual decision has a reason',
      'You are fast and can produce at volume without dropping quality',
      'Education, travel, or experience-brand work is a strong advantage',
      'Paid ads experience and carousel-heavy social work is a plus',
      'You are an artist at heart, design is not just a job to you',
    ],
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    department: 'Marketing',
    location: 'Chennai · In-office · Full-time',
    compensation: 'Starts at ₹3 LPA, goes up based on portfolio and experience',
    status: 'Open Now',
    neededPills: [
      'Great taste',
      'Strong storytelling sense',
      'Basic motion graphics skills',
      'Strong editing instinct',
      'Extremely online',
      'Always collecting references',
      'Knows what feels sharp vs stale',
      'Can edit for attention retention and emotion',
      'Works well with designers writers and marketers',
    ],
    about: [
      'You will edit storytelling-led content for our brands across organic and paid social. This is not a bulk-editing role. We want someone with taste, rhythm, emotional instinct, and a strong eye for packaging ideas well.',
      'You should understand how content works on social media, spend time consuming great content, and constantly bring in strong references from the internet.',
      'You will work across brands and pages with 300K+ followers, collaborating closely with designers, writers, marketers, and the larger creative team. You will learn from our senior video editors and be trained by them if needed. Basic motion graphics are important. Great judgment is even more important.',
    ],
    whatYouWillDo: [
      'Edit short-form reels and stories for Instagram and YouTube Shorts at a consistent weekly output',
      'Cut long-form content including program recaps, student documentaries, and mentor interviews',
      'Produce trailers and promos for upcoming Forge editions',
      'Handle colour grading, sound design, and basic motion graphics',
      'Bring strong references into the team and help shape better content ideas',
      'Manage an organised asset library so footage is findable and usable',
    ],
    whoWeAreLookingFor: [
      'Your cuts have a point of view, not just technically clean but emotionally effective',
      'You work fast in Premiere Pro or Final Cut and your project files are not a disaster',
      'You understand pacing, music selection, and how to hold attention on mobile',
      'You have edited content that has actually performed, show us the numbers',
      'You are comfortable with high output and tight turnarounds without losing quality',
    ],
  },
];
