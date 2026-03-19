import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  { number: '600+', label: 'Dreamers' },
  { number: '25+', label: 'Editions across the world' },
  { number: '11', label: 'Cities Explored' },
];

const logosRow1 = [
  { name: 'Sony', src: '/images/partners/sony-logo.png', invert: true, scale: 1.4 },
  { name: 'Digitek', src: '/images/partners/digitek-logo.png', invert: true, scale: 2 },
  { name: 'Sandcastles', src: '/images/partners/sandcastles-logo.png', invert: true, scale: 1 },
];

const logosRow2 = [
  { name: 'Indie Press', src: '/images/partners/indiepress-logo.png', invert: false, scale: 1.4 },
  { name: 'Westland Books', src: '/images/partners/westland-logo.png', invert: false, scale: 1.4 },
];

export default function PoweredBy() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isMobile = useIsMobile();
  const baseHeight = isMobile ? 36 : 48;

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#FFFFFF',
        padding: isMobile
          ? 'clamp(32px, 5vw, 48px) clamp(16px, 4vw, 24px)'
          : 'clamp(48px, 6vw, 72px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? 16 : 40,
            flexWrap: 'wrap',
            marginBottom: isMobile ? 32 : 48,
          }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 16 : 40 }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: isMobile ? 'clamp(28px, 7vw, 36px)' : 'clamp(36px, 4vw, 52px)',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#222222',
                    lineHeight: 1.1,
                    fontFamily: "'Open Sauce One', sans-serif",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? 11 : 13,
                    fontWeight: 500,
                    color: 'rgba(34,34,34,0.5)',
                    marginTop: 4,
                    fontFamily: "'Open Sauce One', sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <span
                  style={{
                    fontSize: isMobile ? 10 : 14,
                    color: 'rgba(34,34,34,0.25)',
                    userSelect: 'none',
                  }}
                >
                  ✦
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Powered By heading */}
        <p
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#222222',
            marginBottom: isMobile ? 20 : 28,
            fontFamily: "'Open Sauce One', sans-serif",
          }}
        >
          Powered By
        </p>

        {/* Logo grid */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 20 : 28 }}>
          {/* Row 1 — 3 logos */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? 32 : 56 }}>
            {logosRow1.map((logo) => (
              <img
                key={logo.name}
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
                }}
                loading="lazy"
              />
            ))}
          </div>
          {/* Row 2 — 2 logos */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? 32 : 56 }}>
            {logosRow2.map((logo) => (
              <img
                key={logo.name}
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
