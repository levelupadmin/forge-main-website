import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { successStories } from '@/data/communityData';
import { useDragScroll } from '@/hooks/useDragScroll';

export default function SuccessStories() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();
  const dragRef = useDragScroll();

  return (
    <section
      id="success-stories"
      ref={ref}
      style={{
        background: 'var(--forge-cream)',
        padding: 'clamp(48px, 6vw, 80px) 0',
      }}
    >
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: 40 }}
      >
        <p className="forge-subheading">Success Stories</p>
        <div className="forge-heading" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
          What Our Alumni Have Achieved
        </div>
      </div>

      {isMobile ? (
        <div
          ref={dragRef}
          className="forge-scroll"
          style={{ display: 'flex', gap: 16, padding: '0 24px', scrollSnapType: 'x mandatory' }}
        >
          {successStories.map((story, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms`, scrollSnapAlign: 'start', minWidth: 280, flexShrink: 0 }}
            >
              <StoryCard story={story} />
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
            margin: '0 auto',
            padding: '0 clamp(16px, 3vw, 48px)',
          }}
        >
          {successStories.map((story, i) => (
            <div
              key={i}
              className={`forge-fade-up${isVisible ? ' visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function StoryCard({ story }: { story: typeof successStories[0] }) {
  return (
    <div
      className="forge-card"
      style={{
        background: 'white',
        borderRadius: 20,
        overflow: 'hidden',
        height: '100%',
      }}
    >
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
        <img
          src={story.photo}
          alt={story.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 16,
            fontSize: 12,
            fontWeight: 600,
            background: 'var(--forge-yellow)',
            color: 'var(--forge-black)',
            padding: '4px 12px',
            borderRadius: 100,
          }}
        >
          {story.program}
        </div>
      </div>
      <div style={{ padding: '20px 20px 24px' }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{story.name}</div>
        <p style={{ fontSize: 14, fontStyle: 'italic', opacity: 0.6, marginBottom: 12, lineHeight: 1.5 }}>
          {story.quote}
        </p>
        <p style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.5 }}>{story.achievement}</p>
      </div>
    </div>
  );
}
