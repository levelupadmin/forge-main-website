import { Instagram, Youtube, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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

const steps = [
  { word: 'Learn.', color: '#FFBC3B' },
  { word: 'Do.', color: '#FFA800' },
  { word: 'Become.', color: '#DD6F15' },
];

export default function Footer() {
  const isMobile = useIsMobile();

  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#000000' }}>
      {/* Learn Do Become strip */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(28px, 4vw, 48px) clamp(24px, 5vw, 80px)',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 'clamp(16px, 3vw, 40px)', flexWrap: 'wrap',
        }}>
          {steps.map((step) => (
            <span key={step.word} style={{
              fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)',
              color: step.color, lineHeight: 1, letterSpacing: -1,
            }}>{step.word}</span>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div style={{
        padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px) 32px',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? 32 : 'clamp(32px, 4vw, 64px)',
          marginBottom: 48,
          textAlign: isMobile ? 'center' : 'left',
        }}>
          {/* Brand Column */}
          <div>
            <img
              src="/images/forge-logo-lines.png"
              alt="the Forge"
              style={{
                height: isMobile ? 120 : 100,
                marginBottom: 20,
                display: 'block',
                ...(isMobile ? { margin: '0 auto 20px' } : {}),
              }}
            />
            <p style={{
              fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8,
              maxWidth: 320, margin: isMobile ? '0 auto 32px' : '0 0 32px',
            }}>
              India's most immersive creative education experience. Where practitioners teach, creators build, and artists find their voice.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: isMobile ? 'center' : 'flex-start' }}>
              {[
                { icon: <Instagram size={18} />, label: 'Instagram', href: 'https://www.instagram.com/forgebylevelup/' },
                { icon: <Youtube size={18} />, label: 'YouTube', href: 'https://www.youtube.com/@LevelUpLearning' },
                { icon: <MessageCircle size={18} />, label: 'WhatsApp', href: 'https://wa.me/919791520177' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--forge-yellow)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--forge-yellow)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,188,59,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >{social.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)',
              letterSpacing: 2, textTransform: 'uppercase' as const, marginBottom: 24,
            }}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {navLinks.map(link => (
                <a
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                    fontSize: 14, cursor: 'pointer', transition: 'color 0.2s ease',
                    display: isMobile ? 'block' : 'flex', alignItems: 'center', gap: 4,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >{link.label}</a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)',
              letterSpacing: 2, textTransform: 'uppercase' as const, marginBottom: 24,
            }}>Programs</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {programLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                    fontSize: 14, transition: 'color 0.2s ease',
                    display: isMobile ? 'inline-flex' : 'flex',
                    alignItems: 'center', gap: 4,
                    justifyContent: isMobile ? 'center' : undefined,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {link.label}
                  <ArrowUpRight size={12} style={{ opacity: 0.4 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)',
              letterSpacing: 2, textTransform: 'uppercase' as const, marginBottom: 24,
            }}>Get in touch</div>
            <a
              href="mailto:forge@leveluplearning.in"
              style={{
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                fontSize: 14, display: 'block', marginBottom: 12, transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--forge-yellow)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >forge@leveluplearning.in</a>
            <a
              href="https://wa.me/919791520177"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                fontSize: 14, display: 'block', marginBottom: 12, transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--forge-yellow)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >+91 97915 20177</a>
            <button
              onClick={scrollToTop}
              style={{
                marginTop: 24, padding: '12px 28px', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.12)', background: 'transparent',
                color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.25s ease',
                fontFamily: "'Open Sauce One', sans-serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--forge-yellow)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--forge-yellow)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.6)';
              }}
            >Back to top ↑</button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 32,
          display: 'flex', justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 16,
          textAlign: isMobile ? 'center' : undefined,
        }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
            &copy; 2025 the Forge by LevelUp Learning. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(label => (
              <a
                key={label} href="#"
                style={{
                  fontSize: 12, color: 'rgba(255,255,255,0.2)',
                  textDecoration: 'none', transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.2)'; }}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
