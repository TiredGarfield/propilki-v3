type Props = {
  content: {
    title: string;
    subtitle: string;
    steps: { number: string; title: string; description: string }[];
    helpCard: {
      title: string;
      subtitle: string;
      primaryCta: { label: string; href: string };
      secondaryCta: { label: string; href: string };
    };
  };
};

const HowItWorks = ({ content }: Props) => {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            {content.title}
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <span className="text-6xl font-extralight text-neutral-500 tracking-wider">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">
                {step.title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-neutral-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light mb-4">
              {content.helpCard.title}
            </h3>
            <p className="text-neutral-300 font-light mb-6">
              {content.helpCard.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={content.helpCard.primaryCta.href}
                className="bg-white text-neutral-900 px-6 py-3 font-medium tracking-wide hover:bg-neutral-100 transition-colors"
              >
                {content.helpCard.primaryCta.label}
              </a>
              <a
                href={content.helpCard.secondaryCta.href}
                className="border border-neutral-600 text-white px-6 py-3 font-medium tracking-wide hover:bg-neutral-800 transition-colors"
              >
                {content.helpCard.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
