import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { useDragScroll } from '@/hooks/useDragScroll';
import { Play, X } from 'lucide-react';

export default function Testimonials() {
  const scrollRef = useDragScroll();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="stories" style={{
      background: 'var(--forge-cream)',
      padding: 'clamp(48px, 6vw, 80px) 0',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 24px' }}>
        <div className="forge-subheading">Hear from</div>
        <div className="forge-heading">our Alumni</div>
      </div>

      <div ref={scrollRef} className="forge-scroll" style={{
        display: 'flex',
        gap: 20,
        paddingLeft: 'clamp(24px, 5vw, 80px)',
        paddingRight: 80,
        alignItems: 'flex-start',
      }}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} onPlay={() => setActiveVideo(t.vimeoId)} />
        ))}
      </div>

      {/* Vimeo Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <button
            onClick={() => setActiveVideo(null)}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1001,
            }}
          >
            <X size={20} />
          </button>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '90vw',
              maxWidth: 400,
              aspectRatio: '9/16',
              borderRadius: 20,
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            <iframe
              src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&title=0&byline=0&portrait=0`}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; fullscreen"
              title="Testimonial video"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function TestimonialCard({ testimonial, onPlay }: { testimonial: typeof import('@/data/testimonials').testimonials[0]; onPlay: () => void }) {
  return (
    <div
      onClick={onPlay}
      className="forge-testimonial-card"
      style={{
        minWidth: 240,
        flex: '0 0 240px',
        borderRadius: 20,
        overflow: 'visible',
        position: 'relative',
        aspectRatio: '9/16',
        cursor: 'pointer',
        background: '#1a1a1a',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 20,
        overflow: 'hidden',
      }}>
      <img
        src={testimonial.thumbnail}
        alt={testimonial.name}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.18)',
        backdropFilter: 'blur(8px)',
        border: '1.5px solid rgba(255,255,255,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.25s ease, transform 0.25s ease',
      }}>
        <Play size={22} fill="white" color="white" style={{ marginLeft: 3 }} />
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '24px 20px',
      }}>
        <div style={{
          fontWeight: 700,
          fontSize: 17,
          color: 'white',
          marginBottom: 4,
        }}>
          {testimonial.name}
        </div>
        <div style={{
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--forge-yellow)',
          letterSpacing: 0.5,
        }}>
          {testimonial.program}
        </div>
        </div>
      </div>
    </div>
  );
}
