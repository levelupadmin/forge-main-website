import { useIsMobile } from '@/hooks/use-mobile';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who is the Forge for?',
    answer:
      'the Forge is for aspiring filmmakers, writers, content creators, and creative professionals aged 18-30 who want to build real-world skills through immersive, hands-on programs. Whether you are a beginner or have some experience, our programs are designed to accelerate your creative career.',
  },
  {
    question: 'How long are the programs?',
    answer:
      'Program durations vary — our Filmmaking Bootcamp runs for 8 weeks, the Creator Residency is a 4-week intensive, and the Writing Retreat is a 2-week deep dive. Each program is designed to deliver maximum impact in a focused timeframe.',
  },
  {
    question: 'What do I get at the end of a program?',
    answer:
      'You leave with a professional portfolio of work, mentorship connections, an alumni network, and a certificate of completion. Many alumni also leave with job offers, freelance opportunities, or their own launched projects.',
  },
  {
    question: 'How do I apply?',
    answer:
      'Click the "Apply Now" button on any program page to fill out a short application form. Our team reviews applications on a rolling basis, and you will hear back within 5-7 business days. Early applications are encouraged as seats are limited.',
  },
  {
    question: 'Is financial aid or scholarships available?',
    answer:
      'Yes — the Forge offers merit-based scholarships and need-based financial aid for select programs. Reach out to us at hello@theforge.in with your situation and we'll do our best to make it work.',
  },
  {
    question: 'Where do the programs take place?',
    answer:
      'Our programs run across multiple cities in India and occasionally internationally. Some programs also have virtual or hybrid components. Check individual program pages for specific location details.',
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
          fontSize: isMobile ? 28 : 40,
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
