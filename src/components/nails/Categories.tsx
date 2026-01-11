import { Card } from "@/components/ui/card";

type Props = {
  content: any;
};

const Categories = ({ content }: Props) => {
  const items = (content?.items ?? []) as Array<{
    id: number;
    name: string;
    description: string;
    image: string;
    count: string;
  }>;

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 mb-4 sm:mb-5 tracking-tight">
            {content?.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-neutral-300 mx-auto mb-5 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer border-0 shadow-none hover:shadow-xl transition-all duration-500 bg-white rounded-none overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </div>
              <div className="p-6 sm:p-7 md:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-medium text-neutral-900 mb-2 sm:mb-3 tracking-wide">
                  {category.name}
                </h3>
                <p className="text-neutral-600 mb-3 sm:mb-4 font-light text-sm leading-relaxed">
                  {category.description}
                </p>
                <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">
                  {category.count}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
