import { Package, Shield, Sparkles, Recycle } from "lucide-react";

const packagingFeatures = [
  {
    icon: Package,
    title: "Premium Presentation",
    description: "Elegant packaging that reflects the quality of our handcrafted press-on nails"
  },
  {
    icon: Shield,
    title: "Protective Design",
    description: "Secure packaging ensures your nail tips arrive in perfect condition"
  },
  {
    icon: Sparkles,
    title: "Unboxing Experience",
    description: "Thoughtfully designed for a luxurious and memorable unboxing moment"
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Sustainable materials and recyclable components for environmental responsibility"
  }
];

const PackagingVisual = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Visuals of Packaged Tips
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            Experience the luxury from the moment you receive your custom nail art
          </p>
        </div>

        {/* Main Packaging Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light mb-6">
                Crafted with Care
              </h3>
              <p className="text-neutral-300 font-light leading-relaxed mb-8">
                Every set of press-on nails is carefully packaged in our signature boxes, designed to protect your investment and create an unforgettable unboxing experience. From the moment you receive your package, you'll understand the attention to detail that goes into every aspect of our brand.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {packagingFeatures.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-neutral-300" />
                  </div>
                  <h4 className="font-medium text-white">{feature.title}</h4>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-800 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Premium nail packaging"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <span className="text-white font-light text-sm text-center">
                Luxury<br />Unboxing
              </span>
            </div>
          </div>
        </div>


        {/* Package Contents */}
        <div className="bg-neutral-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-neutral-700 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop&crop=center" 
                alt="Package contents laid out"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-6">
                What's Inside Every Package
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-medium">
                    1
                  </div>
                  <span className="text-neutral-300 font-light">24 Premium press-on nail tips (12 sizes x 2)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-medium">
                    2
                  </div>
                  <span className="text-neutral-300 font-light">Professional nail file</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-medium">
                    3
                  </div>
                  <span className="text-neutral-300 font-light">Cuticle pusher tool</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-medium">
                    4
                  </div>
                  <span className="text-neutral-300 font-light">Adhesive sheets (extra included)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-xs font-medium">
                    5
                  </div>
                  <span className="text-neutral-300 font-light">Step-by-step instruction card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingVisual;