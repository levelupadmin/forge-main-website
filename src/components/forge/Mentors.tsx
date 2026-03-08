import { useState, useCallback, useEffect } from 'react';
import { mentors } from '@/data/mentors';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Mentors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(prev => {
      if (direction === 'next') return (prev + 1) % mentors.length;
      return (prev - 1 + mentors.length) % mentors.length;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [navigate]);

  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    // Wrap around for circular navigation
    if (diff > mentors.length / 2) diff -= mentors.length;
    if (diff < -mentors.length / 2) diff += mentors.length;
    return diff;
  };

  return (
    <section id="mentors" style={{
      background: 'var(--forge-cream)',
      padding: 'clamp(80px, 12vw, 140px) 0',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        maxWidth: 600,
        margin: '0 auto 64px',
        padding: '0 24px',
      }}>
        <div style={{
          fontSize: 15,
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          letterSpacing: 3,
          color: 'var(--forge-dark-amber)',
          marginBottom: 12,
        }}>
          Learn from
        </div>
        <div style={{
          fontWeight: 800,
          fontSize: 'clamp(36px, 5vw, 56px)',
          lineHeight: 1.1,
          color: 'var(--forge-black)',
          marginBottom: 20,
        }}>
          the best
        </div>
        <p style={{
          fontSize: 17,
          opacity: 0.55,
          lineHeight: 1.8,
          color: 'var(--forge-black)',
          maxWidth: 480,
          margin: '0 auto',
        }}>
          Every mentor at the Forge is a practitioner of their craft. A working filmmaker, a published author, a full-time creator. Not a professor.
        </p>
      </div>

      {/* Carousel */}
      <div style={{
        position: 'relative',
        height: 520,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Arrow Left */}
        <button
          onClick={() => navigate('prev')}
          aria-label="Previous mentor"
          style={{
            position: 'absolute',
            left: 'clamp(16px, 5vw, 80px)',
            zIndex: 10,
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1.5px solid rgba(34,34,34,0.12)',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--forge-yellow)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(34,34,34,0.12)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          <ChevronLeft size={20} color="#222" />
        </button>

        {/* Cards */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {mentors.map((mentor, i) => {
            const offset = getOffset(i);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const scale = isActive ? 1 : 0.68;
            const opacity = isActive ? 1 : 0.4;
            const translateX = offset * 280;
            const zIndex = isActive ? 5 : 3 - Math.abs(offset);

            return (
              <div
                key={i}
                onClick={() => !isActive && goTo(i)}
                style={{
                  position: 'absolute',
                  width: isActive ? 320 : 220,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  cursor: isActive ? 'default' : 'pointer',
                  pointerEvents: isActive ? 'auto' : 'auto',
                }}
              >
                {/* Photo Container */}
                <div style={{
                  width: '100%',
                  height: isActive ? 400 : 280,
                  borderRadius: isActive ? 24 : 18,
                  overflow: 'hidden',
                  background: '#e8e2d8',
                  boxShadow: isActive
                    ? '0 24px 64px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)'
                    : '0 8px 24px rgba(0,0,0,0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      transform: isActive ? 'scale(1)' : 'scale(1.05)',
                      filter: isActive ? 'none' : 'grayscale(40%)',
                    }}
                  />
                </div>

                {/* Info — only visible on active */}
                <div style={{
                  textAlign: 'center',
                  marginTop: 24,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}>
                  <div style={{
                    fontWeight: 800,
                    fontSize: 24,
                    color: 'var(--forge-black)',
                    marginBottom: 4,
                    letterSpacing: -0.3,
                  }}>
                    {mentor.name}
                  </div>
                  <div style={{
                    fontSize: 15,
                    color: 'var(--forge-black)',
                    opacity: 0.5,
                    marginBottom: 16,
                    fontWeight: 500,
                  }}>
                    {mentor.designation}
                  </div>

                  {/* Credential Badges */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    justifyContent: 'center',
                  }}>
                    {mentor.credentials.map((cred, ci) => (
                      <span key={ci} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        padding: '6px 14px',
                        borderRadius: 100,
                        fontSize: 12,
                        fontWeight: 600,
                        color: 'var(--forge-dark-amber)',
                        background: 'rgba(255,188,59,0.12)',
                        border: '1px solid rgba(255,188,59,0.25)',
                        letterSpacing: 0.2,
                      }}>
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow Right */}
        <button
          onClick={() => navigate('next')}
          aria-label="Next mentor"
          style={{
            position: 'absolute',
            right: 'clamp(16px, 5vw, 80px)',
            zIndex: 10,
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '1.5px solid rgba(34,34,34,0.12)',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--forge-yellow)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(34,34,34,0.12)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          <ChevronRight size={20} color="#222" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        marginTop: 40,
      }}>
        {mentors.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to mentor ${i + 1}`}
            style={{
              width: activeIndex === i ? 28 : 8,
              height: 8,
              borderRadius: 100,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: activeIndex === i ? 'var(--forge-yellow)' : 'rgba(34,34,34,0.12)',
              transition: 'all 0.35s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
}
