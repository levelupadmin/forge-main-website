import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const photos = [
  { src: '/images/gallery/gallery-1.png', alt: 'Forge moment 1', height: 320 },
  { src: '/images/programs/creators-hero.jpg', alt: 'Creators at work', height: 260 },
  { src: '/images/gallery/gallery-3.png', alt: 'Forge moment 3', height: 340 },
  { src: '/images/gallery/gallery-4.png', alt: 'Forge moment 4', height: 280 },
  { src: '/images/gallery/gallery-5.png', alt: 'Forge moment 5', height: 310 },
];

const descriptionWords = (
  'The Forge is an experiential learning residency that brings together travel, hands-on creation, and a like-minded community. Built for filmmakers, writers, founders, builders, artists, and creators. You learn by doing, collaborate with your peers, and leave with something you actually made.'
).split(' ');

const boldWords = new Set([
  'experiential', 'learning', 'residency', 'travel,', 'hands-on', 'creation,',
  'community.', 'filmmakers,', 'writers,', 'founders,', 'builders,', 'artists,',
  'creators.', 'doing,', 'peers,', 'made.'
]);

export default function WhatIsForge() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Start highlighting when section enters bottom third, complete by middle
      const start = windowH * 0.8;
      const end = windowH * 0.25;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlightedCount = Math.floor(scrollProgress * descriptionWords.length);

  return (
    <section id="about" ref={ref} style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) 0 clamp(24px, 4vw, 48px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Heading */}
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
        textAlign: 'center',
        marginBottom: 48,
        padding: '0 24px',
      }}>
        <div style={{ fontSize: 'clamp(24px, 3vw, 36px)', opacity: 0.5, marginBottom: 8, fontWeight: 400 }}>what is</div>
        <div style={{
          fontWeight: 700,
          fontSize: 'clamp(72px, 10vw, 130px)',
          color: '#222',
          letterSpacing: -3,
          lineHeight: 0.95,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(8px, 1.5vw, 16px)',
        }}>
          {/* Yellow wave decoration */}
          <svg viewBox="0 0 80 50" style={{ width: 'clamp(60px, 8vw, 100px)', height: 'auto', flexShrink: 0 }}>
            {[0, 10, 20, 30].map((yOff, i) => (
              <path
                key={i}
                d={`M0 ${12 + yOff} Q10 ${6 + yOff} 20 ${12 + yOff} T40 ${12 + yOff} T60 ${12 + yOff} T80 ${12 + yOff}`}
                fill="none"
                stroke="#FFBC3B"
                strokeWidth="4"
                strokeLinecap="round"
                opacity={1 - i * 0.2}
              />
            ))}
          </svg>
          <span>the Forge?</span>
        </div>
      </div>

      {/* Photo strip + Quote overlay */}
      <div style={{ position: 'relative', margin: '0 auto', maxWidth: 1400 }}>
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

        {/* Gradient overlay */}
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

      {/* Scroll-driven highlighted description */}
      <div ref={textRef} className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
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
          fontSize: 'clamp(22px, 3vw, 32px)',
          lineHeight: 1.6,
          maxWidth: 800,
          margin: '0 auto',
          fontWeight: 400,
        }}>
          {descriptionWords.map((word, i) => {
            const isHighlighted = i < highlightedCount;
            const isBold = boldWords.has(word) || boldWords.has(word.replace(/[,.]$/, ''));
            return (
              <span
                key={i}
                style={{
                  color: isHighlighted ? '#222' : 'rgba(34,34,34,0.25)',
                  fontWeight: isHighlighted && isBold ? 700 : 400,
                  transition: 'color 0.3s ease, font-weight 0.3s ease',
                }}
              >
                {word}{' '}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
