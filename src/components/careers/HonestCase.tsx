import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    num: '01',
    title: 'Small team. What you build reaches real people. Fast.',
    body: 'No layers. No approval queues. You ship it and you see it land within days. That is the whole deal.',
  },
  {
    num: '02',
    title: 'High trust. We trade on impact, not on hours.',
    body: 'What moved is what matters. We do not manage you. We trust you to care enough to manage yourself.',
  },
  {
    num: '03',
    title: 'You sit inside the product. Not behind it.',
    body: 'Bootcamps. Screenings. Writing retreats. You are in the room when it happens, not reading reports about it after.',
  },
  {
    num: '04',
    title: 'Full ownership. No hand-holding.',
    body: 'Solve complex problems. Figure things out as they move. That is not a warning. That is the pitch.',
  },
];

function PillarCard({ num, title, body, delay = 0, isMobile = false }: { num: string; title: string; body: string; delay?: number; isMobile?: boolean }) {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <div
      ref={ref}
      style={{
        background: '#F7F5F0',
        borderRadius: isMobile ? 16 : 20,
        padding: isMobile ? '28px 24px' : '40px 36px',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background 250ms ease, transform 250ms ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${delay}ms`,
        transitionDuration: '650ms',
        transitionProperty: 'opacity, transform, background',
        display: 'flex',
        gap: isMobile ? 14 : 20,
        overflow: 'hidden',
        width: isMobile ? 280 : undefined,
        flexShrink: isMobile ? 0 : undefined,
        scrollSnapAlign: isMobile ? 'start' : undefined,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#F0EDE6';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#F7F5F0';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Ghost watermark number */}
      <div style={{
        position: 'absolute',
        right: isMobile ? 12 : 20,
        top: -10,
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 900,
        fontSize: isMobile ? 80 : 120,
        color: 'rgba(34,34,34,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        {num}
      </div>
      {/* Left amber accent line */}
      <div style={{
        width: 4,
        height: 40,
        borderRadius: 4,
        background: '#FFBC3B',
        flexShrink: 0,
        marginTop: 4,
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.1em',
          color: '#FFBC3B',
          marginBottom: isMobile ? 10 : 14,
        }}>
          {num}
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: isMobile ? 17 : 20,
          color: '#222222',
          lineHeight: 1.3,
          marginBottom: isMobile ? 8 : 12,
        }}>
          {title}
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: isMobile ? 13 : 14,
          color: 'rgba(34,34,34,0.52)',
          lineHeight: 1.7,
        }}>
          {body}
        </div>
      </div>
    </div>
  );
}

export default function HonestCase() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      background: '#FFFFFF',
      padding: isMobile ? '40px 0' : '80px 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : undefined }}>
        <SectionHeader
          eyebrow="Why the Forge"
          headline="This is not zero-sum work."
          subtext="The Forge was founded in 2023 with one goal. Help people not just learn, but actually do. We started with twenty people and twelve days and one short film. From there we grew into writing retreats, creator residencies, and a community of thousands across India and beyond. Every program we run traces back to that same idea, help someone take action and stop just dreaming."
        />
      </div>

      {isMobile ? (
        <div style={{
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 4,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          <style>{`.honest-scroll::-webkit-scrollbar { display: none; }`}</style>
          {pillars.map((p, i) => (
            <PillarCard key={p.num} {...p} delay={i * 60} isMobile />
          ))}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
        }}>
          {pillars.map((p, i) => (
            <PillarCard key={p.num} {...p} delay={i * 60} />
          ))}
        </div>
      )}
    </section>
  );
}
