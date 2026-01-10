import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const celebrityProjects = [
  {
    name: "Catalina Cara",
    project: "Album Cover Shoot",
    description: "Custom press-on designs for multiple album covers and promotional materials",
    images: [
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop&crop=center",
    ],
    category: "Music Industry"
  }
];

const CelebrityWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = celebrityProjects[0]; // Only one project (Catalina Cara)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [project.images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <section id="celebrity-works" className="py-24 bg-neutral-900 text-white">
      <div className="w-full">
        <div className="text-center mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Celebrity Works
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            Featuring exclusive works from Catalina Cara albums and high-profile collaborations
          </p>
        </div>

        {/* Full-width slideshow */}
        <div className="relative w-full h-[600px] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {project.images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <div className="relative h-full">
                  <img 
                    src={image} 
                    alt={`${project.name} - ${project.project} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Project info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <div className="mb-4">
                  <span className="bg-white/90 text-neutral-900 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-2">
                  {project.name}
                </h3>
                <h4 className="text-xl text-neutral-300 font-medium mb-4">
                  {project.project}
                </h4>
                <p className="text-neutral-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityWorks;