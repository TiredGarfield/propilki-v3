
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long do press-on nails last?",
    answer: "With proper application and care, our press-on nails can last up to 2 weeks. The longevity depends on your lifestyle and how well you follow the application instructions."
  },
  {
    question: "Can I reuse the press-on nails?",
    answer: "Yes! If removed carefully without damage, our press-on nails can be reused 2-3 times. We recommend using nail glue tabs for reapplication."
  },
  {
    question: "What if the size doesn't fit perfectly?",
    answer: "Each set includes 12 different sizes to fit most nail shapes. You can also file the sides gently to customize the fit. If you're still not satisfied, we offer exchanges within 30 days."
  },
  {
    question: "Are they safe for my natural nails?",
    answer: "Absolutely! Our press-on nails are designed to be gentle on your natural nails. They won't cause damage when applied and removed properly."
  },
  {
    question: "How do I remove them?",
    answer: "Soak your nails in warm soapy water for 10-15 minutes, then gently lift from the cuticle area. Never force them off as this could damage your natural nails."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide! Shipping times vary by location but typically take 7-14 business days for international orders."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light">
            Everything you need to know about our press-on nails
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-none">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => toggleFAQ(index)}
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
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
