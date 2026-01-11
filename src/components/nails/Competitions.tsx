import { Sparkles } from "lucide-react";

const Competitions = () => {
  return (
    <section id="competitions" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Competition Highlights
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            KIKI BALL LONDON — March 2024
          </p>
        </div>

        {/* Featured Event */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/kiki-ball/kiki-ball-1.jpeg`}
                  alt="KIKI BALL LONDON performance"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/kiki-ball/kiki-ball-2.jpeg`}
                  alt="KIKI BALL LONDON nail art detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-1">
                    KIKI BALL LONDON
                  </h3>
                  <p className="text-purple-600 font-medium">March 2024</p>
                </div>
              </div>

              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                We are proud to share our groundbreaking collaboration with KIKI
                BALL LONDON, where an exclusive nail art performance celebrated
                creativity, diversity, and artistic expression. This vibrant
                event showcased a dynamic fusion of ballroom culture and
                high-fashion nail artistry.
              </p>

              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-neutral-900 mb-1">
                    Custom Press-On Collection
                  </h4>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Inspired by the bold spirit of ballroom culture, this
                    exclusive set embodies opulence and innovation.
                  </p>
                </div>

                <p className="text-neutral-600 font-light leading-relaxed">
                  This category honored the memory of{" "}
                  <span className="font-medium text-neutral-900">
                    Zahara Brown
                  </span>
                  , a talented transgender nail artist from{" "}
                  <span className="font-medium">@dahouseofphalanges</span>,
                  celebrated for her vibrant artistic legacy within London’s
                  ballroom scene.
                </p>

                <p className="text-neutral-600 font-light leading-relaxed">
                  The winning design was crafted in a luxurious{" "}
                  <span className="font-medium text-neutral-900">
                    baroque style
                  </span>{" "}
                  — a stunning display of elegance and splendor.
                </p>

                <p className="text-neutral-600 font-light italic">
                  Creating this piece was an absolute joy and privilege.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
