import { useState, useEffect } from 'react';
import { programs } from '@/data/programs';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

export default function Experiences() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="experiences" ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
      position: 'relative',
    }}>
      {/* Subtle golden accent line at top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 80,
        height: 3,
        background: 'linear-gradient(90deg, transparent, #FFBC3B, transparent)',
        borderRadius: 2,
      }} />

      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
        <div className="forge-subheading">Explore</div>
        <div className="forge-heading">The Forge Experiences</div>
        <p style={{ fontSize: 17, opacity: 0.55, marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
          Choose the experience that matches your creative path.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 28,
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        {programs.map((program, i) => (
          <div
            key={program.title}
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{ transitionDelay: `${200 + i * 150}ms` }}
          >
            <ProgramCard program={program} />
          </div>
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
    <div className="forge-card-glow" style={{
      background: '#FFFFFF',
      borderRadius: 20,
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
          <div className="forge-badge forge-badge-pulse">
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
          fontWeight: 600,
          color: '#DD6F15',
          letterSpacing: '0.12em',
          marginBottom: 8,
          textTransform: 'uppercase',
        }}>
          {program.tag}
        </div>
        <div style={{ fontWeight: 700, fontSize: 22, color: '#222', marginBottom: 8 }}>
          {program.title}
        </div>
        <p style={{ fontSize: 14, opacity: 0.6, lineHeight: 1.6, marginBottom: 8 }}>
          {program.description}
        </p>
        <div style={{ fontSize: 13, color: '#DD6F15', fontWeight: 600, marginBottom: 20 }}>
          Limited spots available
        </div>
        <a href={program.href} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#222',
          color: 'white',
          borderRadius: 100,
          padding: '12px 28px',
          fontSize: 14,
          fontWeight: 700,
          textDecoration: 'none',
          transition: 'background 200ms ease, gap 200ms ease',
          fontFamily: "'Open Sauce One', sans-serif",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = '#FFBC3B';
          (e.currentTarget as HTMLElement).style.gap = '14px';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = '#222';
          (e.currentTarget as HTMLElement).style.gap = '8px';
        }}
        >
          Learn More <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
