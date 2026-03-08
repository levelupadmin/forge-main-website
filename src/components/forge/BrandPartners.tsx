import { useState } from 'react';
import { partners, partnerCategories } from '@/data/partners';

export default function BrandPartners() {
  const [activeCategory, setActiveCategory] = useState<string>(partnerCategories[0]);
  const activePartner = partners.find(p => p.category === activeCategory) || partners[0];

  return (
    <section style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 12, color: '#222' }}>Backed by</div>
        <div style={{ fontWeight: 800, fontSize: 'clamp(48px, 7vw, 72px)', letterSpacing: -2, color: '#1a1a1a', lineHeight: 1 }}>the best.</div>
      </div>

      {/* Main layout */}
      <div style={{
        display: 'flex',
        gap: 40,
        maxWidth: 1100,
        margin: '0 auto',
        alignItems: 'flex-start',
      }}>
        {/* Left — Category bento tabs */}
        <div style={{
          flex: '0 0 180px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          {partnerCategories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: isActive ? '#1a1a1a' : '#fff',
                  color: isActive ? '#fff' : '#1a1a1a',
                  border: '1.5px solid rgba(34,34,34,0.12)',
                  borderRadius: 14,
                  padding: '18px 22px',
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right area — Image + Details side by side */}
        <div style={{
          flex: 1,
          display: 'flex',
          gap: 36,
          alignItems: 'flex-start',
        }}>
          {/* Image */}
          <div style={{
            flex: '0 0 320px',
          }}>
            <div style={{
              borderRadius: 16,
              overflow: 'hidden',
              aspectRatio: '4 / 5',
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

          {/* Description + Logo + Discount */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 24,
            paddingTop: 40,
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
          </div>
        </div>
      </div>
    </section>
  );
}
