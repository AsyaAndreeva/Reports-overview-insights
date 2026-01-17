import { CircularLoader } from "../atoms/CircularLoader";
import { ScoreLabel } from "../molecules/ScoreLabel";

interface ScoreGaugeProps {
  percentage: number;
  status: string;
  size?: number; // Size of the ring itself
}

export const ScoreGauge = ({
  percentage,
  status,
  size = 560,
}: ScoreGaugeProps) => {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-gray-900/40 border border-gray-800 rounded-2xl">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <CircularLoader percentage={percentage} size={size} status={status} />

        <ScoreLabel percentage={percentage} status={status} />
      </div>
    </div>
  );
};
