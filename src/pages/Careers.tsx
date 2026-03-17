import Navigation from '@/components/forge/Navigation';
import MarqueeStrip from '@/components/careers/MarqueeStrip';
import HonestCase from '@/components/careers/HonestCase';
import WhoBelongsHere from '@/components/careers/WhoBelongsHere';
import VoiceOfTeam from '@/components/careers/VoiceOfTeam';
import OpenRoles from '@/components/careers/OpenRoles';
import LifeAtForge from '@/components/careers/LifeAtForge';
import HowWeHire from '@/components/careers/HowWeHire';
import ClosingCTA from '@/components/careers/ClosingCTA';
import CareersFooter from '@/components/careers/CareersFooter';

export default function Careers() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navigation />

      {/* Hero section placeholder — will be added separately */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#222222',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800,
          fontFamily: "'Open Sauce One', sans-serif",
          color: '#FFBC3B',
          marginBottom: 24,
          letterSpacing: '-0.02em',
        }}>
          Careers
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          fontFamily: "'Open Sauce One', sans-serif",
          color: 'rgba(255,255,255,0.42)',
          maxWidth: 480,
          lineHeight: 1.6,
        }}>
          Hero section coming soon.
        </p>
      </section>

      <MarqueeStrip />
      <HonestCase />
      <WhoBelongsHere />
      <VoiceOfTeam />
      <OpenRoles />
      <LifeAtForge />
      <HowWeHire />
      <ClosingCTA />
      <CareersFooter />
    </div>
  );
}
