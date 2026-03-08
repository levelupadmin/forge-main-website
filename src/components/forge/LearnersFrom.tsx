import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const row1 = [
  { name: 'Google', logo: '/images/learners/google.png' },
  { name: 'Adobe', logo: '/images/learners/adobe.png' },
  { name: 'Amazon', logo: '/images/learners/amazon.png' },
  { name: 'Netflix', logo: '/images/learners/netflix.png' },
  { name: 'Meta', logo: '/images/learners/meta.png' },
  { name: 'Microsoft', logo: '/images/learners/microsoft.png' },
  { name: 'Swiggy', logo: '/images/learners/swiggy.png' },
  { name: 'Zomato', logo: '/images/learners/zomato.png' },
  { name: 'American Express', logo: '/images/learners/amex.png' },
];

const row2 = [
  { name: 'IIM', logo: '/images/learners/iim.png' },
  { name: 'Symbiosis', logo: '/images/learners/symbiosis.png' },
  { name: 'Christ University', logo: '/images/learners/christ.png' },
  { name: 'Government of India', logo: '/images/learners/govt-india.png' },
  { name: 'NIFT', logo: '/images/learners/nift.png' },
  { name: 'NID', logo: '/images/learners/nid.png' },
];

function MarqueeRow({ items, direction }: { items: typeof row1; direction: 'left' | 'right' }) {
  const duplicated = [...items, ...items, ...items, ...items];
  const animClass = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right';

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex items-center ${animClass}`} style={{ width: 'max-content', gap: 0 }}>
        {duplicated.map((item, i) => (
          <div key={`${item.name}-${i}`} className="flex-shrink-0 flex items-center justify-center px-4" style={{ height: 128 }}>
            <img
              src={item.logo}
              alt={item.name}
              className="h-20 md:h-32 w-auto object-contain opacity-30 grayscale"
              loading="lazy"
            />
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
      style={{ padding: isMobile ? '40px 0' : '48px 0' }}
    >
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`}>
        <p className="text-center mb-8" style={{
          fontSize: isMobile ? 12 : 14,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.35)',
        }}>
          Our learners are from
        </p>

        <div className="flex flex-col gap-6">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}
