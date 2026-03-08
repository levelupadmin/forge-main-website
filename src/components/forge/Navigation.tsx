import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const leftLinks = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'About', href: '#about' },
];

const rightLinks = [
  { label: 'Community', href: '#community' },
  { label: 'Stories', href: '#stories' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      }}>
        <div className="forge-desktop-nav" style={{
          background: 'white',
          borderRadius: 100,
          padding: '6px 6px 6px 28px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          gap: 0,
        }}>
          {/* Left links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1, justifyContent: 'flex-end' }}>
            {leftLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="forge-nav-link"
                style={{ color: '#222', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 28px', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <img
              src="/images/forge-logo.png"
              alt="the Forge"
              style={{ height: 44, width: 'auto', display: 'block' }}
            />
          </button>

          {/* Right links + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flex: 1, justifyContent: 'flex-start' }}>
            {rightLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="forge-nav-link"
                style={{ color: '#222', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#experiences')}
              className="forge-cta-dark"
              style={{ padding: '10px 20px', fontSize: 12, margin: 0, whiteSpace: 'nowrap' }}
            >
              Request an Invite
            </button>
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
            <a key={link.href} onClick={() => scrollTo(link.href)} style={{ cursor: 'pointer' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
