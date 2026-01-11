import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  content: any;
};

const isAbsoluteUrl = (v: string) => /^https?:\/\//i.test(v);

const CelebrityWorks = ({ content }: Props) => {
  const [index, setIndex] = useState(0);

  const images = useMemo(() => {
    const raw = (content?.images ?? []) as string[];
    return raw.map((p) =>
      !p ? p : isAbsoluteUrl(p) ? p : `${import.meta.env.BASE_URL}${p}`
    );
  }, [content]);

  const total = images.length || 1;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const active = images[index] ?? `${import.meta.env.BASE_URL}placeholder.svg`;

  const bullets = (content?.bullets ?? []) as Array<{
    title?: string;
    description?: string;
  }>;

  return (
    <section
      id={content?.id ?? "celebrity-works"}
      className="py-24 px-6 bg-neutral-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            {content?.title}
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8" />
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="w-full h-[380px] lg:h-[520px] bg-neutral-800 rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={active}
                alt={`Catalina Cara nail art ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition"
                aria-label="Previous image"
                type="button"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur flex items-center justify-center transition"
                aria-label="Next image"
                type="button"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-4 right-4 bg-white/90 text-neutral-900 text-xs px-3 py-1 rounded-full">
              {Math.min(index + 1, total)} / {total}
            </div>
          </div>

          <div className="space-y-8">
            <span className="inline-block bg-white/90 text-neutral-900 px-4 py-1 rounded-full text-xs font-medium">
              {content?.pill}
            </span>

            <h3 className="text-3xl md:text-4xl font-light tracking-wide">
              {content?.rightTitle}
            </h3>

            <p className="text-neutral-300 font-light leading-relaxed">
              {content?.rightDescription}
            </p>

            <div className="space-y-5">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-medium">{b.title}</div>
                    <div className="text-neutral-300 font-light">
                      {b.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-neutral-400 font-light italic">
              {content?.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityWorks;
