import { useIsMobile } from '@/hooks/use-mobile';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the Forge?',
    answer:
      'The Forge is a residential learning program where you spend 6 to 15 days fully immersed in your craft. You build, create, and ship something real alongside a curated group of like-minded people. No Zoom calls. No distractions. Just focused work with expert mentors in a dedicated environment.',
  },
  {
    question: 'How is this different from an online course?',
    answer:
      'An online course gives you knowledge. The Forge gives you output. You leave with something you made: a short film, a manuscript, a content system, a working product. The residential format means you are fully in it for the duration. No half-attention. No "I\'ll get back to this later."',
  },
  {
    question: 'What programs does the Forge run?',
    answer:
      'Currently four: the Filmmaking Bootcamp, the Creator Residency, the Writing Retreat, and the Forge AI Residency for founders, operators, and marketers who want to actually build with AI tools.',
  },
  {
    question: 'Do I need prior experience?',
    answer:
      'No. Each program works whether you are a complete beginner or someone who has been doing this for years but has never shipped anything finished. Mentors work with where you are.',
  },
  {
    question: 'Can I attend if I have a full-time job?',
    answer:
      'Yes. Most Forge participants are working professionals. You take a fixed block of time off, go all in, and come back with something done. No trying to fit learning around evenings and weekends forever.',
  },
  {
    question: 'What is included in the fee?',
    answer:
      'Everything except your travel to the venue. Stay, all meals, mentorship, equipment or tools depending on the program, and full access to the Forge alumni community after the program ends.',
  },
  {
    question: 'How many people are in each cohort?',
    answer:
      'Between 20 and 28. This is a hard limit. Small cohorts mean mentors actually work with you, not just present to you.',
  },
  {
    question: 'Why is there an application process?',
    answer:
      'The application protects the cohort. When everyone in the room is serious, the whole experience improves for everyone. We are not looking for a specific background. We are looking for people who will show up fully.',
  },
  {
    question: 'What do I actually leave with?',
    answer:
      'It depends on the program. Filmmaking alumni leave with a short film they made. Creator alumni leave with real content and a personal brand system. Writing alumni leave with a finished draft. AI Residency alumni leave with a working product and a live automation. Real work, not notes.',
  },
  {
    question: 'Why does this cost what it costs?',
    answer:
      'The fee covers stay, meals, mentors, tools, and the full experience. Around 75% goes directly into what you experience on the ground. Compare it to a film school, a writing MFA, or a month of agency time. The math is straightforward.',
  },
];

export default function FAQ() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        padding: isMobile ? '64px 20px' : '100px 80px',
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <h2
        className="forge-heading"
        style={{
          textAlign: 'center',
          marginBottom: isMobile ? 40 : 56,
          color: 'hsl(var(--foreground))',
        }}
      >
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-b"
            style={{ borderColor: 'hsl(var(--border))' }}
          >
            <AccordionTrigger
              style={{
                fontSize: isMobile ? 16 : 18,
                fontWeight: 500,
                textAlign: 'left',
                color: 'hsl(var(--foreground))',
                padding: isMobile ? '16px 0' : '20px 0',
              }}
              className="hover:no-underline"
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              style={{
                fontSize: isMobile ? 14 : 16,
                lineHeight: 1.7,
                color: 'hsl(var(--muted-foreground))',
              }}
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
