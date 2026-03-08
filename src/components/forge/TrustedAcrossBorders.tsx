import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';
import { Rocket, Eye, ClipboardList, ShieldCheck } from 'lucide-react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { useState } from 'react';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const METRICS = [
  { label: 'FOUNDED IN', value: 2012, icon: Rocket, hasPlus: false },
  { label: 'NETWORK CLIENTS', value: 100, icon: Eye, hasPlus: true },
  { label: 'MARKETS SERVED', value: 10, icon: ClipboardList, hasPlus: true },
  { label: 'CERTIFICATION MARKS', value: 4, icon: ShieldCheck, hasPlus: true },
];

const HIGHLIGHTED_COUNTRIES = [
  'Germany', 'Poland', 'Austria', 'Croatia', 'Czech Republic', 'Czechia',
  'Estonia', 'Hungary', 'Italy', 'Latvia', 'Lithuania', 'Netherlands',
  'Portugal', 'Slovakia', 'Slovenia', 'Spain', 'Ukraine', 'India',
];

const PRESENCE_MARKERS = [
  { name: 'Germany', coordinates: [10.4515, 51.1657] as [number, number] },
  { name: 'Poland', coordinates: [19.1451, 51.9194] as [number, number] },
  { name: 'India', coordinates: [78.9629, 20.5937] as [number, number] },
];

const COUNTRY_GRID = [
  ['Germany ○', 'Poland ○', 'Austria', 'Croatia'],
  ['Czech Republic', 'Estonia', 'Hungary', 'Italy'],
  ['Latvia', 'Lithuania', 'Netherlands', 'Portugal'],
  ['Slovakia', 'Slovenia', 'Spain', 'India ○'],
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
        background: '#F0F0F0',
        borderRadius: 12,
        padding: 24,
        position: 'relative',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        cursor: 'default',
        transitionDelay: `${200 + index * 100}ms`,
        flex: '1 1 0',
        minWidth: 0,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <span style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          color: '#999',
        }}>
          {metric.label}
        </span>
        <Icon size={18} color="#999" strokeWidth={1.8} />
      </div>
      <div style={{
        fontSize: 'clamp(42px, 4vw, 60px)',
        fontWeight: 700,
        color: '#222',
        lineHeight: 1,
        fontFamily: "'Open Sauce One', sans-serif",
        letterSpacing: -2,
      }}>
        {count}
        {metric.hasPlus && (
          <span style={{ fontSize: '0.45em', verticalAlign: 'super', marginLeft: 2 }}>+</span>
        )}
      </div>
    </div>
  );
}

function GlobeMap({ isVisible }: { isVisible: boolean }) {
  const [tooltip, setTooltip] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        position: 'relative',
        transitionDelay: '500ms',
        maxWidth: 1000,
        margin: '0 auto',
        overflow: 'hidden',
        borderRadius: 16,
        background: 'linear-gradient(180deg, #E8ECF0 0%, #D5DBE1 100%)',
      }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [40, 45],
          scale: isMobile ? 280 : 450,
        }}
        width={900}
        height={isMobile ? 400 : 500}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const isHighlighted = HIGHLIGHTED_COUNTRIES.includes(name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? '#DC2626' : '#C8CDD3'}
                  stroke="#B0B8C1"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: 'none' },
                    hover: {
                      outline: 'none',
                      fill: isHighlighted ? '#B91C1C' : '#B8BFC7',
                    },
                    pressed: { outline: 'none' },
                  }}
                  onMouseEnter={(e) => {
                    if (isHighlighted) {
                      setTooltip(name);
                      const rect = (e.target as SVGElement).closest('svg')?.getBoundingClientRect();
                      if (rect) {
                        setTooltipPos({
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top - 10,
                        });
                      }
                    }
                  }}
                  onMouseLeave={() => setTooltip('')}
                />
              );
            })
          }
        </Geographies>
        {PRESENCE_MARKERS.map((marker) => (
          <Marker key={marker.name} coordinates={marker.coordinates}>
            <circle r={7} fill="#fff" opacity={0.6} />
            <circle r={5} fill="#fff" stroke="#999" strokeWidth={1.5} />
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div style={{
          position: 'absolute',
          left: tooltipPos.x,
          top: tooltipPos.y,
          transform: 'translate(-50%, -100%)',
          background: '#222',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: 6,
          fontSize: 13,
          fontWeight: 500,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          zIndex: 10,
        }}>
          {tooltip}
        </div>
      )}

      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: isMobile ? 8 : 16,
        right: isMobile ? 8 : 16,
        display: 'flex',
        gap: 16,
      }}>
        {[
          { color: '#DC2626', label: 'Sales Regions' },
          { color: '#999', label: 'Company Presence' },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: item.color,
            }} />
            <span style={{ fontSize: 10, color: '#666', fontWeight: 500 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CountryGrid({ isVisible, isMobile }: { isVisible: boolean; isMobile: boolean }) {
  const allCountries = COUNTRY_GRID.flat();

  return (
    <div
      className={`forge-fade-up${isVisible ? ' visible' : ''}`}
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: isMobile ? '24px 20px' : '36px 40px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        transitionDelay: '700ms',
      }}
    >
      <h3 style={{
        fontSize: 'clamp(22px, 3vw, 28px)',
        fontWeight: 700,
        color: '#222',
        marginBottom: 24,
        fontFamily: "'Open Sauce One', sans-serif",
      }}>
        We are worldwide
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
        gap: isMobile ? '10px 16px' : '10px 24px',
      }}>
        {allCountries.map((country) => {
          const isPresence = country.includes('○');
          const displayName = country.replace(' ○', '');
          return (
            <div key={country} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: isMobile ? 13 : 15,
              color: '#444',
            }}>
              {isPresence && (
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  border: '2px solid #888',
                  display: 'inline-block',
                  flexShrink: 0,
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

export default function TrustedAcrossBorders() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{
      backgroundColor: '#FFFFFF',
      padding: isMobile ? '60px 20px' : '100px 80px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Heading */}
        <h2
          className={`forge-fade-up${isVisible ? ' visible' : ''}`}
          style={{
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: 700,
            color: '#222',
            lineHeight: 1.1,
            marginBottom: isMobile ? 32 : 48,
            textAlign: 'left',
            fontFamily: "'Open Sauce One', sans-serif",
            letterSpacing: -1,
          }}
        >
          Trusted across borders
        </h2>

        {/* Metrics Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 16,
          marginBottom: isMobile ? 40 : 56,
        }}>
          {METRICS.map((m, i) => (
            <MetricCard key={i} metric={m} isVisible={isVisible} index={i} />
          ))}
        </div>

        {/* Globe Map */}
        <div style={{ marginBottom: isMobile ? 40 : 56 }}>
          <GlobeMap isVisible={isVisible} />
        </div>

        {/* Country Grid */}
        <CountryGrid isVisible={isVisible} isMobile={isMobile} />
      </div>
    </section>
  );
}
