import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  { number: '600+', label: 'Dreamers' },
  { number: '25+', label: 'Editions across the world' },
  { number: '11', label: 'Cities Explored' },
];

const logos = [
  { name: 'Sony', src: '/images/partners/sony-logo.png', invert: true, scale: 1.5 },
  { name: 'Digitek', src: '/images/partners/digitek-logo.png', invert: true, scale: 2.25 },
  { name: 'Sandcastles', src: '/images/partners/sandcastles-logo.png', invert: true, scale: 1.0 },
  { name: 'Indie Press', src: '/images/partners/indiepress-logo.png', invert: false, scale: 1.5 },
  { name: 'Westland Books', src: '/images/partners/westland-logo.png', invert: false, scale: 1.5 },
];

export default function PoweredBy() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isMobile = useIsMobile();
  const baseHeight = isMobile ? 36 : 52;

  // Duplicate logos 4x for seamless loop
  const loopLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#FFFFFF',
        padding: isMobile
          ? 'clamp(20px, 4vw, 32px) 0'
          : 'clamp(28px, 4vw, 44px) 0',
      }}
    >
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? 12 : 32,
            whiteSpace: 'nowrap',
            padding: isMobile ? '0 12px' : '0 40px',
            marginBottom: isMobile ? 24 : 36,
          }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 32 }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: isMobile ? 'clamp(20px, 5.5vw, 28px)' : 'clamp(32px, 3.5vw, 48px)',
                    fontWeight: 700,
                    color: '#222222',
                    lineHeight: 1.1,
                    fontFamily: "'Open Sauce One', sans-serif",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 9 : 12,
                    fontWeight: 500,
                    color: 'rgba(34,34,34,0.5)',
                    marginTop: 2,
                    fontFamily: "'Open Sauce One', sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <span
                  style={{
                    width: isMobile ? 5 : 7,
                    height: isMobile ? 5 : 7,
                    borderRadius: '50%',
                    backgroundColor: '#FFBC3B',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Powered By heading */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#222222',
            marginBottom: isMobile ? 12 : 16,
            fontFamily: "'Open Sauce One', sans-serif",
          }}
        >
          Powered By
        </p>

        {/* Scrolling marquee */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {/* Edge fades */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: 'linear-gradient(to right, #FFFFFF, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: 'linear-gradient(to left, #FFFFFF, transparent)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          <div
            className="marquee-scroll-left"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? 40 : 64,
              width: 'max-content',
            }}
          >
            {loopLogos.map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                style={{
                  height: baseHeight * logo.scale,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: logo.invert
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
