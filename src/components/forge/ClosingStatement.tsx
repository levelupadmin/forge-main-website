import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ClosingStatement() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
      background: '#FFFFFF',
      padding: 'clamp(100px, 12vw, 160px) clamp(24px, 5vw, 80px)',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontWeight: 700,
        fontSize: 'clamp(48px, 7vw, 88px)',
        color: '#222',
        letterSpacing: -1,
        lineHeight: 1,
        marginBottom: 48,
      }}>
        Start at the Forge.
      </h2>
      <button
        className="forge-cta-dark"
        style={{ padding: '16px 40px', fontSize: 16 }}
        onClick={() => {
          const el = document.querySelector('#experiences');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Apply Now
      </button>
    </section>
  );
}
