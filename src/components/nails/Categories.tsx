
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Classic French",
    description: "Timeless elegance for every occasion",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop",
    count: "12 designs"
  },
  {
    id: 2,
    name: "Minimalist",
    description: "Clean lines, sophisticated simplicity",
    image: "https://images.unsplash.com/photo-1607349913338-552aad45f5ea?w=600&h=600&fit=crop",
    count: "15 designs"
  },
  {
    id: 3,
    name: "Statement",
    description: "Bold designs for confident expression",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&h=600&fit=crop",
    count: "18 designs"
  },
  {
    id: 4,
    name: "Artistic",
    description: "Hand-crafted masterpieces",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&h=600&fit=crop",
    count: "24 designs"
  }
];

const Categories = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Collections
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            Each collection tells a unique story, carefully curated to complement your individual style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer border-0 shadow-none hover:shadow-xl transition-all duration-500 bg-white rounded-none overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-wide">{category.name}</h3>
                <p className="text-neutral-600 mb-4 font-light text-sm leading-relaxed">{category.description}</p>
                <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">{category.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
