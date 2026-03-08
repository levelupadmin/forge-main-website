import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';
import { useIsMobile } from '@/hooks/use-mobile';

const INDIA_LON = 78.9;
const INITIAL_Y_ROTATION = -((INDIA_LON - 90) * Math.PI) / 180;

const studentCountries = [
  { name: 'India', lat: 20.5, lng: 78.9 },
  { name: 'United Kingdom', lat: 51.5, lng: -0.1 },
  { name: 'Malaysia', lat: 4.2, lng: 101.9 },
  { name: 'Indonesia', lat: -0.8, lng: 113.9 },
  { name: 'United States', lat: 37.1, lng: -95.7 },
  { name: 'Sri Lanka', lat: 7.9, lng: 80.8 },
  { name: 'Dubai', lat: 25.2, lng: 55.3 },
  { name: 'South Africa', lat: -30.6, lng: 22.9 },
];

const indiaFillPoints = [
  { lat: 28.6, lng: 77.2 }, { lat: 19.1, lng: 72.9 }, { lat: 13.1, lng: 80.3 },
  { lat: 22.6, lng: 88.4 }, { lat: 12.97, lng: 77.6 }, { lat: 17.4, lng: 78.5 },
  { lat: 23.0, lng: 72.6 }, { lat: 26.9, lng: 75.8 }, { lat: 15.4, lng: 73.9 },
  { lat: 25.3, lng: 83.0 }, { lat: 11.0, lng: 76.9 }, { lat: 30.7, lng: 76.8 },
  { lat: 21.2, lng: 81.1 }, { lat: 23.3, lng: 85.3 }, { lat: 26.5, lng: 80.3 },
  { lat: 9.9, lng: 76.3 }, { lat: 22.3, lng: 73.2 }, { lat: 18.5, lng: 73.9 },
  { lat: 24.6, lng: 73.7 }, { lat: 32.7, lng: 74.9 },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function CountryMarkers({ radius }: { radius: number }) {
  const allPoints = useMemo(() => [...studentCountries, ...indiaFillPoints], []);
  const markerGeometry = useMemo(() => {
    const positions: number[] = [];
    const sizes: number[] = [];
    allPoints.forEach((point, i) => {
      const pos = latLngToVector3(point.lat, point.lng, radius + 0.02);
      positions.push(pos.x, pos.y, pos.z);
      sizes.push(i < studentCountries.length ? 8 : 4);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    return geometry;
  }, [allPoints, radius]);

  return (
    <points geometry={markerGeometry}>
      <pointsMaterial color="#FFBC3B" size={0.08} sizeAttenuation transparent opacity={0.95} depthWrite={false} />
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
      {studentCountries.slice(0, 6).map((country) => {
        const pos = latLngToVector3(country.lat, country.lng, radius + 0.03);
        return (
          <mesh key={country.name} position={[pos.x, pos.y, pos.z]}>
            <ringGeometry args={[0.05, 0.08, 32]} />
            <meshBasicMaterial color="#FFBC3B" transparent opacity={0.4} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
        );
      })}
    </group>
  );
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture('/textures/earth.jpg');
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.001;
  });

  const RADIUS = 4;
  return (
    <group ref={groupRef} rotation={[0.3, INITIAL_Y_ROTATION, 0]} position={[0, -1.5, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial map={texture} metalness={0.05} roughness={0.9} color="#c8c8c8" transparent opacity={0.35} />
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

const stats = [
  { label: 'Dreamt in', number: 2023, suffix: '', suffixColor: '' },
  { label: 'Countries', number: 13, suffix: '', suffixColor: '#D32F2F' },
  { label: 'Cities', number: 128, suffix: '', suffixColor: '#D32F2F' },
];

const locations = [
  'India', 'United Kingdom', 'Malaysia', 'Indonesia',
  'United States of America', 'Sri Lanka', 'Dubai', 'South Africa',
];

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.number, 1800, isVisible);
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.06)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      borderRadius: 6,
      padding: '14px 18px',
      flex: '1 1 0',
      minWidth: 130,
    }}>
      <div style={{
        fontSize: 9, fontWeight: 600, letterSpacing: '0.12em',
        color: 'rgba(255,255,255,0.5)', fontFamily: "'Open Sauce One', sans-serif",
        textTransform: 'uppercase', marginBottom: 6,
      }}>{stat.label}</div>
      <div style={{
        fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#FFFFFF',
        lineHeight: 1, letterSpacing: -2, fontFamily: "'Open Sauce One', sans-serif",
      }}>
        {count}
        {stat.suffix && (
          <span style={{
            color: stat.suffixColor, fontSize: 'clamp(20px, 3vw, 32px)',
            fontWeight: 700, verticalAlign: 'super', marginLeft: 1,
          }}>{stat.suffix}</span>
        )}
      </div>
    </div>
  );
}

export default function GlobalReach() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useIsMobile();

  return (
    <section ref={ref} style={{
      background: '#000000',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? 'auto' : 700,
    }}>
      {/* 3D Globe background — hidden on mobile */}
      {!isMobile && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 1.5, 6], fov: 42 }}
              style={{ background: 'transparent' }}
              gl={{ alpha: true, antialias: true }}
            >
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={0.6} />
              <directionalLight position={[-5, 3, -2]} intensity={0.3} />
              <Globe />
            </Canvas>
          </Suspense>
        </div>
      )}

      {/* Content overlay */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1280,
        margin: '0 auto',
        padding: isMobile
          ? '48px 20px 40px'
          : 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: isMobile ? 'auto' : 700,
      }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 20 : 32 }}>
          <div className={`forge-fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: 8 }}>
            <span style={{
              fontSize: isMobile ? 13 : 15, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: 3, color: '#DD6F15',
            }}>Global Reach</span>
          </div>
          <h2
            className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
            style={{
              fontSize: isMobile ? 'clamp(28px, 7vw, 40px)' : 'clamp(40px, 6vw, 64px)',
              fontWeight: 700, color: '#FFFFFF', marginBottom: 12,
              lineHeight: 1.05, letterSpacing: -1, fontFamily: "'Open Sauce One', sans-serif",
            }}
          >Our Students are Everywhere</h2>
          <p className={`forge-fade-up ${isVisible ? 'visible' : ''}`} style={{
            fontSize: isMobile ? 14 : 17, opacity: 0.55,
            maxWidth: 520, margin: '0 auto', lineHeight: 1.6,
          }}>
            From India to across the globe, the Forge community spans 13 countries and 128 cities.
          </p>
        </div>

        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', transitionDelay: '200ms' }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {!isMobile && <div style={{ flex: 1, minHeight: 200 }} />}
        {isMobile && <div style={{ height: 24 }} />}

        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: 10,
            padding: isMobile ? '16px' : 'clamp(20px, 3vw, 36px)',
            transitionDelay: '500ms',
          }}
        >
          <div style={{
            fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 700, color: '#FFFFFF', marginBottom: 12,
            fontFamily: "'Open Sauce One', sans-serif",
          }}>A Global Community</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '4px 0',
          }}>
            {locations.map((loc) => (
              <span key={loc} style={{
                fontSize: isMobile ? 12 : 14,
                color: 'rgba(255,255,255,0.5)',
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
