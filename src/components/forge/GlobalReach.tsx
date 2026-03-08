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
        metalness={0.05}
        roughness={0.9}
        color="#c8ccd0"
      />
    </mesh>
  );
}

const stats = [
  { label: 'FOUNDED IN', number: 2019, suffix: '', suffixColor: '' },
  { label: 'DREAMERS', number: 600, suffix: '+', suffixColor: '#E53935' },
  { label: 'EDITIONS', number: 25, suffix: '+', suffixColor: '#E53935' },
  { label: 'CITIES EXPLORED', number: 10, suffix: '+', suffixColor: '#E53935' },
];

const locations = [
  'India', 'Dubai', 'Bali', 'Thailand',
  'Vietnam', 'Sri Lanka', 'Nepal', 'Singapore',
  'Indonesia', 'Malaysia', 'Portugal', 'Spain',
];

function StatCard({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const count = useCountUp(stat.number, 1800, isVisible);

  return (
    <div style={{
      background: 'rgba(245, 245, 245, 0.75)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderRadius: 8,
      padding: '16px 20px',
      flex: '1 1 0',
      minWidth: 140,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
      }}>
        <div style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.1em',
          color: '#666666',
          fontFamily: "'Open Sauce One', sans-serif",
          textTransform: 'uppercase',
        }}>
          {stat.label}
        </div>
      </div>
      <div style={{
        fontSize: 'clamp(32px, 4.5vw, 52px)',
        fontWeight: 700,
        color: '#1a1a1a',
        lineHeight: 1,
        letterSpacing: -1.5,
        fontFamily: "'Open Sauce One', sans-serif",
      }}>
        {count}
        {stat.suffix && (
          <span style={{
            color: stat.suffixColor,
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: 700,
            verticalAlign: 'super',
            marginLeft: 2,
          }}>
            {stat.suffix}
          </span>
        )}
      </div>
    </div>
  );
}

export default function GlobalReach() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section ref={ref} style={{
      background: '#e8e8e8',
      padding: 'clamp(48px, 6vw, 80px) clamp(20px, 5vw, 80px) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        {/* Headline */}
        <h2
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            fontSize: 'clamp(36px, 5.5vw, 64px)',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: 28,
            lineHeight: 1.05,
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
            gap: 12,
            position: 'relative',
            zIndex: 3,
            flexWrap: 'wrap',
            transitionDelay: '200ms',
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {/* Globe Container — overlaps behind cards and bottom panel */}
        <div style={{
          width: '100%',
          height: 'clamp(340px, 50vw, 580px)',
          marginTop: -20,
          position: 'relative',
          zIndex: 1,
        }}>
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 5.5], fov: 45 }}
              style={{ background: 'transparent' }}
              gl={{ alpha: true, antialias: true }}
            >
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 3, 5]} intensity={0.6} />
              <directionalLight position={[-3, -2, -3]} intensity={0.2} />
              <Globe />
            </Canvas>
          </Suspense>
        </div>

        {/* Bottom Panel: "We are worldwide" */}
        <div
          className={`forge-fade-up ${isVisible ? 'visible' : ''}`}
          style={{
            background: 'rgba(245, 245, 245, 0.8)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '12px 12px 0 0',
            padding: 'clamp(24px, 3vw, 40px) clamp(24px, 3vw, 40px)',
            marginTop: -60,
            position: 'relative',
            zIndex: 2,
            transitionDelay: '600ms',
          }}
        >
          <div style={{
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: 20,
            fontFamily: "'Open Sauce One', sans-serif",
          }}>
            We are worldwide
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px 0',
          }}>
            {locations.map((loc) => (
              <span key={loc} style={{
                fontSize: 14,
                color: '#1a1a1a',
                opacity: 0.55,
                fontFamily: "'Open Sauce One', sans-serif",
                lineHeight: 1.8,
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
