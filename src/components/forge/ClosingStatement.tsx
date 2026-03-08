import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ClosingStatement() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} style={{
      position: 'relative',
      background: '#000',
      padding: 'clamp(120px, 15vw, 200px) clamp(24px, 5vw, 80px)',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Semi-transparent background photo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/gallery/gallery-hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
      }} />

      {/* Vignette overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.7) 100%)',
      }} />

      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontWeight: 700,
          fontSize: 'clamp(32px, 6vw, 72px)',
          color: 'white',
          letterSpacing: -1,
          lineHeight: 1.15,
          margin: 0,
          maxWidth: 800,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Every creator you admire<br />
          started somewhere.<br />
          <span style={{ color: '#FFBC3B' }}>This is your somewhere.</span>
        </h2>
      </div>
    </section>
  );
}
