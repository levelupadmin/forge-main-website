import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function IntroAnimation() {
  const isMobile = useIsMobile();
  const [stage, setStage] = useState(0);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [
      setTimeout(() => setStage(1), 600),
      setTimeout(() => setStage(2), 1900),
      setTimeout(() => setStage(3), 2400),
      setTimeout(() => setStage(4), 3400),
      setTimeout(() => {
        setStage(5);
        document.body.style.overflow = '';
        window.dispatchEvent(new Event('forge-intro-done'));
      }, 4000),
      setTimeout(() => setRemoved(true), 4800),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  if (removed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#0D0D0D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: stage >= 5 ? 0 : 1,
        transition: 'opacity 0.8s ease-out',
        pointerEvents: stage >= 5 ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: stage >= 4 ? 0 : stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? 'scale(1)' : 'scale(0.96)',
          transition: stage >= 4
            ? 'opacity 0.6s ease-out, transform 0.6s ease-out'
            : 'opacity 1.2s ease-out, transform 1.2s ease-out',
        }}
      >
        {/* Logo */}
        <img
          src="/images/forge-logo-transparent.png"
          alt="Forge"
          style={{
            width: isMobile ? 140 : 200,
            height: 'auto',
            filter: 'brightness(0) invert(1)',
          }}
        />

        {/* Amber line */}
        <div
          style={{
            width: stage >= 2 ? 48 : 0,
            height: 1,
            backgroundColor: '#F59E0B',
            marginTop: 16,
            transition: 'width 0.5s ease-out',
          }}
        />

        {/* Tagline */}
        <p
          style={{
            marginTop: 12,
            fontSize: 14,
            color: '#888480',
            letterSpacing: '0.08em',
            opacity: stage >= 3 ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
          }}
        >
          where Dreamers become Doers
        </p>
      </div>
    </div>
  );
}
