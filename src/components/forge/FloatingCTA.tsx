import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const experiencesEl = document.querySelector('#experiences');
      const scrollY = window.scrollY;

      if (!experiencesEl) {
        setVisible(scrollY > heroHeight);
        return;
      }

      const expRect = experiencesEl.getBoundingClientRect();
      const inExperiences = expRect.top < window.innerHeight * 0.5 && expRect.bottom > window.innerHeight * 0.5;

      setVisible(scrollY > heroHeight && !inExperiences);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToExperiences = () => {
    const el = document.querySelector('#experiences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`forge-floating-cta${visible ? ' visible' : ''}`}>
      <button
        onClick={scrollToExperiences}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#222',
          color: 'white',
          border: 'none',
          borderRadius: 100,
          padding: '14px 28px',
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: "'Open Sauce One', sans-serif",
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          transition: 'background 200ms ease, transform 200ms ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = '#FFBC3B';
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = '#222';
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
        }}
      >
        Request an Invite <ArrowDown size={16} />
      </button>
    </div>
  );
}
