import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDragScroll } from '@/hooks/useDragScroll';
import { tribeMembers } from '@/data/communityData';
import { Instagram } from 'lucide-react';

export default function MeetTheTribe() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();
  const dragRef = useDragScroll();

  // Split into 2 rows
  const midpoint = Math.ceil(tribeMembers.length / 2);
  const row1 = tribeMembers.slice(0, midpoint);
  const row2 = tribeMembers.slice(midpoint);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-cream)',
        padding: 'clamp(48px, 6vw, 80px) 0',
      }}
    >
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: 12 }}
      >
        <p className="forge-subheading">Our Alma Mater</p>
        <div className="forge-heading" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
          Meet your friends for life
        </div>
      </div>
      <p
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 48px',
          padding: '0 24px',
          fontSize: 15,
          opacity: 0.6,
          lineHeight: 1.7,
          transitionDelay: '100ms',
        }}
      >
        Our alumni are India's Top Creatives, Founders, Filmmakers, Storytellers and Creators who make you feel like you never want to leave the Forge.
      </p>

      <div
        ref={dragRef}
        className="forge-scroll"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          padding: '0 clamp(16px, 3vw, 48px)',
          overflow: 'hidden',
        }}
      >
        {[row1, row2].map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="forge-scroll"
            style={{
              display: 'flex',
              gap: 24,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              paddingBottom: 4,
            }}
          >
            {row.map((member, i) => (
              <div
                key={member.name}
                className={`forge-fade-up${isVisible ? ' visible' : ''}`}
                style={{
                  transitionDelay: `${200 + (rowIdx * 10 + i) * 60}ms`,
                  scrollSnapAlign: 'start',
                  minWidth: isMobile ? 210 : 260,
                  maxWidth: isMobile ? 210 : 260,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    borderRadius: 16,
                    overflow: 'hidden',
                    background: 'var(--forge-black)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: '14px 14px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: 16,
                        color: 'var(--forge-white)',
                        lineHeight: 1.3,
                      }}
                    >
                      {member.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.5)',
                        marginBottom: 8,
                      }}
                    >
                      {member.descriptor}
                    </div>
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'rgba(255,255,255,0.4)',
                          transition: 'color 0.2s',
                          display: 'inline-flex',
                          width: 'fit-content',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forge-yellow)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
