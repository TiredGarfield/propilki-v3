import { Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsGrid from "./StatsGrid";

const HeroSection = ({ hero, stats }) => {
  return (
    <section className="pt-20 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {hero.pill}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              {hero.titleTop}
              <span className="block text-primary">{hero.titleBottom}</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {hero.description}
            </p>

            <Button className="bg-primary px-8 py-3">
              {hero.button}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src={hero.image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <StatsGrid stats={stats} />
      </div>
    </section>
  );
};

export default HeroSection;
