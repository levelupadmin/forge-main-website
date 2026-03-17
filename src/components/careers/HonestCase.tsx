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
  );
}

function PhotoPlaceholder({ delay = 0 }: { delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.08);
  return (
    <div
      ref={ref}
      style={{
        background: '#1e1c14',
        borderRadius: 20,
        width: '100%',
        height: '100%',
        minHeight: 220,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 650ms ease ${delay}ms, transform 650ms ease ${delay}ms`,
      }}
    />
  );
}

export default function HonestCase() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      background: '#FFFFFF',
      padding: isMobile ? '64px 24px' : '120px 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="Why the Forge"
          headline="This is not zero-sum work."
          subtext="We are not just another learning platform. We put people in rooms, give them cameras and blank pages, and make them create real things. Short films. Screenplays. Published work. With their name on it. That takes a team that cares deeply about what they are doing — and commits to keep getting better at it."
        />

        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <PhotoPlaceholder />
            {pillars.map((p, i) => (
              <PillarCard key={p.num} {...p} delay={i * 60} />
            ))}
            <PhotoPlaceholder delay={240} />
          </div>
        ) : (
          <>
            {/* Row 1-2: 3 columns with tall photos on left and right */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gridTemplateRows: '320px 240px',
              gap: 16,
            }}>
              {/* Photo A - tall left */}
              <div style={{ gridColumn: '1', gridRow: '1 / 3' }}>
                <PhotoPlaceholder />
              </div>
              {/* Pillar 01 */}
              <div style={{ gridColumn: '2', gridRow: '1' }}>
                <PillarCard {...pillars[0]} delay={60} />
              </div>
              {/* Photo B - tall right */}
              <div style={{ gridColumn: '3', gridRow: '1 / 3' }}>
                <PhotoPlaceholder delay={120} />
              </div>
              {/* Pillar 02 */}
              <div style={{ gridColumn: '2', gridRow: '2' }}>
                <PillarCard {...pillars[1]} delay={180} />
              </div>
            </div>

            {/* Row 3: 4 columns */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
              marginTop: 16,
            }}>
              <PillarCard {...pillars[2]} delay={240} />
              <PhotoPlaceholder delay={300} />
              <PhotoPlaceholder delay={360} />
              <PillarCard {...pillars[3]} delay={420} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
