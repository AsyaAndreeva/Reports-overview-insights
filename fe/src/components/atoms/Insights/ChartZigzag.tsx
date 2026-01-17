interface ChartZigzagProps {
  data: number[];
  color?: string;
}

export const ChartZigzag = ({
  data,
  color = "stroke-gray-800",
}: ChartZigzagProps) => {
  const points = data.map((val, i) => `${i * 20},${50 - val}`).join(" ");

  return (
    <svg
      className="w-full h-16"
      viewBox="0 0 100 50"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        className={color}
      />
    </svg>
  );
};
