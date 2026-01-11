import { Trophy } from "lucide-react";

type Props = {
  content: any;
};

const Championships = ({ content }: Props) => {
  const award = content?.award ?? {};
  const items = (award?.items ?? []) as string[];

  const imgSrc = award?.image
    ? award.image.startsWith("http")
      ? award.image
      : `${import.meta.env.BASE_URL}${award.image}`
    : `${import.meta.env.BASE_URL}placeholder.svg`;

  return (
    <section
      id={content?.id ?? "championships"}
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content?.title}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-1">
                    {award?.name}
                  </h3>
                  <p className="text-amber-600 font-medium">{award?.label}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {items.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                    <span className="text-neutral-600 font-light">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] bg-amber-100 rounded-lg overflow-hidden">
              <img
                src={imgSrc}
                alt={award?.imageAlt ?? "Award ceremony"}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-lg text-sm font-medium text-neutral-900">
                {award?.badge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Championships;
