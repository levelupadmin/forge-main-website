import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeader from './SectionHeader';

const photos = [
  { key: 'life-1' },
  { key: 'life-2' },
  { key: 'life-3' },
  { key: 'life-4' },
  { key: 'life-5' },
];

export default function LifeAtForge() {
  const isMobile = useIsMobile();
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section style={{
      background: '#FFFFFF',
      padding: isMobile ? '64px 24px' : '120px 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="Life at the Forge"
          headline="We get shit done. On something that matters."
          subtext="You are not behind this product. You are inside it. Every bootcamp, every screening, every student outcome traces back to something someone on this team built."
        />

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1.4fr 1.4fr',
            gridTemplateRows: isMobile ? undefined : '320px 240px',
            gap: 12,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 650ms ease, transform 650ms ease',
          }}
        >
          {/* Photo 1 - tall left with pull-quote */}
          <div style={{
            gridColumn: isMobile ? undefined : '1',
            gridRow: isMobile ? undefined : '1 / 3',
            borderRadius: 20,
            background: '#1e1c14',
            overflow: 'hidden',
            position: 'relative',
            minHeight: isMobile ? 320 : undefined,
            transition: 'transform 280ms ease, box-shadow 280ms ease',
            cursor: 'pointer',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.018)';
              e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '55%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
              zIndex: 1,
            }} />
            {/* Pull quote */}
            <div style={{
              position: 'absolute',
              bottom: 28,
              left: 28,
              right: 28,
              zIndex: 2,
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 19,
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.45,
            }}>
              "You are not behind the product here. You are inside it."
            </div>
          </div>

          {/* Photos 2-5 */}
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                background: '#1e1c14',
                overflow: 'hidden',
                minHeight: isMobile ? 200 : undefined,
                transition: 'transform 280ms ease, box-shadow 280ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.018)';
                e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
