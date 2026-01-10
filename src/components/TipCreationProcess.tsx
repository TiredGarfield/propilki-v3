import { Palette, Sparkles, Target, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Palette,
    title: "Design Conceptualization",
    description: "Each design begins with careful conceptualization, drawing inspiration from current trends, seasonal themes, and artistic vision."
  },
  {
    icon: Target,
    title: "Precision Crafting",
    description: "Using premium materials and advanced techniques, each tip is crafted with meticulous attention to detail and quality control."
  },
  {
    icon: Sparkles,
    title: "Quality Enhancement",
    description: "Multiple layers of protection and enhancement ensure durability, shine, and long-lasting wear for every design."
  },
  {
    icon: CheckCircle,
    title: "Final Inspection",
    description: "Every set undergoes rigorous quality inspection before packaging to ensure perfect consistency and excellence."
  }
];

const TipCreationProcess = () => {
  return (
    <section id="tip-creation" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Tip Creation Process
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Discover the meticulous process behind every perfect press-on nail tip
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300 mx-auto">
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

        {/* Process Highlight */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-neutral-900 mb-6">
                Artistry Meets Technology
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                Our creation process combines traditional artistic techniques with cutting-edge technology to produce press-on nails that exceed expectations. Each design is carefully developed through multiple iterations to ensure perfect adhesion, comfort, and visual impact.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                  <span className="text-neutral-600 font-light">Premium materials sourcing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                  <span className="text-neutral-600 font-light">Hand-finished details</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                  <span className="text-neutral-600 font-light">Multi-stage quality testing</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
              <video 
                src="https://videos.pexels.com/video-files/6193170/6193170-hd_1920_1080_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipCreationProcess;