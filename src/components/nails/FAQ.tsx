import { BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  content: {
    pill: string;
    title: string;
    items: { question: string; answer: string }[];
  };
};

const FAQ = ({ content }: Props) => {
  return (
    <section id="faq" className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-5 tracking-tight">
            {content.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-neutral-300 mx-auto mb-5 sm:mb-6" />
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {content.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-3.5 sm:py-4 text-left hover:no-underline">
                <span className="font-medium text-neutral-900 text-sm sm:text-base">
                  {item.question}
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-4 sm:px-6 pb-4">
                <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
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

export default FAQ;
