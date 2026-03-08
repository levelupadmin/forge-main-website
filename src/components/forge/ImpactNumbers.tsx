import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  { number: 600, suffix: '+', label: 'Alumni', image: '/images/gallery/gallery-1.png' },
  { number: 250, suffix: '+', label: 'Shortfilms', image: '/images/gallery/gallery-2.png' },
  { number: 85, suffix: '+', label: 'Creators Built', image: '/images/gallery/gallery-3.png' },
  { number: 60, suffix: '+', label: 'Scripts', image: '/images/gallery/gallery-4.png' },
  { number: 200, suffix: '+', label: 'Collaborations Enabled', image: '/images/gallery/gallery-5.png' },
];

const gridAreas = [
  { gridColumn: '1', gridRow: '1' },
  { gridColumn: '2', gridRow: '1' },
  { gridColumn: '3 / 5', gridRow: '1' },
  { gridColumn: '1 / 3', gridRow: '2' },
  { gridColumn: '3 / 5', gridRow: '2' },
];

export default function ImpactNumbers() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '48px 16px' : 'clamp(48px, 6vw, 80px) 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
          fontSize: isMobile ? 13 : 15,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: '#DD6F15',
          marginBottom: 12,
          textAlign: 'center',
        }}>The Numbers</p>

        <h2 className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
          fontSize: isMobile ? 'clamp(28px, 7vw, 40px)' : 'clamp(40px, 6vw, 64px)',
          fontWeight: 700,
          color: '#222222',
          letterSpacing: -1.5,
          lineHeight: 1.05,
          marginBottom: isMobile ? 28 : 56,
          textAlign: 'center',
          transitionDelay: '100ms',
        }}>
          Good Vibes.<br />Greater Impact.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
          gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 220px)',
          gap: isMobile ? 8 : 16,
        }}>
          {stats.map((stat, i) => (
            <BentoCard
              key={i}
              stat={stat}
              isVisible={isVisible}
              index={i}
              isMobile={isMobile}
              gridStyle={isMobile ? {} : gridAreas[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ stat, isVisible, index, isMobile, gridStyle }: {
  stat: typeof stats[0];
  isVisible: boolean;
  index: number;
  isMobile: boolean;
  gridStyle: React.CSSProperties;
}) {
  const count = useCountUp(stat.number, 1800, isVisible);

  return (
    <div
      className={`forge-card-glow forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        ...gridStyle,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: isMobile ? 12 : 16,
        minHeight: isMobile ? 120 : undefined,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: isMobile ? '12px' : '28px 32px',
        transitionDelay: `${200 + index * 120}ms`,
        cursor: 'default',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${stat.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.25,
        transition: 'opacity 0.4s ease, transform 0.6s ease',
      }} className="bento-bg" />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 30%, rgba(26,26,26,0.6) 100%)',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontWeight: 700,
          fontSize: isMobile ? 'clamp(28px, 8vw, 40px)' : 'clamp(44px, 5vw, 72px)',
          color: '#FFBC3B',
          letterSpacing: -2,
          lineHeight: 1,
          fontFamily: "'Open Sauce One', sans-serif",
        }}>
          {count}{stat.suffix}
        </div>
        <div style={{
          fontSize: isMobile ? 9 : 15,
          color: 'rgba(255,255,255,0.55)',
          marginTop: isMobile ? 4 : 8,
          fontWeight: 500,
          letterSpacing: 0.5,
          textTransform: 'uppercase',
          lineHeight: 1.3,
        }}>
          {stat.label}
        </div>
      </div>
    </div>
  );
}
