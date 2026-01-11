import { Truck, Shield, Clock, Sparkles } from "lucide-react";

const ICONS = {
  Truck,
  Shield,
  Clock,
  Sparkles,
} as const;

type Props = {
  content: any;
};

const Benefits = ({ content }: Props) => {
  const items = (content?.items ?? []) as Array<{
    icon?: keyof typeof ICONS | string;
    title?: string;
    description?: string;
  }>;

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-5 tracking-tight">
            {content?.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-neutral-300 mx-auto mb-5 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((benefit, index) => {
            const Icon =
              (benefit.icon && (ICONS as any)[benefit.icon]) || Clock;

            return (
              <div key={index} className="text-center group">
                <div className="mb-4 sm:mb-5 flex justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-neutral-700" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-neutral-900 mb-2 sm:mb-3 tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
