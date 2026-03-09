import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
} from 'react-simple-maps';
import { useState } from 'react';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const STUDENT_STATS = [
  { label: 'Dreamt in', number: 2023 },
  { label: 'Countries', number: 13 },
  { label: 'Cities', number: 128 },
];

const HIGHLIGHTED_COUNTRIES = [
  'India', 'Sri Lanka', 'Nepal', 'Bangladesh', 'Myanmar', 'Thailand',
  'Malaysia', 'Singapore', 'Indonesia', 'Vietnam',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman',
  'Kenya', 'South Africa', 'United Kingdom', 'United States of America',
];

const PRESENCE_MARKERS = [
  { name: 'Chennai', coordinates: [80.27, 13.08] as [number, number] },
  { name: 'Mumbai', coordinates: [72.87, 19.07] as [number, number] },
  { name: 'Delhi', coordinates: [77.21, 28.61] as [number, number] },
];

const LOCATIONS = [
  'India', 'United Kingdom', 'Malaysia', 'Indonesia',
  'United States of America', 'Sri Lanka', 'Dubai', 'South Africa',
];

function StudentStatCard({ stat, isVisible, index }: { stat: typeof STUDENT_STATS[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.number, 1800, isVisible);
  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        background: '#F5F5F0',
        borderRadius: 12,
        padding: '20px 24px',
        minHeight: 120,
        flex: '1 1 0',
        minWidth: 130,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        cursor: 'default',
        transitionDelay: `${200 + index * 100}ms`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      <span style={{
        fontSize: 10.5, fontWeight: 500, textTransform: 'uppercase',
        letterSpacing: '1.5px', color: '#888',
      }}>{stat.label}</span>
      <div style={{
        fontSize: 'clamp(48px, 5vw, 64px)', fontWeight: 700, color: '#1A1A1A',
        lineHeight: 1, fontFamily: "'Open Sauce One', sans-serif", letterSpacing: -2, marginTop: 8,
      }}>
        {count}
      </div>
    </div>
  );
}

function GlobeMap({ isVisible }: { isVisible: boolean }) {
  const [tooltip, setTooltip] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const globeScale = 300;
  const svgW = 700;
  const svgH = 700;
  const cx = svgW / 2;
  const cy = svgH / 2;

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        position: 'relative', transitionDelay: '500ms',
        maxWidth: 600, margin: '0 auto', marginTop: 40,
      }}
    >
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{ rotate: [-78, -20, 0], scale: globeScale }}
        width={svgW} height={svgH}
        style={{ width: '100%', height: 'auto' }}
      >
        <defs>
          <linearGradient id="globe-ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D8DCE3" />
            <stop offset="100%" stopColor="#C4C8D0" />
          </linearGradient>
          <radialGradient id="globe-vignette" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
          </radialGradient>
          <filter id="globe-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="rgba(0,0,0,0.15)" />
          </filter>
        </defs>
        <circle cx={cx} cy={cy} r={globeScale} fill="url(#globe-ocean)" filter="url(#globe-shadow)" />
        <Graticule stroke="#CCC" strokeWidth={0.3} strokeDasharray="2,3" />
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const isHighlighted = HIGHLIGHTED_COUNTRIES.includes(name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? '#FFBC3B' : '#E8E8E8'}
                  stroke="#FFF" strokeWidth={0.5}
                  style={{
                    default: { outline: 'none', transition: 'fill 0.2s ease' },
                    hover: { outline: 'none', fill: isHighlighted ? '#FFA800' : '#DFDFDF' },
                    pressed: { outline: 'none' },
                  }}
                  onMouseEnter={(e) => {
                    if (isHighlighted) {
                      setTooltip(name);
                      const rect = (e.target as SVGElement).closest('svg')?.getBoundingClientRect();
                      if (rect) setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top - 12 });
                    }
                  }}
                  onMouseLeave={() => setTooltip('')}
                />
              );
            })
          }
        </Geographies>
        <circle cx={cx} cy={cy} r={globeScale} fill="url(#globe-vignette)" pointerEvents="none" />
        {PRESENCE_MARKERS.map((marker) => (
          <Marker key={marker.name} coordinates={marker.coordinates}>
            <circle r={8} fill="#FFBC3B" opacity={0.3} className="pulse-marker" />
            <circle r={5} fill="#FFBC3B" stroke="#FFF" strokeWidth={1} />
          </Marker>
        ))}
      </ComposableMap>

      {tooltip && (
        <div style={{
          position: 'absolute', left: tooltipPos.x, top: tooltipPos.y,
          transform: 'translate(-50%, -100%)',
          background: '#222', color: '#fff', padding: '5px 12px',
          borderRadius: 6, fontSize: 12, fontWeight: 500,
          pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 10,
        }}>{tooltip}</div>
      )}
    </div>
  );
}

export default function TrustedAcrossBorders() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '60px 20px' : '100px 80px',
    }}>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.4); }
        }
        .pulse-marker { animation: pulse-dot 2s ease-in-out infinite; transform-origin: center; }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2
          className={`forge-fade-up${isVisible ? ' visible' : ''}`}
          style={{
            fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#1A1A1A',
            lineHeight: 1.1, marginBottom: 32, textAlign: 'left',
            fontFamily: "'Open Sauce One', sans-serif", letterSpacing: -1,
          }}
        >Our Students are Everywhere</h2>

        <div style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          {STUDENT_STATS.map((stat, i) => (
            <StudentStatCard key={i} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>

        {/* Hide globe on mobile */}
        {!isMobile && <GlobeMap isVisible={isVisible} />}

        {/* Global Community locations */}
        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            background: '#F5F5F0',
            borderRadius: 12,
            padding: isMobile ? '24px 20px' : 32,
            marginTop: 40,
            transitionDelay: '700ms',
          }}
        >
          <div style={{
            fontSize: 24, fontWeight: 700, color: '#1A1A1A', marginBottom: 20,
            fontFamily: "'Open Sauce One', sans-serif",
          }}>A Global Community</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '4px 0',
          }}>
            {LOCATIONS.map((loc) => (
              <span key={loc} style={{
                fontSize: isMobile ? 12 : 14,
                color: 'rgba(0,0,0,0.5)',
                fontFamily: "'Open Sauce One', sans-serif",
                lineHeight: 2,
              }}>● {loc}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
