import { Instagram, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
  { label: 'Stories', href: '#stories' },
  { label: 'Careers', href: '#careers' },
];

const programLinks = [
  { label: 'Filmmaking Bootcamp', href: '/filmmaking' },
  { label: 'Creator Residency', href: '/creator-residency' },
  { label: 'Writing Retreat', href: '/writing-retreat' },
];

export default function Footer() {
  const isMobile = useIsMobile();

  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const divider = (
    <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.1)' }} />
  );

  return (
    <footer style={{ background: '#000000' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 24px' : '0 80px' }}>

        {/* Top: Logo + Tagline */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '48px 0 40px' : '56px 0 48px',
          gap: isMobile ? 24 : 0,
          textAlign: isMobile ? 'center' : undefined,
        }}>
          <img
            src="/images/forge-logo-lines.png"
            alt="the Forge"
            style={{ height: isMobile ? 100 : 80 }}
          />
          <h2 style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontSize: isMobile ? 28 : 36,
            fontWeight: 800,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: -0.5,
          }}>
            Start at the Forge.
          </h2>
        </div>

        {divider}

        {/* Middle: Instagram + Nav columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr 1fr',
          gap: isMobile ? 36 : 48,
          padding: isMobile ? '40px 0' : '48px 0',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          {/* Instagram */}
          <div>
            <p style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 16,
              fontFamily: "'Open Sauce One', sans-serif",
            }}>
              Follow us on Instagram
            </p>
            <a
              href="https://www.instagram.com/forgebylevelup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: '#FFFFFF',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#FFBC3B';
                e.currentTarget.style.color = '#FFBC3B';
                e.currentTarget.style.background = 'rgba(255,188,59,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Navigate */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)',
              letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20,
            }}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    color: '#FFFFFF', textDecoration: 'none',
                    fontSize: 14, fontWeight: 600, cursor: 'pointer',
                    textTransform: 'uppercase', letterSpacing: 1,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFBC3B'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; }}
                >{link.label}</a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)',
              letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20,
            }}>Programs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {programLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#FFFFFF', textDecoration: 'none',
                    fontSize: 14, fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: 1,
                    transition: 'color 0.2s ease',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    justifyContent: isMobile ? 'center' : undefined,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FFBC3B'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; }}
                >
                  {link.label}
                  <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)',
              letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20,
            }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a
                href="mailto:forge@leveluplearning.in"
                style={{
                  color: '#FFFFFF', textDecoration: 'none',
                  fontSize: 14, fontWeight: 600, transition: 'color 0.2s ease',
                  textTransform: 'uppercase', letterSpacing: 1,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FFBC3B'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; }}
              >Email Us</a>
              <a
                href="https://wa.me/919791520177"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#FFFFFF', textDecoration: 'none',
                  fontSize: 14, fontWeight: 600, transition: 'color 0.2s ease',
                  textTransform: 'uppercase', letterSpacing: 1,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FFBC3B'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; }}
              >WhatsApp</a>
            </div>
          </div>
        </div>

        {divider}

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 0',
          gap: isMobile ? 20 : 0,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            &copy; 2025 the Forge by LevelUp Learning. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { icon: <MessageCircle size={18} />, href: 'https://wa.me/919791520177', label: 'WhatsApp' },
              { icon: <Mail size={18} />, href: 'mailto:forge@leveluplearning.in', label: 'Email' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.4)', transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#FFBC3B';
                  e.currentTarget.style.color = '#FFBC3B';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                }}
              >{item.icon}</a>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(label => (
              <a
                key={label} href="#"
                style={{
                  fontSize: 12, color: 'rgba(255,255,255,0.25)',
                  textDecoration: 'none', transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)'; }}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
