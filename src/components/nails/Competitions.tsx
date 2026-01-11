import { Sparkles } from "lucide-react";

type Props = {
  content: {
    sectionTitle: string;
    sectionSubtitle: string;
    images: string[];
    eventTitle: string;
    eventDate: string;
    description: string;
    highlights: { title?: string; text: string }[];
    closing: string;
  };
};

const Competitions = ({ content }: Props) => {
  return (
    <section id="competitions" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            {content.sectionTitle}
          </h2>
          <div className="w-24 h-px bg-neutral-300 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {content.sectionSubtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              {content.images.map((img, i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${img}`}
                    alt={`Competition image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-1">
                    {content.eventTitle}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {content.eventDate}
                  </p>
                </div>
              </div>

              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                {content.description}
              </p>

              <div className="space-y-5">
                {content.highlights.map((h, i) => (
                  <div key={i}>
                    {h.title ? (
                      <h4 className="font-medium text-neutral-900 mb-1">
                        {h.title}
                      </h4>
                    ) : null}
                    <p className="text-neutral-600 font-light leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}

                <p className="text-neutral-600 font-light italic">
                  {content.closing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
