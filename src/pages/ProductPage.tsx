import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, ChevronLeft, ChevronRight } from "lucide-react";

import Header from "@/components/nails/Header";
import Footer from "@/components/nails/Footer";

import catalog from "@/data/nailCatalog.json";

type NailProduct = {
  id: number;
  name: string;
  price: string;
  category: string;
  images: string[];
  colors: string[];
  length: string;

  // optional (dacă vrei mai târziu în JSON)
  description?: string;
  badge?: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const products = (catalog.products as NailProduct[]) ?? [];

  const product = useMemo(() => {
    const pid = Number(id);
    return products.find((p) => p.id === pid);
  }, [id, products]);

  // reset index când se schimbă produsul
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [product?.id]);

  const gallery = useMemo(() => {
    const imgs = product?.images ?? [];
    // ✅ imagini din public/ -> folosim BASE_URL
    return imgs.map((p) => `${import.meta.env.BASE_URL}${p}`);
  }, [product]);

  const hasGallery = gallery.length > 1;

  const handlePreviousImage = () => {
    if (!hasGallery) return;
    setSelectedImageIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!hasGallery) return;
    setSelectedImageIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePreviousImage,
    trackMouse: true,
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!hasGallery) return;
      if (e.key === "ArrowLeft") handlePreviousImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasGallery, gallery.length]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 px-6">
          <div className="max-w-3xl mx-auto text-center py-24">
            <h1 className="text-2xl font-medium text-neutral-900 mb-4">
              Product not found
            </h1>
            <Button onClick={() => navigate("/#catalog")} variant="outline">
              Return to catalog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const activeImage =
    gallery[selectedImageIndex] ?? `${import.meta.env.BASE_URL}placeholder.svg`;

  const rating = product.rating ?? 4.9;
  const reviews = product.reviews ?? 0;
  const inStock = product.inStock ?? true;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/#catalog")}
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
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Navigation Arrows (doar dacă ai >1 imagine) */}
                {hasGallery && (
                  <>
                    <button
                      onClick={handlePreviousImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition"
                      aria-label="Previous image"
                      type="button"
                    >
                      <ChevronLeft className="h-5 w-5 text-neutral-900" />
                    </button>

                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition"
                      aria-label="Next image"
                      type="button"
                    >
                      <ChevronRight className="h-5 w-5 text-neutral-900" />
                    </button>
                  </>
                )}
              </div>

              {/* Dots Indicator (doar dacă ai >1 imagine) */}
              {hasGallery && (
                <div className="flex justify-center gap-2">
                  {gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        selectedImageIndex === index
                          ? "w-8 bg-neutral-900"
                          : "w-2 bg-neutral-300"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                      type="button"
                    />
                  ))}
                </div>
              )}

              {/* Thumbnails (doar dacă ai >1 imagine) */}
              {hasGallery && (
                <div className="grid grid-cols-4 gap-4">
                  {gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`aspect-square overflow-hidden border-2 transition-all duration-200 rounded-md ${
                        selectedImageIndex === index
                          ? "border-neutral-900"
                          : "border-neutral-200 hover:border-neutral-400"
                      }`}
                      type="button"
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
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
                            i < Math.floor(rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-neutral-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-600">
                      {rating}
                      {reviews ? ` (${reviews} reviews)` : ""}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-medium text-neutral-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-neutral-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <Card className="p-6 rounded-none shadow-none border border-neutral-200">
                <div className="space-y-5">
                  {product.description && (
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 mb-2">
                        Description
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-3">
                      Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between gap-6">
                        <span className="text-neutral-600">Category:</span>
                        <span className="text-neutral-900 text-right">
                          {product.category}
                        </span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span className="text-neutral-600">Length:</span>
                        <span className="text-neutral-900">
                          {product.length}
                        </span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span className="text-neutral-600">Colors:</span>
                        <span className="text-neutral-900 text-right">
                          {product.colors.join(", ")}
                        </span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span className="text-neutral-600">Stock:</span>
                        <span
                          className={
                            inStock ? "text-green-600" : "text-red-600"
                          }
                        >
                          {inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-neutral-900 hover:bg-neutral-800 text-white h-12 rounded-none"
                      size="lg"
                      onClick={() =>
                        window.open("https://wa.me/message", "_blank")
                      }
                      disabled={!inStock}
                    >
                      Order Now — {product.price}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
