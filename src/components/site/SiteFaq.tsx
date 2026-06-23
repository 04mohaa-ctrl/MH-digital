import type { FaqItem } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/sections/FadeIn";

interface SiteFaqProps {
  title?: string;
  items: FaqItem[];
}

export function SiteFaq({ title = "Vanliga frågor", items }: SiteFaqProps) {
  return (
    <section className="border-t border-border/60 bg-secondary/20 py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <FadeIn className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        </FadeIn>
        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
