import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const INDIA_LON = 78.9;
const INITIAL_Y_ROTATION = -((INDIA_LON - 90) * Math.PI) / 180;

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/textures/earth.jpg');

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.15, INITIAL_Y_ROTATION, 0]}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.1}
        roughness={0.85}
        color="#b8c4d0"
      />
    </mesh>
  );
}

const stats = [
  { label: 'FOUNDED IN', number: 2019, suffix: '', color: '#222222' },
  { label: 'DREAMERS', number: 600, suffix: '+', color: '#FFBC3B' },
  { label: 'EDITIONS', number: 25, suffix: '+', color: '#222222' },
  { label: 'CITIES EXPLORED', number: 10, suffix: '+', color: '#FFBC3B' },
];

const locations = [
  'India', 'Dubai', 'Bali', 'Thailand', 'Vietnam',
  'Sri Lanka', 'Nepal', 'Singapore', 'Indonesia', 'Malaysia',
  'Portugal', 'Spain',
];

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.number, 1800, isVisible);

  return (
    <div style={{
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: 16,
      padding: '24px 28px',
      minWidth: 160,
      flex: '1 1 0',
      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      border: '1px solid rgba(255,255,255,0.6)',
    }}>
      <div style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: '#222222',
        opacity: 0.5,
        marginBottom: 8,
        fontFamily: "'Open Sauce One', sans-serif",
      }}>
        {stat.label}
      </div>
      <div style={{
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 700,
        color: '#222222',
        lineHeight: 1,
        letterSpacing: -1,
        fontFamily: "'Open Sauce One', sans-serif",
      }}>
        {count}
        {stat.suffix && (
          <span style={{ color: stat.color }}>{stat.suffix}</span>
        )}
      </div>
    </div>
  );
}

export default function GlobalReach() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} style={{
      background: '#FCF7EF',
      padding: 'clamp(48px, 8vw, 100px) clamp(20px, 5vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Headline */}
        <h2
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            color: '#222222',
            marginBottom: 40,
            lineHeight: 1.1,
            fontFamily: "'Open Sauce One', sans-serif",
          }}
        >
          Trusted across borders
        </h2>

        {/* Stat Cards */}
        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            display: 'flex',
            gap: 16,
            marginBottom: 0,
            position: 'relative',
            zIndex: 2,
            flexWrap: 'wrap',
            transitionDelay: '200ms',
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {/* Globe Container */}
        <div style={{
          width: '100%',
          height: 'clamp(320px, 50vw, 560px)',
          marginTop: -40,
          position: 'relative',
          zIndex: 1,
        }}>
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 5.5], fov: 45 }}
              style={{ background: 'transparent' }}
              gl={{ alpha: true, antialias: true }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 3, 5]} intensity={0.8} />
              <directionalLight position={[-3, -2, -3]} intensity={0.3} />
              <Globe />
            </Canvas>
          </Suspense>
        </div>

        {/* Bottom: Locations */}
        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            marginTop: -20,
            position: 'relative',
            zIndex: 2,
            transitionDelay: '600ms',
          }}
        >
          <div style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 700,
            color: '#222222',
            marginBottom: 16,
            fontFamily: "'Open Sauce One', sans-serif",
          }}>
            We are worldwide
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 24px',
          }}>
            {locations.map((loc) => (
              <span key={loc} style={{
                fontSize: 14,
                color: '#222222',
                opacity: 0.5,
                fontFamily: "'Open Sauce One', sans-serif",
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
