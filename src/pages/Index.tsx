import Navigation from '@/components/forge/Navigation';
import Hero from '@/components/forge/Hero';
import HeroBar from '@/components/forge/HeroBar';
import SmoothScroll from '@/components/forge/SmoothScroll';
import FilmGrain from '@/components/forge/FilmGrain';
import ImpactNumbers from '@/components/forge/ImpactNumbers';
import GlobalReach from '@/components/forge/GlobalReach';
import WhatIsForge from '@/components/forge/WhatIsForge';
import LearnDoBecome from '@/components/forge/LearnDoBecome';
import Experiences from '@/components/forge/Experiences';
import Ethos from '@/components/forge/Ethos';
import Mentors from '@/components/forge/Mentors';
import PeopleOfForge from '@/components/forge/PeopleOfForge';
import BrandPartners from '@/components/forge/BrandPartners';
import Community from '@/components/forge/Community';
import Gallery from '@/components/forge/Gallery';
import Testimonials from '@/components/forge/Testimonials';
import ClosingStatement from '@/components/forge/ClosingStatement';
import Footer from '@/components/forge/Footer';
import FloatingCTA from '@/components/forge/FloatingCTA';
import SectionNudge from '@/components/forge/SectionNudge';

const Index = () => {
  return (
    <div>
      <SmoothScroll />
      <FilmGrain />
      <Navigation />
      <Hero />
      <HeroBar />
      <WhatIsForge />
      <LearnDoBecome />
      <Experiences />
      <Ethos />
      <Mentors />
      <SectionNudge text="Ready to join them?" />
      <PeopleOfForge />
      <BrandPartners />
      <Community />
      <GlobalReach />
      <Gallery />
      <Testimonials />
      <SectionNudge text="Start your journey →" />
      <ClosingStatement />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
