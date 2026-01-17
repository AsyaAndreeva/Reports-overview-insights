import { InsightCard } from "../molecules/InsightCard";
import type { InsightBlock } from "../../types/types";

interface InsightGridProps {
  blocks: InsightBlock[];
}

export const InsightGrid = ({ blocks }: InsightGridProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {blocks.map((block) => (
        <div key={block.id} className="flex-1">
          <InsightCard data={block} />
        </div>
      ))}
    </div>
  );
};
