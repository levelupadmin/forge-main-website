import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const panels = [
  { label: 'Offline Meet-ups', photo: '/images/community/community-meetups.png' },
  { label: 'Learning Experiences', photo: '/images/community/learning-experiences.png' },
  { label: 'Our Productions', photo: '/images/community/productions.png' },
  { label: 'Guest Lectures', photo: '/images/community/guest-lectures.png' },
  { label: 'A Community that Celebrates You', photo: '/images/community/celebrates-you.png' },
];

export default function Community() {
  const isMobile = useIsMobile();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const row1 = panels.slice(0, 3);
  const row2 = panels.slice(3);

  return (
    <section id="community" ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: 'clamp(48px, 6vw, 80px) 0 0',
    }}>
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ textAlign: 'center', padding: '0 24px', marginBottom: 48 }}>
        <div className="forge-heading">
          Come for the Learning.<br />
          Stay for the{' '}
          <span style={{
            textDecoration: 'underline',
            textDecorationColor: '#FFBC3B',
            textUnderlineOffset: 6,
            textDecorationThickness: 2,
          }}>
            Community
          </span>.
        </div>
        <p style={{ fontSize: 17, opacity: 0.6, marginTop: 16 }}>
          Your network is your networth.
        </p>
      </div>

      {/* Bento Grid */}
      <div style={{
        padding: '0 clamp(16px, 3vw, 48px)',
        maxWidth: 1320,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 16,
        }}>
          {row1.map((panel, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <BentoCard panel={panel} height={isMobile ? 220 : 300} />
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
          gap: 16,
        }}>
          {row2.map((panel, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${500 + i * 150}ms` }}
            >
              <BentoCard panel={panel} height={isMobile ? 220 : 280} />
            </div>
          ))}
        </div>
      </div>

      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ textAlign: 'center', padding: '40px 24px', transitionDelay: '700ms' }}>
        <a href="#" className="forge-cta-dark" style={{ padding: '14px 32px', fontSize: 15 }}>
          Join the Community
        </a>
      </div>
    </section>
  );
}

function BentoCard({ panel, height }: { panel: { label: string; photo: string }; height: number }) {
  return (
    <div
      style={{
        position: 'relative',
        height,
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.015)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <img
        src={panel.photo}
        alt={panel.label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          inset: 0,
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute',
        top: 24,
        left: 24,
        right: 24,
        color: 'white',
        fontWeight: 700,
        fontSize: 'clamp(18px, 2vw, 22px)',
        lineHeight: 1.3,
        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}>
        {panel.label}
      </div>
    </div>
  );
}
