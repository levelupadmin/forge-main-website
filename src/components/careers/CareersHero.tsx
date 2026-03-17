import { useIsMobile } from '@/hooks/use-mobile';

const floatingPhotos: { top?: string; bottom?: string; left?: string; right?: string; width: number; height: number; rotate: number }[] = [
  { top: '42%', left: '2%', width: 130, height: 170, rotate: -5 },
  { top: '60%', left: '4%', width: 140, height: 180, rotate: 4 },
  { bottom: '8%', left: '3%', width: 120, height: 155, rotate: -3 },
  { top: '44%', right: '2%', width: 135, height: 175, rotate: 5 },
  { top: '62%', right: '4%', width: 125, height: 165, rotate: -4 },
  { bottom: '10%', right: '3%', width: 140, height: 170, rotate: 3 },
  { bottom: '4%', left: '25%', width: 115, height: 145, rotate: -2 },
  { bottom: '3%', left: '50%', width: 105, height: 135, rotate: 1 },
  { bottom: '5%', right: '24%', width: 120, height: 150, rotate: -3 },
];

const mobileCollagePhotos: { left: string; top: string; width: number; height: number; rotate: number; zIndex: number }[] = [
  { left: '2%', top: '0%', width: 105, height: 135, rotate: -5, zIndex: 1 },
  { left: '30%', top: '-6%', width: 115, height: 145, rotate: 3, zIndex: 3 },
  { left: '60%', top: '2%', width: 100, height: 130, rotate: -2, zIndex: 2 },
  { left: '6%', top: '36%', width: 110, height: 140, rotate: 4, zIndex: 2 },
  { left: '36%', top: '32%', width: 120, height: 150, rotate: -3, zIndex: 4 },
  { left: '68%', top: '38%', width: 105, height: 135, rotate: 5, zIndex: 3 },
  { left: '0%', top: '68%', width: 115, height: 140, rotate: -2, zIndex: 2 },
  { left: '32%', top: '64%', width: 108, height: 135, rotate: 4, zIndex: 3 },
  { left: '62%', top: '70%', width: 118, height: 145, rotate: -4, zIndex: 1 },
];

export default function CareersHero() {
  const isMobile = useIsMobile();

  const scrollToRoles = () => {
    const el = document.getElementById('roles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (isMobile) {
    return (
      <section style={{
        background: '#000000',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        paddingTop: 100,
        paddingBottom: 60,
      }}>
        <div style={{ textAlign: 'center', padding: '0 28px', marginBottom: 32 }}>
          <h1 style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(32px, 9vw, 44px)',
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: -1,
            margin: '0 0 18px',
          }}>
            Build a <span className="forge-gradient-text">Dream</span>{' '}
            that outlasts you
          </h1>
          <p style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.75,
            maxWidth: 340,
            margin: '0 auto 28px',
          }}>
            Nothing like the Forge exists in the world. So it takes some crazy people to believe in it. This page is for you if you're crazy enough to dream as big as us.
          </p>
          <button onClick={scrollToRoles} className="forge-cta-light">
            Join the Dream
          </button>
        </div>

        <div style={{ position: 'relative', flex: 1, minHeight: 340, margin: '0 8px' }}>
          {mobileCollagePhotos.map((photo, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: photo.left,
              top: photo.top,
              width: photo.width,
              height: photo.height,
              borderRadius: 12,
              background: '#1a1a1a',
              transform: `rotate(${photo.rotate}deg)`,
              zIndex: photo.zIndex,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section style={{
      background: '#000000',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 80px',
    }}>
      {floatingPhotos.map((photo, i) => {
        const { rotate, width, height, ...pos } = photo;
        return (
          <div key={i} style={{
            position: 'absolute', ...pos, width, height,
            borderRadius: 14, background: '#1a1a1a',
            transform: `rotate(${rotate}deg)`,
            transition: 'transform 300ms ease, box-shadow 300ms ease',
            cursor: 'pointer', overflow: 'hidden',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1.05)`; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${rotate}deg) scale(1)`; e.currentTarget.style.boxShadow = 'none'; }}
          />
        );
      })}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 720 }}>
        <h1 style={{ fontWeight: 700, fontSize: 'clamp(30px, 7vw, 64px)', color: '#FFFFFF', lineHeight: 1.05, letterSpacing: -1, margin: '0 0 20px' }}>
          Build a <span className="forge-gradient-text">Dream</span>{' '}that outlasts you
        </h1>
        <p style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 400, fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 36px' }}>
          Nothing like the Forge exists in the world. So it takes some crazy people to believe in it. This page is for you if you're crazy enough to dream as big as us.
        </p>
        <button onClick={scrollToRoles} className="forge-cta-light">Join the Dream</button>
      </div>
    </section>
  );
}
