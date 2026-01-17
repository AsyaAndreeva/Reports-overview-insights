interface EngagementChartProps {
  data: {
    title: string;
    labels: string[];
    values: number[];
    highlightPoint: {
      index: number;
      label: string;
    };
  };
}

export const EngagementChart = ({ data }: EngagementChartProps) => {
  return (
    <div className="w-full h-full bg-gray-900/40 border border-gray-800 rounded-2xl p-6 flex flex-col relative">
      <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4 flex-shrink-0">
        {data.title}
      </h3>

      <div className="relative w-full flex-1 min-h-0">
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5841f" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f5841f" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d={createSmoothPath(data.values, true)}
            fill="url(#chartGradient)"
          />

          <path
            d={createSmoothPath(data.values, false)}
            fill="none"
            stroke="#f5841f"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {data.highlightPoint && (
          <div
            className="absolute top-0 bottom-0 pointer-events-none flex flex-col items-center"
            style={{
              left: `${(data.highlightPoint.index / (data.values.length - 1)) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="mb-2 whitespace-nowrap">
              <span className="text-xs font-bold text-white bg-gray-900/80 px-2 py-1 rounded shadow-sm border border-gray-700">
                {data.highlightPoint.label}
              </span>
            </div>

            <div className="flex-grow w-px border-l border-dashed border-white/50"></div>

            <div
              className="absolute w-3 h-3 bg-white border-2 border-gray-800 rounded-full"
              style={{
                top: `${100 - data.values[data.highlightPoint.index]}%`,
                transform: "translateY(-50%)",
              }}
            />
          </div>
        )}
      </div>

      <div className="w-full flex justify-between text-xs text-gray-500 font-medium mt-4 pt-2 border-t border-gray-800/50 flex-shrink-0">
        {data.labels.map((lbl, i) => (
          <span key={i}>{lbl}</span>
        ))}
      </div>
    </div>
  );
};

const createSmoothPath = (values: number[], closePath: boolean) => {
  const maxY = 100;
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * 100;
    const y = maxY - v;
    return { x, y };
  });

  if (points.length === 0) return "";

  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cp1x = p0.x + (p1.x - p0.x) / 2;
    const cp2x = p1.x - (p1.x - p0.x) / 2;
    d += ` C ${cp1x},${p0.y} ${cp2x},${p1.y} ${p1.x},${p1.y}`;
  }

  if (closePath) {
    d += ` L 100,100 L 0,100 Z`;
  }

  return d;
};
