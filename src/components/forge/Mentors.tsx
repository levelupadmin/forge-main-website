import { mentors } from '@/data/mentors';
import { useDragScroll } from '@/hooks/useDragScroll';

const cardHeights = [420, 360, 440, 380, 400, 430];

export default function Mentors() {
  const scrollRef = useDragScroll();

  return (
    <section style={{
      background: '#1a1a1a',
      padding: 'clamp(64px, 10vw, 120px) 0 clamp(80px, 12vw, 160px)',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: 600,
        margin: '0 auto 56px',
        padding: '0 24px',
      }}>
        <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8, color: '#FCF7EF' }}>Learn from</div>
        <div style={{ fontWeight: 700, fontSize: 48, marginBottom: 16, color: '#FCF7EF' }}>the best</div>
        <p style={{ fontSize: 17, opacity: 0.6, lineHeight: 1.7, color: '#FCF7EF' }}>
          Every mentor at the Forge is a practitioner of their craft. A working filmmaker, a published author, a full-time creator. Not a professor.
        </p>
      </div>

      <div ref={scrollRef} className="forge-scroll" style={{
        display: 'flex',
        gap: 20,
        alignItems: 'flex-end',
        padding: '0 clamp(24px, 4vw, 60px)',
      }}>
        {mentors.map((mentor, i) => {
          const height = cardHeights[i % cardHeights.length];

          return (
            <div key={i} style={{
              minWidth: 220,
              flex: '0 0 220px',
              height,
              background: '#FCF7EF',
              borderRadius: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              padding: '16px 16px 0',
            }}
            className="forge-mentor-pill"
            >
              {/* Photo — oval frame inside the card */}
              <div style={{
                width: '100%',
                flex: 1,
                overflow: 'hidden',
                borderRadius: '120px 120px 120px 120px',
                background: '#e8e2d8',
              }}>
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Info — flat bottom */}
              <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '16px 8px 22px',
              }}>
                <div style={{
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#1a1a1a',
                  marginBottom: 2,
                }}>
                  {mentor.name}
                </div>
                <div style={{
                  fontSize: 13,
                  color: '#1a1a1a',
                  opacity: 0.5,
                }}>
                  {mentor.designation}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
