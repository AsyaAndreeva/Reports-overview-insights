interface CircularLoaderProps {
  percentage: number;
  status: string;
  size?: number;
}

export const CircularLoader = ({
  percentage,
  size = 560,
}: CircularLoaderProps) => {
  const strokeWidth = 24;
  const radius = 200;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#fef0e3"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="#f5841f"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    </div>
  );
};
