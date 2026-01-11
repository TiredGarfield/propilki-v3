import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  `${import.meta.env.BASE_URL}images/celebrity/catalina-cara-1.jpeg`,
  `${import.meta.env.BASE_URL}images/celebrity/catalina-cara-2.jpeg`,
  `${import.meta.env.BASE_URL}images/celebrity/catalina-cara-3.jpeg`,
  `${import.meta.env.BASE_URL}images/celebrity/catalina-cara-4.jpeg`,
  `${import.meta.env.BASE_URL}images/celebrity/catalina-cara-5.jpeg`,
  `${import.meta.env.BASE_URL}images/celebrity/catalina-cara-6.jpeg`,
];

const CelebrityWorks = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section
      id="celebrity-works"
      className="py-24 px-6 bg-neutral-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Collaborations with Celebrities
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8" />
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            Proudly featuring exclusive designs created for Catalina Cara’s
            albums alongside high-profile collaborations with renowned artists
            and influencers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT – Carousel */}
          <div className="relative">
            <div className="w-full h-[380px] lg:h-[520px] bg-neutral-800 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={images[index]}
                alt={`Catalina Cara nail art ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-xs px-3 py-1 rounded-full">
              {index + 1} / {images.length}
            </div>
          </div>

          {/* RIGHT – Text */}
          <div className="space-y-8">
            <span className="inline-block bg-white/90 text-neutral-900 px-4 py-1 rounded-full text-xs font-medium">
              Collaborations with Celebrities
            </span>

            <h3 className="text-3xl md:text-4xl font-light tracking-wide">
              Catalina Cara — Album Cover Shoot
            </h3>

            <p className="text-neutral-300 font-light leading-relaxed">
              For Catalina Cara’s album cover, I designed custom crystal daisies
              — each meticulously handcrafted from transparent gel. These
              sculptural details were mounted on nude press-ons, balancing
              subtle sophistication with striking precision.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                <div>
                  <div className="text-white font-medium">
                    Classic French Nails
                  </div>
                  <div className="text-neutral-300 font-light">
                    Timeless elegance refined with a modern, editorial finish.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                <div>
                  <div className="text-white font-medium">
                    Transparent 3D Crystal Fantasy
                  </div>
                  <div className="text-neutral-300 font-light">
                    Light-catching sculptural forms for an ethereal, couture
                    effect.
                  </div>
                </div>
              </div>
            </div>

            <p className="text-neutral-400 font-light italic">
              Creating this piece was an absolute joy and privilege.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityWorks;
