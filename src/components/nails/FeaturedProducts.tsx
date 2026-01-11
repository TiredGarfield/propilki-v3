import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

type Props = {
  content: {
    title: string;
    subtitle: string;
    items: {
      id: number;
      name: string;
      price: string;
      originalPrice?: string;
      image: string;
      badge?: string;
      description: string;
    }[];
  };
};

const FeaturedProducts = ({ content }: Props) => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content.title}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.items.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-none hover:shadow-xl transition-all duration-500 bg-white rounded-none cursor-pointer"
            >
              <div
                className="relative overflow-hidden"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {product.badge ? (
                  <span className="absolute top-6 left-6 bg-black text-white text-xs font-medium px-3 py-1 tracking-wider uppercase">
                    {product.badge}
                  </span>
                ) : null}

                <div className="absolute inset-x-6 bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button className="w-full bg-black hover:bg-neutral-800 text-white rounded-none font-medium tracking-wide">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              <div
                className="p-8"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <h3 className="text-xl font-medium text-neutral-900 mb-2 tracking-wide">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 font-light leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-medium text-neutral-900">
                    {product.price}
                  </span>
                  {product.originalPrice ? (
                    <span className="text-lg text-neutral-400 line-through font-light">
                      {product.originalPrice}
                    </span>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
