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
      {/* Fallback gradient background (behind video) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #1a1a0e 0%, #2d1f00 40%, #1a1200 100%)',
        zIndex: -1,
      }} />

      {/* Radial glow overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 40%, rgba(255,188,59,0.15) 0%, transparent 60%)',
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%)',
      }} />

      {/* Content */}
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
          fontSize: 'clamp(44px, 7vw, 88px)',
          color: 'white',
          letterSpacing: -1,
          lineHeight: 1.0,
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
