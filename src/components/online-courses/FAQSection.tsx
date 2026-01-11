import { BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = ({ faq }) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {faq.pill}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
            {faq.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg border border-border elegant-shadow overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="font-medium text-foreground">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 animate-accordion-down">
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
