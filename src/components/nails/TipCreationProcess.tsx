import { Palette, Sparkles, Target, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Palette,
    title: "Design Concept",
    description:
      "Inspired by fashion runways, seasonal moods, and artistic imagination, each design is refined to feel timeless and of-the-moment.",
  },
  {
    icon: Target,
    title: "Precise Crafting",
    description:
      "Using the finest materials, each tip is crafted with precision for a flawless fit and luxurious feel.",
  },
  {
    icon: Sparkles,
    title: "Quality Enhancement",
    description:
      "Layered enhancement delivers durability, mirror-like shine, and long-lasting wear.",
  },
  {
    icon: CheckCircle,
    title: "Final Inspection",
    description:
      "Every set is inspected to ensure consistency, elegance, and our signature standard of excellence.",
  },
];

const TipCreationProcess = () => {
  return (
    <section id="tip-creation" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Tip Creation Process
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Every set begins long before the first brushstroke — it starts with
            a vision. A spark of inspiration that evolves into a piece of
            wearable art.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <step.icon className="h-8 w-8 text-neutral-700" />
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
          ))}
        </div>

        {/* Highlight */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-6">
                Artistry Meets Technology
              </h3>

              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                Our creation process blends timeless artistry with modern
                innovation to deliver press-on nails that exceed expectations.
              </p>

              {/* CLEAN BULLETS */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="w-2.5 h-2.5 bg-neutral-900 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <div className="font-medium text-neutral-900 mb-1">
                      Premium Material Sourcing
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      Carefully selected materials ensure durability, comfort,
                      and a flawless finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-2.5 h-2.5 bg-neutral-900 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <div className="font-medium text-neutral-900 mb-1">
                      Hand-Finished Details
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      Each nail is meticulously finished by skilled artisans for
                      unmatched precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-2.5 h-2.5 bg-neutral-900 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <div className="font-medium text-neutral-900 mb-1">
                      Multi-Stage Quality Testing
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      Every set is tested at multiple stages to ensure lasting
                      adhesion and impeccable appearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image (public + base-aware) */}
            <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
              <img
                src={`${
                  import.meta.env.BASE_URL
                }images/artistry-meets-technology.jpg`}
                alt="Artistry Meets Technology"
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
