import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CommunityHero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-black)',
        padding: 'clamp(120px, 16vw, 200px) 24px clamp(32px, 4vw, 48px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/careers/big-group-beach.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1,
        }}
      />
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ position: 'relative', zIndex: 2 }}>
        <p className="forge-subheading forge-subheading--light">The Community</p>
        <h1
          className="forge-heading forge-heading--light"
          style={{ maxWidth: 720, margin: '0 auto' }}
        >
          The People who make{' '}
          <span
            style={{
              textDecoration: 'underline',
              textDecorationColor: 'var(--forge-yellow)',
              textUnderlineOffset: 6,
              textDecorationThickness: 3,
            }}
          >
            the Forge
          </span>{' '}
          what it is.
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 17,
            marginTop: 16,
            maxWidth: 540,
            margin: '16px auto 0',
            lineHeight: 1.6,
          }}
        >
          Every program becomes a story. And the best stories need the right characters.
        </p>
      </div>
    </section>
  );
}
