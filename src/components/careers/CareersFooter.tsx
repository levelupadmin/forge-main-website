import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
  { label: 'Community', href: '/community' },
  { label: 'Stories', href: '#stories' },
  { label: 'Careers', href: '/careers' },
];

const programLinks = [
  { label: 'the Forge Filmmaking Bootcamp', href: 'https://creators.forgebylevelup.com/filmmaking' },
  { label: 'the Forge Creator Residency', href: 'https://creators.forgebylevelup.com/' },
  { label: 'the Forge Writing Retreat', href: 'https://creators.forgebylevelup.com/writing' },
];

export default function CareersFooter() {
  const isMobile = useIsMobile();

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Open Sauce One', sans-serif",
    fontSize: 14,
    fontWeight: 400,
    color: 'rgba(255,255,255,0.52)',
    textDecoration: 'none',
    transition: 'color 200ms ease',
    cursor: 'pointer',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Open Sauce One', sans-serif",
    fontSize: 11,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.22)',
    marginBottom: 20,
  };

  return (
    <footer style={{
      background: '#222222',
      padding: isMobile ? '64px 24px 32px' : '80px 80px 40px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Three columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr',
          gap: isMobile ? 40 : 80,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: 28,
        }}>
          {/* Left column */}
          <div>
            <div style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 800,
              fontSize: 24,
              color: '#FFFFFF',
              marginBottom: 8,
            }}>
              the Forge
            </div>
            <div style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 13,
              color: 'rgba(255,255,255,0.28)',
              marginBottom: 28,
            }}>
              Learn. Do. Become.
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'IG', href: 'https://www.instagram.com/forgebylevelup/' },
                { label: 'YT', href: 'https://www.youtube.com/@forgebylevelup' },
                { label: 'WA', href: 'https://wa.me/919791520177' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#FFBC3B';
                    e.currentTarget.style.color = '#FFBC3B';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div style={labelStyle}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFBC3B'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.52)'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <div style={labelStyle}>Our Programs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {programLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFBC3B'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.52)'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: isMobile ? 16 : 0,
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontSize: 12,
            color: 'rgba(255,255,255,0.22)',
          }}>
            &copy; 2025 the Forge by LevelUp Learning. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms'].map(label => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: "'Open Sauce One', sans-serif",
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.22)',
                  textDecoration: 'none',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.22)'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
