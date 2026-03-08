export default function Hero() {
  const scrollToExperiences = () => {
    const el = document.querySelector('#experiences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      borderRadius: '0 0 32px 32px',
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

      {/* Dark gradient overlay at bottom */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
      }} />

      {/* Content — centered */}
      <div style={{
        position: 'absolute',
        bottom: 72,
        left: 0,
        right: 0,
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <h1 style={{
          fontWeight: 700,
          fontSize: 'clamp(44px, 6vw, 80px)',
          color: 'white',
          letterSpacing: -1,
          lineHeight: 1.05,
          margin: '0 0 32px',
        }}>
          Where Dreamers<br />Become Doers.
        </h1>
        <button className="forge-cta-light" onClick={scrollToExperiences}>
          Explore Experiences
        </button>
      </div>
    </section>
  );
}
