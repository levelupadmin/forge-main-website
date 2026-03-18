import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const galleryItems = [
  { src: '/images/careers/goa-beach.jpg', alt: 'Team at Goa beach', height: 220, mobileHeight: 160 },
  { src: '/images/careers/tug-of-war.jpg', alt: 'Tug of war fun', height: 280, mobileHeight: 200 },
  { src: '/images/careers/film-fest.jpg', alt: 'At a film festival', height: 200, mobileHeight: 150 },
  { src: '/images/careers/trophy.jpg', alt: 'Celebrating with trophy', height: 260, mobileHeight: 190 },
  { src: '/images/careers/beach-vibes.jpg', alt: 'Beach vibes', height: 190, mobileHeight: 140 },
  { src: '/images/careers/team-outdoor.jpg', alt: 'Team outdoor photo', height: 250, mobileHeight: 180 },
  { src: '/images/careers/kl-towers.jpg', alt: 'KL Towers trip', height: 210, mobileHeight: 155 },
  { src: '/images/careers/huddle.jpg', alt: 'Team huddle', height: 270, mobileHeight: 195 },
  { src: '/images/careers/team-selfie.jpg', alt: 'Team selfie', height: 230, mobileHeight: 165 },
];

export default function LifeAtForge() {
  const isMobile = useIsMobile();
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section style={{ background: '#000000', padding: isMobile ? '56px 20px' : '80px 80px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: isMobile ? 28 : 48,
          color: '#FFFFFF',
          textAlign: 'center',
          letterSpacing: isMobile ? -0.5 : -1,
          margin: isMobile ? '0 0 36px' : '0 0 56px',
        }}>
          Life at the Forge
        </h2>

        <div ref={ref} style={{
          columns: isMobile ? 2 : 3,
          columnGap: isMobile ? 10 : 14,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 650ms ease, transform 650ms ease',
        }}>
          {galleryItems.map((item, i) => (
            <div key={i} style={{
              height: isMobile ? item.mobileHeight : item.height,
              borderRadius: 16,
              background: '#1a1a1a',
              marginBottom: isMobile ? 10 : 14,
              breakInside: 'avoid',
              overflow: 'hidden',
              transition: 'transform 280ms ease, box-shadow 280ms ease',
              cursor: 'pointer',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
