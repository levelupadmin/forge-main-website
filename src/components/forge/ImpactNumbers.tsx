import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  { number: 600, suffix: '+', label: 'Alumni' },
  { number: 250, suffix: '+', label: 'Shortfilms' },
  { number: 85, suffix: '+', label: 'Creators Built' },
  { number: 60, suffix: '+', label: 'Scripts' },
  { number: 200, suffix: '+', label: 'Collaborations Enabled' },
];

export default function ImpactNumbers() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isMobile = useIsMobile();

  return (
    <section ref={ref} className="bg-black" style={{
      padding: isMobile ? 'clamp(48px, 6vw, 80px) 20px' : 'clamp(48px, 6vw, 80px) 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Subheading */}
        <p className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
          fontSize: 15,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: '#DD6F15',
          marginBottom: 12,
          textAlign: isMobile ? 'center' : 'left',
        }}>
          The Numbers
        </p>

        {/* Main heading */}
        <h2 className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: -1.5,
          lineHeight: 1.05,
          marginBottom: isMobile ? 48 : 64,
          textAlign: isMobile ? 'center' : 'left',
          transitionDelay: '100ms',
        }}>
          Good Vibes.<br />Greater Impact.
        </h2>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: isMobile ? 32 : 16,
        }}>
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} isVisible={isVisible} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, isVisible, index, isMobile }: {
  stat: typeof stats[0];
  isVisible: boolean;
  index: number;
  isMobile: boolean;
}) {
  const count = useCountUp(stat.number, 1800, isVisible);

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        textAlign: 'center',
        transitionDelay: `${200 + index * 120}ms`,
        borderLeft: !isMobile && index > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
        paddingLeft: !isMobile && index > 0 ? 16 : 0,
      }}
    >
      <div style={{
        fontWeight: 700,
        fontSize: 'clamp(40px, 5vw, 72px)',
        color: '#FFBC3B',
        letterSpacing: -2,
        lineHeight: 1,
        fontFamily: "'Open Sauce One', sans-serif",
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{
        fontSize: isMobile ? 13 : 15,
        color: 'rgba(255,255,255,0.5)',
        marginTop: 8,
        fontWeight: 500,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
      }}>
        {stat.label}
      </div>
    </div>
  );
}
