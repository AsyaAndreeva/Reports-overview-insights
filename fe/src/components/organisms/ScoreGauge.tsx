import { CircularLoader } from "../atoms/Overview/CircularLoader";
import { ScoreLabel } from "../molecules/ScoreLabel";

interface ScoreGaugeProps {
  percentage: number;
  status: string;
  size?: number;
}

export const ScoreGauge = ({
  percentage,
  status,
  size = 500,
}: ScoreGaugeProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center rounded-2xl">
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
