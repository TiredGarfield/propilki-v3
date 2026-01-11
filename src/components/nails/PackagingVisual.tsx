const PackagingVisual = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Visuals of Packaged Tips
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            Convenient & Reusable Packaging
          </p>
        </div>

        {/* MAIN BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* What’s Inside */}
          <div>
            <h3 className="text-3xl font-light mb-6">
              What’s Inside Every Package
            </h3>

            <div className="space-y-4">
              {[
                "10 Premium Press-On Nails (5 sizes × 2)",
                "1 Professional Nail File",
                "1 Cuticle Pusher Tool",
                "48 Adhesive Tabs (plus extras included)",
                "1 Step-by-Step Instruction Card",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </div>
                  <span className="text-neutral-300 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image – FROM SECOND BLOCK (LOWER HEIGHT) */}
          <div className="relative self-start">
            <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop&crop=center"
                alt="Package contents laid out"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge from first block */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <span className="text-white font-light text-xs text-center">
                Reusable
                <br />
                Storage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingVisual;
