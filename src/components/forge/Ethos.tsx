import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const narrativeSteps = [
  'It starts with a dream.',
  'You learn the craft. You study the masters.',
  'Then you step into the world, camera in hand, story in heart.',
  'You find your people. The ones who get it.',
  'And at the intersection of all three...',
];

const circleConfigs = [
  { label: 'Learning', scatterX: -140, scatterY: -50, finalX: -65, finalY: -50 },
  { label: 'Travel', scatterX: 140, scatterY: -50, finalX: 65, finalY: -50 },
  { label: 'Community', scatterX: 0, scatterY: 120, finalX: 0, finalY: 65 },
];

export default function Ethos() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timers = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 1600),
      setTimeout(() => setStage(3), 2800),
      setTimeout(() => setStage(4), 4000),
      setTimeout(() => setStage(5), 5200),
      setTimeout(() => setStage(6), 6400),
      setTimeout(() => setStage(7), 7400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  const cx = 350, cy = 350, r = 110;
  const circumference = 2 * Math.PI * r;

  const getTranslate = (idx: number) => {
    const c = circleConfigs[idx];
    const appearAt = [1, 2, 4][idx];
    const drawn = stage >= appearAt;
    const merged = stage >= 6;
    const x = merged ? c.finalX : drawn ? c.scatterX : 0;
    const y = merged ? c.finalY : drawn ? c.scatterY : 0;
    return { x, y, drawn };
  };

  const glowOpacity = stage >= 6 ? 1 : 0;
  const centerLabelOpacity = stage >= 7 ? 1 : 0;
  const finalOpacity = stage >= 7 ? 1 : 0;
  const narrativeIdx = stage >= 7 ? -1 : stage >= 5 ? 4 : stage >= 4 ? 3 : stage >= 3 ? 2 : stage >= 2 ? 1 : stage >= 1 ? 0 : -1;

  return (
    <section ref={ref} style={{
      position: 'relative',
      minHeight: 700,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0d0800 0%, #1a1200 50%, #0d0d0d 100%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 50%, rgba(255,188,59,${stage >= 6 ? 0.16 : 0.04}) 0%, transparent 70%)`,
        transition: 'background 1s ease',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 80px)',
        textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {/* Title */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          marginBottom: 'clamp(16px, 2vw, 32px)',
        }}>
          <div className="forge-subheading forge-subheading--light">Our</div>
          <div className="forge-heading forge-heading--light" style={{ color: '#FFBC3B' }}>Ethos</div>
        </div>

        {/* SVG Venn Diagram */}
        <svg viewBox="0 0 700 700" style={{
          width: 'clamp(320px, 45vw, 500px)', height: 'auto',
          marginBottom: 16,
        }}>
          <defs>
            <radialGradient id="forge-glow-ethos" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFBC3B" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#FFBC3B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFBC3B" stopOpacity="0" />
            </radialGradient>
            <filter id="glow-blur">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx={cx} cy={cy} r="70" fill="url(#forge-glow-ethos)" filter="url(#glow-blur)"
            style={{ opacity: glowOpacity, transition: 'opacity 1s ease' }} />

          {circleConfigs.map((c, idx) => {
            const { x, y, drawn } = getTranslate(idx);
            const strokeOffset = drawn ? 0 : circumference;
            const opacity = drawn ? 1 : 0;

            return (
              <g key={c.label} transform={`translate(${x}, ${y})`}
                style={{ transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease', opacity }}>
                <circle cx={cx} cy={cy} r={r} fill="rgba(255,255,255,0.03)" />
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1"
                  style={{ strokeDasharray: circumference, strokeDashoffset: strokeOffset, transition: 'stroke-dashoffset 1.2s ease' }} />
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,188,59,0.15)" strokeWidth="3"
                  style={{ strokeDasharray: circumference, strokeDashoffset: strokeOffset, transition: 'stroke-dashoffset 1.2s ease', filter: 'blur(4px)' }} />
                <text
                  x={cx + (idx === 0 ? -55 : idx === 1 ? 55 : 0)}
                  y={cy + (idx === 2 ? 55 : -15)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontWeight="600"
                  fontSize="18"
                  letterSpacing="0.04em"
                  style={{ opacity: 0.9, transition: 'opacity 0.6s ease' }}
                >{c.label}</text>
              </g>
            );
          })}

          {/* Center Forge logo (white) */}
          <image
            href="/images/forge-logo.png"
            x={cx - 40}
            y={cy - 16}
            width="80"
            height="32"
            style={{
              opacity: centerLabelOpacity,
              transition: 'opacity 0.8s ease',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </svg>

        {/* Narrative text */}
        <div style={{ position: 'relative', height: 56, maxWidth: 640, width: '100%', marginBottom: 12 }}>
          {narrativeSteps.map((text, i) => (
            <p key={i} style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              fontSize: 'clamp(17px, 2.2vw, 22px)',
              color: 'white',
              opacity: narrativeIdx === i ? 0.8 : 0,
              transform: `translateY(${narrativeIdx === i ? 0 : 10}px)`,
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              fontStyle: 'italic', lineHeight: 1.6, fontWeight: 300,
              pointerEvents: 'none',
              margin: 0,
              whiteSpace: 'normal',
              textAlign: 'center',
            }}>{text}</p>
          ))}
        </div>

        {/* Final statement */}
        <p style={{
          maxWidth: 560,
          fontSize: 'clamp(16px, 1.8vw, 20px)',
          color: 'white',
          opacity: finalOpacity ? 0.85 : 0,
          transform: `translateY(${finalOpacity ? 0 : 20}px)`,
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          lineHeight: 1.8, textAlign: 'center', fontWeight: 400,
          margin: 0,
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
