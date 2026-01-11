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
    <section
      id="how-it-works"
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-5 tracking-tight">
            {content.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-neutral-600 mx-auto mb-5 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          {content.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 sm:mb-5 md:mb-6">
                <span className="text-5xl sm:text-6xl font-extralight text-neutral-500 tracking-wider">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 text-center">
          <div className="bg-neutral-800 rounded-lg p-6 sm:p-7 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
              {content.helpCard.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-light mb-5 sm:mb-6">
              {content.helpCard.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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
