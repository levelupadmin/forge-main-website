export default function HeroBar() {
  return (
    <section style={{
      width: '100%',
      background: '#FFBC3B',
      padding: '18px 24px',
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
        padding: '0 16px',
      }}>
        <span style={{
          fontSize: 15,
          fontWeight: 600,
          color: '#0D0D0D',
        }}>
          From the House of
        </span>
        <img
          src="/images/levelup-learning-logo.png"
          alt="LevelUp Learning"
          style={{
            height: 22,
            objectFit: 'contain',
          }}
        />
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
