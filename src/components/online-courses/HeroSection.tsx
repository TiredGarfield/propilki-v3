import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsGrid from "./StatsGrid";

type Props = {
  hero: {
    pill: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    button: string;
    buttonHref?: string;
    image: string;
    imageAlt?: string;
  };
  stats: Array<{
    icon: string;
    number: string;
    label: string;
  }>;
};

const isAbsoluteUrl = (v: string) => /^https?:\/\//i.test(v);

const resolveImg = (src?: string) => {
  if (!src)
    return `${
      import.meta.env.BASE_URL
    }images/online-courses/course-placeholder.webp`;
  if (isAbsoluteUrl(src)) return src;
  const cleaned = src.startsWith("/") ? src.slice(1) : src;
  return `${import.meta.env.BASE_URL}${cleaned}`;
};

const HeroSection = ({ hero, stats }: Props) => {
  const imageSrc = resolveImg(hero.image);

  return (
    <section className="pt-24 sm:pt-24 md:pt-28 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-3.5 py-1.5 mb-5 sm:mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {hero.pill}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-4 sm:mb-6 leading-tight">
              {hero.titleTop}
              <span className="block text-primary">{hero.titleBottom}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              {hero.description}
            </p>

            <Button
              asChild={Boolean(hero.buttonHref)}
              className="bg-primary px-6 sm:px-8 h-11"
            >
              {hero.buttonHref ? (
                <a href={hero.buttonHref} target="_blank" rel="noreferrer">
                  {hero.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center">
                  {hero.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </div>

          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden elegant-shadow">
            <img
              src={imageSrc}
              alt={hero.imageAlt ?? "Hero"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <StatsGrid stats={stats} />
      </div>
    </section>
  );
};

export default HeroSection;
