import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/images/programs/filmmaking-5.jpg', alt: 'Filmmaking bootcamp — cinematic lighting setup' },
  { src: '/images/programs/writing-1.jpg', alt: 'Writing Retreat — group photo' },
  { src: '/images/programs/creators-1.jpg', alt: 'Creator Residency — content recording session' },
  { src: '/images/programs/writing-3.jpg', alt: 'Writing Retreat — whiteboard session' },
  { src: '/images/programs/filmmaking-8.jpg', alt: 'Filmmaking bootcamp — outdoor shoot' },
  { src: '/images/programs/creators-2.jpg', alt: 'Creator Residency — group photo by the pool' },
  { src: '/images/programs/creators-5.jpg', alt: 'Creator Residency — lighting workshop' },
  { src: '/images/programs/writing-4.jpg', alt: 'Writing Retreat — writing outdoors' },
  { src: '/images/programs/filmmaking-7.jpg', alt: 'Filmmaking bootcamp — hands-on camera work' },
  { src: '/images/programs/writing-5.jpg', alt: 'Writing Retreat — indoor discussion' },
  { src: '/images/programs/creators-6.jpg', alt: 'Creator Residency — vlogging in Ubud' },
  { src: '/images/programs/writing-7.jpg', alt: 'Writing Retreat — outdoor workshop' },
  { src: '/images/programs/creators-8.jpg', alt: 'Creator Residency — group selfie' },
  { src: '/images/programs/filmmaking-6.jpg', alt: 'Filmmaking bootcamp — group photo' },
  { src: '/images/programs/writing-8.jpg', alt: 'Writing Retreat — sunset session' },
  { src: '/images/programs/creators-3.jpg', alt: 'Creator Residency — exploring nature' },
  { src: '/images/programs/writing-2.jpg', alt: 'Writing Retreat — smiling outdoors' },
  { src: '/images/programs/creators-4.jpg', alt: 'Creator Residency — outdoor mentoring' },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const images = isMobile ? galleryImages.slice(0, 9) : galleryImages;

  return (
    <section ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
    }}>
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
        <div className="forge-subheading">Behind the scenes</div>
        <div className="forge-heading">at the Forge</div>
      </div>

      <div className="forge-masonry" style={{ maxWidth: 1280, margin: '0 auto' }}>
        {images.map((img, i) => (
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
                borderRadius: isMobile ? 8 : 12,
                objectFit: 'cover',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                height: i % 3 === 0 ? (isMobile ? 200 : 300) : i % 3 === 1 ? (isMobile ? 140 : 200) : (isMobile ? 170 : 250),
              }}
            />
          </div>
        ))}
      </div>

      {lightboxImg && (
        <div className="forge-lightbox" onClick={() => setLightboxImg(null)}>
          <button
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute', top: 24, right: 24,
              width: 44, height: 44, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.1)',
              color: 'white', display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', zIndex: 1001,
            }}
          >
            <X size={20} />
          </button>
          <img src={lightboxImg} alt="Gallery fullscreen" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
