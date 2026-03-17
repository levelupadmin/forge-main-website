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

/* Mobile: scattered collage photos positioned BELOW the CTA in a natural cluster */
const mobileCollagePhotos: { left: string; top: string; width: number; height: number; rotate: number; zIndex: number }[] = [
  // Row 1 - top of collage
  { left: '-4%', top: '0%', width: 120, height: 150, rotate: -6, zIndex: 1 },
  { left: '26%', top: '-3%', width: 130, height: 160, rotate: 3, zIndex: 3 },
  { left: '58%', top: '2%', width: 115, height: 145, rotate: -2, zIndex: 2 },
  { left: '82%', top: '-5%', width: 100, height: 130, rotate: 7, zIndex: 1 },
  // Row 2 - middle
  { left: '4%', top: '38%', width: 110, height: 140, rotate: 5, zIndex: 2 },
  { left: '32%', top: '35%', width: 135, height: 165, rotate: -4, zIndex: 4 },
  { left: '65%', top: '40%', width: 120, height: 150, rotate: 3, zIndex: 3 },
  // Row 3 - bottom
  { left: '-2%', top: '72%', width: 125, height: 155, rotate: -3, zIndex: 2 },
  { left: '30%', top: '68%', width: 115, height: 140, rotate: 6, zIndex: 3 },
  { left: '60%', top: '75%', width: 130, height: 160, rotate: -5, zIndex: 1 },
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
        background: '#FFFFFF',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        paddingTop: 100,
      }}>
        {/* Text content - clean top section */}
        <div style={{
          textAlign: 'center',
          padding: '0 28px',
          marginBottom: 40,
        }}>
          <h1 style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(32px, 9vw, 44px)',
            color: '#222222',
            lineHeight: 1.1,
            letterSpacing: -1,
            margin: '0 0 20px',
          }}>
            Build a <span className="forge-gradient-text">Dream</span>{' '}
            that outlasts you
          </h1>

          <p style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 400,
            fontSize: 15,
            color: 'rgba(34,34,34,0.5)',
            lineHeight: 1.75,
            maxWidth: 340,
            margin: '0 auto 32px',
          }}>
            Nothing like the Forge exists in the world. So it takes some crazy people to believe in it. This page is for you if you're crazy enough to dream as big as us.
          </p>

          <button
            onClick={scrollToRoles}
            style={{
              background: '#222222',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 100,
              padding: '14px 36px',
              fontFamily: "'Open Sauce One', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            See open positions
          </button>
        </div>

        {/* Photo collage - scattered below CTA */}
        <div style={{
          position: 'relative',
          flex: 1,
          minHeight: 380,
          margin: '0 -10px',
        }}>
          {mobileCollagePhotos.map((photo, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: photo.left,
                top: photo.top,
                width: photo.width,
                height: photo.height,
                borderRadius: 12,
                background: '#e8e5de',
                transform: `rotate(${photo.rotate}deg)`,
                zIndex: photo.zIndex,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  // Desktop layout
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
          fontSize: 'clamp(30px, 7vw, 64px)',
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
          fontSize: 17,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.75,
          maxWidth: 520,
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
