
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely love these press-on nails! They look so natural and last exactly as promised. I've gotten so many compliments.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Maria Garcia",
    rating: 5,
    text: "The quality is amazing and application is so easy. I save so much time and money compared to going to the salon.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Chen",
    rating: 5,
    text: "These are a game-changer! Perfect for someone with a busy lifestyle who still wants beautiful nails.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lisa Rodriguez",
    rating: 5,
    text: "I'm obsessed with the quality and designs. They stay on perfectly for weeks and the application is so simple!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Jessica Parker",
    rating: 5,
    text: "Amazing customer service and incredible nail designs. I get asked about my nails everywhere I go!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Amanda Lee",
    rating: 5,
    text: "Best press-on nails I've ever tried. They look completely natural and professional. Highly recommend!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Nicole Brown",
    rating: 5,
    text: "The variety of designs is incredible and the quality is top-notch. These have completely replaced my salon visits.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Rachel Davis",
    rating: 5,
    text: "Perfect for busy moms like me! Beautiful nails in minutes and they last for weeks. Absolutely love them!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Sophia Wilson",
    rating: 5,
    text: "The attention to detail is incredible. Each set feels custom-made and the finish is always flawless.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const start = currentSlide * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Real experiences from our valued customers who trust our premium press-on nails
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentTestimonials().map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-neutral-600 font-light leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">Verified Customer</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm"
            >
              <ChevronLeft className="h-5 w-5 text-neutral-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-neutral-900 w-8' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm"
            >
              <ChevronRight className="h-5 w-5 text-neutral-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
