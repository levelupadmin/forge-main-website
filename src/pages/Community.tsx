import Navigation from '@/components/forge/Navigation';
import Footer from '@/components/forge/Footer';
import SmoothScroll from '@/components/forge/SmoothScroll';
import FilmGrain from '@/components/forge/FilmGrain';
import TrustedAcrossBorders from '@/components/forge/TrustedAcrossBorders';
import LearnersFrom from '@/components/forge/LearnersFrom';
import CommunityHero from '@/components/community/CommunityHero';
import CommunityStats from '@/components/community/CommunityStats';
import CommunityMarquee from '@/components/forge/Community';
import CommunityTestimonials from '@/components/community/CommunityTestimonials';
import BeyondTheProgram from '@/components/community/BeyondTheProgram';

export default function CommunityPage() {
  return (
    <div>
      <SmoothScroll />
      <FilmGrain />
      <Navigation />
      <CommunityHero />
      <CommunityStats />
      <LearnersFrom />
      <CommunityMarquee />
      <CommunityTestimonials />
      <BeyondTheProgram />
      <TrustedAcrossBorders />
      <Footer />
    </div>
  );
}
