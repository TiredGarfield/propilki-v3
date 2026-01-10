
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Benefits from "@/components/Benefits";
import TipCreationProcess from "@/components/TipCreationProcess";
import HowItWorks from "@/components/HowItWorks";
import NailCatalog from "@/components/NailCatalog";
import CelebrityWorks from "@/components/CelebrityWorks";
import Championships from "@/components/Championships";
import Competitions from "@/components/Competitions";
import PackagingVisual from "@/components/PackagingVisual";

import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Biography />
      <Benefits />
      <TipCreationProcess />
      <HowItWorks />
      <NailCatalog />
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
