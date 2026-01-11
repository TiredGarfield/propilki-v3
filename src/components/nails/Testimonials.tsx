import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type Props = {
  content: {
    title: string;
    subtitle: string;
    autoPlayMs: number;
    items: { text: string }[];
  };
};

const Testimonials = ({ content }: Props) => {
  const items = useMemo(() => content?.items ?? [], [content]);
  const [index, setIndex] = useState(0);

  const hasMany = items.length > 1;

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!hasMany) return;
    const timer = setInterval(next, content.autoPlayMs);
    return () => clearInterval(timer);
  }, [hasMany, content.autoPlayMs]);

  useEffect(() => {
    if (!hasMany) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasMany]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    e.currentTarget.dataset.x = String(t.clientX);
    e.currentTarget.dataset.y = String(t.clientY);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const x0 = Number(e.currentTarget.dataset.x);
    const y0 = Number(e.currentTarget.dataset.y);
    const t = e.changedTouches[0];
    const dx = t.clientX - x0;
    const dy = t.clientY - y0;
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (dx > 40) prev();
    if (dx < -40) next();
  };

  const text = items[index]?.text ?? "";

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-neutral-50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-5 tracking-tight">
            {content.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-neutral-300 mx-auto mb-5 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          {hasMany && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center hover:bg-neutral-100 transition"
                type="button"
              >
                <ChevronLeft className="h-5 w-5 text-neutral-900" />
              </button>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center hover:bg-neutral-100 transition"
                type="button"
              >
                <ChevronRight className="h-5 w-5 text-neutral-900" />
              </button>
            </>
          )}

          <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Card className="p-6 sm:p-8 md:p-10 border border-neutral-200 shadow-sm">
              <blockquote className="text-sm sm:text-base md:text-lg text-neutral-600 font-light leading-relaxed text-center italic">
                “{text}”
              </blockquote>
            </Card>
          </div>

          {hasMany && (
            <div className="flex justify-center gap-2 mt-5 sm:mt-6">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === index ? "bg-neutral-900" : "bg-neutral-300"
                  }`}
                  type="button"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
