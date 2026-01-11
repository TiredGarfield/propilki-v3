type Props = {
  content: {
    title: string;
    subtitle: string;
    insideTitle: string;
    insideItems: string[];
    image: { src: string; alt: string };
    badge: { line1: string; line2: string };
  };
};

const PackagingVisual = ({ content }: Props) => {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            {content.title}
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-light mb-6">{content.insideTitle}</h3>

            <div className="space-y-4">
              {content.insideItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                  <span className="text-neutral-300 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative self-start">
            <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
              <img
                src={content.image.src}
                alt={content.image.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <span className="text-white font-light text-xs text-center">
                {content.badge.line1}
                <br />
                {content.badge.line2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingVisual;
