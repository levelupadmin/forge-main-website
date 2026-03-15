import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const narrativeSteps = [
  'It starts with a dream.',
  'You seek knowledge beyond classrooms and textbooks.',
  'Then you pack your bags and step into the world.',
  'You find your people. The ones who get it.',
  'And at the intersection of all three...',
];

const circleConfigs = [
  { label: 'Learning', scatterX: -180, scatterY: -60, finalX: -72, finalY: -56 },
  { label: 'Travel', scatterX: 180, scatterY: -60, finalX: 72, finalY: -56 },
  { label: 'Community', scatterX: 0, scatterY: 150, finalX: 0, finalY: 72 },
];

export default function Ethos() {
  const { ref, isVisible } = useScrollAnimation(0.4);
  const [stage, setStage] = useState(0);
  const isMobile = useIsMobile();

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

  const cx = 400, cy = 400, r = 130;
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
      minHeight: isMobile ? 'auto' : 750,
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
        transition: 'background 1.2s ease',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        padding: isMobile ? '40px 20px 16px' : 'clamp(40px, 6vw, 72px) clamp(24px, 5vw, 80px)',
        textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {/* Title */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease, transform 1s ease',
          marginBottom: 0,
        }}>
          <div className="forge-subheading forge-subheading--light">Our</div>
          <div className="forge-heading forge-heading--light" style={{ color: '#FFBC3B' }}>Ethos</div>
        </div>

        {/* SVG Venn Diagram */}
        <svg viewBox="0 180 800 520" style={{
          width: isMobile ? 'min(340px, 90vw)' : 'clamp(360px, 55vw, 620px)',
          height: 'auto',
          marginBottom: 3,
        }}>
          <defs>
            <radialGradient id="forge-glow-ethos" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFBC3B" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#FFBC3B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFBC3B" stopOpacity="0" />
            </radialGradient>
            <filter id="glow-blur">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx={cx} cy={cy} r="80" fill="url(#forge-glow-ethos)" filter="url(#glow-blur)"
            style={{ opacity: glowOpacity, transition: 'opacity 1.2s ease-in-out' }} />

          {circleConfigs.map((c, idx) => {
            const { x, y, drawn } = getTranslate(idx);
            const strokeOffset = drawn ? 0 : circumference;
            const opacity = drawn ? 1 : 0;

            return (
              <g key={c.label} transform={`translate(${x}, ${y})`}
                style={{ transition: 'transform 1.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s ease', opacity }}>
                <circle cx={cx} cy={cy} r={r} fill="rgba(255,255,255,0.03)" />
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1"
                  style={{ strokeDasharray: circumference, strokeDashoffset: strokeOffset, transition: 'stroke-dashoffset 1.4s ease-in-out' }} />
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,188,59,0.12)" strokeWidth="3"
                  style={{ strokeDasharray: circumference, strokeDashoffset: strokeOffset, transition: 'stroke-dashoffset 1.4s ease-in-out', filter: 'blur(5px)' }} />
                <text
                  x={cx + (idx === 0 ? -60 : idx === 1 ? 60 : 0)}
                  y={cy + (idx === 2 ? 60 : -18)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontWeight="600"
                  fontSize={isMobile ? '18' : '20'}
                  letterSpacing="0.04em"
                  style={{ opacity: 0.9, transition: 'opacity 0.8s ease' }}
                >{c.label}</text>
              </g>
            );
          })}

          <text
            x={cx} y={cy}
            textAnchor="middle" dominantBaseline="middle"
            fill="#FFBC3B" fontWeight="700"
            fontSize={isMobile ? '20' : '22'}
            letterSpacing="0.05em"
            style={{ opacity: centerLabelOpacity, transition: 'opacity 1s ease-in-out' }}
          >the Forge</text>
        </svg>

        {/* Narrative text */}
        <div style={{
          position: 'relative',
          height: isMobile ? 72 : 56,
          maxWidth: 640,
          width: '100%',
          marginBottom: 12,
        }}>
          {narrativeSteps.map((text, i) => (
            <p key={i} style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              fontSize: isMobile ? 'clamp(15px, 4vw, 18px)' : 'clamp(17px, 2.2vw, 22px)',
              color: 'white',
              opacity: narrativeIdx === i ? 0.8 : 0,
              transform: `translateY(${narrativeIdx === i ? 0 : 10}px)`,
              transition: 'opacity 0.8s ease, transform 0.8s ease',
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
          fontSize: isMobile ? 'clamp(14px, 3.8vw, 17px)' : 'clamp(16px, 1.8vw, 20px)',
          color: 'white',
          opacity: finalOpacity ? 0.85 : 0,
          transform: `translateY(${finalOpacity ? 0 : 20}px)`,
          transition: 'opacity 1s ease, transform 1s ease',
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
