import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WhatIsForge() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
      maxWidth: 1000,
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8 }}>What is</div>
      <div style={{
        fontWeight: 700,
        fontSize: 'clamp(56px, 8vw, 96px)',
        color: '#222',
        letterSpacing: -2,
        lineHeight: 1,
        marginBottom: 48,
      }}>
        the Forge
      </div>

      <p style={{
        fontWeight: 700,
        fontSize: 'clamp(36px, 5vw, 56px)',
        color: '#222',
        lineHeight: 1.1,
        maxWidth: 860,
        margin: '0 auto 48px',
      }}>
        Every next level of your life demands a different you.
      </p>

      <div style={{
        width: 48,
        height: 2,
        background: '#FFBC3B',
        margin: '0 auto 40px',
      }} />

      <p style={{
        fontSize: 18,
        opacity: 0.65,
        lineHeight: 1.8,
        maxWidth: 600,
        margin: '0 auto',
      }}>
        The Forge is an experiential learning residency that brings together travel, hands-on creation, and a like-minded community. Built for filmmakers, writers, founders, builders, artists, and creators. You learn by doing, collaborate with your peers, and leave with something you actually made.
      </p>
    </section>
  );
}
