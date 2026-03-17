import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function IntroAnimation() {
  const isMobile = useIsMobile();
  const [stage, setStage] = useState(0);
  const [removed, setRemoved] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Stage 0: black + video playing
    // Stage 1 (2.2s): video fading out, logo fading in
    // Stage 2 (2.8s): video gone
    // Stage 3 (3.0s): tagline fades in
    // Stage 4 (4.0s): entire overlay fades out
    // Stage 5 (4.6s): removed from DOM

    const timers = [
      setTimeout(() => setStage(1), 2200),
      setTimeout(() => setStage(2), 2800),
      setTimeout(() => setStage(3), 3400),
      setTimeout(() => {
        setStage(4);
        document.body.style.overflow = '';
        window.dispatchEvent(new Event('forge-intro-done'));
      }, 4400),
      setTimeout(() => setRemoved(true), 5000),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  // Also fade video on ended event (whichever comes first)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      if (stage < 2) setStage(prev => Math.max(prev, 2));
    };
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [stage]);

  if (removed) return null;

  const logoSize = isMobile ? 140 : 200;

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
        opacity: stage >= 4 ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        pointerEvents: stage >= 4 ? 'none' : 'auto',
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        src="/videos/forge-intro.mp4"
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: stage >= 1 ? 0 : 1,
          transition: 'opacity 0.6s ease-out',
        }}
      />

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
          src="/images/forge-logo-transparent.png"
          alt="Forge"
          style={{
            width: logoSize,
            height: 'auto',
            filter: 'brightness(0) invert(1)',
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
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? 'translateY(0)' : 'translateY(10px)',
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
