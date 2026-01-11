import { useEffect, useMemo, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type TestimonialItem = {
  name: string;
  rating: number;
  text: string;
  image: string;
};

type Props = {
  content: {
    title: string;
    subtitle: string;
    autoPlayMs: number;
    itemsPerPage: number;
    verifiedLabel: string;
    items: TestimonialItem[];
  };
};

const Testimonials = ({ content }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerPage = content.itemsPerPage;
  const totalSlides = useMemo(() => {
    return Math.max(1, Math.ceil(content.items.length / itemsPerPage));
  }, [content.items.length, itemsPerPage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, content.autoPlayMs);

    return () => clearInterval(timer);
  }, [content.autoPlayMs, totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const currentItems = useMemo(() => {
    const start = currentSlide * itemsPerPage;
    return content.items.slice(start, start + itemsPerPage);
  }, [content.items, currentSlide, itemsPerPage]);

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content.title}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentItems.map((t, index) => (
              <Card
                key={index}
                className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-neutral-600 font-light leading-relaxed mb-6">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{t.name}</p>
                    <p className="text-sm text-neutral-500">
                      {content.verifiedLabel}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm"
              type="button"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5 text-neutral-600" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-neutral-900 w-8"
                      : "bg-neutral-300"
                  }`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm"
              type="button"
              aria-label="Next testimonials"
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
