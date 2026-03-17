import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';
import RoleModal from './RoleModal';
import { jobs, TALLY_FORM } from '@/data/jobs';

export default function OpenRoles() {
  const isMobile = useIsMobile();
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const selectedJob = jobs.find(j => j.id === selectedJobId) || null;

  return (
    <section id="roles" style={{
      background: '#FFFFFF',
      padding: isMobile ? '64px 24px' : '120px 80px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader
          eyebrow="Open Roles"
          headline="Convert your skills into a high-performance role."
          subtext="All roles are open right now. Click any role to read the full description and apply."
        />

        {/* Role rows */}
        <div>
          {jobs.map((job, i) => (
            <RoleRow
              key={job.id}
              title={job.title}
              department={job.department}
              status={job.status}
              isLast={i === jobs.length - 1}
              delay={i * 60}
              onClick={() => setSelectedJobId(job.id)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Wildcard bento card */}
        <WildcardCard isMobile={isMobile} />

        {/* Modal */}
        <RoleModal job={selectedJob} onClose={() => setSelectedJobId(null)} />
      </div>
    </section>
  );
}

function RoleRow({ title, department, status, isLast, delay, onClick, isMobile }: {
  title: string;
  department: string;
  status: string;
  isLast: boolean;
  delay: number;
  onClick: () => void;
  isMobile: boolean;
}) {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 160px 130px 40px',
        gap: isMobile ? 8 : 24,
        alignItems: 'center',
        borderTop: '1px solid rgba(34,34,34,0.09)',
        borderBottom: isLast ? '1px solid rgba(34,34,34,0.09)' : undefined,
        padding: isMobile ? '20px 0' : '28px 0',
        paddingLeft: hovered && !isMobile ? 16 : 0,
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 250ms ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${delay}ms`,
        transitionDuration: '650ms',
      }}
    >
      <div style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 800,
        fontSize: isMobile ? 20 : 24,
        color: hovered ? '#FFA800' : '#222222',
        letterSpacing: -0.3,
        transition: 'color 250ms ease',
      }}>
        {title}
      </div>
      <div style={{
        fontFamily: "'Open Sauce One', sans-serif",
        fontWeight: 400,
        fontSize: 13,
        color: 'rgba(34,34,34,0.38)',
      }}>
        {department}
      </div>
      <div style={{
        borderRadius: 100,
        padding: '6px 16px',
        fontFamily: "'Open Sauce One', sans-serif",
        fontSize: 11,
        fontWeight: 700,
        background: 'rgba(255,188,59,0.12)',
        color: '#b87c00',
        display: 'inline-block',
        width: 'fit-content',
      }}>
        {status}
      </div>
      {!isMobile && (
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontSize: 20,
          color: '#FFA800',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'all 250ms ease',
        }}>
          →
        </div>
      )}
    </div>
  );
}

function WildcardCard({ isMobile }: { isMobile: boolean }) {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <div
      ref={ref}
      style={{
        background: '#222222',
        borderRadius: 20,
        padding: isMobile ? '40px 28px' : '52px 56px',
        marginTop: 20,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 28 : 48,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 650ms ease, transform 650ms ease',
      }}
    >
      <div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          color: '#FFBC3B',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}>
          Always Open
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 800,
          fontSize: isMobile ? 22 : 26,
          color: '#FFFFFF',
          marginBottom: 14,
        }}>
          Do not see your role here?
        </div>
        <div style={{
          fontFamily: "'Open Sauce One', sans-serif",
          fontWeight: 400,
          fontSize: 15,
          color: 'rgba(255,255,255,0.42)',
          maxWidth: 520,
          lineHeight: 1.7,
        }}>
          Everyone here wants to be the world's best at what they do. If that is you and you have a skill that belongs at the Forge, write to us directly. We read every email. If the fit is there, we find a way.
        </div>
      </div>
      <a
        href={TALLY_FORM}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#FFBC3B',
          color: '#222222',
          borderRadius: 100,
          padding: '15px 32px',
          fontFamily: "'Open Sauce One', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          transition: 'background 250ms ease',
          flexShrink: 0,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#FFA800'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#FFBC3B'; }}
      >
        Write to Us
      </a>
    </div>
  );
}
