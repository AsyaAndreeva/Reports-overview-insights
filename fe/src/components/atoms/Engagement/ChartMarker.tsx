interface ChartMarkerProps {
  index: number;
  totalPoints: number;
  value: number;
  label: string;
}

export const ChartMarker = ({
  index,
  totalPoints,
  value,
  label,
}: ChartMarkerProps) => {
  const x = (index / (totalPoints - 1)) * 100;
  const y = 100 - value;

  return (
    <g>
      <line
        x1={x}
        x2={x}
        y1={0}
        y2={100}
        stroke="#fff"
        strokeDasharray="4 4"
        strokeWidth="1"
        opacity="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={x}
        y="-5"
        fill="white"
        textAnchor="middle"
        fontSize="4"
        fontWeight="500"
      >
        {label}
      </text>
      <circle
        cx={x}
        cy={y}
        r="1.5"
        fill="#fff"
        stroke="#1f2937"
        strokeWidth="0.5"
      />
    </g>
  );
};
