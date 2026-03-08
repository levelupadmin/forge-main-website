import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const narratives = [
  '',
  'It starts with understanding your craft.',
  'Then you step into the unknown.',
  'You find your people.',
  '',
];

export default function Ethos() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => setStage(4), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  // Circle positions per stage: [cx, cy] offsets from center via transform
  const circleConfigs = [
    { // Learning
      label: 'Learning',
      startX: -80, startY: 0,
      vennX: -50, vennY: -50,
    },
    { // Travel
      label: 'Travel',
      startX: 80, startY: 0,
      vennX: 50, vennY: -50,
    },
    { // Community
      label: 'Community',
      startX: 0, startY: 80,
      vennX: 0, vennY: 50,
    },
  ];

  const getCircleTransform = (idx: number) => {
    const c = circleConfigs[idx];
    if (stage < idx + 1) return `translate(0, 0)`;
    if (stage < 3) {
      // Before all three are in, use start positions
      return `translate(${c.startX}px, ${c.startY}px)`;
    }
    // Stage 3+: glide into Venn arrangement
    return `translate(${c.vennX}px, ${c.vennY}px)`;
  };

  const circleDrawn = (idx: number) => stage >= idx + 1;

  return (
    <section ref={ref} style={{
      position: 'relative',
      minHeight: 700,
      overflow: 'hidden',
    }}>
      {/* Background layers */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0d0800 0%, #1a1200 50%, #0d0d0d 100%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(255,188,59,0.08) 0%, transparent 70%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {/* Title */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 600ms ease, transform 600ms ease',
        }}>
          <div style={{ fontSize: 20, color: 'white', opacity: 0.6 }}>our</div>
          <div style={{ fontWeight: 700, fontSize: 72, color: '#FFBC3B', marginBottom: 48 }}>ethos</div>
        </div>

        {/* SVG Venn Diagram */}
        <svg
          viewBox="0 0 400 400"
          style={{ width: 'clamp(280px, 38vw, 400px)', height: 'auto', marginBottom: 32 }}
        >
          <defs>
            <radialGradient id="forge-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFBC3B" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFBC3B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Golden glow at intersection */}
          <circle
            cx="200" cy="200" r="60"
            fill="url(#forge-glow)"
            className={stage >= 4 ? 'forge-glow-active' : ''}
            style={{
              opacity: stage >= 4 ? 1 : 0,
              transition: 'opacity 800ms ease',
            }}
          />

          {/* Three circles */}
          {circleConfigs.map((c, idx) => (
            <g
              key={c.label}
              style={{
                transform: getCircleTransform(idx),
                transition: 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                transformOrigin: '200px 200px',
              }}
            >
              <circle
                cx="200" cy="200" r="100"
                fill="rgba(255,255,255,0.04)"
                stroke="white"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                style={{
                  strokeDasharray: 630,
                  strokeDashoffset: circleDrawn(idx) ? 0 : 630,
                  transition: `stroke-dashoffset 800ms ease ${idx * 100}ms`,
                }}
              />
              {/* Label */}
              <text
                x={idx === 0 ? 160 : idx === 1 ? 240 : 200}
                y={idx === 2 ? 260 : 180}
                textAnchor={idx === 2 ? 'middle' : idx === 0 ? 'end' : 'start'}
                fill="white"
                fontWeight="700"
                fontSize="16"
                fontFamily="'Open Sauce One', sans-serif"
                style={{
                  opacity: circleDrawn(idx) ? 1 : 0,
                  transition: 'opacity 500ms ease',
                }}
              >
                {c.label}
              </text>
            </g>
          ))}

          {/* Center "the Forge" label */}
          <text
            x="200" y="195"
            textAnchor="middle" fill="white" fontWeight="400" fontSize="13"
            fontFamily="'Open Sauce One', sans-serif"
            style={{ opacity: stage >= 4 ? 1 : 0, transition: 'opacity 600ms ease 200ms' }}
          >
            the
          </text>
          <text
            x="200" y="215"
            textAnchor="middle" fill="#FFBC3B" fontWeight="700" fontSize="20"
            fontFamily="'Open Sauce One', sans-serif"
            style={{ opacity: stage >= 4 ? 1 : 0, transition: 'opacity 600ms ease 200ms' }}
          >
            Forge
          </text>
        </svg>

        {/* Narrative lines */}
        <div style={{ minHeight: 80, marginBottom: 24 }}>
          {[1, 2, 3].map((s) => (
            <p key={s} style={{
              fontSize: 15,
              color: 'white',
              opacity: stage === s ? 0.7 : 0,
              transform: stage === s ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 500ms ease, transform 500ms ease',
              position: stage === s ? 'relative' : 'absolute',
              pointerEvents: 'none',
              fontStyle: 'italic',
              margin: '4px 0',
            }}>
              {narratives[s]}
            </p>
          ))}
        </div>

        {/* Final statement */}
        <p style={{
          maxWidth: 480,
          fontSize: 16,
          color: 'white',
          opacity: stage >= 4 ? 0.7 : 0,
          transform: stage >= 4 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 700ms ease, transform 700ms ease',
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
