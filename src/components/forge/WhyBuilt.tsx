import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

export default function WhyBuilt() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      className="text-center"
      style={{
        background: 'var(--forge-black)',
        color: '#FFFFFF',
        padding: isMobile ? '64px 24px' : 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 200px)',
      }}
    >
      {/* Subheading */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''} forge-subheading forge-subheading--light`}
      >
        Why It Was Built
      </div>

      {/* Opening line */}
      <h2
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          fontWeight: 700,
          fontSize: isMobile ? 'clamp(24px, 7vw, 36px)' : 'clamp(32px, 4vw, 48px)',
          lineHeight: 1.15,
          color: '#FFFFFF',
          maxWidth: 800,
          margin: '0 auto',
          transitionDelay: '100ms',
        }}
      >
        We were tired of watching creative people not create.
      </h2>

      {/* Divider */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          width: 48,
          height: 2,
          background: 'var(--forge-yellow)',
          margin: '40px auto',
          transitionDelay: '200ms',
        }}
      />

      {/* Para 2 */}
      <p
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          fontSize: isMobile ? 16 : 20,
          lineHeight: 1.7,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.75)',
          maxWidth: 680,
          margin: '0 auto 28px',
          transitionDelay: '300ms',
        }}
      >
        There were hundreds of courses. There was knowledge all over the internet. But they went back to their lives, back to the routine, and nothing changed.
      </p>

      {/* Para 3 */}
      <p
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          fontSize: isMobile ? 16 : 20,
          lineHeight: 1.7,
          fontWeight: 400,
          color: 'rgba(255,255,255,0.75)',
          maxWidth: 680,
          margin: '0 auto',
          transitionDelay: '400ms',
        }}
      >
        We knew the missing piece was not more learning. It was a place designed to create, with the right people around you, where not creating was simply not an option.
      </p>

      {/* Divider */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          width: 48,
          height: 2,
          background: 'var(--forge-yellow)',
          margin: '40px auto',
          transitionDelay: '500ms',
        }}
      />

      {/* Closing line */}
      <p
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          fontWeight: 700,
          fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : 'clamp(24px, 3vw, 32px)',
          lineHeight: 1.3,
          color: '#FFFFFF',
          maxWidth: 700,
          margin: '0 auto',
          transitionDelay: '600ms',
        }}
      >
        The Forge was not created to dream. It was built to help you{' '}
        <span
          style={{
            position: 'relative',
            display: 'inline-block',
          }}
        >
          start
          <span
            style={{
              position: 'absolute',
              bottom: -2,
              left: 0,
              right: 0,
              height: 3,
              background: 'var(--forge-yellow)',
              borderRadius: 2,
            }}
          />
        </span>
        .
      </p>
    </section>
  );
}
