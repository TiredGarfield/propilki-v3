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
    itemsPerPage: number; // (kept for data compatibility, not used in responsive calc)
    verifiedLabel: string;
    items: TestimonialItem[];
  };
};

const getItemsPerPage = () => {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;

  // Tailwind breakpoints: md=768, lg=1024
  if (w >= 1024) return 3; // lg
  if (w >= 768) return 2; // md
  return 1; // mobile
};

const Testimonials = ({ content }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(() =>
    getItemsPerPage()
  );

  // ✅ update on resize (no addListener/removeListener)
  useEffect(() => {
    const onResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalSlides = useMemo(() => {
    return Math.max(1, Math.ceil(content.items.length / itemsPerPage));
  }, [content.items.length, itemsPerPage]);

  // ✅ keep slide index valid when totalSlides changes (e.g. resize)
  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, totalSlides - 1));
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1) return;

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
    <section
      id="testimonials" 
      className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-5 tracking-tight">
            {content.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-neutral-300 mx-auto mb-5 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* ✅ 1 on mobile, 2 on md, 3 on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {currentItems.map((t, index) => (
              <Card
                key={`${currentSlide}-${index}`}
                className="p-6 sm:p-7 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none"
              >
                <div className="flex gap-1 mb-5 sm:mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-5 sm:mb-6">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-neutral-100 rounded-full overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">{t.name}</p>
                    <p className="text-xs sm:text-sm text-neutral-500">
                      {content.verifiedLabel}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {totalSlides > 1 && (
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
                    className={`h-2.5 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? "bg-neutral-900 w-7 sm:w-8"
                        : "bg-neutral-300 w-2.5 sm:w-3"
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
