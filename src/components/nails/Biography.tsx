const Biography = () => {
  return (
    <section id="biography" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight">
              Meet the Artist
            </h2>
            <div className="w-24 h-px bg-neutral-300 mb-8"></div>

            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
              <p>
                With over a decade of expertise in the nail art industry, I have
                devoted my career to elevating the craft of press-on nail design
                and application into a true art form.
              </p>

              <p>
                My journey began as a traditional nail technician, but I soon
                discovered an irresistible passion for creating intricate,
                statement-making designs that transcend borders and trends. This
                vision inspired the creation of my signature press-on nail
                collection — where artistry meets innovation.
              </p>

              <p>
                Honored as a winner of the prestigious Golden Brush Sofia
                competition, my work has graced the runway at Kiki Ball London,
                appeared in leading fashion editorials, and adorned the hands of
                celebrities and style icons worldwide. Each set is meticulously
                hand-crafted, blending precision, luxury, and durability to set
                a new standard in the industry.
              </p>

              <p className="italic">
                “I believe that beauty should be as effortless as it is
                extraordinary. Through press-on technology, I deliver
                salon-perfected results that seamlessly complement any lifestyle
                — wherever in the world you may be.”
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/biography.jpg`}
                alt="Artist portrait"
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-light text-sm text-center">
                10+ Years
                <br />
                Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
