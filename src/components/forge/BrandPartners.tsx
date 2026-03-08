import { useState } from 'react';
import { partners, partnerCategories } from '@/data/partners';

export default function BrandPartners() {
  const [activeCategory, setActiveCategory] = useState<string>(partnerCategories[0]);

  const filteredPartners = partners.filter(p => p.category === activeCategory);
  const activePartner = filteredPartners[0] || partners[0];

  return (
    <section style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8 }}>Backed by</div>
        <div style={{ fontWeight: 700, fontSize: 'clamp(40px, 6vw, 56px)', letterSpacing: -1 }}>the best.</div>
      </div>

      {/* Three-column layout */}
      <div style={{
        display: 'flex',
        gap: 48,
        maxWidth: 1100,
        margin: '0 auto',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {/* Left — Categories */}
        <div style={{
          flex: '0 0 180px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          {partnerCategories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '8px 0',
                  fontSize: 17,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? '#222' : 'rgba(34,34,34,0.4)',
                  transition: 'color 0.3s ease, font-weight 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'inherit',
                }}
              >
                {isActive && (
                  <span style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#222',
                    flexShrink: 0,
                  }} />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Center — Image */}
        <div style={{
          flex: '1 1 360px',
          minWidth: 280,
        }}>
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            aspectRatio: '4 / 5',
            maxHeight: 480,
          }}>
            <img
              src={activePartner.image}
              alt={activePartner.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Right — Description + Logo */}
        <div style={{
          flex: '1 1 260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 24,
          minWidth: 220,
        }}>
          <p style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: '#222',
            opacity: 0.7,
            margin: 0,
          }}>
            {activePartner.description}
          </p>

          {/* Partner logo */}
          <div style={{
            border: '1.5px solid rgba(34,34,34,0.15)',
            borderRadius: 12,
            padding: '16px 24px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'fit-content',
            height: 56,
            background: '#fff',
          }}>
            <img
              src={activePartner.logo}
              alt={activePartner.name}
              style={{
                maxWidth: 120,
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          {activePartner.discount && (
            <div style={{
              background: '#FFBC3B',
              color: '#1a1a1a',
              fontWeight: 600,
              fontSize: 14,
              padding: '8px 16px',
              borderRadius: 8,
              width: 'fit-content',
            }}>
              {activePartner.discount}
            </div>
          )}

          {/* Other partners in same category */}
          {filteredPartners.length > 1 && (
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              {filteredPartners.map((p, i) => (
                <div
                  key={i}
                  style={{
                    border: `1.5px solid ${p.name === activePartner.name ? '#222' : 'rgba(34,34,34,0.12)'}`,
                    borderRadius: 10,
                    padding: '10px 16px',
                    cursor: 'pointer',
                    background: '#fff',
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <img
                    src={p.logo}
                    alt={p.name}
                    style={{ maxWidth: 80, maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
