import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    word: 'Learn.',
    lead: 'Every master was once a student.',
    text: 'Everything starts with understanding your craft. The fundamentals, the process, the tools. Taught by people who are still out there doing it.',
    icon: '📖',
    accent: '#FFBC3B',
  },
  {
    word: 'Do.',
    lead: 'Knowledge without action is just theory.',
    text: "You don't just study the craft. You practice it. Every session, every day, you're creating something real. No theory without action.",
    icon: '🎬',
    accent: '#FFA800',
  },
  {
    word: 'Become.',
    lead: 'This is where it all comes together.',
    text: "You leave the Forge having made something that's yours. A short film. A reel. A manuscript. You're not a creator if you aren't creating something, right?",
    icon: '🌟',
    accent: '#DD6F15',
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
        style={{ textAlign: 'center', marginBottom: 56 }}
      >
        <h2 style={{
          fontWeight: 700,
          fontSize: 'clamp(40px, 5vw, 64px)',
          color: '#222',
          letterSpacing: '0.04em',
          margin: 0,
        }}>
          Learn. Do. Become.
        </h2>
      </div>

      {/* Horizontal bento boxes */}
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
              minWidth: 280,
              background: '#FFFFFF',
              borderRadius: 20,
              padding: 'clamp(28px, 3vw, 40px)',
              boxShadow: '0 2px 24px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: `${200 + i * 200}ms`,
            }}
          >
            {/* Accent top bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: `linear-gradient(90deg, ${step.accent}, ${step.accent}88)`,
            }} />

            {/* Icon */}
            <div style={{
              fontSize: 36,
              marginBottom: 16,
            }}>
              {step.icon}
            </div>

            {/* Word */}
            <div style={{
              fontWeight: 700,
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              color: '#222',
              marginBottom: 12,
              lineHeight: 1,
            }}>
              {step.word}
            </div>

            {/* Lead */}
            <p style={{
              fontSize: 15,
              fontWeight: 600,
              color: step.accent,
              margin: '0 0 12px 0',
              lineHeight: 1.4,
            }}>
              {step.lead}
            </p>

            {/* Description */}
            <p style={{
              fontSize: 14,
              opacity: 0.6,
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
