
import { ChartCard } from "../atoms/ChartCard";
import { MetricColumn } from "../molecules/MetricColumn";

interface ComparativeChartProps {
  score: number;       
  average: number;     
  subHeader: string;   
}

export const ComparativeChart = ({ 
  score, 
  average, 
  subHeader 
}: ComparativeChartProps) => {
  return (
    <ChartCard>

      <div className="flex items-end gap-12 h-64 mb-12">

        <MetricColumn 
          value={average} 
          label="Average" 
          variant="secondary" 
        />

        <MetricColumn 
          value={score} 
          label="Your Score" 
          variant="primary" 
        />

      </div>

      <div className="text-center">
        <p className="text-gray-400 text-lg font-medium">
          {subHeader}
        </p>
      </div>

    </ChartCard>
  );
};