import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const logos = [
  { name: 'Sony', src: '/images/partners/sony-logo.png', invertFirst: true, scale: 1.5 },
  { name: 'Digitek', src: '/images/partners/digitek-logo.png', invertFirst: true, scale: 2.25 },
  { name: 'Sandcastles', src: '/images/partners/sandcastles-logo.png', invertFirst: true, scale: 1 },
  { name: 'Indie Press', src: '/images/partners/indiepress-logo.png', invertFirst: false, scale: 1.5 },
  { name: 'Westland Books', src: '/images/partners/westland-logo.png', invertFirst: false, scale: 1.5 },
];

export default function PoweredBy() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isMobile = useIsMobile();
  const baseHeight = isMobile ? 47 : 62;

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#FFFFFF',
        padding: isMobile ? '16px 0' : '24px 0',
      }}
    >
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
        <p
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#000000',
            marginBottom: isMobile ? 8 : 12,
            fontFamily: "'Open Sauce One', sans-serif",
          }}
        >
          Powered By
        </p>

        <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
          {/* Left gradient */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: isMobile ? 40 : 80,
              background: 'linear-gradient(to right, #FFFFFF, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          {/* Right gradient */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: isMobile ? 40 : 80,
              background: 'linear-gradient(to left, #FFFFFF, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? 40 : 64,
              animation: 'marquee-left 20s linear infinite',
              width: 'max-content',
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                style={{
                  height: baseHeight * logo.scale,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: logo.invertFirst
                    ? 'invert(1) grayscale(100%) contrast(1.5)'
                    : 'grayscale(100%) contrast(1.2)',
                  mixBlendMode: 'multiply',
                  flexShrink: 0,
                }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
