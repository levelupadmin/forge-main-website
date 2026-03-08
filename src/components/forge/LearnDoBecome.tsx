import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

const steps = [
  {
    word: 'learn',
    lead: 'Every master was once a student.',
    text: 'Everything starts with understanding your craft. The fundamentals, the process, the tools. Taught by people who are still out there doing it.',
  },
  {
    word: 'do',
    lead: 'Knowledge without action is just theory.',
    text: "You don't just study the craft. You practice it. Every session, every day, you're creating something real. No theory without action.",
  },
  {
    word: 'become',
    lead: 'This is where you transform.',
    text: "You leave the Forge having made something that's yours. A short film. A Reel. A manuscript. You're not a creator if you aren't creating something right?",
  },
];

export default function LearnDoBecome() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isMobile = useIsMobile();

  const lineHeight = 600;
  const nodePositions = [80, 300, 520];

  return (
    <section ref={ref} style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
      maxWidth: 960,
      margin: '0 auto',
    }}>
      {/* Header */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: 80 }}
      >
        <h2 style={{
          fontWeight: 700,
          fontSize: 'clamp(40px, 5vw, 64px)',
          color: '#222',
          letterSpacing: '0.08em',
          margin: 0,
        }}>
          learn. do. become.
        </h2>
      </div>

      {/* Timeline */}
      <div style={{
        position: 'relative',
        maxWidth: 800,
        margin: '0 auto',
      }}>
        {/* SVG vertical line + dots */}
        <svg
          style={{
            position: 'absolute',
            left: isMobile ? 16 : '50%',
            top: 0,
            transform: isMobile ? 'none' : 'translateX(-50%)',
            width: 4,
            height: lineHeight,
            overflow: 'visible',
            zIndex: 1,
          }}
          viewBox={`0 0 4 ${lineHeight}`}
          preserveAspectRatio="none"
        >
          {/* Golden line */}
          <line
            x1="2" y1="0" x2="2" y2={lineHeight}
            stroke="#FFBC3B"
            strokeWidth="2"
            strokeDasharray={lineHeight}
            strokeDashoffset={isVisible ? 0 : lineHeight}
            style={{ transition: `stroke-dashoffset 1.8s ease` }}
          />
          {/* Dots at each node */}
          {nodePositions.map((y, i) => (
            <circle
              key={i}
              cx="2" cy={y} r="6"
              fill="#FFBC3B"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transformOrigin: `2px ${y}px`,
                transition: `opacity 400ms ease ${400 + i * 500}ms, transform 400ms ease ${400 + i * 500}ms`,
              }}
            />
          ))}
        </svg>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          position: 'relative',
          minHeight: lineHeight,
        }}>
          {steps.map((step, i) => {
            const isLeft = !isMobile && i % 2 === 0;
            const isRight = !isMobile && i % 2 === 1;
            const topOffset = nodePositions[i] - 30;

            return (
              <div
                key={step.word}
                className={`forge-fade-up${isVisible ? ' visible' : ''}`}
                style={{
                  position: 'absolute',
                  top: topOffset,
                  transitionDelay: `${600 + i * 500}ms`,
                  ...(isMobile
                    ? {
                        left: 44,
                        right: 0,
                        textAlign: 'left',
                      }
                    : isLeft
                    ? {
                        right: 'calc(50% + 32px)',
                        left: 0,
                        textAlign: 'right',
                      }
                    : {
                        left: 'calc(50% + 32px)',
                        right: 0,
                        textAlign: 'left',
                      }),
                }}
              >
                <div style={{
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  color: '#222',
                  marginBottom: 8,
                }}>
                  {step.word}
                </div>
                <p style={{
                  fontSize: 14,
                  fontStyle: 'italic',
                  color: '#FFBC3B',
                  margin: '0 0 8px 0',
                  fontWeight: 600,
                }}>
                  {step.lead}
                </p>
                <p style={{
                  fontSize: 'clamp(14px, 1.1vw, 16px)',
                  opacity: 0.6,
                  maxWidth: 340,
                  margin: isRight || isMobile ? '0' : '0 0 0 auto',
                  lineHeight: 1.7,
                }}>
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
