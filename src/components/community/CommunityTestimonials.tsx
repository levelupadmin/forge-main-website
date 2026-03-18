import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/data/communityData';

const getInitials = (name: string) =>
  name.trim().split(' ').slice(0, 2).map(n => n[0].toUpperCase()).join('');

export default function CommunityTestimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      style={{
        background: '#000000',
        padding: 'clamp(32px, 4vw, 56px) 0',
      }}
    >
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: 32 }}
      >
        <p className="forge-subheading forge-subheading--light">What They Said</p>
        <div
          className="forge-heading forge-heading--light"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
        >
          From Strangers to Friends for Life in a week
        </div>
      </div>

      <div className={`testimonials-grid forge-fade-up${isVisible ? ' visible' : ''}`} style={{ transitionDelay: '200ms' }}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div
              className="tc-quote-mark"
              style={{
                fontWeight: 800,
                fontSize: 48,
                lineHeight: 0.7,
                marginBottom: 16,
                fontFamily: 'Georgia, serif',
              }}
            >
              "
            </div>
            <p
              className="tc-quote-text"
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              {t.quote}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
              {t.photo ? (
                <img
                  className="tc-member-photo"
                  src={t.photo}
                  alt={t.name}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    flexShrink: 0,
                  }}
                />
              ) : (
                <div
                  className="tc-member-photo"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: '#3a3a3a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.05em',
                    flexShrink: 0,
                  }}
                >
                  {getInitials(t.name)}
                </div>
              )}
              <div>
                <div className="tc-member-name" style={{ fontWeight: 700, fontSize: 14 }}>
                  {t.name}
                </div>
                <div
                  className="tc-program-tag"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginTop: 2,
                  }}
                >
                  {t.program}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
