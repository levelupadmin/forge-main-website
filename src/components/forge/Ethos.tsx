import { useRef, useState, useEffect, useCallback } from 'react';

const TOTAL_STAGES = 7;

function useScrollProgress(ref: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress 0 = section top at viewport bottom, 1 = section bottom at viewport top
      const total = rect.height + viewH;
      const scrolled = viewH - rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);

  return progress;
}

// Map scroll progress [0..1] to a stage [0..TOTAL_STAGES]
function getStage(progress: number): number {
  // We want the animation to play through the middle portion of scroll
  const start = 0.15;
  const end = 0.85;
  const clamped = Math.max(0, Math.min(1, (progress - start) / (end - start)));
  return clamped * TOTAL_STAGES;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const narrativeSteps = [
  { text: 'It starts with a dream.', stage: 1 },
  { text: 'You learn the craft. You study the masters.', stage: 2 },
  { text: 'Then you step into the world — camera in hand, story in heart.', stage: 3 },
  { text: 'You find your people. The ones who get it.', stage: 4 },
  { text: 'And at the intersection of all three…', stage: 5 },
];

const circleConfigs = [
  { label: 'Learning', finalX: -55, finalY: -45 },
  { label: 'Travel', finalX: 55, finalY: -45 },
  { label: 'Community', finalX: 0, finalY: 55 },
];

export default function Ethos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(sectionRef);
  const stage = getStage(progress);

  // Circle animation logic
  const getCircleStyle = useCallback((idx: number) => {
    // Each circle appears at stages 1, 2, 4 (Learning, Travel, Community)
    const appearStages = [1, 2, 4];
    const appearAt = appearStages[idx];
    const mergeAt = 5;

    // Scale: circle draws in
    const drawProgress = easeOutCubic(Math.max(0, Math.min(1, (stage - (appearAt - 0.5)) / 1.2)));
    
    // Position: start scattered, then merge
    const scatterX = [(-120), 120, 0][idx];
    const scatterY = [(-30), (-30), 100][idx];
    
    const mergeProgress = easeOutCubic(Math.max(0, Math.min(1, (stage - (mergeAt - 0.3)) / 1.5)));
    
    const x = lerp(scatterX, circleConfigs[idx].finalX, mergeProgress);
    const y = lerp(scatterY, circleConfigs[idx].finalY, mergeProgress);

    return {
      transform: `translate(${x}px, ${y}px)`,
      transition: 'none', // driven by scroll, no CSS transition
      transformOrigin: '200px 200px',
      opacity: drawProgress,
    };
  }, [stage]);

  const getStrokeOffset = useCallback((idx: number) => {
    const appearStages = [1, 2, 4];
    const drawProgress = easeOutCubic(Math.max(0, Math.min(1, (stage - (appearStages[idx] - 0.3)) / 1.5)));
    return 630 * (1 - drawProgress);
  }, [stage]);

  // Glow at intersection
  const glowOpacity = easeOutCubic(Math.max(0, Math.min(1, (stage - 5.5) / 1)));
  
  // Center label
  const centerLabelOpacity = easeOutCubic(Math.max(0, Math.min(1, (stage - 6) / 0.8)));

  // Title fade
  const titleOpacity = easeOutCubic(Math.max(0, Math.min(1, (stage - 0.2) / 0.8)));
  const titleY = lerp(40, 0, easeOutCubic(Math.max(0, Math.min(1, (stage - 0.2) / 0.8))));

  // Final statement
  const finalOpacity = easeOutCubic(Math.max(0, Math.min(1, (stage - 6.2) / 0.8)));
  const finalY = lerp(30, 0, finalOpacity);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '200vh', // tall section for scroll-driven animation
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #0d0800 0%, #1a1200 50%, #0d0d0d 100%)',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 50%, rgba(255,188,59,${0.04 + glowOpacity * 0.12}) 0%, transparent 70%)`,
      }} />

      {/* Sticky content container */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        padding: '0 clamp(24px, 5vw, 80px)',
      }}>
        {/* Title */}
        <div style={{
          textAlign: 'center',
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 'clamp(24px, 3vw, 48px)',
        }}>
          <div style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: 'white',
            opacity: 0.5,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 300,
          }}>
            our
          </div>
          <div style={{
            fontWeight: 700,
            fontSize: 'clamp(56px, 8vw, 96px)',
            color: '#FFBC3B',
            lineHeight: 1,
            letterSpacing: -2,
          }}>
            ethos
          </div>
        </div>

        {/* SVG Venn Diagram */}
        <div style={{ position: 'relative', marginBottom: 'clamp(24px, 3vw, 40px)' }}>
          <svg
            viewBox="0 0 400 400"
            style={{
              width: 'clamp(300px, 40vw, 440px)',
              height: 'auto',
            }}
          >
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

            {/* Golden glow at intersection */}
            <circle
              cx="200" cy="200" r="65"
              fill="url(#forge-glow-ethos)"
              style={{ opacity: glowOpacity }}
              filter="url(#glow-blur)"
            />

            {/* Three circles */}
            {circleConfigs.map((c, idx) => {
              const circleStyle = getCircleStyle(idx);
              const strokeOffset = getStrokeOffset(idx);

              return (
                <g key={c.label} style={circleStyle}>
                  {/* Filled background */}
                  <circle
                    cx="200" cy="200" r="100"
                    fill="rgba(255,255,255,0.03)"
                    style={{ opacity: circleStyle.opacity }}
                  />
                  {/* Stroke ring */}
                  <circle
                    cx="200" cy="200" r="100"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1"
                    style={{
                      strokeDasharray: 630,
                      strokeDashoffset: strokeOffset,
                    }}
                  />
                  {/* Outer glow ring */}
                  <circle
                    cx="200" cy="200" r="100"
                    fill="none"
                    stroke="rgba(255,188,59,0.15)"
                    strokeWidth="3"
                    style={{
                      strokeDasharray: 630,
                      strokeDashoffset: strokeOffset,
                      filter: 'blur(4px)',
                    }}
                  />
                  {/* Label */}
                  <text
                    x={200 + (idx === 0 ? -60 : idx === 1 ? 60 : 0)}
                    y={200 + (idx === 2 ? 10 : -10)}
                    textAnchor="middle"
                    fill="white"
                    fontWeight="600"
                    fontSize="14"
                    letterSpacing="0.08em"
                    style={{ opacity: circleStyle.opacity * 0.8 }}
                  >
                    {c.label}
                  </text>
                </g>
              );
            })}

            {/* Center "the Forge" label */}
            <text
              x="200" y="192"
              textAnchor="middle" fill="rgba(255,255,255,0.7)" fontWeight="300" fontSize="14"
              letterSpacing="0.1em"
              style={{ opacity: centerLabelOpacity }}
            >
              the
            </text>
            <text
              x="200" y="216"
              textAnchor="middle" fill="#FFBC3B" fontWeight="700" fontSize="22"
              letterSpacing="0.02em"
              style={{ opacity: centerLabelOpacity }}
            >
              Forge
            </text>
          </svg>
        </div>

        {/* Narrative text — large, cinematic */}
        <div style={{
          position: 'relative',
          minHeight: 'clamp(60px, 8vw, 100px)',
          maxWidth: 640,
          textAlign: 'center',
          marginBottom: 'clamp(16px, 2vw, 32px)',
        }}>
          {narrativeSteps.map((step) => {
            const dist = stage - step.stage;
            // Visible in a window around the step's stage
            const opacity = Math.max(0, 1 - Math.abs(dist) * 1.5);
            const y = dist * -20;

            return (
              <p key={step.stage} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                fontSize: 'clamp(17px, 2.2vw, 22px)',
                color: 'white',
                opacity: opacity * 0.8,
                transform: `translateY(${y}px)`,
                fontStyle: 'italic',
                lineHeight: 1.6,
                fontWeight: 300,
                letterSpacing: '0.01em',
                pointerEvents: 'none',
              }}>
                {step.text}
              </p>
            );
          })}
        </div>

        {/* Final statement */}
        <p style={{
          maxWidth: 560,
          fontSize: 'clamp(16px, 1.8vw, 20px)',
          color: 'white',
          opacity: finalOpacity * 0.85,
          transform: `translateY(${finalY}px)`,
          lineHeight: 1.8,
          textAlign: 'center',
          fontWeight: 400,
        }}>
          We meet dreamers at the intersection of{' '}
          <span style={{ color: '#FFBC3B', fontWeight: 700 }}>learning</span>,{' '}
          <span style={{ color: '#FFBC3B', fontWeight: 700 }}>travel</span> and{' '}
          <span style={{ color: '#FFBC3B', fontWeight: 700 }}>community</span>{' '}
          — to enable them to become doers.
        </p>
      </div>
    </section>
  );
}
