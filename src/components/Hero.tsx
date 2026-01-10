
import { useState, useEffect } from "react";

const categories = [
  {
    id: 1,
    name: "Art Tips",
    description: "Artistic designs with unique patterns and creative elements",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "3D",
    description: "Three-dimensional nail art with volume and texture",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "Korean Design",
    description: "Minimalist and elegant Korean-inspired nail designs",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=600&fit=crop&crop=faces"
  },
  {
    id: 4,
    name: "Solid Colors",
    description: "Classic single-color designs in premium finishes",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop&crop=faces"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div className="relative overflow-hidden h-full">
          <div 
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {categories.map((category) => (
              <div key={category.id} className="w-full flex-shrink-0 h-full">
                <div className="relative h-full">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-4xl font-medium mb-4">{category.name}</h3>
                    <p className="text-lg opacity-90 leading-relaxed max-w-2xl">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
