import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Ethos() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} style={{
      position: 'relative',
      minHeight: 700,
      overflow: 'hidden',
    }}>
      {/* REPLACE: Dark atmospheric Forge batch photo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0d0800 0%, #1a1200 50%, #0d0d0d 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.65)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(255,188,59,0.08) 0%, transparent 70%)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{ fontSize: 20, color: 'white', opacity: 0.6 }}>our</div>
        <div style={{ fontWeight: 700, fontSize: 72, color: '#FFBC3B', marginBottom: 48 }}>ethos</div>

        {/* SVG Venn Diagram */}
        <svg
          viewBox="0 0 400 360"
          style={{ width: 'clamp(300px, 40vw, 400px)', height: 'auto', marginBottom: 48 }}
        >
          {/* Circle 1 - Learning (top-left) */}
          <circle
            cx="150" cy="140" r="100"
            fill="rgba(255,255,255,0.04)"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            className={`forge-venn-circle${isVisible ? ' animate' : ''}`}
          />
          <text x="110" y="100" fill="white" fontWeight="700" fontSize="18" fontFamily="'Open Sauce One', sans-serif">
            Learning
          </text>

          {/* Circle 2 - Travel (top-right) */}
          <circle
            cx="250" cy="140" r="100"
            fill="rgba(255,255,255,0.04)"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            className={`forge-venn-circle${isVisible ? ' animate' : ''}`}
          />
          <text x="260" y="100" fill="white" fontWeight="700" fontSize="18" fontFamily="'Open Sauce One', sans-serif">
            Travel
          </text>

          {/* Circle 3 - Community (bottom-center) */}
          <circle
            cx="200" cy="240" r="100"
            fill="rgba(255,255,255,0.04)"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            className={`forge-venn-circle${isVisible ? ' animate' : ''}`}
          />
          <text x="155" y="310" fill="white" fontWeight="700" fontSize="18" fontFamily="'Open Sauce One', sans-serif">
            Community
          </text>

          {/* Center label */}
          <text x="200" y="180" textAnchor="middle" fill="white" fontWeight="400" fontSize="13" fontFamily="'Open Sauce One', sans-serif">
            the
          </text>
          <text x="200" y="200" textAnchor="middle" fill="white" fontWeight="700" fontSize="20" fontFamily="'Open Sauce One', sans-serif">
            Forge
          </text>
        </svg>

        <p style={{
          maxWidth: 480,
          fontSize: 16,
          color: 'white',
          opacity: 0.7,
          lineHeight: 1.7,
        }}>
          We meet dreamers at the intersection of{' '}
          <span style={{ color: '#FFBC3B', fontWeight: 700 }}>learning</span>,{' '}
          <span style={{ color: '#FFBC3B', fontWeight: 700 }}>travel</span> and{' '}
          <span style={{ color: '#FFBC3B', fontWeight: 700 }}>community</span>{' '}
          to enable them to become doers.
        </p>
      </div>
    </section>
  );
}
