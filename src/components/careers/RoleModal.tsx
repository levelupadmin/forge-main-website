import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { JobRole, TALLY_FORM } from '@/data/jobs';

interface RoleModalProps {
  job: JobRole | null;
  onClose: () => void;
}

export default function RoleModal({ job, onClose }: RoleModalProps) {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (job) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [job]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 360);
  };

  if (!job) return null;

  const sectionLabel: React.CSSProperties = {
    fontFamily: "'Open Sauce One', sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#FFBC3B',
    marginBottom: 16,
  };

  const bodyText: React.CSSProperties = {
    fontFamily: "'Open Sauce One', sans-serif",
    fontWeight: 400,
    fontSize: 15,
    color: 'rgba(34,34,34,0.62)',
    lineHeight: 1.82,
  };

  const divider: React.CSSProperties = {
    height: 1,
    background: 'rgba(34,34,34,0.07)',
    margin: '28px 0',
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      pointerEvents: job ? 'auto' : 'none',
    }}>
      {/* Overlay */}
      <div
        onClick={handleClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 360ms ease',
        }}
      />

      {/* Panel */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: isMobile ? '100vw' : 580,
        background: '#FFFFFF',
        transform: visible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 360ms cubic-bezier(0.32,0,0.15,1)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          background: '#222222',
          padding: isMobile ? '36px 24px 32px' : '48px 44px 40px',
          position: 'relative',
          flexShrink: 0,
        }}>
          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.6)',
              fontSize: 16,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 250ms ease',
              fontFamily: "'Open Sauce One', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#FFBC3B';
              e.currentTarget.style.color = '#FFBC3B';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
            }}
          >
            ✕
          </button>

          <div style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 6,
          }}>
            {job.location}
          </div>
          <div style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#FFBC3B',
            marginBottom: 14,
          }}>
            {job.department}
          </div>
          <h3 style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontWeight: 800,
            fontSize: isMobile ? 28 : 34,
            color: '#FFFFFF',
            margin: '0 0 14px',
            lineHeight: 1.1,
          }}>
            {job.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#FFBC3B',
            }} />
            <span style={{
              fontFamily: "'Open Sauce One', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              color: '#FFBC3B',
            }}>
              {job.status}
            </span>
          </div>
        </div>

        {/* Body - scrollable */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: isMobile ? '32px 24px 100px' : '40px 44px 100px',
        }}>
          {/* Needed pills */}
          {job.neededPills.length > 0 && (
            <>
              <div style={sectionLabel}>What You Need</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                {job.neededPills.map((pill, i) => (
                  <span key={i} style={{
                    borderRadius: 100,
                    border: '1px solid rgba(34,34,34,0.09)',
                    background: 'rgba(34,34,34,0.05)',
                    padding: '6px 14px',
                    fontFamily: "'Open Sauce One', sans-serif",
                    fontSize: 13,
                    color: 'rgba(34,34,34,0.62)',
                  }}>
                    {pill}
                  </span>
                ))}
              </div>
              <div style={divider} />
            </>
          )}

          {/* Compensation */}
          <div style={sectionLabel}>Compensation</div>
          <div style={{
            background: 'rgba(255,188,59,0.1)',
            border: '1px solid rgba(255,188,59,0.2)',
            borderRadius: 12,
            padding: '14px 20px',
            fontFamily: "'Open Sauce One', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            color: '#222222',
            marginBottom: 8,
          }}>
            {job.compensation}
          </div>
          <div style={divider} />

          {/* About */}
          <div style={sectionLabel}>About the Role</div>
          {job.about.map((p, i) => (
            <p key={i} style={{ ...bodyText, marginBottom: 16 }}>{p}</p>
          ))}
          <div style={divider} />

          {/* What You Will Do */}
          <div style={sectionLabel}>What You Will Do</div>
          <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            {job.whatYouWillDo.map((item, i) => (
              <li key={i} style={{
                ...bodyText,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                marginBottom: 10,
              }}>
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#FFBC3B',
                  flexShrink: 0,
                  marginTop: 8,
                }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={divider} />

          {/* Who We Are Looking For */}
          <div style={sectionLabel}>Who We Are Looking For</div>
          <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            {job.whoWeAreLookingFor.map((item, i) => (
              <li key={i} style={{
                ...bodyText,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                marginBottom: 10,
              }}>
                <span style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#FFBC3B',
                  flexShrink: 0,
                  marginTop: 8,
                }} />
                {item}
              </li>
            ))}
          </ul>

          {/* Not For You (optional) */}
          {job.notForYou && job.notForYou.length > 0 && (
            <>
              <div style={divider} />
              <div style={sectionLabel}>This Role Is Not For You If</div>
              <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                {job.notForYou.map((item, i) => (
                  <li key={i} style={{
                    ...bodyText,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 10,
                  }}>
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#FFBC3B',
                      flexShrink: 0,
                      marginTop: 8,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Footer - sticky */}
        <div style={{
          borderTop: '1px solid rgba(34,34,34,0.08)',
          padding: '20px 44px',
          background: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <a
            href={TALLY_FORM}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#222222',
              color: '#FFFFFF',
              borderRadius: 100,
              padding: '14px 32px',
              fontFamily: "'Open Sauce One', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 250ms ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#FFBC3B';
              e.currentTarget.style.color = '#222222';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#222222';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            Apply Now
          </a>
          <span style={{
            fontFamily: "'Open Sauce One', sans-serif",
            fontSize: 13,
            color: 'rgba(34,34,34,0.35)',
          }}>
            Takes about 5 minutes.
          </span>
        </div>
      </div>
    </div>
  );
}
