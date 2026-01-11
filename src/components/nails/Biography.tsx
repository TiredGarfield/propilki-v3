type Props = {
  content: any;
};

const Biography = ({ content }: Props) => {
  const id = content?.id ?? "biography";
  const paragraphs = (content?.paragraphs ?? []) as string[];

  const imgSrc = content?.image
    ? content.image.startsWith("http")
      ? content.image
      : `${import.meta.env.BASE_URL}${content.image}`
    : `${import.meta.env.BASE_URL}images/biography.jpg`;

  return (
    <section id={id} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
              {content?.title}
            </h2>
            <div className="w-24 h-px bg-neutral-300 mb-8"></div>

            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {content?.quote && <p className="italic">{content.quote}</p>}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden">
              <img
                src={imgSrc}
                alt={content?.imageAlt ?? "Artist portrait"}
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-light text-sm text-center">
                {content?.badge?.line1}
                <br />
                {content?.badge?.line2}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
