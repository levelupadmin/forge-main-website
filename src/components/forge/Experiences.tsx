import { useState, useEffect } from 'react';
import { programs } from '@/data/programs';

export default function Experiences() {
  return (
    <section id="experiences" style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <span style={{ fontWeight: 700, fontSize: 48 }}>The Forge </span>
        <span style={{ fontWeight: 400, fontSize: 48, opacity: 0.4 }}>Experiences</span>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 24,
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        {programs.map(program => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: typeof programs[0] }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto(prev => (prev + 1) % program.photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [program.photos.length]);

  return (
    <div className="forge-card" style={{
      background: '#FFFFFF',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
    }}>
      {/* Photo carousel */}
      <div style={{ position: 'relative', paddingBottom: '75%', overflow: 'hidden' }}>
        {program.photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`${program.title} photo ${i + 1}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: i === currentPhoto ? 1 : 0,
              transition: 'opacity 400ms ease',
            }}
          />
        ))}
        {program.nextEdition && (
          <div className="forge-badge">
            <div style={{ fontSize: 11, fontWeight: 400 }}>Next Edition</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{program.nextEdition}</div>
          </div>
        )}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: 4, padding: '12px 24px 0', justifyContent: 'center' }}>
        {program.photos.map((_, i) => (
          <button
            key={i}
            className={`forge-dot${i === currentPhoto ? ' active' : ''}`}
            onClick={() => setCurrentPhoto(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '20px 24px 28px' }}>
        <div style={{
          fontSize: 12,
          fontWeight: 400,
          color: '#FFBC3B',
          letterSpacing: '0.08em',
          marginBottom: 8,
          textTransform: 'uppercase',
        }}>
          {program.tag}
        </div>
        <div style={{ fontWeight: 700, fontSize: 20, color: '#222', marginBottom: 8 }}>
          {program.title}
        </div>
        <p style={{ fontSize: 14, opacity: 0.6, lineHeight: 1.6, marginBottom: 20 }}>
          {program.description}
        </p>
        <a href={program.href} style={{
          display: 'inline-block',
          background: '#222',
          color: 'white',
          borderRadius: 100,
          padding: '10px 24px',
          fontSize: 13,
          fontWeight: 700,
          textDecoration: 'none',
          transition: 'background 200ms ease',
          fontFamily: "'Open Sauce One', sans-serif",
        }}
        onMouseEnter={e => (e.target as HTMLElement).style.background = '#FFBC3B'}
        onMouseLeave={e => (e.target as HTMLElement).style.background = '#222'}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
