import Navigation from '@/components/forge/Navigation';
import Footer from '@/components/forge/Footer';
import CareersHero from '@/components/careers/CareersHero';
import MarqueeStrip from '@/components/careers/MarqueeStrip';
import HonestCase from '@/components/careers/HonestCase';
import WhoBelongsHere from '@/components/careers/WhoBelongsHere';
import VoiceOfTeam from '@/components/careers/VoiceOfTeam';
import OpenRoles from '@/components/careers/OpenRoles';
import HowWeHire from '@/components/careers/HowWeHire';
import LifeAtForge from '@/components/careers/LifeAtForge';
import ClosingCTA from '@/components/careers/ClosingCTA';

export default function Careers() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navigation />
      <CareersHero />
      <MarqueeStrip />
      <HonestCase />
      <WhoBelongsHere />
      <VoiceOfTeam />
      <OpenRoles />
      <HowWeHire />
      <LifeAtForge />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
