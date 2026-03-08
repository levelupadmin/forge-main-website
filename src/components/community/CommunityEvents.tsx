import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { communityEvents } from '@/data/communityData';
import { MapPin, Calendar } from 'lucide-react';

export default function CommunityEvents() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();

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
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: 40 }}
      >
        <p className="forge-subheading">Events</p>
        <div className="forge-heading" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
          Community Happenings
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 48px)',
        }}
      >
        {communityEvents.map((event, i) => (
          <div
            key={i}
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{ transitionDelay: `${200 + i * 100}ms` }}
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }: { event: typeof communityEvents[0] }) {
  const typeLabel =
    event.type === 'meetup' ? 'Meetup' : event.type === 'workshop' ? 'Workshop' : 'Guest Lecture';

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
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <img
          src={event.photo}
          alt={event.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: 'var(--forge-yellow)',
            color: 'var(--forge-black)',
            fontSize: 11,
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: 100,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {typeLabel}
        </div>
      </div>
      <div style={{ padding: '16px 20px 20px' }}>
        <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, lineHeight: 1.3 }}>
          {event.title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, opacity: 0.6 }}>
            <Calendar size={14} />
            {event.date}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, opacity: 0.6 }}>
            <MapPin size={14} />
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
}
