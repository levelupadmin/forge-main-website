import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const photos = [
  { src: '/images/gallery/gallery-1.png', alt: 'Forge moment 1', height: 320 },
  { src: '/images/programs/creators-hero.jpg', alt: 'Creators at work', height: 260 },
  { src: '/images/gallery/gallery-3.png', alt: 'Forge moment 3', height: 340 },
  { src: '/images/gallery/gallery-4.png', alt: 'Forge moment 4', height: 280 },
  { src: '/images/gallery/gallery-5.png', alt: 'Forge moment 5', height: 310 },
];

export default function WhatIsForge() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="about" ref={ref} style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Heading */}
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
        textAlign: 'center',
        marginBottom: 48,
        padding: '0 24px',
      }}>
        <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8 }}>What is</div>
        <div style={{
          fontWeight: 700,
          fontSize: 'clamp(56px, 8vw, 96px)',
          color: '#222',
          letterSpacing: -2,
          lineHeight: 1,
        }}>
          the Forge
        </div>
      </div>

      {/* Photo strip + Quote overlay */}
      <div style={{ position: 'relative', margin: '0 auto', maxWidth: 1400 }}>
        {/* Photo strip */}
        <div className="forge-photo-strip" style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 clamp(16px, 3vw, 40px)',
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`forge-photo-item${isVisible ? ' visible' : ''}`}
              style={{
                flex: '0 0 auto',
                width: 'clamp(140px, 18vw, 260px)',
                transitionDelay: `${150 + i * 120}ms`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: photo.height,
                  objectFit: 'cover',
                  borderRadius: 16,
                  filter: 'grayscale(30%) sepia(10%)',
                  transition: 'filter 400ms ease, transform 400ms ease',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLImageElement).style.filter = 'grayscale(0%) sepia(0%)';
                  (e.target as HTMLImageElement).style.transform = 'scale(1.03)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLImageElement).style.filter = 'grayscale(30%) sepia(10%)';
                  (e.target as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(252,247,239,0.88) 30%, rgba(252,247,239,0.4) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        {/* Quote overlay */}
        <div className={`forge-quote-overlay${isVisible ? ' visible' : ''}`} style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          padding: '0 clamp(24px, 5vw, 80px)',
        }}>
          <p style={{
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 56px)',
            color: '#222',
            lineHeight: 1.1,
            maxWidth: 800,
            textAlign: 'center',
          }}>
            Every next level of your life demands a{' '}
            <span style={{
              background: 'linear-gradient(180deg, transparent 60%, rgba(255,188,59,0.35) 60%)',
              padding: '0 4px',
            }}>different you</span>.
          </p>
        </div>
      </div>

      {/* Divider + Description */}
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
        textAlign: 'center',
        padding: '0 clamp(24px, 5vw, 80px)',
        transitionDelay: '600ms',
      }}>
        <div style={{
          width: 48,
          height: 2,
          background: '#FFBC3B',
          margin: '48px auto 40px',
        }} />

        <p style={{
          fontSize: 18,
          opacity: 0.65,
          lineHeight: 1.8,
          maxWidth: 600,
          margin: '0 auto',
        }}>
          The Forge is an experiential learning residency that brings together travel, hands-on creation, and a like-minded community. Built for filmmakers, writers, founders, builders, artists, and creators. You learn by doing, collaborate with your peers, and leave with something you actually made.
        </p>
      </div>
    </section>
  );
}
