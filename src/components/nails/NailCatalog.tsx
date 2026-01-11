import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

import catalog from "@/data/nailCatalog.json";

type NailProduct = {
  id: number;
  name: string;
  price: string;
  category: string;
  images: string[]; // IMPORTANT: toate pozele produsului
  colors: string[];
  length: string;
};

const CATEGORY_ORDER = [
  "All",
  "Art Press-Ons",
  "3D Designs",
  "Korean-Inspired Trends",
  "Monochrome Elegance",
] as const;

const NailCatalog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORY_ORDER)[number]>("All");

  const products = (catalog.products as NailProduct[]) ?? [];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <section id="catalog" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Shop All
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light">
            Discover our full catalog, curated by category
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {CATEGORY_ORDER.map((category) => (
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
          {filteredProducts.map((product) => {
            // ✅ în catalog arătăm DOAR prima poză
            const coverImage = product.images?.[0]
              ? `${import.meta.env.BASE_URL}${product.images[0]}`
              : `${import.meta.env.BASE_URL}placeholder.svg`;

            return (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-none hover:shadow-xl transition-all duration-500 bg-white rounded-none cursor-pointer"
              >
                <div
                  className="relative overflow-hidden"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={coverImage}
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

                <div
                  className="p-6"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-wide">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-medium text-neutral-900">
                      {product.price}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium tracking-wider uppercase">
                      {product.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 font-light tracking-wide"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NailCatalog;
