import { useState, useEffect } from 'react';
import { programs } from '@/data/programs';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Experiences() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeProgram, setActiveProgram] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const program = programs[activeProgram];

  useEffect(() => {
    setCurrentPhoto(0);
  }, [activeProgram]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto(prev => (prev + 1) % program.photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [program.photos.length, activeProgram]);

  const goToPrev = () => setActiveProgram(prev => (prev - 1 + programs.length) % programs.length);
  const goToNext = () => setActiveProgram(prev => (prev + 1) % programs.length);

  return (
    <section id="experiences" ref={ref} className="experiences-section">
      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 32 }}>
        <div className="forge-subheading">Explore</div>
        <div className="forge-heading">The Forge Experiences</div>
      </div>

      <div className={`forge-fade-up${isVisible ? ' visible' : ''} experiences-toggle-row`} style={{ transitionDelay: '200ms' }}>
        {programs.map((p, i) => (
          <button
            key={p.tabLabel}
            className={`experiences-toggle-pill${i === activeProgram ? ' active' : ''}`}
            onClick={() => setActiveProgram(i)}
          >
            {p.tabLabel}
          </button>
        ))}
      </div>

      <div className={`forge-fade-up${isVisible ? ' visible' : ''}`} style={{ transitionDelay: '400ms', maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <button className="experiences-arrow experiences-arrow-left" onClick={goToPrev} aria-label="Previous program">
          <ChevronLeft size={20} />
        </button>
        <button className="experiences-arrow experiences-arrow-right" onClick={goToNext} aria-label="Next program">
          <ChevronRight size={20} />
        </button>

        <div className="experiences-bento-card">
          <div className="experiences-photo-side">
            <div className="experiences-photo-container">
              {program.photos.map((photo, i) => (
                <img
                  key={`${activeProgram}-${i}`}
                  src={photo}
                  alt={`${program.title} photo ${i + 1}`}
                  className="experiences-photo"
                  style={{ opacity: i === currentPhoto ? 1 : 0 }}
                />
              ))}
              {/* Location overlay */}
              <div className="experiences-location-overlay">
                {program.nextEditions.map((edition, i) => (
                  <span key={i}>{edition}</span>
                ))}
              </div>
              {/* Photo dots overlaid on image */}
              <div className="experiences-photo-dots">
                {program.photos.map((_, i) => (
                  <button
                    key={i}
                    className={`forge-dot${i === currentPhoto ? ' active' : ''}`}
                    onClick={() => setCurrentPhoto(i)}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="experiences-info-side">
            <div className="experiences-title">{program.title}</div>
            <p className="experiences-description">{program.description}</p>

            <div className="experiences-meta-row">
              {program.durationPills.map((pill, i) => (
                <span key={i} className="experiences-meta-badge">{pill}</span>
              ))}
            </div>

            <ul className="experiences-highlights">
              {program.highlights.map((h, i) => (
                <li key={i}>
                  <Check size={14} strokeWidth={3} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <a href={program.href} className="experiences-cta">
              Request an Invite <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="experiences-program-dots">
          {programs.map((_, i) => (
            <button
              key={i}
              className={`forge-dot${i === activeProgram ? ' active' : ''}`}
              onClick={() => setActiveProgram(i)}
              aria-label={`Go to ${programs[i].tabLabel}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
