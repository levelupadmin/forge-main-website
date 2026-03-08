import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WaveIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 48 24" style={{ width: 40, height: 20, flexShrink: 0 }}>
    {[0, 6, 12].map((yOff, i) => (
      <path
        key={i}
        d={`M0 ${6 + yOff} Q6 ${2 + yOff} 12 ${6 + yOff} T24 ${6 + yOff} T36 ${6 + yOff} T48 ${6 + yOff}`}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity={1 - i * 0.25}
      />
    ))}
  </svg>
);

const steps = [
  {
    word: 'Learn.',
    text: 'Scene-setting, finding the theme, character development, script-writing, storyboarding and pre-production. These initial learnings lay the foundation for your short film and your filmmaking dreams.',
    color: '#FFBC3B',
  },
  {
    word: 'Do.',
    text: "Express your passion through the process of production of your own film. Call your own shots, frame your frames, direct your actors, set up the scene and find your unique voice as a filmmaker.",
    color: '#FFA800',
  },
  {
    word: 'Become.',
    text: "Finally, the grand screening, a recognition of your creative storytelling where each film is not just screened, but celebrated; concluding with a farewell that's not an end, but a new beginning in your creative path.",
    color: '#DD6F15',
  },
];

export default function LearnDoBecome() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} style={{
      background: '#FCF7EF',
      padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)',
      maxWidth: 1280,
      margin: '0 auto',
    }}>
      {/* Header */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: 16 }}
      >
        <div style={{
          fontSize: 'clamp(18px, 2vw, 24px)',
          fontStyle: 'italic',
          opacity: 0.5,
          marginBottom: 4,
        }}>the science behind</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(8px, 1.5vw, 16px)',
        }}>
          <WaveIcon color="#FFBC3B" />
          <span style={{
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            color: '#222',
            letterSpacing: -2,
            lineHeight: 1,
          }}>the Forge</span>
        </div>
      </div>

      <p
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          textAlign: 'center',
          fontSize: 'clamp(15px, 1.4vw, 18px)',
          opacity: 0.55,
          maxWidth: 520,
          margin: '0 auto 48px',
          lineHeight: 1.6,
          transitionDelay: '100ms',
        }}
      >
        A process scientifically designed to help simulate 6 months in 12 days.
      </p>

      {/* Horizontal dark bento boxes */}
      <div style={{
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap',
      }}>
        {steps.map((step, i) => (
          <div
            key={step.word}
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{
              flex: '1 1 280px',
              minWidth: 260,
              background: '#1a1a1a',
              borderRadius: 20,
              padding: 'clamp(28px, 3vw, 40px)',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: `${200 + i * 200}ms`,
            }}
          >
            {/* Wave + Word */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}>
              <WaveIcon color={step.color} />
              <div style={{
                fontWeight: 700,
                fontSize: 'clamp(36px, 4vw, 52px)',
                color: step.color,
                lineHeight: 1,
              }}>
                {step.word.replace('.', '').toLowerCase()}
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(14px, 1.1vw, 16px)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
