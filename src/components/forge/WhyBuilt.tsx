import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ManifestoRow {
  text: string;
  image: string;
  imageAlt: string;
  rotation: number;
}

const rows: ManifestoRow[] = [
  {
    text: 'We were tired of watching creative people not create.',
    image: '/images/programs/filmmaking-5.jpg',
    imageAlt: 'Filmmakers collaborating on set',
    rotation: -2.5,
  },
  {
    text: 'There were hundreds of courses. There was knowledge all over the internet. But they went back to their lives, back to the routine, and nothing changed.',
    image: '/images/programs/creators-1.jpg',
    imageAlt: 'Creator working on content',
    rotation: 2.8,
  },
  {
    text: 'We knew the missing piece was not more learning. It was a place designed to create, with the right people around you, where not creating was simply not an option.',
    image: '/images/programs/writing-1.jpg',
    imageAlt: 'Writers gathered at retreat',
    rotation: -1.8,
  },
];

function useRowAnimation(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function ManifestoRow({ row, index, isMobile }: { row: ManifestoRow; index: number; isMobile: boolean }) {
  const { ref, visible } = useRowAnimation(0.2);
  const imageFirst = index % 2 === 0;

  const imageEl = (
    <div
      style={{
        width: isMobile ? 140 : 200,
        height: isMobile ? 105 : 150,
        flexShrink: 0,
        borderRadius: 6,
        overflow: 'hidden',
        transform: `rotate(${row.rotation}deg)`,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
      }}
    >
      <img
        src={row.image}
        alt={row.imageAlt}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );

  const textEl = (
    <p
      style={{
        fontSize: isMobile ? 'clamp(16px, 4.2vw, 20px)' : 'clamp(18px, 2vw, 22px)',
        lineHeight: 1.7,
        fontWeight: 400,
        color: 'rgba(255,255,255,0.75)',
        maxWidth: isMobile ? '100%' : 440,
        textAlign: isMobile ? 'center' : (imageFirst ? 'left' : 'right'),
        margin: 0,
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : 24}px)`,
        transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
      }}
    >
      {index === 0 && (
        <span style={{ fontWeight: 700, color: '#FFFFFF', fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : 'clamp(24px, 2.8vw, 32px)', display: 'block', marginBottom: 12, lineHeight: 1.2 }}>
          {row.text}
        </span>
      )}
      {index !== 0 && row.text}
    </p>
  );

  return (
    <div ref={ref}>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? 24 : 48,
          maxWidth: 800,
          margin: '0 auto',
          padding: isMobile ? '0 8px' : 0,
        }}
      >
        {isMobile ? (
          <>
            {imageEl}
            {textEl}
          </>
        ) : imageFirst ? (
          <>
            {imageEl}
            {textEl}
          </>
        ) : (
          <>
            {textEl}
            {imageEl}
          </>
        )}
      </div>
    </div>
  );
}

function AmberDivider({ isMobile }: { isMobile: boolean }) {
  if (isMobile) return null;
  return (
    <div
      style={{
        width: isMobile ? '60%' : '40%',
        maxWidth: 320,
        height: 1,
        margin: '0 auto',
        background: 'linear-gradient(90deg, transparent, rgba(255,188,59,0.3), transparent)',
      }}
    />
  );
}

export default function WhyBuilt() {
  const titleRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [closingVisible, setClosingVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observeEl = (el: HTMLElement | null, setter: (v: boolean) => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); obs.unobserve(el); } },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observeEl(titleRef.current, setTitleVisible);
    const c2 = observeEl(closingRef.current, setClosingVisible);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section
      style={{
        background: '#000000',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 60%, rgba(255,188,59,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: isMobile ? '64px 24px' : 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 200px)',
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? 48 : 64,
        }}
      >
        {/* Title */}
        <div
          ref={titleRef}
          style={{
            textAlign: 'center',
            opacity: titleVisible ? 1 : 0,
            transform: `translateY(${titleVisible ? 0 : 30}px)`,
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="forge-subheading forge-subheading--light">Why It Was Built</div>
        </div>

        {/* Manifesto rows */}
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 48 : 64 }}>
            <ManifestoRow row={row} index={i} isMobile={isMobile} />
            {i < rows.length - 1 && <AmberDivider isMobile={isMobile} />}
          </div>
        ))}

        {/* Closing statement */}
        <div
          ref={closingRef}
          style={{
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto',
            paddingTop: isMobile ? 16 : 32,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: isMobile ? 'clamp(22px, 6vw, 36px)' : 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              opacity: closingVisible ? 1 : 0,
              transform: `translateY(${closingVisible ? 0 : 30}px)`,
              transition: 'opacity 1s ease, transform 1s ease',
            }}
          >
            <div>The Forge was not created to dream.</div>
            <div style={{ marginTop: isMobile ? 8 : 12 }}>
              It was built to help you{' '}
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    inset: '-12px -20px',
                    background: closingVisible
                      ? 'radial-gradient(ellipse at 50% 50%, rgba(255,188,59,0.25) 0%, transparent 70%)'
                      : 'transparent',
                    borderRadius: '50%',
                    transition: 'background 1.2s ease 0.5s',
                    pointerEvents: 'none',
                    zIndex: -1,
                  }}
                />
                start
                <span
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: '#FFBC3B',
                    borderRadius: 2,
                    transform: `scaleX(${closingVisible ? 1 : 0})`,
                    transformOrigin: 'left',
                    transition: 'transform 0.8s ease 0.8s',
                  }}
                />
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
