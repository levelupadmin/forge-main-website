import { mentors } from '@/data/mentors';
import { useDragScroll } from '@/hooks/useDragScroll';

export default function Mentors() {
  const scrollRef = useDragScroll();

  return (
    <section style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) 0',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: 600,
        margin: '0 auto 48px',
        padding: '0 24px',
      }}>
        <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8 }}>Learn from</div>
        <div style={{ fontWeight: 700, fontSize: 48, marginBottom: 16 }}>the best</div>
        <p style={{ fontSize: 17, opacity: 0.6, lineHeight: 1.7 }}>
          Every mentor at the Forge is a practitioner of their craft. A working filmmaker, a published author, a full-time creator. Not a professor.
        </p>
      </div>

      <div ref={scrollRef} className="forge-scroll" style={{
        display: 'flex',
        gap: 24,
        paddingLeft: 'clamp(24px, 5vw, 80px)',
        paddingRight: 80,
      }}>
        {mentors.map((mentor, i) => (
          <div key={i} style={{ minWidth: 'clamp(200px, 15vw, 220px)', textAlign: 'center' }}>
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="forge-mentor-photo"
              style={{
                width: 'clamp(200px, 15vw, 220px)',
                height: 'clamp(200px, 15vw, 220px)',
                borderRadius: 12,
                objectFit: 'cover',
              }}
            />
            <div style={{ fontWeight: 700, fontSize: 17, marginTop: 16 }}>{mentor.name}</div>
            <div style={{ fontSize: 13, opacity: 0.5 }}>{mentor.designation}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
