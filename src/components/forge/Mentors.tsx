import { useState, useCallback, useEffect, useRef } from 'react';
import { mentors } from '@/data/mentors';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Mentors() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

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

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActiveIndex(prev => (prev + 1) % mentors.length);
      }
    }, 4000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, []);

  const handleInteraction = () => {
    pausedRef.current = true;
    setTimeout(() => { pausedRef.current = false; }, 8000);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { navigate('prev'); handleInteraction(); }
      if (e.key === 'ArrowRight') { navigate('next'); handleInteraction(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [navigate]);

  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > mentors.length / 2) diff -= mentors.length;
    if (diff < -mentors.length / 2) diff += mentors.length;
    return diff;
  };

  if (isMobile) {
    return (
      <section id="mentors" style={{
        background: 'var(--forge-cream)',
        padding: 'clamp(48px, 6vw, 80px) 0',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: 600,
          margin: '0 auto 40px',
          padding: '0 24px',
        }}>
          <div className="forge-subheading">Your</div>
          <div className="forge-heading">Mentors</div>
          <p style={{
            fontSize: 15,
            opacity: 0.55,
            lineHeight: 1.7,
            color: 'var(--forge-black)',
            maxWidth: 400,
            margin: '16px auto 0',
          }}>
            Your mentors aren't professors. They're creators who've grossed 100M+ views, taught 7,000+ students, and monetized their content.
          </p>
        </div>

        {/* Mobile: Stacked cards */}
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {mentors.map((mentor, i) => (
            <div key={i} style={{
              background: '#1a1a1a',
              borderRadius: 20,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'row',
              gap: 0,
            }}>
              {/* Photo */}
              <div style={{
                width: '40%',
                minHeight: 200,
                flexShrink: 0,
              }}>
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Info */}
              <div style={{
                flex: 1,
                padding: '16px 16px 16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <div style={{
                  fontWeight: 800,
                  fontSize: 17,
                  color: 'white',
                  marginBottom: 3,
                  letterSpacing: -0.2,
                }}>
                  {mentor.name}
                </div>
                <div style={{
                  fontSize: 10,
                  color: '#FFBC3B',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 0.8,
                  marginBottom: 10,
                }}>
                  {mentor.designation}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {mentor.highlights.map((h, hi) => (
                    <div key={hi} style={{
                      display: 'flex',
                      gap: 8,
                      alignItems: 'flex-start',
                    }}>
                      <div style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: '#FFBC3B',
                        marginTop: 5,
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: 11,
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.45,
                      }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: Carousel
  return (
    <section id="mentors" style={{
      background: 'var(--forge-cream)',
      padding: 'clamp(48px, 6vw, 80px) 0',
      overflow: 'hidden',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: 600,
        margin: '0 auto 64px',
        padding: '0 24px',
      }}>
        <div className="forge-subheading">Your</div>
        <div className="forge-heading">Mentors</div>
        <p style={{
          fontSize: 17,
          opacity: 0.55,
          lineHeight: 1.8,
          color: 'var(--forge-black)',
          maxWidth: 480,
          margin: '20px auto 0',
        }}>
          Your mentors aren't professors. They're creators who've grossed 100M+ views, taught 7,000+ students, and monetized their content.
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          height: 560,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <button
          onClick={() => { navigate('prev'); handleInteraction(); }}
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
                onClick={() => { if (!isActive) { goTo(i); handleInteraction(); } }}
                style={{
                  position: 'absolute',
                  width: isActive ? 340 : 220,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  cursor: isActive ? 'default' : 'pointer',
                }}
              >
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

                <div style={{
                  textAlign: 'center',
                  marginTop: 20,
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
                    fontSize: 13,
                    color: '#FFBC3B',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    marginBottom: 14,
                  }}>
                    {mentor.designation}
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    textAlign: 'left',
                    maxWidth: 380,
                    margin: '0 auto',
                  }}>
                    {mentor.highlights.slice(0, 2).map((h, hi) => (
                      <div key={hi} style={{
                        display: 'flex',
                        gap: 8,
                        alignItems: 'flex-start',
                      }}>
                        <div style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: '#FFBC3B',
                          marginTop: 6,
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: 13,
                          color: 'var(--forge-black)',
                          opacity: 0.6,
                          lineHeight: 1.5,
                        }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => { navigate('next'); handleInteraction(); }}
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

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 10,
        marginTop: 40,
      }}>
        {mentors.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); handleInteraction(); }}
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
