import rawContent from "@/data/solo.json";
const content = rawContent as any;

import Header from "@/components/nails/Header";
import Hero from "@/components/nails/Hero";
import Benefits from "@/components/nails/Benefits";
import NailCatalog from "@/components/nails/NailCatalog";
import TipCreationProcess from "@/components/nails/TipCreationProcess";
import HowItWorks from "@/components/nails/HowItWorks";
import PackagingVisual from "@/components/nails/PackagingVisual";
import Testimonials from "@/components/nails/Testimonials";
import FAQ from "@/components/nails/FAQ";
import Biography from "@/components/nails/Biography";
import Championships from "@/components/nails/Championships";
import Competitions from "@/components/nails/Competitions";
import CelebrityWorks from "@/components/nails/CelebrityWorks";
import Footer from "@/components/nails/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header content={content.header} />

      <Hero content={content.heroCarousel} />

      {/* <Benefits content={content.benefits} /> */}

      <NailCatalog content={content.catalog} />

      <TipCreationProcess content={content.tipCreationProcess} />

      <HowItWorks content={content.howItWorks} />

      <PackagingVisual content={content.packaging} />

      <Biography content={content.biography} />

      <Championships content={content.championships} />

      <Competitions content={content.competitions} />

      <CelebrityWorks content={content.celebrityWorks} />

      <Testimonials content={content.testimonials} />

      <FAQ content={content.faq} />

      <Footer content={content.footer} />
    </div>
  );
};

export default Index;
