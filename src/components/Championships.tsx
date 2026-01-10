import { Trophy, Award, Star, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Golden Brush Sofia",
    year: "2023",
    category: "Best Nail Art Design",
    description: "First place winner for innovative press-on nail artistry and technical excellence"
  },
  {
    icon: Award,
    title: "International Recognition",
    year: "2023",
    category: "Innovation Award",
    description: "Recognized for advancing press-on nail technology and accessibility"
  },
  {
    icon: Star,
    title: "Artistic Excellence",
    year: "2022",
    category: "Creative Design",
    description: "Outstanding achievement in nail art creativity and execution"
  },
  {
    icon: Target,
    title: "Technical Mastery",
    year: "2022",
    category: "Precision & Quality",
    description: "Excellence in technical application and quality control standards"
  }
];

const Championships = () => {
  return (
    <section id="championships" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Championships & Awards
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Celebrating excellence and recognition in the nail art industry
          </p>
        </div>

        {/* Featured Achievement - Golden Brush Sofia */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-1">
                    Golden Brush Sofia
                  </h3>
                  <p className="text-amber-600 font-medium">2023 Champion</p>
                </div>
              </div>
              
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                The prestigious Golden Brush Sofia competition recognizes the finest talent in nail artistry across Europe. Our victory in the press-on nail category demonstrates our commitment to excellence and innovation in accessible nail art.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-neutral-600 font-light">First place in Press-On Category</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-neutral-600 font-light">Innovation in Design Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-neutral-600 font-light">Technical Mastery Recognition</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Golden Brush Sofia award ceremony"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Championships;
