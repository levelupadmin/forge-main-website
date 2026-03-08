import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';
import { Rocket, Eye, ClipboardList, ShieldCheck } from 'lucide-react';

const METRICS = [
  { label: 'FOUNDED IN', value: 2012, icon: Rocket, hasPlus: false },
  { label: 'NETWORK CLIENTS', value: 100, icon: Eye, hasPlus: true },
  { label: 'MARKETS SERVED', value: 10, icon: ClipboardList, hasPlus: true },
  { label: 'CERTIFICATION MARKS', value: 4, icon: ShieldCheck, hasPlus: true },
];

const HIGHLIGHTED_COUNTRIES = [
  { name: 'Germany', lat: 51.17, lng: 10.45 },
  { name: 'Poland', lat: 51.92, lng: 19.15 },
  { name: 'Austria', lat: 47.52, lng: 14.55 },
  { name: 'Croatia', lat: 45.10, lng: 15.20 },
  { name: 'Czech Republic', lat: 49.82, lng: 15.47 },
  { name: 'Estonia', lat: 58.60, lng: 25.01 },
  { name: 'Hungary', lat: 47.16, lng: 19.50 },
  { name: 'Italy', lat: 41.87, lng: 12.57 },
  { name: 'Latvia', lat: 56.88, lng: 24.60 },
  { name: 'Lithuania', lat: 55.17, lng: 23.88 },
  { name: 'Netherlands', lat: 52.13, lng: 5.29 },
  { name: 'Portugal', lat: 39.40, lng: -8.22 },
  { name: 'Slovakia', lat: 48.67, lng: 19.70 },
  { name: 'Slovenia', lat: 46.15, lng: 14.99 },
  { name: 'Spain', lat: 40.46, lng: -3.75 },
  { name: 'Ukraine', lat: 48.38, lng: 31.17 },
  { name: 'India', lat: 20.59, lng: 78.96 },
];

const PRESENCE_LOCATIONS = [
  { name: 'Germany', lat: 51.17, lng: 10.45 },
  { name: 'Poland', lat: 51.92, lng: 19.15 },
  { name: 'India', lat: 20.59, lng: 78.96 },
];

// Extra fill points for India
const INDIA_FILL = [
  { lat: 28.6, lng: 77.2 }, { lat: 19.1, lng: 72.9 }, { lat: 13.1, lng: 80.3 },
  { lat: 22.6, lng: 88.4 }, { lat: 12.97, lng: 77.6 }, { lat: 17.4, lng: 78.5 },
  { lat: 23.0, lng: 72.6 }, { lat: 26.9, lng: 75.8 }, { lat: 15.4, lng: 73.9 },
  { lat: 25.3, lng: 83.0 }, { lat: 11.0, lng: 76.9 }, { lat: 30.7, lng: 76.8 },
];

const COUNTRY_GRID = [
  ['Germany ○', 'Poland ○', 'Austria', 'Croatia'],
  ['Czech Republic', 'Estonia', 'Hungary', 'India ○'],
  ['Italy', 'Latvia', 'Lithuania', 'Netherlands'],
  ['Portugal', 'Slovakia', 'Slovenia', 'Spain', 'Ukraine'],
];

// --- 3D Globe helpers ---

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Center rotation: ~50° longitude to show Europe + India
const CENTER_LON = 50;
const INITIAL_Y_ROTATION = -((CENTER_LON - 90) * Math.PI) / 180;

