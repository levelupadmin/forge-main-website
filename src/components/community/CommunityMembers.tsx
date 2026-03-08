import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { people } from '@/data/people';
import { successStories } from '@/data/communityData';

const allMembers = [
  ...people.map(p => ({ name: p.name, role: p.designation, photo: p.photo })),
  ...successStories.map(s => ({ name: s.name, role: s.program, photo: s.photo })),
];

// Deduplicate by name
const members = allMembers.filter(
  (m, i, arr) => arr.findIndex(a => a.name === m.name) === i
);

const roles = ['All', ...Array.from(new Set(members.map(m => m.role)))];

export default function CommunityMembers() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeRole, setActiveRole] = useState('All');

  const filtered = activeRole === 'All' ? members : members.filter(m => m.role === activeRole);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--forge-cream)',
        padding: 'clamp(48px, 6vw, 80px) 0',
      }}
    >
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''}`}
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: 32 }}
      >
        <p className="forge-subheading">Our People</p>
        <div className="forge-heading" style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
          The People of the Forge
        </div>
      </div>

      {/* Filter pills */}
      <div
        className={`forge-fade-up${isVisible ? ' visible' : ''} forge-scroll`}
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          flexWrap: 'nowrap',
          padding: '0 24px',
          marginBottom: 32,
          transitionDelay: '150ms',
        }}
      >
        {roles.map(role => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            style={{
              padding: '8px 20px',
              borderRadius: 100,
              border: 'none',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              flexShrink: 0,
              background: activeRole === role ? 'var(--forge-black)' : 'white',
              color: activeRole === role ? 'white' : 'var(--forge-black)',
              transition: 'background 200ms ease, color 200ms ease',
              fontFamily: "'Open Sauce One', sans-serif",
            }}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Members grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 16,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 48px)',
        }}
      >
        {filtered.map((member, i) => (
          <div
            key={member.name}
            className={`forge-fade-up${isVisible ? ' visible' : ''}`}
            style={{ transitionDelay: `${200 + i * 50}ms`, textAlign: 'center' }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: 20,
                overflow: 'hidden',
                marginBottom: 10,
              }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="forge-mentor-photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{member.name}</div>
            <div style={{ fontSize: 12, opacity: 0.5, marginTop: 2 }}>{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
