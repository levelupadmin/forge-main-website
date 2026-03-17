import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeader from './SectionHeader';

export default function LifeAtForge() {
  const isMobile = useIsMobile();
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section style={{ background: '#FFFFFF', padding: isMobile ? '40px 20px' : '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader eyebrow="Life at the Forge" headline="We get shit done. On something that matters." subtext="You are not behind this product. You are inside it. Every bootcamp, every screening, every student outcome traces back to something someone on this team built." />

        <div ref={ref} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 650ms ease, transform 650ms ease',
        }}>
          {/* Hero box - full width */}
          <div style={{
            borderRadius: isMobile ? 16 : 20,
            background: '#1e1c14',
            overflow: 'hidden',
            position: 'relative',
            minHeight: isMobile ? 220 : undefined,
            height: isMobile ? undefined : 320,
            marginBottom: isMobile ? 10 : 12,
            transition: 'transform 280ms ease, box-shadow 280ms ease',
            cursor: 'pointer',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.018)'; e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '55%', background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: isMobile ? 20 : 28, left: isMobile ? 20 : 28, right: isMobile ? 20 : 28, zIndex: 2, fontFamily: "'Open Sauce One', sans-serif", fontWeight: 700, fontStyle: 'italic', fontSize: isMobile ? 16 : 19, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>"You are not behind the product here. You are inside it."</div>
          </div>

          {/* 4 smaller boxes - 2x2 grid on mobile, row on desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 12,
          }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{
                borderRadius: isMobile ? 12 : 16,
                background: '#1e1c14',
                overflow: 'hidden',
                minHeight: isMobile ? 140 : 200,
                transition: 'transform 280ms ease, box-shadow 280ms ease',
                cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.018)'; e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
