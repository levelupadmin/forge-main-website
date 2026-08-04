import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Menu, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { programs } from '@/data/programs';
import { ChevronDown } from 'lucide-react';

interface NavLink { label: string; href: string; isRoute?: boolean; }

const leftLinks: NavLink[] = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
];

const rightLinks: NavLink[] = [
  { label: 'Community', href: '/community', isRoute: true },
  { label: 'Careers', href: '/careers', isRoute: true },
];

const allDesktopLinks = [...leftLinks, ...rightLinks];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expOpen, setExpOpen] = useState(false);
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
      // If not on homepage, navigate to homepage with hash
      if (window.location.pathname !== '/') {
        navigate('/' + link.href);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
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
          onMouseLeave={() => { setHoveredIndex(null); setExpOpen(false); }}
            style={{
              position: 'relative',
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
                  onMouseEnter={() => { setHoveredIndex(i); setExpOpen(link.href === '#experiences'); }}
                  className="forge-nav-link"
                  style={{
                    color: '#000000',
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.4,
                    transition: 'opacity 0.2s ease, color 0.3s ease',
                  }}
                >
                  {link.label}
                  {link.href === '#experiences' && (
                    <ChevronDown size={13} style={{ transition: 'transform 0.2s ease', transform: expOpen ? 'rotate(180deg)' : 'none' }} />
                  )}
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
                    color: '#000000',
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontSize: 15,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    opacity: hoveredIndex === null || hoveredIndex === leftLinks.length + i ? 1 : 0.4,
                    transition: 'opacity 0.2s ease, color 0.3s ease',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            {expOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  left: 0,
                  background: 'white',
                  borderRadius: 20,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
                  padding: '10px 8px',
                  minWidth: 280,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {programs.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="forge-nav-dropdown-item"
                    style={{
                      fontFamily: "'Open Sauce One', sans-serif",
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: '#000000',
                      textDecoration: 'none',
                      padding: '11px 16px',
                      borderRadius: 14,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Premium mobile menu, option B: big logo, program cards, bottom pill */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#0A0A0A',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          animation: 'menu-fade-in 0.3s ease forwards',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.28)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'menu-item-in 0.3s ease forwards',
              opacity: 0,
            }}
          >
            <X size={18} />
          </button>

          <div style={{ textAlign: 'center', paddingTop: 44 }}>
            <img
              src="/images/forge-logo-transparent.png"
              alt="the Forge"
              style={{
                height: 72,
                filter: 'brightness(0) invert(1)',
                animation: 'menu-item-in 0.4s ease forwards',
                opacity: 0,
              }}
            />
          </div>

          <div style={{ padding: '28px 20px 0', flex: 1, width: '100%', maxWidth: 420, margin: '0 auto', boxSizing: 'border-box' }}>
            <div style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontSize: 11,
              letterSpacing: '2.5px',
              color: 'rgba(255,255,255,0.45)',
              textAlign: 'center',
              marginBottom: 12,
              animation: 'menu-item-in 0.4s ease 100ms forwards',
              opacity: 0,
            }}>
              EXPERIENCES
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {programs.map((p, j) => (
                <a
                  key={p.href}
                  href={p.href}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 14,
                    padding: '13px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textDecoration: 'none',
                    fontFamily: "'Open Sauce One', sans-serif",
                    color: 'white',
                    fontSize: 15.5,
                    fontWeight: 500,
                    opacity: 0,
                    animation: `menu-item-in 0.4s ease ${160 + j * 70}ms forwards`,
                  }}
                >
                  <span>{p.title}</span>
                  <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
                </a>
              ))}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 28,
              marginTop: 26,
              opacity: 0,
              animation: 'menu-item-in 0.4s ease 480ms forwards',
            }}>
              {[leftLinks[1], ...rightLinks].map((link) => (
                <a
                  key={link.href}
                  onClick={() => handleNav(link)}
                  style={{
                    cursor: 'pointer',
                    fontFamily: "'Open Sauce One', sans-serif",
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ padding: '20px 20px 28px', width: '100%', maxWidth: 420, margin: '0 auto', boxSizing: 'border-box' }}>
            <button
              onClick={() => handleNav({ href: '#experiences' })}
              style={{
                width: '100%',
                background: 'white',
                color: '#000',
                border: 'none',
                borderRadius: 100,
                padding: '15px 0',
                fontFamily: "'Open Sauce One', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '1.5px',
                cursor: 'pointer',
                opacity: 0,
                animation: 'menu-item-in 0.4s ease 560ms forwards',
              }}
            >
              EXPLORE EXPERIENCES
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes menu-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .forge-nav-dropdown-item:hover { background: rgba(0,0,0,0.06); }
        @keyframes menu-item-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
