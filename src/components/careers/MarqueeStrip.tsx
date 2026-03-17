import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const stats = [
  { number: '600+', label: 'Students through the Forge', highlight: false },
  { number: '25+', label: 'Editions across 10 cities', highlight: true },
  { number: '30', label: 'People on the team', highlight: false },
  { number: '10+', label: 'Cities traveled', highlight: true },
  { number: '2 yrs', label: 'Of building the Forge', highlight: false },
  { number: '3', label: 'Programs. Filmmaking. Writing. Creation.', highlight: false },
];

export default function MarqueeStrip() {
  const isMobile = useIsMobile();
  const [paused, setPaused] = useState(false);

  const renderStatItem = (stat: typeof stats[0], idx: number, prefix: string) => (
    <div
      key={`${prefix}-${idx}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '28px 48px',
        flexShrink: 0,
      }}
    >
      <span
        className={stat.highlight ? 'forge-gradient-text' : undefined}
        style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: 32,
          letterSpacing: -0.5,
          color: stat.highlight ? undefined : '#FFFFFF',
          whiteSpace: 'nowrap',
        }}
      >
        {stat.number}
      </span>
      <span style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 400,
        fontSize: 13,
        color: '#FFFFFF',
        lineHeight: 1.35,
        whiteSpace: 'nowrap',
      }}>
        {stat.label}
      </span>
      <div style={{
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: 'rgba(255,188,59,0.35)',
        flexShrink: 0,
      }} />
    </div>
  );

  return (
    <section style={{
      background: '#000000',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to right, #000000, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
        background: 'linear-gradient(to left, #000000, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          display: 'flex',
          animation: 'marqueeScroll 28s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {stats.map((s, i) => renderStatItem(s, i, 'a'))}
        {stats.map((s, i) => renderStatItem(s, i, 'b'))}
        {stats.map((s, i) => renderStatItem(s, i, 'c'))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
