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
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content?.title}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((benefit, index) => {
            const Icon =
              (benefit.icon && (ICONS as any)[benefit.icon]) || Clock;

            return (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                    <Icon className="h-7 w-7 text-neutral-700" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed">
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
