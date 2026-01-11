import { Check } from "lucide-react";

const CourseFeatures = ({ features }) => {
  return (
    <div className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
            <Check className="h-3 w-3 text-primary-foreground" />
          </div>

          <span className="text-muted-foreground leading-relaxed">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CourseFeatures;
