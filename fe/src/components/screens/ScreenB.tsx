import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../atoms/FadeIn";
import { InsightGrid } from "../organisms/InsightGrid";
import { EngagementChart } from "../organisms/EngagementChart";
import type { InsightsData } from "../../types/types";

export const ScreenB = () => {
  const [data, setData] = useState<InsightsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/insights")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading || !data) {
    return <div className="h-screen bg-background p-6 md:p-12 text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-8 flex flex-col overflow-y-auto pb-10">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        
        <FadeIn>
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 w-fit"
              >
                &larr; {data.navigation.previous}
              </Link>
              
              <h1 className="text-2xl md:text-3xl font-light text-white tracking-wide">
                {data.headline}
              </h1>
            </div>

            {data.navigation.next && (
              <Link 
                to="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 w-fit"
              >
                {data.navigation.next} &rarr;
              </Link>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-4">
             <InsightGrid blocks={data.insightBlocks} />
          </div>
        </FadeIn>

        <FadeIn delay={200} className="flex-1 min-h-0">
          <div className="h-full w-full">
            <EngagementChart data={data.mainChart} />
          </div>
        </FadeIn>

      </div>
    </div>
  );
};