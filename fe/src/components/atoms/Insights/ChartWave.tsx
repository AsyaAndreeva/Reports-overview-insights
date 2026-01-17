interface ChartWaveProps {
  data: number[];
  color?: string;
}

export const ChartWave = ({
  data,
  color = "stroke-blue-500",
}: ChartWaveProps) => {
  const pathD =
    `M0,${50 - data[0]} ` +
    data
      .slice(1)
      .map((y, i) => {
        const prevY = 50 - data[i];
        const currY = 50 - y;
        const x = (i + 1) * 20;
        return `C ${x - 10},${prevY} ${x - 10},${currY} ${x},${currY}`;
      })
      .join(" ");

  return (
    <svg
      className="w-full h-16"
      viewBox="0 0 120 50"
      preserveAspectRatio="none"
    >
      <path
        d={pathD}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className={color}
      />
    </svg>
  );
};
