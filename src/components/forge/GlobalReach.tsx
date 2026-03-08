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

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0006;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.3, INITIAL_Y_ROTATION, 0]} position={[0, -1.8, 0]}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.1}
        roughness={0.8}
        color="#d0d0d0"
      />
    </mesh>
  );
}

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

export default function GlobalReach() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} style={{
      background: '#dcdcdc',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 700,
    }}>
      {/* Globe canvas — fills entire section background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 1, 5], fov: 45 }}
            style={{ background: 'transparent' }}
            gl={{ alpha: true, antialias: true }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <directionalLight position={[-5, 3, -2]} intensity={0.4} />
            <directionalLight position={[0, -3, 5]} intensity={0.2} />
            <Globe />
          </Canvas>
        </Suspense>
      </div>

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

        {/* Spacer — push bottom panel down */}
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
