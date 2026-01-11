import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CourseFeatures from "./CourseFeatures";
import AdditionalLectures from "./AdditionalLectures";

const CourseCard = ({ course, reverse }) => {
  const imageSrc =
    course.image || "/images/online-courses/course-placeholder.webp";

  const handleClick = () => {
    if (course.link) {
      window.open(course.link, "_blank");
    }
  };

  return (
    <Card className="group border border-border elegant-shadow hover:shadow-lg">
      <div className="p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className={reverse ? "lg:order-2" : "lg:order-1"}>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className={reverse ? "lg:order-1" : "lg:order-2"}>
            <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-4">
              {course.title}
            </h3>

            <p className="text-muted-foreground mb-8">{course.description}</p>

            <CourseFeatures features={course.features} />

            {course.additionalLectures && (
              <AdditionalLectures
                title="Additional lectures in the online course:"
                lectures={course.additionalLectures}
              />
            )}

            <div className="flex items-center justify-between pt-6 border-t border-border">
              {course.price && (
                <p className="text-xl font-light text-foreground">
                  <span className="font-medium">Price:</span>{" "}
                  {course.price.replace(/^Price:\s*/i, "")}
                </p>
              )}

              <Button
                onClick={handleClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg"
              >
                {course.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
