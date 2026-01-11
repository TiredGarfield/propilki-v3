import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long do press-on nails last?",
    answer:
      "Our kit includes 48 adhesive tabs that are gentle on your nails and water-resistant. Using our application method, our acrylic press-ons typically last 3–5 days and can extend up to 7 days depending on your lifestyle.\n\nKeep in mind, your nails may not adhere perfectly the first few times, but with practice, application becomes effortless and durable.",
  },
  {
    question: "Can I reuse press-on nails?",
    answer:
      "Yes! When removed carefully and undamaged, our press-ons can be reused 2–3 times. For reapplication, we recommend using nail adhesive tabs for optimal hold.",
  },
  {
    question: "What if the sizes doesn't fit perfectly?",
    answer:
      "Customer satisfaction is our priority. If you’re not fully satisfied with the fit, we offer exchanges within 30 days of purchase.",
  },
  {
    question: "Are press-on nails safe for my natural nails?",
    answer:
      "Absolutely. Our press-ons are designed to be gentle, causing no damage when applied and removed correctly.",
  },
  {
    question: "How do I remove press-on nails?",
    answer:
      "Use either end of the wooden cuticle pusher to gently lift the edge of the press-on nail.\n\nSoak your nails in warm water for 30 seconds.\n\nRepeat the above steps as needed until nails loosen.\n\nClean any adhesive residue from both the press-ons and your natural nails.\n\nStore your press-ons properly, ready for reuse!",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide! Shipping times vary by location but typically take 7-14 business days for international orders.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
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
            Everything you need to know about our premium press-on nails.
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
                  <div className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
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
