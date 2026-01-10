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
                With over a decade of experience in the nail art industry, our master artist has dedicated their career to perfecting the craft of press-on nail design and application.
              </p>
              
              <p>
                Starting as a traditional nail technician, they quickly discovered a passion for creating intricate designs that could be enjoyed by anyone, anywhere. This led to the development of our signature press-on nail collection.
              </p>
              
              <p>
                Their work has been featured in numerous fashion magazines and has graced the hands of celebrities and fashion enthusiasts worldwide. Each design is meticulously crafted with attention to detail and quality that sets new standards in the industry.
              </p>
              
              <p>
                "I believe that beautiful nails should be accessible to everyone. Through press-on technology, we can deliver salon-quality results that fit into any lifestyle."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Artist portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-light text-sm text-center">
                10+ Years<br />Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;