import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ManifestoBeat {
  text: string;
  image: string;
  align: 'left' | 'right';
}

const beats: ManifestoBeat[] = [
  {
    text: 'We were tired of watching creative people not create.',
    image: '/images/programs/filmmaking-5.jpg',
    align: 'left',
  },
  {
    text: 'There were hundreds of courses. There was knowledge all over the internet. But they went back to their lives, back to the routine, and nothing changed.',
    image: '/images/programs/creators-1.jpg',
    align: 'right',
  },
  {
    text: 'We knew the missing piece was not more learning. It was a place designed to create, with the right people around you, where not creating was simply not an option.',
    image: '/images/programs/writing-1.jpg',
    align: 'left',
  },
];

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function BeatCard({ beat, isMobile }: { beat: ManifestoBeat; isMobile: boolean }) {
  const { ref, visible } = useReveal(0.15);
  const textAlign = beat.align;

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        height: isMobile ? '50vh' : '60vh',
        minHeight: isMobile ? 320 : 420,
        borderRadius: 12,
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : 40}px) scale(${visible ? 1 : 0.97})`,
        transition: 'opacity 0.9s ease, transform 0.9s ease',
      }}
    >
      {/* Background image */}
      <img
        src={beat.image}
        alt=""
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%)',
        }}
      />

      {/* Text */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? '32px 24px' : '48px 56px',
          textAlign,
        }}
      >
        <p
          style={{
            fontSize: isMobile ? 'clamp(14px, 3.8vw, 17px)' : 'clamp(18px, 2.2vw, 24px)',
            lineHeight: 1.7,
            fontWeight: 400,
            color: 'rgba(255,255,255,0.9)',
            maxWidth: isMobile ? '100%' : 560,
            margin: textAlign === 'right' ? '0 0 0 auto' : 0,
          }}
        >
          {beat.text}
        </p>
      </div>
    </div>
  );
}

export default function WhyBuilt() {
  const { ref: titleRef, visible: titleVisible } = useReveal(0.2);
  const { ref: closingRef, visible: closingVisible } = useReveal(0.2);
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        background: '#000000',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 60%, rgba(255,188,59,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: isMobile ? '48px 16px' : 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 24 : 32,
        }}
      >
        {/* Standard heading */}
        <div
          ref={titleRef}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? 16 : 32,
            opacity: titleVisible ? 1 : 0,
            transform: `translateY(${titleVisible ? 0 : 30}px)`,
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="forge-subheading forge-subheading--light">Our Beginning</div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: isMobile ? '40px' : 'clamp(40px, 6vw, 64px)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginTop: 12,
            }}
          >
            Why it was Built
          </h2>
        </div>

        {/* Beat cards */}
        {beats.map((beat, i) => (
          <BeatCard key={i} beat={beat} isMobile={isMobile} />
        ))}

        {/* Closing statement */}
        <div
          ref={closingRef}
          style={{
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto',
            paddingTop: isMobile ? 24 : 48,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: isMobile ? 'clamp(20px, 5.5vw, 32px)' : 'clamp(28px, 3.5vw, 48px)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              opacity: closingVisible ? 1 : 0,
              transform: `translateY(${closingVisible ? 0 : 30}px)`,
              transition: 'opacity 1s ease, transform 1s ease',
            }}
          >
            <div>The Forge was not created to dream.</div>
            <div style={{ marginTop: isMobile ? 8 : 12 }}>
              It was built to help you{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span
                  style={{
                    position: 'absolute',
                    inset: '-12px -20px',
                    background: closingVisible
                      ? 'radial-gradient(ellipse at 50% 50%, rgba(255,188,59,0.25) 0%, transparent 70%)'
                      : 'transparent',
                    borderRadius: '50%',
                    transition: 'background 1.2s ease 0.5s',
                    pointerEvents: 'none',
                    zIndex: -1,
                  }}
                />
                start
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: '#FFBC3B',
                    borderRadius: 2,
                    transform: `scaleX(${closingVisible ? 1 : 0})`,
                    transformOrigin: 'left',
                    transition: 'transform 0.8s ease 0.8s',
                  }}
                />
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
