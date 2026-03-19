import { useIsMobile } from '@/hooks/use-mobile';

export default function Hero() {
  const isMobile = useIsMobile();

  const scrollToExperiences = () => {
    const el = document.querySelector('#experiences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100svh',
      overflow: 'hidden',
      borderRadius: '0 0 32px 32px',
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    }}>
      {/* Hero video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/videos/forge-hero.mp4" type="video/mp4" />
      </video>
      {/* Fallback gradient background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #1a1a0e 0%, #2d1f00 40%, #1a1200 100%)',
        zIndex: -1,
      }} />

      {/* Animated shimmer overlay for visual richness */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(255,188,59,0.03) 0%, transparent 40%, rgba(255,188,59,0.05) 70%, transparent 100%)',
        animation: 'hero-shimmer 8s ease-in-out infinite alternate',
        pointerEvents: 'none',
      }} />

      {/* Dark gradient overlay at bottom */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
      }} />

      {/* Content — centered */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? 100 : 64,
        left: 0,
        right: 0,
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <h1 style={{
          fontWeight: 700,
          fontSize: isMobile ? 'clamp(24px, 6vw, 40px)' : 'clamp(30px, 7vw, 64px)',
          color: 'white',
          letterSpacing: -1,
          lineHeight: 1.05,
          margin: '0 0 24px',
        }}>
          The World's Most <span className="forge-gradient-text">Immersive</span>{!isMobile && <br />} Creative Education Experience
        </h1>
        <button className="forge-cta-light" onClick={scrollToExperiences}>
          Explore Experiences
        </button>
      </div>

      <style>{`
        @keyframes hero-shimmer {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
