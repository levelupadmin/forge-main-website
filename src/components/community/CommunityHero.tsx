import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CommunityHero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-black)',
        padding: 'clamp(120px, 16vw, 200px) 24px clamp(48px, 6vw, 80px)',
        textAlign: 'center',
      }}
    >
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
        <p className="forge-subheading forge-subheading--light">The Forge</p>
        <h1
          className="forge-heading forge-heading--light"
          style={{ maxWidth: 720, margin: '0 auto' }}
        >
          Our{' '}
          <span
            style={{
              textDecoration: 'underline',
              textDecorationColor: 'var(--forge-yellow)',
              textUnderlineOffset: 6,
              textDecorationThickness: 3,
            }}
          >
            Community
          </span>
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 17,
            marginTop: 16,
            maxWidth: 540,
            margin: '16px auto 0',
          }}
        >
          Meet the dreamers, doers, and creators who make the Forge what it is.
        </p>
      </div>
    </section>
  );
}
