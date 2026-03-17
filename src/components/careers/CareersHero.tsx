import { useIsMobile } from '@/hooks/use-mobile';

const floatingPhotos: { top?: string; bottom?: string; left?: string; right?: string; width: number; height: number; rotate: number }[] = [
  { top: '8%', left: '3%', width: 160, height: 200, rotate: -6 },
  { top: '12%', right: '4%', width: 140, height: 180, rotate: 4 },
  { top: '55%', left: '2%', width: 130, height: 170, rotate: 5 },
  { top: '60%', right: '3%', width: 150, height: 190, rotate: -4 },
  { top: '30%', left: '8%', width: 120, height: 150, rotate: -3 },
  { top: '35%', right: '7%', width: 135, height: 165, rotate: 6 },
  { bottom: '10%', left: '6%', width: 110, height: 140, rotate: 3 },
  { bottom: '12%', right: '5%', width: 125, height: 155, rotate: -5 },
  // New placeholders to fill gaps
  { top: '5%', left: '35%', width: 100, height: 130, rotate: 2 },
  { top: '3%', right: '30%', width: 110, height: 140, rotate: -3 },
  { bottom: '6%', left: '30%', width: 120, height: 150, rotate: -2 },
  { bottom: '8%', right: '28%', width: 105, height: 135, rotate: 4 },
];

const mobilePhotos: { top?: string; bottom?: string; left?: string; right?: string; width: number; height: number; rotate: number }[] = [
  { top: '6%', left: '4%', width: 80, height: 100, rotate: -5 },
  { top: '8%', right: '4%', width: 70, height: 90, rotate: 4 },
  { bottom: '12%', left: '5%', width: 75, height: 95, rotate: 3 },
  { bottom: '10%', right: '5%', width: 80, height: 100, rotate: -4 },
  { top: '40%', left: '2%', width: 65, height: 85, rotate: -3 },
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
      padding: isMobile ? '120px 24px 80px' : '120px 80px',
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
              borderRadius: 14,
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
          fontSize: isMobile ? 'clamp(24px, 6vw, 40px)' : 'clamp(30px, 7vw, 64px)',
          color: '#FFFFFF',
          lineHeight: 1.05,
          letterSpacing: -1,
          margin: '0 0 24px',
        }}>
          Build a <span className="forge-gradient-text">Dream</span>{' '}
          that outlasts you
        </h1>

        <p style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: isMobile ? 15 : 17,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.75,
          maxWidth: 520,
          margin: '0 auto 44px',
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
