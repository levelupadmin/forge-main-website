import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SectionHeader from './SectionHeader';

const testimonials = [
  { quote: 'I came in knowing how to run ads. Three months in I was writing admissions scripts, auditing calls, and rebuilding the entire funnel. Nobody asked me to. It just needed doing.', name: 'Team Member Name', role: 'Role · the Forge' },
  { quote: 'The feedback loop is short. I build something Monday, it goes live Wednesday, and I can see how students are responding by Friday. I have never had that at any company before.', name: 'Team Member Name', role: 'Role · the Forge' },
  { quote: 'There is no hiding here. What you build reaches real people. That is pressure and it is also the only reason I want to come in and work every single day.', name: 'Team Member Name', role: 'Role · the Forge' },
  { quote: 'We are building something that genuinely did not exist before. That sounds like a line but you feel it. Every cohort that comes through changes what we think is possible.', name: 'Team Member Name', role: 'Role · the Forge' },
  { quote: "I have worked at bigger companies where my work disappeared into a system. Here I can trace a student's outcome back to something I built. That is rare and it matters.", name: 'Team Member Name', role: 'Role · the Forge' },
];

export default function VoiceOfTeam() {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const cardWidth = isMobile ? 280 : 400;
  const gap = 20;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(idx, testimonials.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [cardWidth]);

  const scrollToIndex = (idx: number) => {
    scrollRef.current?.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
  };

  const onMouseDown = (e: React.MouseEvent) => { setIsDragging(true); dragStart.current = { x: e.pageX, scrollLeft: scrollRef.current?.scrollLeft || 0 }; };
  const onMouseMove = (e: React.MouseEvent) => { if (!isDragging || !scrollRef.current) return; e.preventDefault(); scrollRef.current.scrollLeft = dragStart.current.scrollLeft - (e.pageX - dragStart.current.x); };
  const onMouseUp = () => setIsDragging(false);

  return (
    <section style={{ background: '#000000', padding: isMobile ? '48px 0' : '80px 0' }}>
      <div style={{ padding: isMobile ? '0 24px' : '0 80px' }}>
        <SectionHeader eyebrow="Straight from the Team" headline="Everyone here wants to be the world's best at what they do." subtext="Do not take our word for it. Here is what the people already building the Forge have to say." dark />
      </div>

      <div
        ref={scrollRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
        style={{ display: 'flex', gap, overflowX: 'auto', scrollSnapType: 'x mandatory', padding: isMobile ? '8px 24px' : '8px 80px', cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.voice-scroll::-webkit-scrollbar { display: none; }`}</style>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: '#2e2e2e', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, width: cardWidth, flexShrink: 0, padding: '40px 36px 44px', scrollSnapAlign: 'start', transition: 'all 250ms ease', display: 'flex', flexDirection: 'column', gap: 20 }}
            onMouseEnter={e => { e.currentTarget.style.background = '#333333'; e.currentTarget.style.borderColor = 'rgba(255,188,59,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2e2e2e'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: '#3e3e3e', flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 700, fontSize: 15, color: '#FFFFFF' }}>{t.name}</div>
                <div style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{t.role}</div>
              </div>
            </div>
            <div style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 800, fontSize: 64, color: '#FFBC3B', lineHeight: 0.65, marginTop: 4 }}>&ldquo;</div>
            <div style={{ fontFamily: "'Open Sauce One', sans-serif", fontWeight: 400, fontStyle: 'italic', fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, flex: 1 }}>{t.quote}</div>
            <div style={{ height: 2, background: 'rgba(255,255,255,0.07)', position: 'relative', borderRadius: 2 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, width: 36, height: '100%', background: '#FFBC3B', opacity: 0.6, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => scrollToIndex(i)} style={{ width: i === activeIndex ? 40 : 24, height: 3, borderRadius: 100, background: i === activeIndex ? '#FFBC3B' : 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 250ms ease' }} />
        ))}
      </div>
    </section>
  );
}
