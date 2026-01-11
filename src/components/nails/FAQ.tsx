import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Props = {
  content: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
};

const FAQ = ({ content }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-5 tracking-tight">
            {content.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-neutral-300 mx-auto mb-5 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {content.items.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-none">
              <button
                className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                type="button"
              >
                <span className="font-medium text-neutral-900 tracking-wide text-sm sm:text-base">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-neutral-600" />
                ) : (
                  <Plus className="h-5 w-5 text-neutral-600" />
                )}
              </button>

              {openIndex === index ? (
                <div className="px-4 sm:px-6 pb-4">
                  <div className="text-neutral-600 font-light leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
