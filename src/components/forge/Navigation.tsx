import { useState, useEffect, useRef } from 'react';
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

const allDesktopLinks = [...leftLinks, ...rightLinks];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      if (isMobile) {
        if (currentY > 100 && currentY > lastScrollY.current) {
          setNavVisible(false);
        } else if (currentY < lastScrollY.current) {
          setNavVisible(true);
        }
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

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
        ...(isMobile
          ? { top: `max(16px, env(safe-area-inset-top, 16px))` }
          : { top: 24 }),
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        transition: isMobile ? 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)' : undefined,
        ...(isMobile && !navVisible ? { transform: 'translateX(-50%) translateY(calc(-100% - 40px))' } : {}),
      }}>
        {isMobile ? (
          <div style={{
            background: scrolled ? 'rgba(255,255,255,0.75)' : 'white',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderRadius: 100,
            padding: '6px 8px 6px 16px',
            width: 'calc(100vw - 32px)',
            boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 4px 24px rgba(0,0,0,0.10)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
          }}>
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              <img src="/images/forge-logo-transparent.png" alt="the Forge" style={{ height: 36, width: 'auto', display: 'block' }} />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: '#000000',
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
          <div
          onMouseLeave={() => setHoveredIndex(null)}
            style={{
              background: scrolled ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,1)',
              backdropFilter: scrolled ? 'blur(20px)' : 'none',
              WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
              borderRadius: 100,
              padding: '8px 32px',
              boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 4px 24px rgba(0,0,0,0.10)',
              display: 'flex',
              alignItems: 'center',
              gap: 0,
              transition: 'all 0.3s ease',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {leftLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className="forge-nav-link"
                  style={{
                    color: '#222',
                    fontSize: 15,
                    fontWeight: 400,
                    opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.4,
                    transition: 'opacity 0.2s ease, color 0.3s ease',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 24px', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            >
              <img src="/images/forge-logo-transparent.png" alt="the Forge" style={{ height: 52, width: 'auto', display: 'block' }} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {rightLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link)}
                  onMouseEnter={() => setHoveredIndex(leftLinks.length + i)}
                  className="forge-nav-link"
                  style={{
                    color: '#222',
                    fontSize: 15,
                    fontWeight: 400,
                    whiteSpace: 'nowrap',
                    opacity: hoveredIndex === null || hoveredIndex === leftLinks.length + i ? 1 : 0.4,
                    transition: 'opacity 0.2s ease, color 0.3s ease',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Premium mobile menu with animations */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.95)',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          animation: 'menu-fade-in 0.3s ease forwards',
        }}>
          {/* Logo at top */}
          <img
            src="/images/forge-logo-transparent.png"
            alt="the Forge"
            style={{
              height: 48,
              filter: 'brightness(0) invert(1)',
              position: 'absolute',
              top: 32,
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'menu-item-in 0.4s ease forwards',
              opacity: 0,
            }}
          />

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
              animation: 'menu-item-in 0.3s ease forwards',
              opacity: 0,
            }}
          >
            <X size={28} />
          </button>

          {[...leftLinks, ...rightLinks].map((link, i) => (
            <a
              key={link.href}
              onClick={() => handleNav(link)}
              style={{
                cursor: 'pointer',
                color: 'white',
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: -0.5,
                padding: '16px 0',
                textDecoration: 'none',
                opacity: 0,
                animation: `menu-item-in 0.4s ease ${150 + i * 80}ms forwards`,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes menu-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes menu-item-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
