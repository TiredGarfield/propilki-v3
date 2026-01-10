
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const nailProducts = [
  {
    id: 1,
    name: "Sunset Ombre",
    price: "$22.99",
    category: "Art Tips",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&h=500&fit=crop&crop=faces",
    colors: ["Orange", "Pink", "Purple"],
    length: "Medium"
  },
  {
    id: 2,
    name: "Crystal Clear",
    price: "$18.99",
    category: "Korean Design",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=500&fit=crop&crop=faces",
    colors: ["Clear", "White"],
    length: "Short"
  },
  {
    id: 3,
    name: "Midnight Sparkle",
    price: "$26.99",
    category: "3D",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=500&fit=crop&crop=faces",
    colors: ["Black", "Silver"],
    length: "Long"
  },
  {
    id: 4,
    name: "French Moderne",
    price: "$20.99",
    category: "Slides & Stamping",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop&crop=faces",
    colors: ["White", "Nude"],
    length: "Medium"
  },
  {
    id: 5,
    name: "Holographic Dreams",
    price: "$28.99",
    category: "3D",
    image: "https://images.unsplash.com/photo-1621341863032-7dccbe0e3de9?w=400&h=500&fit=crop&crop=faces",
    colors: ["Holographic"],
    length: "Long"
  },
  {
    id: 6,
    name: "Blush Pink",
    price: "$19.99",
    category: "Solid Colors",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=500&fit=crop&crop=faces",
    colors: ["Pink"],
    length: "Short"
  },
  {
    id: 7,
    name: "Marble Luxe",
    price: "$25.99",
    category: "Art Tips",
    image: "https://images.unsplash.com/photo-1607349913338-552aad45f5ea?w=400&h=500&fit=crop&crop=faces",
    colors: ["White", "Gold"],
    length: "Medium"
  },
  {
    id: 8,
    name: "Classic Red",
    price: "$21.99",
    category: "Solid Colors",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=500&fit=crop&crop=faces",
    colors: ["Red"],
    length: "Medium"
  }
];

const categories = ["All", "Art Tips", "3D", "Korean Design", "Solid Colors"];

const NailCatalog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = selectedCategory === "All" 
    ? nailProducts 
    : nailProducts.filter(product => product.category === selectedCategory);

  return (
    <section id="courses" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Complete Catalog
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light">Explore our entire collection by category</p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-none font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-black text-white hover:bg-neutral-800" 
                  : "text-neutral-600 hover:text-black hover:bg-neutral-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-none hover:shadow-xl transition-all duration-500 bg-white rounded-none cursor-pointer">
              <div className="relative overflow-hidden" onClick={() => navigate(`/product/${product.id}`)}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <span className="absolute top-4 left-4 bg-white/90 text-neutral-700 text-xs font-medium px-2 py-1 tracking-wider uppercase">
                  {product.category}
                </span>
                
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button className="w-full bg-black hover:bg-neutral-800 text-white rounded-none font-medium tracking-wide text-sm py-2">
                    <Eye className="h-3 w-3 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6" onClick={() => navigate(`/product/${product.id}`)}>
                <h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-wide">{product.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-medium text-neutral-900">{product.price}</span>
                  <span className="text-xs text-neutral-500 font-medium tracking-wider uppercase">{product.length}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {product.colors.map((color, index) => (
                    <span key={index} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 font-light tracking-wide">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NailCatalog;
