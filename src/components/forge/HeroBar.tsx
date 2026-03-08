export default function HeroBar() {
  return (
    <section style={{
      width: '100%',
      background: '#FFBC3B',
      padding: '12px 0',
      textAlign: 'center',
      borderRadius: '0 0 24px 24px',
      marginTop: '-24px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        flexWrap: 'wrap',
        padding: '0 24px',
      }}>
        <span style={{
          fontSize: 'clamp(12px, 1.8vw, 15px)',
          fontWeight: 500,
          color: '#1a1a1a',
        }}>
          From the House of
        </span>
        {/* LevelUp Learning logo placeholder — replace with actual logo */}
        <span style={{
          fontSize: 'clamp(12px, 1.8vw, 15px)',
          fontWeight: 800,
          color: '#1a1a1a',
          letterSpacing: -0.5,
        }}>
          LevelUp Learning
        </span>
        <span style={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: '#1a1a1a',
          opacity: 0.4,
          display: 'inline-block',
        }} />
        <span style={{
          fontSize: 'clamp(12px, 1.8vw, 15px)',
          fontWeight: 500,
          color: '#1a1a1a',
        }}>
          India's Largest Community of Creatives
        </span>
      </div>
    </section>
  );
}
