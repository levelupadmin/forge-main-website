import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const row1 = [
  { name: 'Google', logo: '/images/learners/google.png' },
  { name: 'McKinsey & Co', logo: '/images/learners/mckinsey.png' },
  { name: 'Amazon', logo: '/images/learners/amazon.png' },
  { name: 'Netflix', logo: '/images/learners/netflix.png' },
  { name: 'Meta', logo: '/images/learners/meta.png' },
  { name: 'Microsoft', logo: '/images/learners/microsoft.png' },
  { name: 'Swiggy', logo: '/images/learners/swiggy.png' },
  { name: 'Zomato', logo: '/images/learners/zomato.png' },
];

const row2 = [
  { name: 'American Express', logo: '/images/learners/amex.png' },
  { name: 'Ashoka University', logo: '/images/learners/ashoka.png' },
  { name: 'IIM', logo: '/images/learners/iim.png' },
  { name: 'Symbiosis', logo: '/images/learners/symbiosis.png' },
  { name: 'Christ University', logo: '/images/learners/christ.png' },
  { name: 'Government of India', logo: '/images/learners/govt-india.png' },
  { name: 'NIFT', logo: '/images/learners/nift.png' },
  { name: 'NID', logo: '/images/learners/nid.png' },
];

function MarqueeRow({ items, direction, isMobile }: { items: typeof row1; direction: 'left' | 'right'; isMobile: boolean }) {
  const duplicated = [...items, ...items, ...items, ...items];
  const animClass = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right';
  const logoH = isMobile ? 28 : 40;
  const fontSize = isMobile ? 20 : 28;
  const itemGap = isMobile ? 32 : 56;

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex items-center ${animClass}`} style={{ width: 'max-content' }}>
        {duplicated.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex-shrink-0 flex items-center"
            style={{ gap: isMobile ? 10 : 14, paddingLeft: itemGap / 2, paddingRight: itemGap / 2 }}
          >
            <img
              src={item.logo}
              alt={item.name}
              style={{ height: logoH, width: 'auto' }}
              className="object-contain"
              loading="lazy"
            />
            <span
              style={{
                fontSize,
                fontWeight: 700,
                color: '#1a1a1a',
                whiteSpace: 'nowrap',
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
  const isMobile = useIsMobile();

  return (
    <section
      ref={ref}
      className="bg-white overflow-hidden"
      style={{ padding: isMobile ? '24px 0 16px' : '32px 0 20px' }}
    >
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
        <p className="text-center mb-4" style={{
          fontSize: isMobile ? 12 : 14,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#000000',
          fontFamily: "'Open Sauce One', sans-serif",
        }}>
          Our Students Are From
        </p>

        <div className="flex flex-col" style={{ gap: isMobile ? 6 : 12 }}>
          <MarqueeRow items={row1} direction="left" isMobile={isMobile} />
          <MarqueeRow items={row2} direction="right" isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}
