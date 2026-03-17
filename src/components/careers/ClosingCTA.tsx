import { useIsMobile } from '@/hooks/use-mobile';
import { TALLY_FORM } from '@/data/jobs';

export default function ClosingCTA() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      background: '#FFFFFF',
      padding: isMobile ? '48px 24px' : '64px 80px',
      textAlign: 'center',
    }}>
      <a
        href={TALLY_FORM}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          background: '#222222',
          color: '#FFFFFF',
          borderRadius: 100,
          padding: '16px 48px',
          fontFamily: "'Open Sauce One', sans-serif",
          fontSize: 16,
          fontWeight: 700,
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 250ms ease',
          boxShadow: '0 0 20px rgba(255,188,59,0.25)',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#FFBC3B'; e.currentTarget.style.color = '#222222'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,188,59,0.45)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#222222'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,188,59,0.25)'; }}
      >
        Apply Now
      </a>
    </section>
  );
}
