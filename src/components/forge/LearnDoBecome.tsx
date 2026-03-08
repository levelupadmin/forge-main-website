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
    text: 'Everything starts with understanding your craft. The fundamentals, the process, the tools. Taught by people who are still out there doing it.',
    color: '#FFBC3B',
  },
  {
    word: 'Do.',
    text: "You don't just study the craft. You practice it. Every session, every day, you're creating something real. No theory without action.",
    color: '#FFA800',
  },
  {
    word: 'Become.',
    text: "You leave the Forge having made something that's yours. A short film. A reel. A manuscript. You're not a creator if you aren't creating something, right?",
    color: '#DD6F15',
  },
];

export default function LearnDoBecome() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)',
      maxWidth: 1280,
      margin: '0 auto',
    }}>
      {/* Header — standardized */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: 16 }}
      >
        <div className="forge-subheading" style={{ fontStyle: 'italic' }}>the science behind</div>
        <div className="forge-heading" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(8px, 1.5vw, 16px)',
        }}>
          <WaveIcon color="#FFBC3B" />
          <span>the Forge</span>
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
                {step.word.charAt(0).toUpperCase() + step.word.slice(1).replace('.', '').toLowerCase()}
              </div>
            </div>

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
