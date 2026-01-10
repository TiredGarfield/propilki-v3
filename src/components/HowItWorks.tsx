
const steps = [
  {
    number: "01",
    title: "Prep Your Nails",
    description: "Clean and shape your natural nails. Push back cuticles and buff lightly for the best adhesion."
  },
  {
    number: "02", 
    title: "Choose Your Size",
    description: "Select the perfect fit for each nail. Our sets include 12 sizes to ensure a flawless match."
  },
  {
    number: "03",
    title: "Apply & Press",
    description: "Remove the backing, align at the cuticle, and press down firmly. Smooth out any air bubbles."
  },
  {
    number: "04",
    title: "File & Shape",
    description: "Trim to your desired length and file the edges. Apply a thin layer of top coat for extra durability."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            How It Works
          </h2>
          <div className="w-24 h-px bg-neutral-600 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-300 font-light max-w-2xl mx-auto">
            Get salon-quality nails in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <span className="text-6xl font-extralight text-neutral-500 tracking-wider">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-medium mb-4 tracking-wide">
                {step.title}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-neutral-800 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light mb-4">Need Help?</h3>
            <p className="text-neutral-300 font-light mb-6">
              Watch our detailed application tutorial or download our step-by-step guide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-neutral-900 px-6 py-3 font-medium tracking-wide hover:bg-neutral-100 transition-colors">
                Watch Tutorial
              </button>
              <button className="border border-neutral-600 text-white px-6 py-3 font-medium tracking-wide hover:bg-neutral-800 transition-colors">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
