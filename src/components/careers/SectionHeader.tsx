interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subtext: string;
  dark?: boolean;
}

export default function SectionHeader({ eyebrow, headline, subtext, dark = false }: SectionHeaderProps) {
  return (
    <div style={{
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto 48px',
    }}>
      <div style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 400,
        fontSize: 15,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#FFBC3B',
        marginBottom: 20,
      }}>
        {eyebrow}
      </div>
      <h2 style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 800,
        fontSize: 'clamp(40px, 6vw, 64px)',
        letterSpacing: -1.5,
        lineHeight: 1.05,
        color: dark ? '#FFFFFF' : '#222222',
        margin: '0 0 20px',
      }}>
        {headline}
      </h2>
      <p style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 400,
        fontSize: 17,
        color: dark ? 'rgba(255,255,255,0.42)' : 'rgba(34,34,34,0.5)',
        lineHeight: 1.8,
        maxWidth: 540,
        margin: '0 auto',
      }}>
        {subtext}
      </p>
    </div>
  );
}
