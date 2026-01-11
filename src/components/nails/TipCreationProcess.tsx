import { Palette, Sparkles, Target, CheckCircle } from "lucide-react";

type IconKey = "palette" | "sparkles" | "target" | "checkCircle";

type Props = {
  content: {
    title: string;
    subtitle: string;
    steps: {
      icon: IconKey;
      title: string;
      description: string;
    }[];
    highlight: {
      title: string;
      description: string;
      bullets: { title: string; description: string }[];
      image: { src: string; alt: string };
    };
  };
};

const ICONS: Record<IconKey, React.ElementType> = {
  palette: Palette,
  sparkles: Sparkles,
  target: Target,
  checkCircle: CheckCircle,
};

const TipCreationProcess = ({ content }: Props) => {
  return (
    <section id="tip-creation" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content.title}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {content.steps.map((step, index) => {
            const Icon = ICONS[step.icon];
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Icon className="h-8 w-8 text-neutral-700" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-6">
                {content.highlight.title}
              </h3>

              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                {content.highlight.description}
              </p>

              <div className="space-y-5">
                {content.highlight.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 bg-neutral-900 rounded-full mt-2 shrink-0"></span>
                    <div>
                      <div className="font-medium text-neutral-900 mb-1">
                        {b.title}
                      </div>
                      <p className="text-neutral-600 font-light leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}${
                  content.highlight.image.src
                }`}
                alt={content.highlight.image.alt}
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipCreationProcess;
