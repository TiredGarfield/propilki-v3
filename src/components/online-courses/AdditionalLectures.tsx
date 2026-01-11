type Props = {
  title: string;
  lectures: string[];
};

const AdditionalLectures = ({ title, lectures }: Props) => {
  return (
    <div className="mb-6 sm:mb-7 p-4 sm:p-5 bg-muted/50 rounded-lg border border-border">
      <p className="font-medium text-foreground mb-3">{title}</p>
      <ul className="space-y-1">
        {lectures.map((lecture, idx) => (
          <li key={idx} className="text-sm text-muted-foreground">
            ● {lecture}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalLectures;
