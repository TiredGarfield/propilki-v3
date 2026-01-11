import Header from "@/components/nails/Header";
import Hero from "@/components/nails/Hero";
import Biography from "@/components/nails/Biography";
import Benefits from "@/components/nails/Benefits";
import TipCreationProcess from "@/components/nails/TipCreationProcess";
import HowItWorks from "@/components/nails/HowItWorks";
import NailCatalog from "@/components/nails/NailCatalog";
import CelebrityWorks from "@/components/nails/CelebrityWorks";
import Championships from "@/components/nails/Championships";
import Competitions from "@/components/nails/Competitions";
import PackagingVisual from "@/components/nails/PackagingVisual";

import Testimonials from "@/components/nails/Testimonials";
import FAQ from "@/components/nails/FAQ";
import Footer from "@/components/nails/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NailCatalog />
      <Biography />
      <Benefits />
      <TipCreationProcess />
      <HowItWorks />
      <CelebrityWorks />
      <Championships />
      <Competitions />
      <PackagingVisual />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
