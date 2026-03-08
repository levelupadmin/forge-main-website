const galleryImages = [
  { src: '/images/gallery/gallery-1.png', alt: 'Behind the scenes 1' },
  { src: '/images/gallery/gallery-2.png', alt: 'Behind the scenes 2' },
  { src: '/images/gallery/gallery-3.png', alt: 'Behind the scenes 3' },
  { src: '/images/gallery/gallery-4.png', alt: 'Behind the scenes 4' },
  { src: '/images/gallery/gallery-5.png', alt: 'Behind the scenes 5' },
  { src: '/images/gallery/gallery-6.png', alt: 'Behind the scenes 6' },
  { src: '/images/gallery/gallery-7.png', alt: 'Behind the scenes 7' },
  { src: '/images/gallery/gallery-8.png', alt: 'Behind the scenes 8' },
  { src: '/images/gallery/gallery-9.png', alt: 'Behind the scenes 9' },
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
              height: i % 3 === 0 ? 300 : i % 3 === 1 ? 200 : 250,
            }}
          />
        ))}
      </div>
    </section>
  );
}
