import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { communityStats } from '@/data/communityData';

export default function CommunityStats() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-black)',
        padding: 'clamp(32px, 4vw, 56px) 24px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 32,
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {communityStats.map((stat, i) => (
          <StatItem key={i} stat={stat} isVisible={isVisible} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  stat,
  isVisible,
  delay,
}: {
  stat: typeof communityStats[0];
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.number, 1500, isVisible);

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 700,
          color: 'var(--forge-yellow)',
          lineHeight: 1,
        }}
      >
        {count}
        {stat.suffix}
      </div>
      <div
        style={{
          fontSize: 14,
          color: 'rgba(255,255,255,0.6)',
          marginTop: 8,
          fontWeight: 500,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}
