interface VerticalBarProps {
  percentage: number;
  colorClass: string;
  delay?: string; 
}

export const VerticalBar = ({
  percentage,
  colorClass,
  delay = "delay-0",
}: VerticalBarProps) => {
  return (
    <div className="relative w-24 bg-gray-800/50 rounded-t-lg h-64 flex items-end overflow-hidden">
      <div
        style={{ height: `${percentage}%` }}
        className={`w-full transition-all duration-700 ease-out ${colorClass} ${delay}`}
      />
    </div>
  );
};
