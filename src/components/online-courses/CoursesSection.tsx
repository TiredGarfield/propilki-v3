import { BookOpen } from "lucide-react";
import CourseCard from "@/components/online-courses/CourseCard";

const CoursesSection = ({ section, courses }) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              {section.pill}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            {section.title}
          </h2>
        </div>

        <div className="space-y-8">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              reverse={index % 2 === 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
