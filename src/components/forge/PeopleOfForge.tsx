import { people } from '@/data/people';
import { useDragScroll } from '@/hooks/useDragScroll';
import { useIsMobile } from '@/hooks/use-mobile';

export default function PeopleOfForge() {
  const isMobile = useIsMobile();
  const scrollRef = useDragScroll();
  const row1 = people.slice(0, 5);
  const row2 = people.slice(5, 9);

  return (
    <section style={{
      background: '#FCF7EF',
      padding: '0 clamp(24px, 3vw, 40px)',
    }}>
      <div style={{
        background: '#222',
        borderRadius: 24,
        padding: 'clamp(48px, 6vw, 80px)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 18, color: 'white', opacity: 0.5, marginBottom: 8 }}>People of</div>
        <div style={{ fontWeight: 700, fontSize: 48, color: 'white', marginBottom: 8 }}>the Forge.</div>
        <p style={{ fontSize: 17, color: 'white', opacity: 0.6, marginBottom: 48 }}>
          Meet and collaborate with <span style={{ color: '#FFBC3B', fontWeight: 700 }}>Dreamers</span> like you.
        </p>

        {isMobile ? (
          <div ref={scrollRef} className="forge-scroll" style={{ display: 'flex', gap: 16 }}>
            {people.map((person, i) => (
              <PersonCard key={i} person={person} />
            ))}
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
              {row1.map((person, i) => (
                <PersonCard key={i} person={person} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
              {row2.map((person, i) => (
                <PersonCard key={i + 5} person={person} />
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
      <img
        src={person.photo}
        alt={person.name}
        style={{
          width: 'clamp(120px, 12vw, 160px)',
          height: 'clamp(120px, 12vw, 160px)',
          borderRadius: 12,
          objectFit: 'cover',
        }}
      />
      <div style={{ fontWeight: 700, fontSize: 15, color: 'white', marginTop: 10 }}>{person.name}</div>
      <div style={{ fontSize: 13, color: 'white', opacity: 0.5, fontStyle: 'italic' }}>{person.designation}</div>
    </div>
  );
}
