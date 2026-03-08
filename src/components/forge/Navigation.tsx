import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const leftLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
];

const rightLinks = [
  { label: 'Community', href: '#community' },
  { label: 'Stories', href: '#stories' },
  { label: 'Careers', href: '#careers' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        transition: 'all 300ms ease',
      }}>
        <div className="forge-desktop-nav" style={{
          background: 'white',
          borderRadius: 16,
          padding: '10px 32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}>
          {leftLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="forge-nav-link"
              style={{ color: '#222', fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              {link.label}
            </button>
          ))}

          {/* Center logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 8px', display: 'flex', alignItems: 'center' }}
          >
            <img
              src="/images/forge-logo.png"
              alt="the Forge"
              style={{ height: 40, width: 'auto' }}
            />
          </button>

          {rightLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="forge-nav-link"
              style={{ color: '#222', fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="forge-mobile-hamburger"
          style={{
            display: 'none',
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: 12,
            padding: 10,
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
            alignItems: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: 22,
              height: 2,
              background: '#222',
            }} />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div className="forge-mobile-menu">
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            <X size={28} />
          </button>
          {[...leftLinks, ...rightLinks].map(link => (
            <a key={link.href} onClick={() => scrollTo(link.href)} style={{ cursor: 'pointer' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
