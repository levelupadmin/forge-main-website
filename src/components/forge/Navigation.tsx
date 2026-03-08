import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavLink { label: string; href: string; isRoute?: boolean; }

const leftLinks: NavLink[] = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
];

const rightLinks: NavLink[] = [
  { label: 'Community', href: '/community', isRoute: true },
  { label: 'Careers', href: '#careers' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
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
        top: isMobile ? 16 : 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
      }}>
        {isMobile ? (
          /* Mobile pill nav */
          <div style={{
            background: 'white',
            borderRadius: 100,
            padding: '6px 8px 6px 16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              <img
                src="/images/forge-logo.png"
                alt="the Forge"
                style={{ height: 36, width: 'auto', display: 'block' }}
              />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: '#222',
                border: 'none',
                borderRadius: 100,
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <Menu size={18} color="white" />
            </button>
          </div>
        ) : (
          /* Desktop pill nav */
          <div style={{
            background: 'white',
            borderRadius: 100,
            padding: '8px 32px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
          }}>
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

            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 24px', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            >
              <img
                src="/images/forge-logo.png"
                alt="the Forge"
                style={{ height: 52, width: 'auto', display: 'block' }}
              />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1, justifyContent: 'flex-start' }}>
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
        )}
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
