import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { label: 'FOUNDED IN', number: 2019, suffix: '', suffixColor: '' },
  { label: 'DREAMERS', number: 600, suffix: '+', suffixColor: '#D32F2F' },
  { label: 'EDITIONS', number: 25, suffix: '+', suffixColor: '#D32F2F' },
  { label: 'CITIES EXPLORED', number: 10, suffix: '+', suffixColor: '#D32F2F' },
];

const locations = [
  'India', 'Dubai', 'Bali', 'Thailand',
  'Vietnam', 'Sri Lanka', 'Nepal', 'Singapore',
  'Indonesia', 'Malaysia', 'Portugal', 'Spain',
];

// Student origin markers: [x%, y%] on the world map
const markers = [
  { name: 'Mumbai', x: 57.5, y: 42 },
  { name: 'Delhi', x: 58, y: 34 },
  { name: 'Bangalore', x: 57.8, y: 48 },
  { name: 'Chennai', x: 59, y: 47 },
  { name: 'Kolkata', x: 61, y: 38 },
  { name: 'Hyderabad', x: 58.5, y: 44 },
  { name: 'Dubai', x: 51, y: 38 },
  { name: 'Bali', x: 72, y: 56 },
  { name: 'Thailand', x: 66, y: 42 },
  { name: 'Vietnam', x: 68, y: 42 },
  { name: 'Sri Lanka', x: 59, y: 51 },
  { name: 'Nepal', x: 60, y: 34 },
  { name: 'Singapore', x: 68, y: 52 },
  { name: 'Portugal', x: 37.5, y: 30 },
  { name: 'Spain', x: 39, y: 29 },
  { name: 'Pune', x: 56.5, y: 44 },
  { name: 'Ahmedabad', x: 55.5, y: 38 },
  { name: 'Goa', x: 56, y: 46.5 },
];

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.number, 1800, isVisible);

  return (
    <div style={{
      background: 'rgba(240, 240, 240, 0.7)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      borderRadius: 6,
      padding: '14px 18px',
      flex: '1 1 0',
      minWidth: 130,
    }}>
      <div style={{
        fontSize: 9,
        fontWeight: 600,
        letterSpacing: '0.12em',
        color: '#888888',
        fontFamily: "'Open Sauce One', sans-serif",
        textTransform: 'uppercase',
        marginBottom: 6,
      }}>
        {stat.label}
      </div>
      <div style={{
        fontSize: 'clamp(36px, 5vw, 56px)',
        fontWeight: 700,
        color: '#1a1a1a',
        lineHeight: 1,
        letterSpacing: -2,
        fontFamily: "'Open Sauce One', sans-serif",
      }}>
        {count}
        {stat.suffix && (
          <span style={{
            color: stat.suffixColor,
            fontSize: 'clamp(20px, 3vw, 32px)',
            fontWeight: 700,
            verticalAlign: 'super',
            marginLeft: 1,
          }}>
            {stat.suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function WorldMap() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', opacity: 0.12 }}
      >
        {/* Simplified world map paths */}
        {/* North America */}
        <path d="M120,120 L180,80 L240,90 L280,100 L300,130 L310,170 L290,200 L260,220 L240,260 L220,280 L200,290 L180,270 L160,240 L140,200 L120,180 Z" fill="#1a1a1a" />
        <path d="M240,260 L260,250 L300,260 L320,280 L310,310 L280,320 L260,300 Z" fill="#1a1a1a" />
        {/* South America */}
        <path d="M260,320 L290,310 L310,330 L320,370 L310,420 L300,460 L280,490 L260,500 L250,480 L240,440 L235,400 L240,360 L250,340 Z" fill="#1a1a1a" />
        {/* Europe */}
        <path d="M420,80 L460,70 L500,80 L520,100 L530,130 L510,150 L490,160 L460,150 L440,140 L430,120 L420,100 Z" fill="#1a1a1a" />
        <path d="M440,140 L460,150 L470,170 L460,190 L440,180 L430,160 Z" fill="#1a1a1a" />
        {/* Africa */}
        <path d="M440,200 L480,190 L520,200 L540,230 L550,280 L540,340 L520,380 L500,400 L480,390 L460,360 L450,320 L440,280 L435,240 Z" fill="#1a1a1a" />
        {/* Asia */}
        <path d="M530,70 L600,60 L680,70 L740,90 L780,120 L790,160 L780,200 L760,220 L730,240 L700,250 L670,240 L640,220 L620,200 L600,180 L570,160 L550,140 L540,110 Z" fill="#1a1a1a" />
        {/* India */}
        <path d="M620,200 L650,190 L680,200 L700,230 L710,270 L700,310 L680,330 L660,320 L640,290 L630,260 L620,230 Z" fill="#1a1a1a" />
        {/* Southeast Asia */}
        <path d="M730,240 L760,230 L790,250 L810,280 L800,310 L780,320 L760,300 L740,280 Z" fill="#1a1a1a" />
        {/* Australia */}
        <path d="M800,380 L860,370 L920,380 L940,410 L930,450 L900,470 L860,460 L830,440 L810,420 L800,400 Z" fill="#1a1a1a" />
        {/* Japan/East Asia */}
        <path d="M820,140 L840,130 L850,150 L845,170 L830,180 L820,165 Z" fill="#1a1a1a" />
        {/* Indonesia */}
        <path d="M760,320 L790,315 L830,320 L860,330 L870,345 L850,350 L810,345 L775,340 L760,335 Z" fill="#1a1a1a" />
        {/* UK/Ireland */}
        <path d="M415,95 L425,90 L430,100 L425,110 L418,108 Z" fill="#1a1a1a" />
        {/* Greenland */}
        <path d="M280,40 L330,30 L360,40 L370,60 L350,75 L320,80 L290,70 Z" fill="#1a1a1a" />
      </svg>

      {/* Markers */}
      {markers.map((marker, i) => (
        <div
          key={marker.name}
          style={{
            position: 'absolute',
            left: `${marker.x}%`,
            top: `${marker.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Pulse ring */}
          <div style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '1.5px solid rgba(211, 47, 47, 0.3)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `forge-glow-pulse 3s ease-in-out ${i * 0.2}s infinite`,
          }} />
          {/* Dot */}
          <div style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#D32F2F',
            boxShadow: '0 0 8px rgba(211, 47, 47, 0.5)',
          }} />
        </div>
      ))}
    </div>
  );
}

export default function GlobalReach() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} style={{
      background: '#dcdcdc',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 700,
    }}>
      {/* World map background */}
      <WorldMap />

      {/* Content overlay */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(40px, 5vw, 72px) clamp(24px, 5vw, 80px)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 700,
      }}>
        {/* Top: Headline */}
        <h2
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: 24,
            lineHeight: 1.0,
            fontFamily: "'Open Sauce One', sans-serif",
          }}
        >
          Trusted<br />across borders
        </h2>

        {/* Stat Cards Row */}
        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            transitionDelay: '200ms',
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, minHeight: 200 }} />

        {/* Bottom Panel */}
        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            background: 'rgba(240, 240, 240, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: 10,
            padding: 'clamp(20px, 3vw, 36px)',
            transitionDelay: '500ms',
          }}
        >
          <div style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: 16,
            fontFamily: "'Open Sauce One', sans-serif",
          }}>
            We are worldwide
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '4px 0',
          }}>
            {locations.map((loc) => (
              <span key={loc} style={{
                fontSize: 14,
                color: '#1a1a1a',
                opacity: 0.5,
                fontFamily: "'Open Sauce One', sans-serif",
                lineHeight: 2,
              }}>
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
