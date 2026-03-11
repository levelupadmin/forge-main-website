import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const row1 = [
  { name: 'Google', logo: '/images/learners/google.png' },
  { name: 'McKinsey & Co', logo: '/images/learners/mckinsey.png' },
  { name: 'Amazon', logo: '/images/learners/amazon.png' },
  { name: 'Netflix', logo: '/images/learners/netflix.png' },
  { name: 'Meta', logo: '/images/learners/meta.png' },
  { name: 'Microsoft', logo: '/images/learners/microsoft.png' },
  { name: 'Swiggy', logo: '/images/learners/swiggy.png' },
  { name: 'Zomato', logo: '/images/learners/zomato.png' },
  { name: 'CRED', logo: '/images/learners/cred.png' },
];

const row2 = [
  { name: 'American Express', logo: '/images/learners/amex.png' },
  { name: 'Ashoka University', logo: '/images/learners/ashoka.png' },
  { name: 'IIM', logo: '/images/learners/iim.png' },
  { name: 'Symbiosis', logo: '/images/learners/symbiosis.png' },
  { name: 'Christ University', logo: '/images/learners/christ.png' },
  { name: 'Government of India', logo: '/images/learners/govt-india.png' },
  { name: 'NIFT', logo: '/images/learners/nift.png' },
  { name: 'Loyola', logo: '/images/learners/loyola.png' },
];

function MarqueeRow({ items, direction }: { items: typeof row1; direction: 'left' | 'right' }) {
  const duplicated = [...items, ...items, ...items, ...items];
  const animClass = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right';

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex items-center ${animClass}`} style={{ width: 'max-content' }}>
        {duplicated.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex-shrink-0 flex items-center"
            style={{ gap: 12, marginRight: 56 }}
          >
            <img
              src={item.logo}
              alt={item.name}
              style={{ height: 40, width: 'auto', objectFit: 'contain' }}
              loading="lazy"
            />
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#111111',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.3px',
                fontFamily: "'Open Sauce One', sans-serif",
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LearnersFrom() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className="overflow-hidden"
      style={{ padding: '20px 0 32px', backgroundColor: '#FFFFFF' }}
    >
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
        <p className="text-center mb-4" style={{
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#000000',
          fontFamily: "'Open Sauce One', sans-serif",
        }}>
          Join 600+ Dreamers from
        </p>

        <div className="flex flex-col" style={{ gap: 12 }}>
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}
