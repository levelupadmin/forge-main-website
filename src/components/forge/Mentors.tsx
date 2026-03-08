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

const cardHeights = [380, 340, 400, 360, 350, 390];

export default function Mentors() {
  const scrollRef = useDragScroll();

  return (
    <section style={{
      background: '#1a1a1a',
      padding: 'clamp(64px, 10vw, 120px) 0',
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
        marginLeft: 'calc(-1 * clamp(24px, 5vw, 80px))',
        marginRight: 'calc(-1 * clamp(24px, 5vw, 80px))',
        paddingLeft: 'clamp(24px, 5vw, 80px)',
        paddingRight: 'clamp(24px, 5vw, 80px)',
        alignItems: 'flex-end',
      }}>
        {mentors.map((mentor, i) => {
          const bgColor = cardColors[i % cardColors.length];
          const height = cardHeights[i % cardHeights.length];

          return (
            <div key={i} style={{
              minWidth: 220,
              width: 220,
              height,
              background: bgColor,
              borderRadius: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '32px 16px 28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
            }}
            className="forge-mentor-pill"
            >
              {/* Photo */}
              <div style={{
                width: 160,
                height: 160,
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                border: `4px solid rgba(255,255,255,0.3)`,
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

              {/* Info */}
              <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: 16 }}>
                <div style={{
                  fontWeight: 700,
                  fontSize: 20,
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
