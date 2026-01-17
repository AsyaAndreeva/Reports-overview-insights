import type { InsightBlock } from "../../types/types";
import { ChartZigzag } from "../atoms/Insights/ChartZigzag";
import { ChartWave } from "../atoms/Insights/ChartWave";
import { InsightText } from "../atoms/Insights/InsightText";
import { ChartBars } from "../atoms/Insights/ChartBars";

interface InsightCardProps {
  data: InsightBlock;
}

export const InsightCard = ({ data }: InsightCardProps) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-gray-900/40 border border-gray-800 rounded-xl h-48 w-full hover:border-gray-600 transition-colors">
      <div className="mb-4">
        {data.visual.type === "sparkline-sharp" && (
          <ChartZigzag data={data.visual.data || []} />
        )}
        {data.visual.type === "sparkline-smooth" && (
          <ChartWave data={data.visual.data || []} />
        )}
        {data.visual.type === "bar" && (
          <ChartBars data={data.visual.data || []} />
        )}
      </div>

      <InsightText title={data.title} value={data.value} />
    </div>
  );
};
