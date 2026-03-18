import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDragScroll } from '@/hooks/useDragScroll';
import { testimonials } from '@/data/communityData';

export default function CommunityTestimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();
  const dragRef = useDragScroll();

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-black)',
        padding: 'clamp(32px, 4vw, 56px) 0',
      }}
    >
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: 12 }}
      >
        <p className="forge-subheading forge-subheading--light">What They Said</p>
        <div
          className="forge-heading forge-heading--light"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
        >
          From Strangers to Friends for Life in a week
        </div>
      </div>

      {isMobile ? (
        <div
          ref={dragRef}
          className="forge-scroll"
          style={{
            display: 'flex',
            gap: 16,
            padding: '32px 24px 0',
            scrollSnapType: 'x mandatory',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                scrollSnapAlign: 'start',
                minWidth: 300,
                flexShrink: 0,
              }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            maxWidth: 1200,
            margin: '32px auto 0',
            padding: '0 clamp(16px, 3vw, 48px)',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: '28px 24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          fontSize: 48,
          lineHeight: 1,
          color: 'var(--forge-yellow)',
          fontFamily: 'Georgia, serif',
          marginBottom: 12,
        }}
      >
        "
      </div>
      <p
        style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: 15,
          lineHeight: 1.7,
          flex: 1,
          marginBottom: 20,
        }}
      >
        {testimonial.quote}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <div style={{ color: 'white', fontWeight: 700, fontSize: 14 }}>
            {testimonial.name}
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'var(--forge-yellow)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginTop: 2,
            }}
          >
            {testimonial.program}
          </div>
        </div>
      </div>
    </div>
  );
}
