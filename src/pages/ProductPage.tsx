import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Combined product data from both catalogs
const allProducts = [
  // From NailCatalog
  {
    id: 1,
    name: "Sunset Ombre",
    price: "$22.99",
    category: "Art Tips",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&h=500&fit=crop&crop=faces",
    colors: ["Orange", "Pink", "Purple"],
    length: "Medium",
    description: "Beautiful sunset ombre design with seamless color transitions from warm orange to deep purple. Perfect for special occasions or everyday elegance.",
    gallery: [
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=1000&fit=crop&crop=faces"
    ],
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: 2,
    name: "Crystal Clear",
    price: "$18.99",
    category: "Korean Design",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=500&fit=crop&crop=faces",
    colors: ["Clear", "White"],
    length: "Short",
    description: "Minimalist Korean-inspired design with crystal clear finish and subtle white accents. Clean, sophisticated look for any occasion.",
    gallery: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1621341863032-7dccbe0e3de9?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1000&fit=crop&crop=faces"
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  {
    id: 3,
    name: "Midnight Sparkle",
    price: "$26.99",
    category: "3D",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=500&fit=crop&crop=faces",
    colors: ["Black", "Silver"],
    length: "Long",
    description: "Dramatic 3D design featuring deep black base with sparkling silver accents. Three-dimensional elements create stunning visual depth.",
    gallery: [
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1607349913338-552aad45f5ea?w=800&h=1000&fit=crop&crop=faces"
    ],
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  // From FeaturedProducts
  {
    id: 101,
    name: "Rose Gold Elegance",
    price: "$24.99",
    originalPrice: "$34.99",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500&h=600&fit=crop&crop=faces",
    badge: "Bestseller",
    colors: ["Rose Gold", "Nude"],
    length: "Medium",
    description: "Sophisticated rose gold finish with subtle shimmer and nude undertones. Our bestselling design perfect for any occasion.",
    gallery: [
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=1000&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=1000&fit=crop&crop=faces"
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = allProducts.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-neutral-900 mb-4">Product not found</h1>
          <Button onClick={() => navigate("/#catalog")} variant="outline">
            Return to catalog
          </Button>
        </div>
      </div>
    );
  }


  const handlePreviousImage = () => {
    setSelectedImageIndex(prev => 
      prev === 0 ? product.gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prev => 
      prev === product.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePreviousImage,
    trackMouse: true
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePreviousImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 text-neutral-600 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to catalog
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative group" {...swipeHandlers}>
                <div className="aspect-square overflow-hidden bg-neutral-50 rounded-lg">
                  <img 
                    src={product.gallery[selectedImageIndex]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={handlePreviousImage}
                  className="gallery-nav-btn prev"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button
                  onClick={handleNextImage}
                  className="gallery-nav-btn next"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="gallery-dots">
                {product.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`gallery-dot ${selectedImageIndex === index ? 'active' : ''}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden border-2 transition-all duration-300 rounded-md hover-lift ${
                      selectedImageIndex === index 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8 fade-in">
              <div>
                {product.badge && (
                  <Badge className="mb-4 bg-neutral-900 text-white hover:bg-neutral-800">
                    {product.badge}
                  </Badge>
                )}
                
                <h1 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-4 tracking-tight">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-neutral-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-medium text-neutral-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-neutral-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-3">Description</h3>
                  <p className="text-neutral-600 leading-relaxed">{product.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-3">Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Category:</span>
                      <span className="text-neutral-900">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Length:</span>
                      <span className="text-neutral-900">{product.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Colors:</span>
                      <span className="text-neutral-900">{product.colors.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Stock:</span>
                      <span className="text-green-600">In Stock</span>
                    </div>
                  </div>
                </div>


                <div className="pt-6">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 hover-glow smooth-transition"
                    size="lg"
                    onClick={() => window.open('https://wa.me/message', '_blank')}
                  >
                    Order Now - {product.price}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;