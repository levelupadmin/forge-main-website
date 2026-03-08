import { mentors } from '@/data/mentors';
import { useDragScroll } from '@/hooks/useDragScroll';

const cardColors = [
  '#F2A0C4', // pink
  '#C8E66A', // lime green
  '#FFBC3B', // yellow/amber
  '#B8B0E8', // lavender
  '#7ECBC4', // teal
  '#F4C87A', // warm gold
];

const cardHeights = [420, 360, 440, 380, 400, 430];

export default function Mentors() {
  const scrollRef = useDragScroll();

  return (
    <section style={{
      background: '#1a1a1a',
      padding: 'clamp(64px, 10vw, 120px) 0 0',
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
        gap: 0,
        alignItems: 'flex-end',
      }}>
        {mentors.map((mentor, i) => {
          const bgColor = cardColors[i % cardColors.length];
          const height = cardHeights[i % cardHeights.length];

          return (
            <div key={i} style={{
              minWidth: 240,
              flex: '1 0 240px',
              height,
              background: bgColor,
              borderRadius: '140px 140px 0 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
            }}
            className="forge-mentor-pill"
            >
              {/* Photo — oval filling the top */}
              <div style={{
                width: '100%',
                flex: 1,
                overflow: 'hidden',
                borderRadius: '140px 140px 0 0',
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
                padding: '20px 16px 28px',
                background: bgColor,
              }}>
                <div style={{
                  fontWeight: 700,
                  fontSize: 22,
                  color: '#1a1a1a',
                  marginBottom: 4,
                }}>
                  {mentor.name}
                </div>
                <div style={{
                  fontSize: 14,
                  color: '#1a1a1a',
                  opacity: 0.7,
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
