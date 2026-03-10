import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const ForgeWaves = ({ size = 40 }: { size?: number }) => (
  <div style={{ width: size, height: size * 0.7, overflow: 'hidden', flexShrink: 0 }}>
    <img src="/images/forge-waves.png" alt="" style={{ height: '100%', objectFit: 'cover', objectPosition: 'left center' }} />
  </div>
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
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{
      background: 'var(--forge-cream)',
      padding: isMobile
        ? '32px 20px'
        : 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)',
      maxWidth: 1280,
      margin: '0 auto',
    }}>
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: 16 }}
      >
        <div className="forge-subheading">the science behind</div>
        <div className="forge-heading" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(8px, 1.5vw, 16px)',
        }}>
          <ForgeWaves size={40} />
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
          margin: isMobile ? '0 auto 32px' : '0 auto 48px',
          lineHeight: 1.6,
          transitionDelay: '100ms',
        }}
      >
        How the Forge helps you transform from Dreamer to Doer through a once in a lifetime experience.
      </p>

      <div style={{
        display: 'flex',
        gap: isMobile ? 12 : 20,
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
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? '20px' : 'clamp(28px, 3vw, 40px)',
              position: 'relative',
              overflow: 'hidden',
              transitionDelay: `${200 + i * 200}ms`,
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: isMobile ? 16 : 24,
            }}>
              <ForgeWaves size={32} />
              <div style={{
                fontWeight: 700,
                fontSize: isMobile ? 'clamp(28px, 7vw, 36px)' : 'clamp(36px, 4vw, 52px)',
                color: step.color,
                lineHeight: 1,
              }}>
                {step.word.charAt(0).toUpperCase() + step.word.slice(1).replace('.', '').toLowerCase()}
              </div>
            </div>

            <p style={{
              fontSize: isMobile ? 13 : 'clamp(14px, 1.1vw, 16px)',
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
