import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const logos = [
  { name: 'Sony', src: '/images/partners/sony-logo.png' },
  { name: 'Digitek', src: '/images/partners/digitek-logo.png' },
  { name: 'Sandcastles', src: '/images/partners/sandcastles-logo.png' },
  { name: 'Indie Press', src: '/images/partners/indiepress-logo.png' },
  { name: 'Westland Books', src: '/images/partners/westland-logo.png' },
];

export default function PoweredBy() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#FFFFFF',
        padding: isMobile ? '32px 16px' : '48px 24px',
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
            marginBottom: isMobile ? 24 : 36,
            fontFamily: "'Open Sauce One', sans-serif",
          }}
        >
          Powered By
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? 28 : 48,
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              style={{
                height: isMobile ? 48 : 72,
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%) contrast(1.2)',
                mixBlendMode: 'multiply',
              }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
