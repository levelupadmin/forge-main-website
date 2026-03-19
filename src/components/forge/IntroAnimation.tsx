import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function IntroAnimation() {
  const isMobile = useIsMobile();
  const [stage, setStage] = useState(0);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Stage 0: black screen
    // Stage 1 (800ms): logo fades in
    // Stage 2 (2000ms): tagline fades in
    // Stage 3 (3000ms): entire overlay fades out
    // Stage 4 (3600ms): removed from DOM

    const timers = [
      setTimeout(() => setStage(1), 800),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => {
        setStage(3);
        document.body.style.overflow = '';
        window.dispatchEvent(new Event('forge-intro-done'));
      }, 3000),
      setTimeout(() => setRemoved(true), 3600),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (removed) return null;

  const logoSize = isMobile ? 220 : 320;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        backgroundColor: '#0D0D0D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: stage >= 3 ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: stage >= 3 ? 'none' : 'auto',
      }}
    >
      {/* Logo + Tagline */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/forge-logo-lines.png"
          alt="Forge"
          style={{
            width: logoSize,
            height: 'auto',
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? 'scale(1)' : 'scale(1.06)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        />

        {/* Tagline */}
        <p
          style={{
            marginTop: 16,
            fontSize: isMobile ? 16 : 22,
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 800,
            letterSpacing: '0.08em',
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.55)' }}>Where </span>
          <span className="forge-gradient-text" style={{ animation: 'none', WebkitTextFillColor: 'transparent' }}>Dreamers</span>
          <span style={{ color: 'rgba(255,255,255,0.55)' }}> Become </span>
          <span className="forge-gradient-text" style={{ animation: 'none', WebkitTextFillColor: 'transparent' }}>Doers</span>
        </p>
      </div>
    </div>
  );
}
