interface ChartBarsProps {
  data: number[];
  height?: number;
}

export const ChartBars = ({ data, height = 64 }: ChartBarsProps) => {
  const max = Math.max(...data, 100);

  return (
    <div className="flex items-end justify-between w-full" style={{ height }}>
      {data.map((value, index) => (
        <div
          key={index}
          className="w-2 bg-gray-800 rounded-t-sm relative flex items-end overflow-hidden group"
          style={{ height: "100%" }}
        >
          <div
            style={{ height: `${(value / max) * 100}%` }}
            className="w-full bg-[#f5841f] rounded-t-sm transition-all duration-500 ease-out hover:opacity-80"
          />
        </div>
      ))}
    </div>
  );
};
