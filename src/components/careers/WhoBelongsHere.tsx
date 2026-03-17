import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeader from './SectionHeader';

const cards = [
  { icon: '🎯', ghost: '1', title: 'You report in outcomes, not effort.', body: 'Hours worked do not interest you. What shipped. What changed. That is what you bring to every check-in.' },
  { icon: '🎬', ghost: '2', title: 'You care deeply about your craft.', body: 'And you keep developing it. The standard here does not stay fixed. It keeps moving and you like that.' },
  { icon: '⚡', ghost: '3', title: 'You ship fast and learn.', body: 'A real thing that exists beats a perfect plan still being discussed. You know when to move and you move.' },
  { icon: '🤝', ghost: '4', title: 'You operate on high trust.', body: 'Say what needs to be said, even when it is uncomfortable. No politics. No positioning. Just the truth, fast.' },
  { icon: '🔥', ghost: '5', title: 'You are willing to work weird hours.', body: 'Not because we demand it. Because when you care about something you do not clock-watch. You know this about yourself.' },
  { icon: '🧩', ghost: '6', title: 'You thrive on change and a bit of chaos.', body: 'Stagnation scares you more than uncertainty. You figure things out as they move without waiting for a script.' },
];

function BelongCard({ icon, ghost, title, body, delay }: typeof cards[0] & { delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#FFBC3B' : '#222222',
        borderRadius: 20,
        padding: '40px 36px 44px',
        minHeight: 280,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 250ms ease',
        transform: hovered ? 'translateY(-5px)' : (isVisible ? 'translateY(0)' : 'translateY(28px)'),
        boxShadow: hovered ? '0 20px 56px rgba(255,188,59,0.25)' : 'none',
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${delay}ms`,
        transitionDuration: '650ms',
      }}
    >
      {/* Arrow top-right */}
      <div style={{
        position: 'absolute',
        top: 24,
        right: 24,
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: `1px solid ${hovered ? 'rgba(34,34,34,0.25)' : 'rgba(255,255,255,0.15)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        color: hovered ? '#222222' : 'rgba(255,255,255,0.4)',
        background: hovered ? 'rgba(34,34,34,0.08)' : 'transparent',
        transition: 'all 250ms ease',
      }}>
        ↗
      </div>

      {/* Ghost number */}
      <div style={{
        position: 'absolute',
        bottom: -10,
        right: 16,
        fontFamily: "'Open Sauce One', sans-serif",
        fontSize: 140,
        fontWeight: 800,
        color: hovered ? 'rgba(34,34,34,0.07)' : 'rgba(255,255,255,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
        transition: 'color 250ms ease',
      }}>
        {ghost}
      </div>

      {/* Icon */}
      <div style={{
        fontSize: 28,
        marginBottom: 28,
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 250ms ease',
      }}>
        {icon}
      </div>

      {/* Short rule */}
      <div style={{
        width: hovered ? 36 : 24,
        height: 2,
        background: hovered ? 'rgba(34,34,34,0.25)' : 'rgba(255,255,255,0.18)',
        marginBottom: 20,
        transition: 'all 250ms ease',
      }} />

      {/* Title */}
      <div style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 800,
        fontSize: 22,
        color: hovered ? '#222222' : '#FFFFFF',
        lineHeight: 1.25,
        marginBottom: 12,
        transition: 'color 250ms ease',
      }}>
        {title}
      </div>

      {/* Body */}
      <div style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 400,
        fontSize: 14,
        color: hovered ? 'rgba(34,34,34,0.65)' : 'rgba(255,255,255,0.45)',
        lineHeight: 1.75,
        transition: 'color 250ms ease',
        marginTop: 'auto',
      }}>
        {body}
      </div>
    </div>
  );
}

export default function WhoBelongsHere() {
  const isMobile = useIsMobile();

  return (
    <section style={{
      background: '#FFFFFF',
      padding: isMobile ? '64px 24px' : '0 80px 120px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="Who We Are Looking For"
          headline="Level Up is not the right place for everyone."
          subtext="If you prefer a prescriptive corporate structure and a typical office environment, that is not us. If you want hypergrowth, can solve complex problems, are willing to work weird hours, and can thrive on change and a bit of chaos — then we should talk."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 12,
        }}>
          {cards.map((card, i) => (
            <BelongCard key={card.ghost} {...card} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
