import { useState } from 'react';
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
  const mobilepeople = people.slice(0, 6);

  return (
    <section ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: '0 clamp(24px, 3vw, 40px)',
    }}>
      <div style={{
        background: '#222',
        borderRadius: 24,
        padding: isMobile ? 'clamp(36px, 6vw, 80px) 20px' : 'clamp(48px, 6vw, 80px)',
        textAlign: 'center',
      }}>
        <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
          <div className="forge-subheading forge-subheading--light">People of</div>
          <div className="forge-heading forge-heading--light" style={{ marginBottom: 8 }}>the Forge</div>
          <p style={{ fontSize: 17, color: 'white', opacity: 0.6, marginBottom: isMobile ? 32 : 48 }}>
            Meet and collaborate with <span style={{ color: '#FFBC3B', fontWeight: 700 }}>Dreamers</span> like you.
          </p>
        </div>

        {isMobile ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            maxWidth: 360,
            margin: '0 auto',
          }}>
            {mobilepeople.map((person, i) => (
              <MobilePersonCard key={i} person={person} isVisible={isVisible} index={i} />
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

function MobilePersonCard({ person, isVisible, index }: {
  person: typeof import('@/data/people').people[0];
  isVisible: boolean;
  index: number;
}) {
  const [tapped, setTapped] = useState(false);

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${200 + index * 100}ms`, textAlign: 'center' }}
      onClick={() => setTapped(!tapped)}
    >
      <div style={{
        borderRadius: 14,
        overflow: 'hidden',
        marginBottom: 8,
      }}>
        <img
          src={person.photo}
          alt={person.name}
          style={{
            width: '100%',
            aspectRatio: '1',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <div style={{ fontWeight: 700, fontSize: 13, color: 'white' }}>{person.name}</div>
      <div style={{
        width: 16,
        height: 2,
        background: '#FFBC3B',
        margin: '4px auto',
        borderRadius: 1,
      }} />
      <div style={{ fontSize: 11, color: 'white', opacity: 0.5, fontStyle: 'italic' }}>{person.designation}</div>
      {tapped && person.bio && (
        <div style={{
          fontSize: 10,
          color: 'rgba(255,188,59,0.8)',
          fontStyle: 'italic',
          marginTop: 6,
          lineHeight: 1.4,
          transition: 'opacity 0.3s ease',
        }}>
          "{person.bio}"
        </div>
      )}
    </div>
  );
}

function PersonCard({ person }: { person: typeof import('@/data/people').people[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="forge-person"
      style={{
        minWidth: 'clamp(120px, 12vw, 160px)',
        textAlign: 'center',
        transform: `rotate(${person.rotation}deg) ${hovered ? 'scale(1.06)' : 'scale(1)'}`,
        transition: 'transform 0.35s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        border: '2px solid rgba(255,255,255,0.1)',
        boxShadow: hovered ? '0 12px 36px rgba(255,188,59,0.15)' : '0 8px 24px rgba(0,0,0,0.2)',
        transition: 'box-shadow 0.35s ease',
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
      {/* Hover bio */}
      <div style={{
        fontSize: 12,
        color: 'rgba(255,188,59,0.8)',
        fontStyle: 'italic',
        marginTop: 8,
        lineHeight: 1.4,
        opacity: hovered ? 1 : 0,
        maxHeight: hovered ? 40 : 0,
        overflow: 'hidden',
        transition: 'opacity 0.3s ease, max-height 0.3s ease',
      }}>
        "{person.bio}"
      </div>
    </div>
  );
}
