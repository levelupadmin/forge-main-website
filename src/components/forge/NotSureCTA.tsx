import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';

function useReveal(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const narrativeLines = [
  { text: "Not sure which experience is right for you?", highlight: false },
  { text: "Let us help you get started.", highlight: true },
];

export default function NotSureCTA() {
  const isMobile = useIsMobile();
  const reveals = narrativeLines.map(() => useReveal(0.5));
  const ctaReveal = useReveal(0.3);

  const lineSpacing = isMobile ? 16 : 24;

  return (
    <section
      style={{
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
        padding: isMobile ? '80px 24px' : '140px 80px',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 55%, rgba(255,188,59,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
        {/* Narrative lines */}
        {narrativeLines.map((line, i) => (
          <div
            key={i}
            ref={reveals[i].ref}
            style={{
              textAlign: 'center',
              marginBottom: i < narrativeLines.length - 1 ? lineSpacing : (isMobile ? 56 : 80),
              opacity: reveals[i].visible ? 1 : 0,
              transform: `translateY(${reveals[i].visible ? 0 : 40}px)`,
              transition: 'opacity 1s ease, transform 1s ease',
            }}
          >
            <span
              style={{
                fontSize: line.highlight
                  ? (isMobile ? 'clamp(28px, 7vw, 48px)' : 'clamp(36px, 4.5vw, 56px)')
                  : (isMobile ? 'clamp(22px, 5.5vw, 36px)' : 'clamp(28px, 3.5vw, 48px)'),
                fontWeight: line.highlight ? 700 : 400,
                color: line.highlight ? '#FFBC3B' : 'rgba(255,255,255,0.85)',
                lineHeight: 1.3,
                display: 'inline-block',
              }}
            >
              {line.text}
            </span>
          </div>
        ))}

        {/* CTA buttons */}
        <div
          ref={ctaReveal.ref}
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: ctaReveal.visible ? 1 : 0,
            transform: `translateY(${ctaReveal.visible ? 0 : 30}px)`,
            transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
          }}
        >
          <a
            href="https://wa.me/919791520177"
            target="_blank"
            rel="noopener noreferrer"
            className="forge-cta-light"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#FFBC3B',
              color: '#000000',
              border: 'none',
              borderRadius: 100,
              padding: '16px 36px',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 200ms ease, background 200ms ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLAnchorElement).style.background = '#FFA800';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLAnchorElement).style.background = '#FFBC3B';
            }}
          >
            Book a Call <ArrowRight size={16} />
          </a>
          <a
            href="mailto:forge@leveluplearning.in"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              color: 'rgba(255,255,255,0.7)',
              border: '1.5px solid rgba(255,255,255,0.15)',
              borderRadius: 100,
              padding: '16px 36px',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 200ms ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = '#FFBC3B';
              (e.currentTarget as HTMLAnchorElement).style.color = '#FFBC3B';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)';
            }}
          >
            Email Us <ArrowRight size={16} />
          </a>
        </div>

        {/* Social proof nudge */}
        <div
          style={{
            textAlign: 'center',
            marginTop: isMobile ? 48 : 64,
            opacity: ctaReveal.visible ? 1 : 0,
            transition: 'opacity 1.2s ease 0.6s',
          }}
        >
          <p style={{
            fontSize: isMobile ? 13 : 15,
            color: 'rgba(255,255,255,0.35)',
            fontStyle: 'italic',
            lineHeight: 1.6,
          }}>
            Every creator who joined Forge started with a single conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
