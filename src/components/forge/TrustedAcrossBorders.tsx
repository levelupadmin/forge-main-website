import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';
import { Rocket, Eye, ClipboardList, ShieldCheck } from 'lucide-react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
} from 'react-simple-maps';
import { useState } from 'react';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const METRICS = [
  { label: 'FOUNDED IN', value: 2012, startFrom: 2000, icon: Rocket, hasPlus: false },
  { label: 'NETWORK CLIENTS', value: 100, startFrom: 0, icon: Eye, hasPlus: true },
  { label: 'MARKETS SERVED', value: 10, startFrom: 0, icon: ClipboardList, hasPlus: true },
  { label: 'CERTIFICATION MARKS', value: 4, startFrom: 0, icon: ShieldCheck, hasPlus: true },
];

const HIGHLIGHTED_COUNTRIES = [
  'India', 'Sri Lanka', 'Nepal', 'Bangladesh', 'Myanmar', 'Thailand',
  'Malaysia', 'Singapore', 'Indonesia', 'Vietnam',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman',
  'Kenya', 'South Africa',
];

const PRESENCE_MARKERS = [
  { name: 'Chennai', coordinates: [80.27, 13.08] as [number, number] },
  { name: 'Mumbai', coordinates: [72.87, 19.07] as [number, number] },
  { name: 'Delhi', coordinates: [77.21, 28.61] as [number, number] },
];

const COUNTRY_GRID = [
  ['India ○', 'Sri Lanka', 'Nepal', 'Bangladesh'],
  ['Myanmar', 'Thailand', 'Malaysia', 'Singapore'],
  ['Indonesia', 'Vietnam', 'UAE', 'Saudi Arabia'],
  ['Qatar', 'Oman', 'Kenya ○', 'South Africa ○'],
];

