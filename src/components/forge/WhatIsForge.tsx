import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const allPhotos = [
  { src: '/images/programs/filmmaking-5.jpg', alt: 'Filmmaking', height: 320 },
  { src: '/images/partners/cinema-cameras.jpg', alt: 'Camera work', height: 260 },
  { src: '/images/partners/creator-tech.jpg', alt: 'Lighting', height: 340 },
  { src: '/images/programs/writing-3.jpg', alt: 'Writing workshop', height: 280 },
  { src: '/images/partners/publishing.jpg', alt: 'Scripting', height: 310 },
];

const descriptionWords = (
  'The Forge is an experiential learning residency that brings together travel, hands-on creation, and a like-minded community.'
).split(' ');

const descriptionWords2 = (
  'Built for filmmakers, writers, founders, builders, artists, and creators where you learn by doing, collaborating, and creating something you can call your own.'
).split(' ');

const boldWords = new Set([
  'experiential', 'learning', 'residency', 'travel,', 'hands-on', 'creation,',
  'community.', 'filmmakers,', 'writers,', 'founders,', 'builders,', 'artists,',
  'creators', 'doing,', 'collaborating,', 'own.'
]);

export default function WhatIsForge() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isMobile = useIsMobile();
  const textRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const photos = isMobile ? allPhotos.slice(0, 3) : allPhotos;

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.8;
      const end = windowH * 0.25;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlightedCount = Math.floor(scrollProgress * (descriptionWords.length + descriptionWords2.length));
  const highlightedCount1 = Math.min(highlightedCount, descriptionWords.length);
  const highlightedCount2 = Math.max(0, highlightedCount - descriptionWords.length);

  return (
    <section id="about" ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: isMobile ? '40px 0 clamp(24px, 4vw, 48px)' : 'clamp(48px, 6vw, 80px) 0 clamp(24px, 4vw, 48px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Heading */}
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
        textAlign: 'center',
        marginBottom: 48,
        padding: '0 24px',
      }}>
        <div className="forge-subheading">What is</div>
        <div className="forge-heading" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(8px, 1.5vw, 16px)',
        }}>
          <svg viewBox="0 0 80 50" style={{ width: 'clamp(40px, 5vw, 60px)', height: 'auto', flexShrink: 0 }}>
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
          gap: isMobile ? 10 : 16,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 clamp(16px, 3vw, 40px)',
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`forge-photo-item${isVisible ? ' visible' : ''}`}
              style={{
                flex: isMobile ? '1 1 0' : '0 0 auto',
                width: isMobile ? undefined : 'clamp(140px, 18vw, 260px)',
                transitionDelay: `${150 + i * 120}ms`,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: isMobile ? 160 : photo.height,
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

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(252,247,239,0.88) 30%, rgba(252,247,239,0.4) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

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
            fontSize: 'clamp(28px, 5vw, 56px)',
            color: '#000000',
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
        <p style={{
          fontSize: isMobile ? 'clamp(17px, 4.5vw, 24px)' : 'clamp(20px, 3vw, 32px)',
          lineHeight: 1.6,
          maxWidth: 800,
          margin: '48px auto 0',
          fontWeight: 400,
        }}>
          {descriptionWords.map((word, i) => {
            const isHighlighted = i < highlightedCount1;
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

        <p style={{
          fontSize: isMobile ? 'clamp(17px, 4.5vw, 24px)' : 'clamp(20px, 3vw, 32px)',
          lineHeight: 1.6,
          maxWidth: 800,
          margin: '24px auto 0',
          fontWeight: 400,
        }}>
          {descriptionWords2.map((word, i) => {
            const isHighlighted = i < highlightedCount2;
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
