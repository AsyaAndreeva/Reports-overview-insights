interface SplineAreaProps {
  values: number[];
}

export const SplineArea = ({ values }: SplineAreaProps) => {
  return (
    <>
      <path d={createSmoothPath(values, true)} fill="url(#chartGradient)" />

      <path
        d={createSmoothPath(values, false)}
        fill="none"
        stroke="#f5841f"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </>
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