function MetricCard({ metric, isVisible, index }: {
  metric: typeof METRICS[0];
  isVisible: boolean;
  index: number;
}) {
  const count = useCountUp(metric.value, 1800, isVisible);
  const Icon = metric.icon;

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        background: '#F5F5F0',
        borderRadius: 12,
        padding: '20px 24px',
        minHeight: 120,
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontSize: 10.5, fontWeight: 500, textTransform: 'uppercase',
          letterSpacing: '1.5px', color: '#888',
        }}>{metric.label}</span>
        <Icon size={17} color="#AAA" strokeWidth={1.6} />
      </div>
      <div style={{
        fontSize: 'clamp(48px, 5vw, 64px)', fontWeight: 700, color: '#1A1A1A',
        lineHeight: 1, fontFamily: "'Open Sauce One', sans-serif", letterSpacing: -2, marginTop: 8,
      }}>
        {count}
        {metric.hasPlus && <sup style={{ fontSize: '0.4em', fontWeight: 600, marginLeft: 1 }}>+</sup>}
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
                  fill={isHighlighted ? '#DC2626' : '#E8E8E8'}
                  stroke="#FFF" strokeWidth={0.5}
                  style={{
                    default: { outline: 'none', transition: 'fill 0.2s ease' },
                    hover: { outline: 'none', fill: isHighlighted ? '#EF4444' : '#DFDFDF' },
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
            <circle r={8} fill="white" opacity={0.3} className="pulse-marker" />
            <circle r={5} fill="#FFF" stroke="#999" strokeWidth={1} />
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

function CountryGrid({ isVisible, isMobile }: { isVisible: boolean; isMobile: boolean }) {
  const allCountries = COUNTRY_GRID.flat();
  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        background: '#FFF', border: '1px solid #E5E5E5', borderRadius: 12,
        padding: isMobile ? '24px 20px' : 32,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)', transitionDelay: '700ms', marginTop: 40,
      }}
    >
      <h3 style={{
        fontSize: 24, fontWeight: 700, color: '#1A1A1A', marginBottom: 20,
        fontFamily: "'Open Sauce One', sans-serif",
      }}>We are worldwide</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: '0 24px',
      }}>
        {allCountries.map((country) => {
          const isPresence = country.includes('○');
          const displayName = country.replace(' ○', '');
          return (
            <div key={country} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 14, color: '#444', lineHeight: 2,
            }}>
              {isPresence && (
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  border: '1.5px solid #999', display: 'inline-block', flexShrink: 0,
                }} />
              )}
              {displayName}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StudentStatCard({ stat, isVisible }: { stat: { label: string; number: number }; isVisible: boolean }) {
  const count = useCountUp(stat.number, 1800, isVisible);
  return (
    <div style={{
      background: '#F5F5F0',
      borderRadius: 6,
      padding: '14px 18px',
      flex: '1 1 0',
      minWidth: 130,
    }}>
      <div style={{
        fontSize: 9, fontWeight: 600, letterSpacing: '0.12em',
        color: 'rgba(0,0,0,0.5)', fontFamily: "'Open Sauce One', sans-serif",
        textTransform: 'uppercase', marginBottom: 6,
      }}>{stat.label}</div>
      <div style={{
        fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#1A1A1A',
        lineHeight: 1, letterSpacing: -2, fontFamily: "'Open Sauce One', sans-serif",
      }}>
        {count}
      </div>
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
        >Trusted across borders</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {METRICS.map((m, i) => (
            <MetricCard key={i} metric={m} isVisible={isVisible} index={i} />
          ))}
        </div>

        {/* Hide globe on mobile */}
        {!isMobile && <GlobeMap isVisible={isVisible} />}

        <CountryGrid isVisible={isVisible} isMobile={isMobile} />

        {/* Our Students Are Everywhere - merged from GlobalReach */}
        <div style={{ marginTop: isMobile ? 48 : 80 }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 24 : 32 }}>
            <div className={`forge-fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: 8, transitionDelay: '800ms' }}>
              <span style={{
                fontSize: isMobile ? 13 : 15, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: 3, color: '#DD6F15',
              }}>Global Reach</span>
            </div>
            <h2
              className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
              style={{
                fontSize: isMobile ? 'clamp(28px, 7vw, 40px)' : 'clamp(40px, 6vw, 64px)',
                fontWeight: 700, color: '#1A1A1A', marginBottom: 12,
                lineHeight: 1.05, letterSpacing: -1, fontFamily: "'Open Sauce One', sans-serif",
                transitionDelay: '900ms',
              }}
            >Our Students are Everywhere</h2>
            <p className={`forge-fade-up ${isVisible ? 'visible' : ''}`} style={{
              fontSize: isMobile ? 14 : 17, opacity: 0.55,
              maxWidth: 520, margin: '0 auto', lineHeight: 1.6,
              transitionDelay: '1000ms',
            }}>
              From India to across the globe, the Forge community spans 13 countries and 128 cities.
            </p>
          </div>

          <div
            className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
            style={{
              display: 'flex', gap: 10, flexWrap: 'wrap', transitionDelay: '1100ms',
              marginBottom: isMobile ? 24 : 32,
            }}
          >
            {[
              { label: 'Dreamt in', number: 2023 },
              { label: 'Countries', number: 13 },
              { label: 'Cities', number: 128 },
            ].map((stat, i) => (
              <StudentStatCard key={i} stat={stat} isVisible={isVisible} />
            ))}
          </div>

          <div
            className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
            style={{
              background: '#F5F5F0',
              borderRadius: 10,
              padding: isMobile ? '16px' : 'clamp(20px, 3vw, 36px)',
              transitionDelay: '1200ms',
            }}
          >
            <div style={{
              fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 700, color: '#1A1A1A', marginBottom: 12,
              fontFamily: "'Open Sauce One', sans-serif",
            }}>A Global Community</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: '4px 0',
            }}>
              {['India', 'United Kingdom', 'Malaysia', 'Indonesia', 'United States of America', 'Sri Lanka', 'Dubai', 'South Africa'].map((loc) => (
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
      </div>
    </section>
  );
}
