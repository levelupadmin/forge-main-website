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
];

export default function CareersHero() {
  const isMobile = useIsMobile();

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
      {/* Floating photo boxes */}
      {!isMobile && floatingPhotos.map((photo, i) => {
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

      {/* Center content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: 720,
      }}>
        <h1 style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: isMobile ? 'clamp(32px, 8vw, 48px)' : 'clamp(48px, 5.5vw, 64px)',
          color: '#FFFFFF',
          lineHeight: 1.08,
          letterSpacing: -1.5,
          margin: '0 0 28px',
        }}>
          Build a{' '}
          <span style={{ fontStyle: 'italic', color: '#FFBC3B' }}>Dream</span>{' '}
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
          style={{
            background: '#FFBC3B',
            color: '#000000',
            borderRadius: 100,
            padding: '16px 40px',
            fontFamily: "'Open Sauce One', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            transition: 'all 250ms ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#FFA800';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#FFBC3B';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Join the Dream
        </button>
      </div>
    </section>
  );
}
