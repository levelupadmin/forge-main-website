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

function PillarCard({ num, title, body, delay = 0 }: { num: string; title: string; body: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <div
      ref={ref}
      style={{
        background: '#F7F5F0',
        borderRadius: 20,
        padding: '40px 36px',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background 250ms ease, transform 250ms ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${delay}ms`,
        transitionDuration: '650ms',
        transitionProperty: 'opacity, transform, background',
        display: 'flex',
        gap: 20,
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
      {/* Left amber accent line */}
      <div style={{
        width: 4,
        height: 40,
        borderRadius: 4,
        background: '#FFBC3B',
        flexShrink: 0,
        marginTop: 4,
      }} />
      <div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.1em',
          color: '#FFBC3B',
          marginBottom: 14,
        }}>
          {num}
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: '#222222',
          lineHeight: 1.3,
          marginBottom: 12,
        }}>
          {title}
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: 14,
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
      padding: isMobile ? '48px 24px' : '80px 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="Why the Forge"
          headline="This is not zero-sum work."
          subtext="We are not just another learning platform. We put people in rooms, give them cameras and blank pages, and make them create real things. Short films. Screenplays. Published work. With their name on it. That takes a team that cares deeply about what they are doing and commits to keep getting better at it."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: 16,
        }}>
          {pillars.map((p, i) => (
            <PillarCard key={p.num} {...p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
