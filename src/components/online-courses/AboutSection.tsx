import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = ({ about }) => {
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden elegant-shadow">
              <img
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-full object-cover hover-lift"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {about.pill}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
              {about.titleTop}
              <span className="block text-primary">{about.titleBottom}</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
              {about.paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg hover-lift">
                {about.button}
              </Button>

              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex -space-x-2">
                  {about.avatars.map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-primary rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm">{about.socialProof}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
