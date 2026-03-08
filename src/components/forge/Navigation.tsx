import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface NavLink { label: string; href: string; isRoute?: boolean; }

const leftLinks: NavLink[] = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
];

const rightLinks: NavLink[] = [
  { label: 'Community', href: '/community', isRoute: true },
  { label: 'Careers', href: '#careers' },
  { label: 'Be a Mentor', href: '#mentors' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleNav = (link: { href: string; isRoute?: boolean }) => {
    setMenuOpen(false);
    if (link.isRoute) {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
      }}>
        <div className={`forge-desktop-nav${scrolled ? ' forge-nav-blur' : ''}`} style={{
          background: 'white',
          borderRadius: 100,
          padding: '8px 32px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          display: 'flex',
          alignItems: 'center',
          gap: 0,
        }}>
          {/* Left links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1, justifyContent: 'flex-end' }}>
            {leftLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link)}
                className="forge-nav-link"
                style={{ color: '#222', fontSize: 15, fontWeight: 400 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 24px', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <img
              src="/images/forge-logo.png"
              alt="the Forge"
              style={{ height: 52, width: 'auto', display: 'block' }}
            />
          </button>

          {/* Right links + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1.4, justifyContent: 'flex-start' }}>
            {rightLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link)}
                className="forge-nav-link"
                style={{ color: '#222', fontSize: 15, fontWeight: 400, whiteSpace: 'nowrap' }}
              >
                {link.label}
              </button>
            ))}
          </div>
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
            <a key={link.href} onClick={() => handleNav(link)} style={{ cursor: 'pointer' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
