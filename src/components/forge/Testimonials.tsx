import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { useDragScroll } from '@/hooks/useDragScroll';
import { Play } from 'lucide-react';

export default function Testimonials() {
  const scrollRef = useDragScroll();

  return (
    <section id="stories" style={{
      background: '#FFFFFF',
      padding: 'clamp(64px, 10vw, 120px) 0',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 24px' }}>
        <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8 }}>Hear it from</div>
        <div style={{ fontWeight: 700, fontSize: 48 }}>the people who were there.</div>
      </div>

      <div ref={scrollRef} className="forge-scroll" style={{
        display: 'flex',
        gap: 24,
        paddingLeft: 'clamp(24px, 5vw, 80px)',
        paddingRight: 80,
      }}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{
      minWidth: 'clamp(280px, 22vw, 300px)',
      background: '#FFFFFF',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
    }}>
      {/* Video area */}
      <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
        {playing ? (
          <iframe
            src={`https://player.vimeo.com/video/${testimonial.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            allow="autoplay; fullscreen"
            title={`${testimonial.name} testimonial`}
          />
        ) : (
          <>
            <img
              src={testimonial.thumbnail}
              alt={testimonial.name}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <button className="forge-play-btn" onClick={() => setPlaying(true)}>
              <Play size={20} fill="white" color="white" style={{ marginLeft: 3 }} />
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '20px 20px 4px' }}>
        <div style={{ fontWeight: 700, fontSize: 17, color: '#222' }}>{testimonial.name}</div>
      </div>
      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ fontSize: 13, color: '#FFBC3B', letterSpacing: '0.06em' }}>{testimonial.program}</div>
      </div>
    </div>
  );
}
