import { useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  { number: 600, suffix: '+', label: 'Alumni', context: 'from 12+ countries', image: '/images/gallery/gallery-1.png' },
  { number: 250, suffix: '+', label: 'Shortfilms', context: 'produced across editions', image: '/images/gallery/gallery-2.png' },
  { number: 85, suffix: '+', label: 'Creators Built', context: 'and counting', image: '/images/gallery/gallery-3.png' },
  { number: 60, suffix: '+', label: 'Scripts', context: 'written & workshopped', image: '/images/gallery/gallery-4.png' },
  { number: 200, suffix: '+', label: 'Collaborations Enabled', context: 'across disciplines', image: '/images/gallery/gallery-5.png' },
];

export default function ImpactNumbers() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} style={{
      backgroundColor: '#0A0A0A',
      padding: isMobile ? '56px 20px' : 'clamp(64px, 8vw, 100px) clamp(40px, 6vw, 120px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Hover background image */}
      {stats.map((stat, i) => (
        <div key={i} style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${stat.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: hoveredIndex === i ? 0.08 : 0,
          transition: 'opacity 0.6s ease',
          pointerEvents: 'none',
        }} />
      ))}

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
          fontSize: isMobile ? 12 : 14,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: '#FFBC3B',
          marginBottom: 10,
        }}>The Numbers</p>

        <h2 className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
          fontSize: isMobile ? 32 : 'clamp(40px, 5vw, 56px)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: -1.5,
          lineHeight: 1.1,
          marginBottom: isMobile ? 36 : 56,
          transitionDelay: '100ms',
        }}>
          Good Vibes.<br />Greater Impact.
        </h2>

        {/* Stat rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Top divider */}
          <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
            height: 1,
            background: 'rgba(255,255,255,0.1)',
            transitionDelay: '200ms',
          }} />

          {stats.map((stat, i) => (
            <StatRow
              key={i}
              stat={stat}
              index={i}
              isVisible={isVisible}
              isMobile={isMobile}
              onHover={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatRow({ stat, index, isVisible, isMobile, onHover }: {
  stat: typeof stats[0];
  index: number;
  isVisible: boolean;
  isMobile: boolean;
  onHover: (i: number | null) => void;
}) {
  const count = useCountUp(stat.number, 1800, isVisible);
  const [hovered, setHovered] = useState(false);
  const delay = 250 + index * 100;

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      onMouseEnter={() => { setHovered(true); onHover(index); }}
      onMouseLeave={() => { setHovered(false); onHover(null); }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '20px 0' : '28px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        cursor: 'default',
        transitionDelay: `${delay}ms`,
        transform: hovered ? 'translateX(8px)' : 'translateX(0)',
        transition: 'transform 0.3s ease',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: isMobile ? 12 : 24,
      }}>
        <span style={{
          fontWeight: 700,
          fontSize: isMobile ? 'clamp(36px, 10vw, 48px)' : 'clamp(56px, 6vw, 96px)',
          color: '#FFBC3B',
          letterSpacing: -2,
          lineHeight: 1,
          fontFamily: "'Open Sauce One', sans-serif",
          transition: 'color 0.3s ease',
        }}>
          {count}{stat.suffix}
        </span>
        <span style={{
          fontSize: isMobile ? 16 : 'clamp(20px, 2.5vw, 32px)',
          fontWeight: 500,
          color: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
          transition: 'color 0.3s ease',
          letterSpacing: -0.5,
        }}>
          {stat.label}
        </span>
      </div>

      {!isMobile && (
        <span style={{
          fontSize: 14,
          color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
          fontWeight: 400,
          letterSpacing: 0.5,
          transition: 'color 0.3s ease, opacity 0.3s ease',
          textTransform: 'lowercase',
          fontStyle: 'italic',
        }}>
          {stat.context}
        </span>
      )}
    </div>
  );
}
