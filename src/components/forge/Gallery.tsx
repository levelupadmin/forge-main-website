import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { X } from 'lucide-react';

const row1 = [
  { src: '/images/programs/filmmaking-5.jpg', alt: 'Filmmaking bootcamp — cinematic lighting setup' },
  { src: '/images/programs/writing-1.jpg', alt: 'Writing Retreat — group photo' },
  { src: '/images/programs/creators-1.jpg', alt: 'Creator Residency — content recording session' },
  { src: '/images/programs/writing-3.jpg', alt: 'Writing Retreat — whiteboard session' },
  { src: '/images/programs/filmmaking-8.jpg', alt: 'Filmmaking bootcamp — outdoor shoot' },
  { src: '/images/programs/creators-2.jpg', alt: 'Creator Residency — group photo by the pool' },
];

const row2 = [
  { src: '/images/programs/creators-5.jpg', alt: 'Creator Residency — lighting workshop' },
  { src: '/images/programs/writing-4.jpg', alt: 'Writing Retreat — writing outdoors' },
  { src: '/images/programs/filmmaking-7.jpg', alt: 'Filmmaking bootcamp — hands-on camera work' },
  { src: '/images/programs/writing-5.jpg', alt: 'Writing Retreat — indoor discussion' },
  { src: '/images/programs/creators-6.jpg', alt: 'Creator Residency — vlogging in Ubud' },
  { src: '/images/programs/writing-7.jpg', alt: 'Writing Retreat — outdoor workshop' },
];

const row3 = [
  { src: '/images/programs/creators-8.jpg', alt: 'Creator Residency — group selfie' },
  { src: '/images/programs/filmmaking-6.jpg', alt: 'Filmmaking bootcamp — group photo' },
  { src: '/images/programs/writing-8.jpg', alt: 'Writing Retreat — sunset session' },
  { src: '/images/programs/creators-3.jpg', alt: 'Creator Residency — exploring nature' },
  { src: '/images/programs/writing-2.jpg', alt: 'Writing Retreat — smiling outdoors' },
  { src: '/images/programs/creators-4.jpg', alt: 'Creator Residency — outdoor mentoring' },
];

function MarqueeGalleryRow({ 
  items, 
  direction, 
  height,
  onImageClick 
}: { 
  items: typeof row1; 
  direction: 'left' | 'right'; 
  height: number;
  onImageClick: (src: string) => void;
}) {
  const duplicated = [...items, ...items, ...items, ...items];
  const animClass = direction === 'left' ? 'gallery-marquee-left' : 'gallery-marquee-right';

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex ${animClass}`} style={{ width: 'max-content', gap: 12 }}>
        {duplicated.map((img, i) => (
          <img
            key={`${img.alt}-${i}`}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onClick={() => onImageClick(img.src)}
            style={{
              height,
              width: 'auto',
              minWidth: height * 1.2,
              objectFit: 'cover',
              borderRadius: 8,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const rowHeight = isMobile ? 120 : 180;

  return (
    <section ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: isMobile ? '48px 0' : '80px 0',
      overflow: 'hidden',
    }}>
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: isMobile ? 24 : 40 }}>
        <div className="forge-subheading">Behind the scenes</div>
        <div className="forge-heading">at the Forge</div>
      </div>

      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <MarqueeGalleryRow items={row1} direction="left" height={rowHeight} onImageClick={setLightboxImg} />
        <MarqueeGalleryRow items={row2} direction="right" height={rowHeight} onImageClick={setLightboxImg} />
        <MarqueeGalleryRow items={row3} direction="left" height={rowHeight} onImageClick={setLightboxImg} />
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
