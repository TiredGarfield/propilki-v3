
import { Truck, Shield, Clock, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Quick Application",
    description: "Professional results in just 5 minutes. No salon appointments needed."
  },
  {
    icon: Shield,
    title: "Long-Lasting",
    description: "Up to 2 weeks of perfect wear with proper application and care."
  },
  {
    icon: Sparkles,
    title: "Salon Quality",
    description: "Hand-crafted designs with premium materials for flawless finish."
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on all orders over $25. Fast delivery worldwide."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Experience the perfect blend of convenience, quality, and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <benefit.icon className="h-7 w-7 text-neutral-700" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
