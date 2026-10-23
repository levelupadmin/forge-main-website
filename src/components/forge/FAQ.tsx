import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const isMobile = useIsMobile();
  const [openItem, setOpenItem] = useState('');

  return (
    <section
      style={{
        padding: isMobile ? '48px 20px' : 'clamp(48px, 6vw, 72px) 80px',
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

      <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
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
            {/* Radix only renders the answer while an item is open, so the
                prerendered HTML would carry no answers. Keep a hidden copy of
                each closed answer in the markup for crawlers; visitors still
                see it only through the accordion above. */}
            {openItem !== `faq-${i}` && <div hidden>{faq.answer}</div>}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
