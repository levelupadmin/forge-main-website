import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { MessageCircle } from 'lucide-react';

export default function NotSureCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{
      background: '#000000',
      padding: isMobile ? '64px 24px' : '80px 80px',
    }}>
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
        maxWidth: 800,
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'rgba(255,188,59,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 28px',
        }}>
          <MessageCircle size={24} color="#FFBC3B" />
        </div>

        <div className="forge-heading forge-heading--light" style={{
          fontSize: 'clamp(28px, 5vw, 48px)',
          marginBottom: 16,
        }}>
          Not Sure Which Experience<br />
          is Right for <span style={{ color: '#FFBC3B' }}>You</span>?
        </div>

        <p style={{
          fontSize: isMobile ? 15 : 17,
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.7,
          maxWidth: 520,
          margin: '0 auto 36px',
        }}>
          Talk to our team. We'll help you figure out which Forge experience matches your creative goals, skill level, and schedule.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/919791520177"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#FFBC3B',
              color: '#222',
              border: 'none',
              borderRadius: 100,
              padding: '16px 36px',
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'transform 200ms ease, background 200ms ease',
              textDecoration: 'none',
              display: 'inline-block',
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
            Book a Free Call
          </a>
          <a
            href="mailto:forge@leveluplearning.in"
            style={{
              background: 'transparent',
              color: 'rgba(255,255,255,0.7)',
              border: '1.5px solid rgba(255,255,255,0.15)',
              borderRadius: 100,
              padding: '16px 36px',
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              transition: 'all 200ms ease',
              textDecoration: 'none',
              display: 'inline-block',
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
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
