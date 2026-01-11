import * as Icons from "lucide-react";

const StatsGrid = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
      {stats.map((stat, index) => {
        const Icon = Icons[stat.icon];

        return (
          <div key={index} className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
              {Icon && <Icon className="h-6 w-6 text-primary" />}
            </div>
            <div className="text-3xl font-light">{stat.number}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
