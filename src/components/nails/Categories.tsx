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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content?.title}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            {content?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer border-0 shadow-none hover:shadow-xl transition-all duration-500 bg-white rounded-none overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-wide">
                  {category.name}
                </h3>
                <p className="text-neutral-600 mb-4 font-light text-sm leading-relaxed">
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
