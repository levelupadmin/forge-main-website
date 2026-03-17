import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeader from './SectionHeader';

const steps = [
  {
    num: '01',
    title: 'You apply.',
    body: 'Fill out the form. Tell us what you have built and why you want to be here. Keep it sharp. No ten-page applications.',
  },
  {
    num: '02',
    title: 'We review and reach out.',
    body: 'If there is a fit, you will hear from us. If you do not hear back, that is the answer too. We do not do vague holding patterns.',
  },
  {
    num: '03',
    title: 'Preliminary screening.',
    body: 'A short first conversation. We get a sense of who you are, what you have done, and whether this makes sense for both sides.',
  },
  {
    num: '04',
    title: 'Assignment.',
    body: 'A short task relevant to the role. This is how we assess whether your work is actually good enough. The bar is real. No shortcuts here.',
  },
  {
    num: '05',
    title: 'Final round and onboarding.',
    body: 'One final conversation. If it is a yes on both sides, we move fast to get you in and up to speed.',
  },
];

export default function HowWeHire() {
  const isMobile = useIsMobile();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setFillPercent(Math.min(Math.max(progress, 0), 1) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{
      background: '#222222',
      padding: isMobile ? '64px 24px' : '120px 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="How We Hire"
          headline="Simple. Fast. No nonsense."
          subtext="Apply through the form. If you are a good fit, you will hear from us. If you are not, take it as a signal to keep building."
          dark
        />

        {/* Timeline */}
        <div
          ref={timelineRef}
          style={{
            maxWidth: 760,
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Track line */}
          <div style={{
            position: 'absolute',
            left: 21,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'rgba(255,255,255,0.07)',
          }} />
          {/* Fill line */}
          <div style={{
            position: 'absolute',
            left: 21,
            top: 0,
            width: 2,
            height: `${fillPercent}%`,
            background: '#FFBC3B',
            borderRadius: 2,
            transition: 'height 100ms linear',
          }} />

          {steps.map((step, i) => {
            const stepThreshold = ((i + 0.5) / steps.length) * 100;
            const isActive = fillPercent >= stepThreshold;

            return (
              <div
                key={step.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '44px 1fr',
                  gap: 28,
                  paddingBottom: i < steps.length - 1 ? 52 : 0,
                  zIndex: 2,
                }}
              >
                {/* Step dot */}
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: isActive ? '#FFBC3B' : '#222222',
                  border: `2px solid ${isActive ? '#FFBC3B' : 'rgba(255,255,255,0.12)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontWeight: 800,
                  fontSize: 14,
                  color: isActive ? '#222222' : 'rgba(255,255,255,0.3)',
                  boxShadow: isActive ? '0 0 0 6px rgba(255,188,59,0.15)' : 'none',
                  transition: 'all 500ms ease',
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>

                {/* Step content */}
                <div style={{
                  opacity: isActive ? 1 : 0.4,
                  transform: isActive ? 'translateX(0)' : 'translateX(20px)',
                  transition: 'all 500ms ease',
                }}>
                  <div style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    color: '#FFBC3B',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>
                    Step {step.num}
                  </div>
                  <div style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    color: isActive ? '#FFBC3B' : '#FFFFFF',
                    letterSpacing: -0.3,
                    marginBottom: 10,
                    transition: 'color 500ms ease',
                  }}>
                    {step.title}
                  </div>
                  <div style={{
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.42)',
                    lineHeight: 1.78,
                  }}>
                    {step.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cold email card */}
        <ColdEmailCard isMobile={isMobile} />
      </div>
    </section>
  );
}

function ColdEmailCard({ isMobile }: { isMobile: boolean }) {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 20,
      padding: isMobile ? '36px 28px' : '44px 48px',
      marginTop: 72,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: isMobile ? 28 : 48,
    }}>
      <div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          color: '#FFBC3B',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}>
          Want to Stand Out?
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: 22,
          color: '#222222',
          marginBottom: 12,
        }}>
          Skip the form. Send a cold email.
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: 15,
          color: 'rgba(34,34,34,0.55)',
          lineHeight: 1.7,
          maxWidth: 480,
        }}>
          If you are feeling more enthusiastic or want to push harder, write to us directly. Tell us{' '}
          <strong style={{ color: '#222222', fontWeight: 700 }}>exactly why we should hire you</strong>.
          A sharp cold email that makes a real case will always get read. Generic ones will not.
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
        {['forge@leveluplearning.in', 'hr@leveluplearning.in'].map(email => (
          <a
            key={email}
            href={`mailto:${email}`}
            style={{
              background: '#222222',
              color: '#FFFFFF',
              borderRadius: 100,
              padding: '13px 22px',
              fontFamily: "'Open Sauce One', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              transition: 'all 250ms ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#FFBC3B';
              e.currentTarget.style.color = '#222222';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#222222';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>✉</span>
            {email}
          </a>
        ))}
      </div>
    </div>
  );
}
