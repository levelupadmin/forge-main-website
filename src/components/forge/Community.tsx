import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { communityRow1, communityRow2 } from '@/data/community';
import type { CommunityMember } from '@/data/community';

const InstagramIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="6" r="1.5" fill="currentColor" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <polygon points="9.75,8.25 15.5,12 9.75,15.75" fill="currentColor" />
  </svg>
);

function MemberCard({ member, isMobile }: { member: CommunityMember; isMobile: boolean }) {
  const cardW = isMobile ? 160 : 200;
  const cardH = isMobile ? 260 : 320;
  const photoH = isMobile ? 180 : 220;
  const initials = member.name.split(' ').map(w => w[0]).join('').slice(0, 2);

  return (
    <div
      style={{
        width: cardW,
        height: cardH,
        borderRadius: 16,
        background: '#2a2a2a',
        border: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flexShrink: 0,
        transition: 'transform 250ms ease, border-color 250ms ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(255,188,59,0.25)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      }}
    >
      <div style={{ width: '100%', height: photoH, overflow: 'hidden', background: '#333333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {member.photo ? (
          <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
        ) : (
          <span style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 700, fontSize: 24, color: 'rgba(255,255,255,0.3)' }}>{initials}</span>
        )}
      </div>
      <div style={{ padding: '14px 14px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 700, fontSize: isMobile ? 12 : 13, color: '#FFFFFF', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {member.name}
        </div>
        <div style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 400, fontSize: isMobile ? 10 : 11, color: 'rgba(255,255,255,0.42)', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {member.designation}
        </div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
          <a
            href={member.socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 24, height: 24, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.6)', transition: 'all 200ms ease', textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFBC3B';
              e.currentTarget.style.background = 'rgba(255,188,59,0.1)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
            }}
          >
            {member.socialType === 'youtube' ? <YouTubeIcon /> : <InstagramIcon />}
          </a>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ members, duration, isMobile }: { members: CommunityMember[]; duration: number; isMobile: boolean }) {
  const doubled = [...members, ...members];
  const animName = 'communityScrollLeft';

  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          gap: isMobile ? 12 : 16,
          width: 'max-content',
          animation: `${animName} ${duration}s linear infinite`,
          willChange: 'transform',
        }}
        onMouseEnter={e => { e.currentTarget.style.animationPlayState = 'paused'; }}
        onMouseLeave={e => { e.currentTarget.style.animationPlayState = 'running'; }}
      >
        {doubled.map((member, i) => (
          <MemberCard key={`${member.name}-${i}`} member={member} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
}

export default function Community() {
  const isMobile = useIsMobile();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="community"
      ref={ref}
      style={{
        background: '#222222',
        padding: isMobile ? '80px 0' : '120px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{
          textAlign: 'center',
          padding: isMobile ? '0 24px' : '0 80px',
          maxWidth: 640,
          margin: '0 auto',
          marginBottom: isMobile ? 48 : 64,
        }}
      >
        <p style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#FFBC3B',
          marginBottom: 16,
        }}>
          People of the Forge
        </p>
        <h2 style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: isMobile ? 34 : 52,
          letterSpacing: -1.5,
          lineHeight: 1.05,
          color: '#FFFFFF',
          margin: '0 0 20px',
        }}>
          Meet the Dreamers.
        </h2>
        <p style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: 17,
          color: 'rgba(255,255,255,0.42)',
          lineHeight: 1.8,
          maxWidth: 520,
          margin: '0 auto',
        }}>
          Filmmakers. Founders. Writers. Athletes. Creators. Lawyers. All here because they refused to just talk about it.
        </p>
      </div>

      {/* Marquee wrapper with edge fades */}
      <div style={{ position: 'relative' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: isMobile ? 60 : 120, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, #222222, transparent)',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0,
          width: isMobile ? 60 : 120, zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to left, #222222, transparent)',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 12 : 16 }}>
          <MarqueeRow members={communityRow1} duration={50} isMobile={isMobile} />
          <MarqueeRow members={communityRow2} duration={65} isMobile={isMobile} />
        </div>
      </div>

      <style>{`
        @keyframes communityScrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
