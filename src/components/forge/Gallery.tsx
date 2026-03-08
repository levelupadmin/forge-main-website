import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery/gallery-1.png', alt: 'Behind the scenes 1' },
  { src: '/images/gallery/gallery-2.png', alt: 'Behind the scenes 2' },
  { src: '/images/gallery/gallery-3.png', alt: 'Behind the scenes 3' },
  { src: '/images/gallery/gallery-4.png', alt: 'Behind the scenes 4' },
  { src: '/images/gallery/gallery-5.png', alt: 'Behind the scenes 5' },
  { src: '/images/gallery/gallery-6.png', alt: 'Behind the scenes 6' },
  { src: '/images/gallery/gallery-7.png', alt: 'Behind the scenes 7' },
  { src: '/images/gallery/gallery-8.png', alt: 'Behind the scenes 8' },
  { src: '/images/gallery/gallery-9.png', alt: 'Behind the scenes 9' },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section ref={ref} style={{
      background: '#FFFFFF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="forge-subheading">Behind the scenes</div>
        <div className="forge-heading">at the Forge</div>
      </div>

      <div className="forge-masonry" style={{ maxWidth: 1280, margin: '0 auto' }}>
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{ transitionDelay: `${200 + i * 80}ms` }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="forge-gallery-img"
              onClick={() => setLightboxImg(img.src)}
              style={{
                width: '100%',
                borderRadius: 12,
                objectFit: 'cover',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                height: i % 3 === 0 ? 300 : i % 3 === 1 ? 200 : 250,
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="forge-lightbox" onClick={() => setLightboxImg(null)}>
          <button
            onClick={() => setLightboxImg(null)}
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
          <img
            src={lightboxImg}
            alt="Gallery fullscreen"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
