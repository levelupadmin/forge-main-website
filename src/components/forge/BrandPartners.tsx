import { partners } from '@/data/partners';

export default function BrandPartners() {
  return (
    <section style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8 }}>Backed by</div>
      <div style={{ fontWeight: 700, fontSize: 48, marginBottom: 48 }}>the best.</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '40px 16px',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        {partners.map((partner, i) => (
          <div key={i} style={{
            background: '#FFFFFF',
            borderRadius: 12,
            padding: '24px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            height: 80,
          }}>
            <img
              src={partner.logo}
              alt={partner.name}
              className="forge-partner-logo"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
