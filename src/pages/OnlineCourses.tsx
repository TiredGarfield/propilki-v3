import Header from "@/components/nails/Header";
import Footer from "@/components/nails/Footer";

import HeroSection from "@/components/online-courses/HeroSection";
import AboutSection from "@/components/online-courses/AboutSection";
import CoursesSection from "@/components/online-courses/CoursesSection";
import ReviewsSection from "@/components/online-courses/ReviewsSection";
import FAQSection from "@/components/online-courses/FAQSection";

import rawPropilki from "@/data/propilki.json";
import rawSolo from "@/data/solo.json";

const propilki = rawPropilki as any;
const solo = rawSolo as any;

const OnlineCourses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header content={solo.header} />

      <HeroSection hero={propilki.hero} stats={propilki.stats} />

      <AboutSection about={propilki.about} />

      <CoursesSection
        section={propilki.coursesSection}
        courses={propilki.courses}
        ui={propilki.ui}
      />

      <ReviewsSection reviews={propilki.reviews} />

      <FAQSection faq={propilki.faq} />

      <Footer content={solo.footer} />
    </div>
  );
};

export default OnlineCourses;
