import { useEffect, useMemo, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const ReviewsSection = ({ reviews }) => {
  const items = useMemo(() => reviews?.items ?? [], [reviews]);
  const [index, setIndex] = useState(0);

  const hasMany = items.length > 1;

  const goPrev = () => {
    if (!items.length) return;
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!items.length) return;
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // keyboard support
  useEffect(() => {
    if (!hasMany) return;

    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMany, items.length]);

  // touch swipe support (no libs)
  const onTouchStart = (e) => {
    if (!hasMany) return;
    const t = e.touches?.[0];
    if (!t) return;
    e.currentTarget.dataset.touchX = String(t.clientX);
    e.currentTarget.dataset.touchY = String(t.clientY);
  };

  const onTouchEnd = (e) => {
    if (!hasMany) return;

    const startX = Number(e.currentTarget.dataset.touchX || 0);
    const startY = Number(e.currentTarget.dataset.touchY || 0);
    const t = e.changedTouches?.[0];
    if (!t) return;

    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    // ignore vertical scroll gestures
    if (Math.abs(dy) > Math.abs(dx)) return;

    // threshold
    if (dx > 40) goPrev();
    if (dx < -40) goNext();
  };

  const currentText = items[index] ?? "";

  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {reviews.pill}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            {reviews.title}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav buttons */}
          {hasMany && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous review"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-muted smooth-transition"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next review"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-muted smooth-transition"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </>
          )}

          {/* Slide */}
          <div
            className="select-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Card className="p-8 lg:p-12 border border-border elegant-shadow">
              <blockquote className="text-lg text-muted-foreground font-light leading-relaxed text-center italic">
                “{currentText}”
              </blockquote>
            </Card>
          </div>

          {/* Dots */}
          {hasMany && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 w-2 rounded-full smooth-transition ${
                    i === index ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
