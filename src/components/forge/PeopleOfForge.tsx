import { people } from '@/data/people';
import { useDragScroll } from '@/hooks/useDragScroll';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PeopleOfForge() {
  const isMobile = useIsMobile();
  const scrollRef = useDragScroll();
  const { ref, isVisible } = useScrollAnimation(0.15);
  const row1 = people.slice(0, 5);
  const row2 = people.slice(5, 9);

  return (
    <section ref={ref} style={{
      background: '#FFFFFF',
      padding: '0 clamp(24px, 3vw, 40px)',
    }}>
      <div style={{
        background: '#222',
        borderRadius: 24,
        padding: 'clamp(48px, 6vw, 80px)',
        textAlign: 'center',
      }}>
        <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
          <div className="forge-subheading forge-subheading--light">People of</div>
          <div className="forge-heading forge-heading--light" style={{ marginBottom: 8 }}>the Forge</div>
          <p style={{ fontSize: 17, color: 'white', opacity: 0.6, marginBottom: 48 }}>
            Meet and collaborate with <span style={{ color: '#FFBC3B', fontWeight: 700 }}>Dreamers</span> like you.
          </p>
        </div>

        {isMobile ? (
          <div ref={scrollRef} className="forge-scroll" style={{ display: 'flex', gap: 16 }}>
            {people.map((person, i) => (
              <div
                key={i}
                className={`forge-fade-up${isVisible ? ' visible' : ''}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
              {row1.map((person, i) => (
                <div
                  key={i}
                  className={`forge-fade-up forge-bob${isVisible ? ' visible' : ''}`}
                  style={{ transitionDelay: `${300 + i * 120}ms` }}
                >
                  <PersonCard person={person} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
              {row2.map((person, i) => (
                <div
                  key={i + 5}
                  className={`forge-fade-up forge-bob${isVisible ? ' visible' : ''}`}
                  style={{ transitionDelay: `${600 + i * 120}ms` }}
                >
                  <PersonCard person={person} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function PersonCard({ person }: { person: typeof import('@/data/people').people[0] }) {
  return (
    <div
      className="forge-person"
      style={{
        minWidth: 'clamp(120px, 12vw, 160px)',
        textAlign: 'center',
        transform: `rotate(${person.rotation}deg)`,
      }}
    >
      <div style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        border: '2px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
      }}>
        <img
          src={person.photo}
          alt={person.name}
          style={{
            width: 'clamp(120px, 12vw, 160px)',
            height: 'clamp(120px, 12vw, 160px)',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <div style={{ fontWeight: 700, fontSize: 15, color: 'white', marginTop: 10 }}>{person.name}</div>
      <div style={{
        width: 20,
        height: 2,
        background: '#FFBC3B',
        margin: '6px auto',
        borderRadius: 1,
      }} />
      <div style={{ fontSize: 13, color: 'white', opacity: 0.5, fontStyle: 'italic' }}>{person.designation}</div>
    </div>
  );
}
