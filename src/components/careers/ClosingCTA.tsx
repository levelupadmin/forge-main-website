import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { TALLY_FORM } from '@/data/jobs';

export default function ClosingCTA() {
  const isMobile = useIsMobile();
  const { ref, isVisible } = useScrollAnimation(0.08);

  const scrollToRoles = () => {
    const el = document.getElementById('roles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#FFFFFF', padding: isMobile ? '56px 24px' : '80px 80px', textAlign: 'center' }}>
      <div ref={ref} style={{ maxWidth: 800, margin: '0 auto', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(28px)', transition: 'opacity 650ms ease, transform 650ms ease' }}>
        <div style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 400, fontSize: 15, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#FFBC3B', marginBottom: 20 }}>Ready?</div>
        <h2 style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 800, fontSize: isMobile ? 44 : 88, color: '#222222', letterSpacing: -2, lineHeight: 1.0, margin: '0 0 20px' }}>
          If this is you, hit the link and{' '}
          <span style={{ fontStyle: 'italic', color: '#FFBC3B' }}>let's talk.</span>
        </h2>
        <p style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 400, fontSize: 18, color: 'rgba(34,34,34,0.48)', maxWidth: 480, margin: '0 auto 52px', lineHeight: 1.7 }}>
          Everyone here wants to be the world's best at what they do. If that sentence does not scare you, you are probably one of us.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <button onClick={scrollToRoles}
            style={{ background: '#222222', color: '#FFFFFF', borderRadius: 100, padding: '16px 40px', fontFamily: "'Open Sauce One', sans-serif", fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'all 250ms ease', boxShadow: '0 0 20px rgba(255,188,59,0.25)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FFBC3B'; e.currentTarget.style.color = '#222222'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,188,59,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#222222'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,188,59,0.25)'; }}
          >See Open Roles</button>
          <a href={TALLY_FORM} target="_blank" rel="noopener noreferrer"
            style={{ background: 'transparent', color: 'rgba(34,34,34,0.5)', border: '1px solid rgba(34,34,34,0.15)', borderRadius: 100, padding: '16px 36px', fontFamily: "'Open Sauce One', sans-serif", fontSize: 16, fontWeight: 400, textDecoration: 'none', transition: 'all 250ms ease', display: 'inline-flex', alignItems: 'center' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,34,34,0.4)'; e.currentTarget.style.color = '#222222'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,34,34,0.15)'; e.currentTarget.style.color = 'rgba(34,34,34,0.5)'; }}
          >Apply Now</a>
        </div>
      </div>
    </section>
  );
}
