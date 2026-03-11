import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { tribeMembers } from '@/data/communityData';

export default function MeetTheTribe() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-cream)',
        padding: 'clamp(48px, 6vw, 80px) 0',
      }}
    >
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: 12 }}
      >
        <p className="forge-subheading">Meet Your Friends for Life</p>
        <div className="forge-heading" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
          Interesting people, interesting conversations
        </div>
      </div>
      <p
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          textAlign: 'center',
          maxWidth: 640,
          margin: '0 auto 48px',
          padding: '0 24px',
          fontSize: 15,
          opacity: 0.6,
          lineHeight: 1.7,
          transitionDelay: '100ms',
        }}
      >
        Our members are founders, filmmakers, writers, and creators. The kind of people who make a 6-day residency feel like a lifetime.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 20 : 28,
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 48px)',
        }}
      >
        {tribeMembers.map((member, i) => (
          <div
            key={member.name}
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{
              textAlign: 'center',
              transitionDelay: `${200 + i * 80}ms`,
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: 14,
                border: '3px solid white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="forge-mentor-photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{member.name}</div>
            <div style={{ fontSize: 12, opacity: 0.5 }}>{member.descriptor}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
