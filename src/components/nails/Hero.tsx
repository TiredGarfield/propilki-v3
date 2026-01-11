import { useEffect, useState } from "react";

type Props = {
  content: {
    autoPlayMs: number;
    slides: {
      id: number;
      name: string;
      description: string;
      image: string;
    }[];
  };
};

const Hero = ({ content }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content.slides.length);
    }, content.autoPlayMs);

    return () => clearInterval(timer);
  }, [content.autoPlayMs, content.slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div className="relative overflow-hidden h-full">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {content.slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 h-full">
                <div className="relative h-full">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-4xl font-medium mb-4">{slide.name}</h3>
                    <p className="text-lg opacity-90 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {content.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
