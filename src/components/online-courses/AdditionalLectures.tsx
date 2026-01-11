const AdditionalLectures = ({ title, lectures }) => {
  return (
    <div className="mb-8 p-6 bg-muted/50 rounded-lg border border-border">
      <p className="font-medium text-foreground mb-4">{title}</p>
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
