import { VerticalBar } from "../atoms/VerticalBar";

interface MetricColumnProps {
  value: number;
  label: string;
  variant: "primary" | "secondary";
}

export const MetricColumn = ({ value, label, variant }: MetricColumnProps) => {
  const isPrimary = variant === "primary";

  const barColor = isPrimary ? "bg-[#f5841f]" : "bg-gray-600";
  const valueColor = isPrimary ? "text-white" : "text-gray-500";
  const labelColor = isPrimary ? "text-[#f5841f]" : "text-gray-600";
  const animDelay = isPrimary ? "delay-100" : "delay-0";

  return (
    <div className="flex flex-col items-center gap-3 group">
      <VerticalBar percentage={value} colorClass={barColor} delay={animDelay} />

      <div className="text-center">
        <span className={`block text-2xl font-bold ${valueColor}`}>
          {value}%
        </span>
        <span
          className={`text-xs uppercase tracking-widest font-semibold ${labelColor}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
