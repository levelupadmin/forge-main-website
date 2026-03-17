import { useIsMobile } from '@/hooks/use-mobile';

const floatingPhotos: { top?: string; bottom?: string; left?: string; right?: string; width: number; height: number; rotate: number }[] = [
  // Left side (3 photos)
  { top: '42%', left: '2%', width: 130, height: 170, rotate: -5 },
  { top: '60%', left: '4%', width: 140, height: 180, rotate: 4 },
  { bottom: '8%', left: '3%', width: 120, height: 155, rotate: -3 },
  // Right side (3 photos)
  { top: '44%', right: '2%', width: 135, height: 175, rotate: 5 },
  { top: '62%', right: '4%', width: 125, height: 165, rotate: -4 },
  { bottom: '10%', right: '3%', width: 140, height: 170, rotate: 3 },
  // Bottom center (3 photos)
  { bottom: '4%', left: '25%', width: 115, height: 145, rotate: -2 },
  { bottom: '3%', left: '50%', width: 105, height: 135, rotate: 1 },
  { bottom: '5%', right: '24%', width: 120, height: 150, rotate: -3 },
];

const mobilePhotos: { top?: string; bottom?: string; left?: string; right?: string; width: number; height: number; rotate: number }[] = [
  { bottom: '22%', left: '-4%', width: 72, height: 92, rotate: -5 },
  { bottom: '10%', left: '2%', width: 68, height: 88, rotate: 4 },
  { bottom: '20%', right: '-4%', width: 70, height: 90, rotate: 5 },
  { bottom: '8%', right: '2%', width: 66, height: 86, rotate: -3 },
  { bottom: '2%', left: '30%', width: 64, height: 80, rotate: -1 },
  { bottom: '3%', right: '28%', width: 62, height: 78, rotate: 2 },
];

export default function CareersHero() {
  const isMobile = useIsMobile();
  const photos = isMobile ? mobilePhotos : floatingPhotos;

  const scrollToRoles = () => {
    const el = document.getElementById('roles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      background: '#000000',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: isMobile ? '80px 20px 100px' : '120px 80px',
    }}>
      {photos.map((photo, i) => {
        const { rotate, width, height, ...pos } = photo;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              ...pos,
              width,
              height,
              borderRadius: isMobile ? 10 : 14,
              background: '#1a1a1a',
              transform: `rotate(${rotate}deg)`,
              transition: 'transform 300ms ease, box-shadow 300ms ease',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1.05)`;
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1)`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        );
      })}

      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: 720,
      }}>
        <h1 style={{
          fontWeight: 700,
          fontSize: isMobile ? 'clamp(28px, 8vw, 42px)' : 'clamp(30px, 7vw, 64px)',
          color: '#FFFFFF',
          lineHeight: 1.05,
          letterSpacing: -1,
          margin: '0 0 20px',
        }}>
          Build a <span className="forge-gradient-text">Dream</span>{' '}
          that outlasts you
        </h1>

        <p style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: isMobile ? 14 : 17,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.75,
          maxWidth: isMobile ? 320 : 520,
          margin: '0 auto 36px',
        }}>
          Nothing like the Forge exists in the world. So it takes some crazy people to believe in it. This page is for you if you're crazy enough to dream as big as us.
        </p>

        <button
          onClick={scrollToRoles}
          className="forge-cta-light"
        >
          Join the Dream
        </button>
      </div>
    </section>
  );
}
