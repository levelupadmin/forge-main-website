import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SectionNudge({ text = 'Ready to join them?' }: { text?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const scrollToExperiences = () => {
    const el = document.querySelector('#experiences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={ref} className={`forge-nudge${isVisible ? ' visible' : ''}`}>
      <a href="#experiences" onClick={e => { e.preventDefault(); scrollToExperiences(); }}>
        {text}
      </a>
      </a>
    </div>
  );
}
