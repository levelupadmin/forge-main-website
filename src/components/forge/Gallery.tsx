/* REPLACE: All 9+ images below with real Forge behind-the-scenes photos — mix portrait, landscape, square */
const galleryImages = [
  { src: '/placeholder.svg', alt: 'Behind the scenes 1' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 2' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 3' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 4' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 5' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 6' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 7' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 8' },
  { src: '/placeholder.svg', alt: 'Behind the scenes 9' },
];

export default function Gallery() {
  return (
    <section style={{
      background: '#FCF7EF',
      padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ fontSize: 18, opacity: 0.5, marginBottom: 8 }}>Behind the scenes</div>
        <div style={{ fontWeight: 700, fontSize: 48 }}>at the Forge.</div>
      </div>

      <div className="forge-masonry" style={{ maxWidth: 1280, margin: '0 auto' }}>
        {galleryImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="forge-gallery-img"
            style={{
              width: '100%',
              borderRadius: 12,
              objectFit: 'cover',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              /* Vary heights for natural masonry rhythm */
              height: i % 3 === 0 ? 300 : i % 3 === 1 ? 200 : 250,
            }}
          />
        ))}
      </div>
    </section>
  );
}
