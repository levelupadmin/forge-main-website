import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { communityPerks } from '@/data/communityData';
import { Users, MapPin, Video, Gift, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={24} />,
  'map-pin': <MapPin size={24} />,
  video: <Video size={24} />,
  gift: <Gift size={24} />,
  sparkles: <Sparkles size={24} />,
};

export default function BeyondTheProgram() {
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
        <p className="forge-subheading">Beyond the Program</p>
        <div className="forge-heading" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
          The program ends.
          <br />
          The community doesn't.
        </div>
      </div>
      <p
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          textAlign: 'center',
          maxWidth: 620,
          margin: '0 auto 48px',
          padding: '0 24px',
          fontSize: 15,
          opacity: 0.6,
          lineHeight: 1.7,
          transitionDelay: '100ms',
        }}
      >
        When you join a Forge program, you're not just signing up for 6 days. You're getting a lifetime pass to a community of like-minded creators who actually stay in touch.
      </p>

      {/* Perks grid + community photo */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 48px)',
          alignItems: 'stretch',
        }}
      >
        {/* Perks */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 16,
          }}
        >
          {communityPerks.map((perk, i) => (
            <div
              key={perk.title}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div
                className="forge-card"
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '24px 20px',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: 'var(--forge-black)',
                    color: 'var(--forge-yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  {iconMap[perk.icon]}
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>
                  {perk.title}
                </div>
                <p style={{ fontSize: 13, opacity: 0.6, lineHeight: 1.6, margin: 0 }}>
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Community photo */}
        {!isMobile && (
          <div
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{
              flex: '0 0 380px',
              transitionDelay: '400ms',
            }}
          >
            <div
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                height: '100%',
              }}
            >
              <img
                src="/images/community/beyond-community.jpg"
                alt="Forge community meetup"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
