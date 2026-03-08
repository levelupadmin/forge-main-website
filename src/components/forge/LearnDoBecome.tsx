import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    word: 'learn',
    text: 'Everything starts with understanding your craft. The fundamentals, the process, the tools. Taught by people who are still out there doing it.',
  },
  {
    word: 'do',
    text: "You don't just study the craft. You practice it. Every session, every day, you're creating something real. No theory without action.",
  },
  {
    word: 'become',
    text: "You leave the Forge having made something that's yours. A short film. A Reel. A manuscript. You're not a creator if you aren't creating something right?",
  },
];

export default function LearnDoBecome() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
      maxWidth: 800,
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 16, opacity: 0.5, marginBottom: 8 }}>the science behind</div>
      <div style={{
        fontWeight: 700,
        fontSize: 64,
        color: '#222',
        marginBottom: 64,
      }}>
        the Forge
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        {steps.map((step, i) => (
          <div
            key={step.word}
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <div style={{
              fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 48px)',
              color: '#222',
              marginBottom: 16,
            }}>
              {step.word}
            </div>
            <p style={{
              fontSize: 'clamp(15px, 1.2vw, 16px)',
              opacity: 0.6,
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
