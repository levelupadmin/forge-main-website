import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { number: 600, suffix: '+', label: 'Dreamers', color: 'white' },
  { number: 25, suffix: '+', label: 'Editions Across the World', color: '#FFBC3B' },
  { number: 10, suffix: '+', label: 'Cities Explored', color: 'white' },
];

export default function ImpactNumbers() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: '48px 80px 16px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        {stats.map((stat, i) => (
          <BentoBox key={i} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}

function BentoBox({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.number, 1500, isVisible);

  return (
    <div className="forge-bento" style={{
      background: '#222222',
      borderRadius: 'clamp(14px, 2vw, 20px)',
      minHeight: 'clamp(140px, 20vw, 280px)',
      padding: 'clamp(28px, 4vw, 64px) clamp(20px, 3vw, 48px)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    }}>
      {/* REPLACE: Background photo for this bento box */}
      <div className="forge-bento-bg" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/placeholder.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontWeight: 700,
          fontSize: 'clamp(36px, 6vw, 80px)',
          color: stat.color,
          letterSpacing: -2,
          lineHeight: 1,
        }}>
          {count}{stat.suffix}
        </div>
        <div style={{
          fontSize: 14,
          color: 'white',
          opacity: 0.55,
          marginTop: 4,
        }}>
          {stat.label}
        </div>
      </div>
    </div>
  );
}
