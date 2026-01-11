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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content.title}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {content.items.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-none">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                type="button"
              >
                <span className="font-medium text-neutral-900 tracking-wide">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-neutral-600" />
                ) : (
                  <Plus className="h-5 w-5 text-neutral-600" />
                )}
              </button>

              {openIndex === index ? (
                <div className="px-6 pb-4">
                  <div className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
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