function CountryMarkers({ radius }: { radius: number }) {
  const allPoints = useMemo(() => [...HIGHLIGHTED_COUNTRIES, ...INDIA_FILL], []);

  const markerGeometry = useMemo(() => {
    const positions: number[] = [];
    allPoints.forEach((point) => {
      const pos = latLngToVector3(point.lat, point.lng, radius + 0.02);
      positions.push(pos.x, pos.y, pos.z);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [allPoints, radius]);

  return (
    <points geometry={markerGeometry}>
      <pointsMaterial
        color="#DC2626"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
      />
    </points>
  );
}

function GlowRings({ radius }: { radius: number }) {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        const scale = 1 + Math.sin(clock.elapsedTime * 2 + i * 0.5) * 0.3;
        ring.scale.set(scale, scale, scale);
        ((ring as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity =
          0.4 - Math.sin(clock.elapsedTime * 2 + i * 0.5) * 0.2;
      });
    }
  });

  return (
    <group ref={ringsRef}>
      {PRESENCE_LOCATIONS.map((loc) => {
        const pos = latLngToVector3(loc.lat, loc.lng, radius + 0.03);
        return (
          <mesh key={loc.name} position={[pos.x, pos.y, pos.z]}>
            <ringGeometry args={[0.05, 0.08, 32]} />
            <meshBasicMaterial
              color="#DC2626"
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Globe3D() {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture('/textures/earth.jpg');
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const RADIUS = 4;

  return (
    <group ref={groupRef} rotation={[0.3, INITIAL_Y_ROTATION, 0]} position={[0, -1.5, 0]}>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.05}
          roughness={0.9}
          color="#c8c8c8"
          transparent
          opacity={0.35}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[RADIUS + 0.01, 48, 48]} />
        <meshBasicMaterial color="#999999" wireframe transparent opacity={0.04} />
      </mesh>
      <CountryMarkers radius={RADIUS} />
      <GlowRings radius={RADIUS} />
    </group>
  );
}

// --- UI Components ---

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
          fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
          letterSpacing: '1.5px', color: '#999',
        }}>
          {metric.label}
        </span>
        <Icon size={18} color="#999" strokeWidth={1.8} />
      </div>
      <div style={{
        fontSize: 'clamp(42px, 4vw, 60px)', fontWeight: 700, color: '#222',
        lineHeight: 1, fontFamily: "'Open Sauce One', sans-serif", letterSpacing: -2,
      }}>
        {count}
        {metric.hasPlus && (
          <span style={{ fontSize: '0.45em', verticalAlign: 'super', marginLeft: 2 }}>+</span>
        )}
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
        fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#222',
        marginBottom: 24, fontFamily: "'Open Sauce One', sans-serif",
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
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: isMobile ? 13 : 15, color: '#444',
            }}>
              {isPresence && (
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  border: '2px solid #888', display: 'inline-block', flexShrink: 0,
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
            fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, color: '#222',
            lineHeight: 1.1, marginBottom: isMobile ? 32 : 48, textAlign: 'left',
            fontFamily: "'Open Sauce One', sans-serif", letterSpacing: -1,
          }}
        >
          Trusted across borders
        </h2>

        {/* Metrics Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 16, marginBottom: isMobile ? 40 : 56,
        }}>
          {METRICS.map((m, i) => (
            <MetricCard key={i} metric={m} isVisible={isVisible} index={i} />
          ))}
        </div>

        {/* 3D Globe */}
        <div style={{
          marginBottom: isMobile ? 40 : 56,
          background: '#111',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
          height: isMobile ? 350 : 550,
        }}>
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 1.5, 6], fov: 42 }}
              style={{ background: 'transparent' }}
              gl={{ alpha: true, antialias: true }}
            >
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={0.6} />
              <directionalLight position={[-5, 3, -2]} intensity={0.3} />
              <Globe3D />
            </Canvas>
          </Suspense>

          {/* Legend */}
          <div style={{
            position: 'absolute',
            bottom: isMobile ? 12 : 24,
            right: isMobile ? 12 : 24,
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            {[
              { color: '#DC2626', label: 'Sales Regions' },
              { color: '#888', label: 'Company Presence' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%', background: item.color,
                }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Country Grid */}
        <CountryGrid isVisible={isVisible} isMobile={isMobile} />
      </div>
    </section>
  );
}
