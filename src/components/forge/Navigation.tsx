import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const navLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
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
        top: scrolled ? 0 : 24,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 40px' : '0 40px',
        background: scrolled ? 'rgba(252,247,239,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(34,34,34,0.08)' : 'none',
        transition: 'all 300ms ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontWeight: 700,
            fontSize: 20,
            color: scrolled ? '#222' : '#fff',
            transition: 'color 300ms ease',
          }}>
            the Forge
          </div>
          <div style={{
            fontSize: 10,
            letterSpacing: '0.12em',
            opacity: 0.5,
            color: scrolled ? '#222' : '#fff',
            transition: 'color 300ms ease',
          }}>
            by LevelUp Learning
          </div>
        </div>

        <div className="forge-desktop-nav" style={{
          background: 'white',
          borderRadius: 100,
          padding: '8px 8px 8px 24px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="forge-nav-link"
              style={{ color: '#222' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#experiences')}
            className="forge-cta-dark"
            style={{ padding: '10px 24px', fontSize: 13, margin: 0 }}
          >
            Apply Now
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="forge-mobile-hamburger"
          style={{
            display: 'none',
            background: 'rgba(255,255,255,0.15)',
            border: 'none',
            borderRadius: 8,
            padding: 10,
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
            alignItems: 'center',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: 22,
              height: 2,
              background: scrolled ? '#222' : 'white',
              transition: 'background 300ms ease',
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
          {navLinks.map(link => (
            <a key={link.href} onClick={() => scrollTo(link.href)} style={{ cursor: 'pointer' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
