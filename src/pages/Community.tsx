import Navigation from '@/components/forge/Navigation';
import Footer from '@/components/forge/Footer';
import SmoothScroll from '@/components/forge/SmoothScroll';
import FilmGrain from '@/components/forge/FilmGrain';
import CommunityHero from '@/components/community/CommunityHero';
import SuccessStories from '@/components/community/SuccessStories';
import CommunityMembers from '@/components/community/CommunityMembers';
import CommunityStats from '@/components/community/CommunityStats';
import CommunityEvents from '@/components/community/CommunityEvents';

export default function CommunityPage() {
  return (
    <div>
      <SmoothScroll />
      <FilmGrain />
      <Navigation />
      <CommunityHero />
      <SuccessStories />
      <CommunityStats />
      <CommunityMembers />
      <CommunityEvents />
      <Footer />
    </div>
  );
}
