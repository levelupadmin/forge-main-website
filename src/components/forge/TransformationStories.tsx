import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDragScroll } from '@/hooks/useDragScroll';
import { ArrowRight } from 'lucide-react';

const transformations = [
  {
    name: 'Chetan Choudhary',
    photo: '/images/alumni/chetan.png',
    before: 'Engineering Student',
    after: 'Independent Filmmaker',
    program: 'Filmmaking Bootcamp',
    quote: 'I walked in with one amateur short film under my belt. After the Forge, I went on to work with some of India\'s biggest music directors on music videos, ads, and short films. Today, I\'m developing my own feature film - a longer version of the short I made at the Forge, with crewmates I found at forge.',
  },
  {
    name: 'Bishall Paul',
    photo: '/images/alumni/vishal.jpg',
    before: 'Business Owner',
    after: 'Bestselling Author',
    program: 'Writing Retreat',
    quote: 'I came to the Forge with an unfinished story and left with the clarity to complete it. Today, I\'m an Amazon bestseller in my category, going on book tours and reaching readers I never thought possible, all from a manuscript that took shape in just six days.',
  },
  {
    name: 'Kiruba Shankar',
    photo: '/images/alumni/kiruba.jpg',
    before: 'Founder',
    after: 'Creatorpreneur',
    program: 'Creator Residency',
    quote: 'Before the Forge, I relied entirely on paid marketing and averaged 800 views per video. Right after the program, two of my videos went viral reaching 500K to 1M views. Now my farm stays are fully booked for the next 3 months through organic content alone.',
  },
];

export default function TransformationStories() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();
  const dragRef = useDragScroll();

  return (
    <section ref={ref} style={{
      background: '#000000',
      padding: 'clamp(48px, 6vw, 80px) 0',
    }}>
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
        textAlign: 'center',
        padding: '0 24px',
        marginBottom: 48,
      }}>
        <div className="forge-subheading forge-subheading--light">Career Outcomes</div>
        <div className="forge-heading forge-heading--light">
          Where They Started.<br />
          Where They Are <span style={{ color: '#FFBC3B' }}>Now</span>.
        </div>
      </div>

      {isMobile ? (
        <div
          ref={dragRef}
          className="forge-scroll"
          style={{ display: 'flex', gap: 16, padding: '0 24px', scrollSnapType: 'x mandatory' }}
        >
          {transformations.map((t, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms`, scrollSnapAlign: 'start', minWidth: '85vw', maxWidth: 320, flexShrink: 0 }}
            >
              <TransformationCard transformation={t} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
        }}>
          {transformations.map((t, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <TransformationCard transformation={t} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function TransformationCard({ transformation }: { transformation: typeof transformations[0] }) {
  return (
    <div 
      className="forge-premium-hover"
      style={{
        background: '#000000',
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        height: '100%',
      }}
    >
      {/* Photo */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <img
          src={transformation.photo}
          alt={transformation.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: transformation.name === 'Kiruba Shankar' ? 'center 20%' : 'center center' }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 100,
          background: 'linear-gradient(transparent, #000000)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '0 24px 28px' }}>
        <div style={{ fontWeight: 700, fontSize: 20, color: 'white', marginBottom: 4 }}>
          {transformation.name}
        </div>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#FFBC3B',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          {transformation.program}
        </div>

        {/* Before → After */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 20,
          padding: '16px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: 12,
        }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Before</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{transformation.before}</div>
          </div>
          <ArrowRight size={16} color="#FFBC3B" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>After</div>
            <div style={{ fontSize: 14, color: '#FFBC3B', fontWeight: 700 }}>{transformation.after}</div>
          </div>
        </div>

        {/* Quote */}
        <p style={{
          fontSize: 14,
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.6,
          margin: 0,
        }}>
          "{transformation.quote}"
        </p>
      </div>
    </div>
  );
}
