import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HERO_IMAGES = [
  '/images/community/group-beach.jpg',
  '/images/programs/creators-3.jpg',
  '/images/programs/writing-1.jpg',
  '/images/programs/creators-5.jpg',
  '/images/programs/creators-4.jpg',
  '/images/programs/writing-3.jpg',
  '/images/community/community-meetups.png',
];

export default function CommunityHero() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-black)',
        padding: 'clamp(260px, 35vw, 420px) 24px clamp(40px, 5vw, 60px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Rotating background images */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            opacity: i === activeIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        />
      ))}
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 1,
        }}
      />
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ position: 'relative', zIndex: 2 }}>
        <h1
          className="forge-heading forge-heading--light"
          style={{ maxWidth: 560, fontSize: 'clamp(24px, 4vw, 38px)', margin: '0 auto' }}
        >
          The People who make{' '}
          <span
            style={{
              textDecoration: 'underline',
              textDecorationColor: 'var(--forge-yellow)',
              textUnderlineOffset: 6,
              textDecorationThickness: 3,
            }}
          >
            the Forge
          </span>{' '}
          what it is.
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 14,
            marginTop: 12,
            maxWidth: 440,
            margin: '12px auto 0',
            lineHeight: 1.6,
            position: 'relative',
            zIndex: 2,
          }}
        >
          Every program becomes a story. And the best stories need the right characters.
        </p>
      </div>
    </section>
  );
}
