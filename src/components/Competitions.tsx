import { Sparkles, Users, Clock, MapPin } from "lucide-react";

const competitionEvents = [
  {
    icon: Sparkles,
    title: "KIKI BALL LONDON",
    date: "March 2024",
    location: "London, UK",
    category: "Featured Performance",
    description: "Exclusive nail art showcase featuring avant-garde designs and live application demonstrations"
  },
  {
    icon: Users,
    title: "International Showcase",
    date: "July 2023",
    location: "Paris, France",
    category: "Competition Judge",
    description: "Served as expert judge for emerging nail artists in the European championships"
  },
  {
    icon: Clock,
    title: "Speed Challenge",
    date: "November 2023",
    location: "Milan, Italy",
    category: "Demonstration",
    description: "Live demonstration of precision press-on application techniques under time constraints"
  }
];

const Competitions = () => {
  return (
    <section id="competitions" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Competition Highlights
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Featuring KIKI BALL LONDON and international competition appearances
          </p>
        </div>

        {/* Featured Event - KIKI BALL LONDON */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="KIKI BALL LONDON event"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-1">
                    KIKI BALL LONDON
                  </h3>
                  <p className="text-purple-600 font-medium">March 2024</p>
                </div>
              </div>
              
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                A groundbreaking collaboration with KIKI BALL LONDON, featuring an exclusive nail art performance that celebrates creativity, diversity, and artistic expression. This unique event showcased the intersection of ballroom culture and high-fashion nail artistry.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-neutral-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">London, United Kingdom</p>
                    <p className="text-sm text-neutral-500">East London Cultural Quarter</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-neutral-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Live Performance & Workshop</p>
                    <p className="text-sm text-neutral-500">Interactive demonstration for 200+ attendees</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-neutral-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">Avant-Garde Designs</p>
                    <p className="text-sm text-neutral-500">Custom press-on collections inspired by ballroom culture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Competitions;
