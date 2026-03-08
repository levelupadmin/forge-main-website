import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const learnerSources = [
  'IIT Delhi', 'NIFT', 'Christ University', 'Manipal University',
  'BITS Pilani', 'Ashoka University', 'ISB', 'NID',
  'St. Xavier\'s', 'Symbiosis', 'MICA', 'Flame University',
];

export default function LearnersFrom() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{
      background: '#000000',
      padding: isMobile ? '40px 20px' : '48px 80px',
      overflow: 'hidden',
    }}>
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
        maxWidth: 1280,
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: isMobile ? 12 : 14,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: 28,
        }}>
          Our learners are from
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: isMobile ? '12px 16px' : '14px 24px',
        }}>
          {learnerSources.map((source, i) => (
            <span
              key={source}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{
                fontSize: isMobile ? 14 : 17,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: -0.3,
                transitionDelay: `${100 + i * 60}ms`,
                padding: '6px 0',
                fontFamily: "'Open Sauce One', sans-serif",
              }}
            >
              {source}
              {i < learnerSources.length - 1 && (
                <span style={{
                  display: 'inline-block',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: '#FFBC3B',
                  marginLeft: isMobile ? 16 : 24,
                  verticalAlign: 'middle',
                  opacity: 0.6,
                }} />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
