import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

import catalog from "@/data/nailCatalog.json";

type NailProduct = {
  id: number;
  name: string;
  price: string;
  category: string;
  images: string[];
  colors: string[];
  length: string;
};

type Props = {
  content: {
    title: string;
    subtitle: string;
    categoryOrder: string[];
    badgeLabel: string;
  };
};

const MOBILE_PAGE_SIZE = 4; // <640px
const DESKTOP_PAGE_SIZE = 8; // >=640px

type PageToken = number | "…";

// ✅ max 4 cifre vizibile (ellipsis nu se numără)
const getVisiblePages = (current: number, total: number): PageToken[] => {
  if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1);

  // aproape de început
  if (current <= 3) return [1, 2, 3, "…", total];

  // aproape de final
  if (current >= total - 2) return [1, "…", total - 2, total - 1, total];

  // mijloc
  return [1, "…", current, "…", total];
};

const NailCatalog = ({ content }: Props) => {
  const navigate = useNavigate();

  const sectionRef = useRef<HTMLElement | null>(null);
  const categoryBarRef = useRef<HTMLDivElement | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    content.categoryOrder?.[0] ?? "All"
  );
  const [page, setPage] = useState(1);

  // ✅ responsive page size (Tailwind sm = 640px)
  const [pageSize, setPageSize] = useState<number>(() => {
    if (typeof window === "undefined") return DESKTOP_PAGE_SIZE;
    return window.matchMedia("(min-width: 640px)").matches
      ? DESKTOP_PAGE_SIZE
      : MOBILE_PAGE_SIZE;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(min-width: 640px)");
    const apply = () =>
      setPageSize(mql.matches ? DESKTOP_PAGE_SIZE : MOBILE_PAGE_SIZE);

    apply();

    // modern
    if (typeof mql.addEventListener === "function") {
      const onChange = () => apply();
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    // legacy (Safari vechi)
    // eslint-disable-next-line deprecation/deprecation
    const onChangeLegacy = () => apply();
    // eslint-disable-next-line deprecation/deprecation
    mql.addListener(onChangeLegacy);
    // eslint-disable-next-line deprecation/deprecation
    return () => mql.removeListener(onChangeLegacy);
  }, []);

  const products = (catalog.products as NailProduct[]) ?? [];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [products, selectedCategory]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  }, [filteredProducts.length, pageSize]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, page, pageSize]);

  // ✅ reset page când schimbi categoria SAU pageSize
  useEffect(() => {
    setPage(1);
  }, [selectedCategory, pageSize]);

  // ✅ clamp page dacă se schimbă totalPages
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const scrollToCatalogTop = () => {
    const el = sectionRef.current;
    if (!el) return;

    const headerOffset = 72; // header fixed
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // ✅ scroll și când schimbi pagina/categorie/pageSize (inclusiv Next/Prev)
  useEffect(() => {
    const id = requestAnimationFrame(() => scrollToCatalogTop());
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, selectedCategory, pageSize]);

  const ensureActiveCategoryVisible = (category: string) => {
    const bar = categoryBarRef.current;
    if (!bar) return;

    const target = bar.querySelector<HTMLButtonElement>(
      `[data-cat="${CSS.escape(category)}"]`
    );
    if (!target) return;

    const barRect = bar.getBoundingClientRect();
    const btnRect = target.getBoundingClientRect();

    if (btnRect.left < barRect.left || btnRect.right > barRect.right) {
      target.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const selectCategory = (category: string) => {
    ensureActiveCategoryVisible(category);
    setSelectedCategory(category);
  };

  const goToPage = (nextPage: number) => {
    const clamped = Math.min(totalPages, Math.max(1, nextPage));
    setPage(clamped);

    // ✅ extra safety: forțează scroll chiar și pe ultima pagină (când sunt puține produse)
    requestAnimationFrame(() => scrollToCatalogTop());
  };

  const visiblePages = useMemo<PageToken[]>(
    () => getVisiblePages(page, totalPages),
    [page, totalPages]
  );

  return (
    <section id="catalog" ref={sectionRef} className="py-24 px-6 bg-white">
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

        <div className="flex justify-center mb-10">
          <div
            ref={categoryBarRef}
            className="w-full max-w-5xl overflow-x-auto no-scrollbar"
          >
            <div className="flex gap-2 w-max mx-auto px-1">
              {content.categoryOrder.map((category) => (
                <Button
                  key={category}
                  data-cat={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => selectCategory(category)}
                  className={`px-6 py-2 rounded-none font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-black text-white hover:bg-neutral-800"
                      : "text-neutral-600 hover:text-black hover:bg-neutral-50"
                  }`}
                  type="button"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Tailwind standard grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pageItems.map((product) => {
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
                    loading="lazy"
                  />

                  <span className="absolute top-4 left-4 bg-white/90 text-neutral-700 text-xs font-medium px-2 py-1 tracking-wider uppercase">
                    {product.category}
                  </span>

                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full bg-black hover:bg-neutral-800 text-white rounded-none font-medium tracking-wide text-sm py-2">
                      <Eye className="h-3 w-3 mr-2" />
                      {content.badgeLabel}
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

        {/* ✅ Pagination: max 4 cifre vizibile + "…" (compact pe mobile) */}
        {totalPages > 1 && (
          <div className="mt-14 flex items-center justify-center">
            <div className="flex items-center gap-1 sm:gap-2 flex-nowrap overflow-x-auto no-scrollbar px-2">
              <Button
                variant="ghost"
                onClick={() => goToPage(page - 1)}
                disabled={page <= 1}
                className="rounded-none px-2"
                type="button"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="hidden sm:inline ml-1">Prev</span>
              </Button>

              {visiblePages.map((token, i) =>
                token === "…" ? (
                  <span
                    key={`dots-${i}`}
                    className="px-1 sm:px-2 text-neutral-400 text-sm select-none"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={token}
                    type="button"
                    onClick={() => goToPage(token)}
                    className={`h-10 min-w-10 px-3 text-sm font-medium tracking-wide border transition ${
                      token === page
                        ? "bg-black text-white border-black"
                        : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    {token}
                  </button>
                )
              )}

              <Button
                variant="ghost"
                onClick={() => goToPage(page + 1)}
                disabled={page >= totalPages}
                className="rounded-none px-2"
                type="button"
                aria-label="Next page"
              >
                <span className="hidden sm:inline mr-1">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NailCatalog;
