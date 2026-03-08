import { useIsMobile } from '@/hooks/use-mobile';

const panels = [
  { label: 'Online Community', photo: '/placeholder.svg' }, /* REPLACE: Community photo */
  { label: 'Offline Meet-ups', photo: '/placeholder.svg' }, /* REPLACE: Meetup photo */
  { label: 'Learning Experiences', photo: '/placeholder.svg' }, /* REPLACE: Workshop photo */
  { label: 'Alumni Collabs', photo: '/placeholder.svg' }, /* REPLACE: Collaboration photo */
  { label: 'City Chapters', photo: '/placeholder.svg' }, /* REPLACE: City event photo */
];

export default function Community() {
  const isMobile = useIsMobile();

  return (
    <section id="community" style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) 0 0',
    }}>
      <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: 48 }}>
        <h2 style={{
          fontWeight: 700,
          fontSize: 'clamp(36px, 4vw, 52px)',
          color: '#222',
          lineHeight: 1.1,
        }}>
          Come for the Learning.<br />
          Stay for the{' '}
          <span style={{
            textDecoration: 'underline',
            textDecorationColor: '#FFBC3B',
            textUnderlineOffset: 6,
            textDecorationThickness: 2,
          }}>
            Community
          </span>.
        </h2>
        <p style={{ fontSize: 17, opacity: 0.6, marginTop: 16 }}>
          Your network is your networth.
        </p>
      </div>

      {/* Panels */}
      {isMobile ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {panels.map((panel, i) => (
            <div key={i} style={{
              position: 'relative',
              height: 200,
              overflow: 'hidden',
            }}>
              <img src={panel.photo} alt={panel.label} style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              }} />
              <div style={{
                position: 'absolute', bottom: 16, left: 16,
                color: 'white', fontWeight: 700, fontSize: 18,
              }}>
                {panel.label}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="forge-panels">
          {panels.map((panel, i) => (
            <div key={i} className="forge-panel">
              <img src={panel.photo} alt={panel.label} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                position: 'absolute', inset: 0,
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              }} />
              <div className="forge-panel-label" style={{
                position: 'absolute', bottom: 24, left: 24,
                color: 'white', fontWeight: 700, fontSize: 18,
              }}>
                {panel.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', padding: '32px 24px' }}>
        <a href="#" className="forge-cta-dark" style={{ padding: '14px 32px', fontSize: 15 }}>
          Join the Community
        </a>
      </div>
    </section>
  );
}
