import { Instagram, Youtube, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
  { label: 'Stories', href: '#stories' },
  { label: 'Careers', href: '#careers' },
];

const programLinks = [
  { label: 'the Forge Filmmaking Bootcamp', href: '/filmmaking' },
  { label: 'the Forge Creator Residency', href: '/creator-residency' },
  { label: 'the Forge Writing Retreat', href: '/writing-retreat' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: '#222222',
      padding: '80px clamp(24px, 5vw, 80px) 40px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 48,
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        {/* Brand */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: 24, color: 'white' }}>the Forge</div>
          <div style={{ fontSize: 13, color: 'white', opacity: 0.3, fontStyle: 'italic', marginTop: 8 }}>
            Learn. Do. Become.
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'center' }}>
            <a href="#" className="forge-social" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="forge-social" aria-label="YouTube"><Youtube size={20} /></a>
            <a href="#" className="forge-social" aria-label="WhatsApp"><MessageCircle size={20} /></a>
          </div>
        </div>

        {/* Navigate */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: 11,
            color: 'white',
            opacity: 0.25,
            letterSpacing: '0.12em',
            marginBottom: 16,
          }}>
            Navigate
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="forge-footer-link"
                style={{ cursor: 'pointer' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: 11,
            color: 'white',
            opacity: 0.25,
            letterSpacing: '0.12em',
            marginBottom: 16,
          }}>
            Our Programs
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {programLinks.map(link => (
              <a key={link.href} href={link.href} className="forge-footer-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 24,
        marginTop: 48,
        maxWidth: 1280,
        margin: '48px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div style={{ fontSize: 12, color: 'white', opacity: 0.25 }}>
          &copy; 2025 the Forge by LevelUp Learning. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="#" style={{ fontSize: 12, color: 'white', opacity: 0.25, textDecoration: 'none' }}>
            Privacy Policy
          </a>
          <a href="#" style={{ fontSize: 12, color: 'white', opacity: 0.25, textDecoration: 'none' }}>
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
