import Header from "@/components/nails/Header";
import Footer from "@/components/nails/Footer";

import HeroSection from "@/components/online-courses/HeroSection";
import AboutSection from "@/components/online-courses/AboutSection";
import CoursesSection from "@/components/online-courses/CoursesSection";
import ReviewsSection from "@/components/online-courses/ReviewsSection";
import FAQSection from "@/components/online-courses/FAQSection";

import content from "@/data/onlineCourses.json";

const OnlineCourses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection hero={content.hero} stats={content.stats} />

      <AboutSection about={content.about} />

      <CoursesSection
        section={content.coursesSection}
        courses={content.courses}
        ui={content.ui}
      />

      <ReviewsSection reviews={content.reviews} />

      <FAQSection faq={content.faq} />

      <Footer />
    </div>
  );
};

export default OnlineCourses;
