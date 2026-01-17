interface ChartXAxisProps {
  labels: string[];
}

export const ChartXAxis = ({ labels }: ChartXAxisProps) => {
  return (
    <div className="absolute -bottom-8 w-full flex justify-between text-xs text-gray-500 font-medium">
      {labels.map((lbl, i) => (
        <span key={i}>{lbl}</span>
      ))}
    </div>
  );
};
