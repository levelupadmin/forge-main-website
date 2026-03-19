import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  '/images/careers/big-group-beach.jpg',
  '/images/careers/team-selfie.jpg',
  '/images/careers/panel-talk.jpg',
  '/images/careers/kl-towers.jpg',
  '/images/careers/beach-shoot.jpg',
  '/images/careers/team-outdoor.jpg',
  '/images/careers/production-room.jpg',
  '/images/careers/trophy.jpg',
  '/images/careers/goa-beach.jpg',
  '/images/careers/tug-of-war.jpg',
  '/images/careers/huddle.jpg',
  '/images/careers/film-fest.jpg',
  '/images/careers/beach-vibes.jpg',
  '/images/careers/group-indoor.jpg',
];

export default function CareersHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToRoles = () => {
    const el = document.getElementById('roles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      background: '#000000',
      height: '100svh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            opacity: i === activeIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        />
      ))}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 'clamp(40px, 8vw, 80px)',
        left: 0,
        right: 0,
        zIndex: 2,
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <h1 style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(30px, 7vw, 64px)',
          color: '#FFFFFF',
          lineHeight: 1.05,
          letterSpacing: -1,
          margin: '0 0 20px',
        }}>
          Build a <span className="forge-gradient-text">Dream</span> that outlasts you
        </h1>
        <p style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(14px, 2vw, 17px)',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.75,
          maxWidth: 520,
          margin: '0 auto 36px',
        }}>
          Nothing like the Forge exists anywhere in the world. That means it takes a certain kind of person to believe in it. This page is for you if you are crazy enough to dream as big as we do.
        </p>
        <button onClick={scrollToRoles} className="forge-cta-light">
          Join the Dream
        </button>
      </div>
    </section>
  );
}
