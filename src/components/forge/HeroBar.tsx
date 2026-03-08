export default function HeroBar() {
  return (
    <section style={{
      width: '100%',
      background: '#FFBC3B',
      padding: 'clamp(20px, 4vw, 32px) 0',
      textAlign: 'center',
      borderRadius: '0 0 32px 32px',
      marginTop: '-32px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: '100%',
        padding: '0 clamp(24px, 5vw, 60px)',
      }}>
        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 20px)',
          fontWeight: 500,
          color: '#000',
          margin: 0,
          lineHeight: 1.4,
        }}>
          From the House of LevelUp Learning<br />
          India's Largest Community of Creatives
        </p>
      </div>
    </section>
  );
}
