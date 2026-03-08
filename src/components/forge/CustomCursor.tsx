import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isHovering = false;
    let magnetTarget: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const interactiveSelector = 'a, button, .forge-cta-light, .forge-cta-dark, .forge-nav-link, .forge-card, [role="button"]';

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(interactiveSelector);
      if (target) {
        isHovering = true;
        // Check if it's a CTA button for magnetic effect
        if (target.classList.contains('forge-cta-light') || target.classList.contains('forge-cta-dark') || target.tagName === 'BUTTON') {
          magnetTarget = target as HTMLElement;
        }
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(interactiveSelector);
      if (target) {
        isHovering = false;
        magnetTarget = null;
      }
    };

    const animate = () => {
      let targetX = mouseX;
      let targetY = mouseY;

      // Magnetic effect: pull cursor toward button center
      if (magnetTarget) {
        const rect = magnetTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = mouseX - centerX;
        const distY = mouseY - centerY;
        const maxDist = Math.max(rect.width, rect.height);
        const dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < maxDist) {
          const pull = 0.3;
          targetX = mouseX - distX * pull;
          targetY = mouseY - distY * pull;
          // Move button slightly toward cursor
          const btnPull = 0.08;
          magnetTarget.style.transform = `translate(${distX * btnPull}px, ${distY * btnPull}px)`;
        }
      }

      // Smooth follow for ring
      ringX += (targetX - ringX) * 0.15;
      ringY += (targetY - ringY) * 0.15;

      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      if (isHovering) {
        dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        ring.style.width = '48px';
        ring.style.height = '48px';
        ring.style.borderColor = 'var(--forge-yellow)';
        ring.style.opacity = '1';
      } else {
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(34,34,34,0.4)';
        ring.style.opacity = '0.6';
      }

      requestAnimationFrame(animate);
    };

    // Reset button transforms when mouse leaves
    const resetButtons = () => {
      if (magnetTarget) {
        magnetTarget.style.transform = '';
        magnetTarget = null;
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseleave', resetButtons);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', resetButtons);
    };
  }, []);

  // Hide on touch devices
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--forge-yellow)',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 150ms ease, background 150ms ease',
        mixBlendMode: 'difference' as const,
      }} />
      <div ref={ringRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '1.5px solid rgba(34,34,34,0.4)',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 300ms ease, height 300ms ease, border-color 300ms ease, opacity 300ms ease',
        opacity: 0.6,
      }} />
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
