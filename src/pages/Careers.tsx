import Navigation from '@/components/forge/Navigation';
import Footer from '@/components/forge/Footer';

export default function Careers() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navigation />
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        padding: '120px 24px 80px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 700,
          color: '#FFBC3B',
          marginBottom: 24,
          letterSpacing: '-0.02em',
        }}>
          Careers
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: 'rgba(255,255,255,0.6)',
          maxWidth: 480,
          lineHeight: 1.6,
        }}>
          We're building something special. Check back soon for open positions, or reach out to us directly.
        </p>
        <a
          href="mailto:forge@leveluplearning.in"
          style={{
            marginTop: 40,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#FFBC3B',
            color: '#000000',
            borderRadius: 100,
            padding: '14px 32px',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            transition: 'transform 200ms ease',
          }}
        >
          Get in Touch
        </a>
      </section>
      <Footer />
    </div>
  );
}
