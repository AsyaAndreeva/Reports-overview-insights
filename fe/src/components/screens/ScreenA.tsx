import { useEffect, useState } from "react";
import type { OverviewData } from "../../types/types";
import { fetchOverview } from "../../api/api";
import { Header } from "../atoms/Header";
import { Link } from "react-router-dom";
import { FadeIn } from "../atoms/FadeIn";
import { ScoreGauge } from "../organisms/ScoreGauge";
import { ComparativeChart } from "../organisms/ComparativeChart";

export const ScreenA = () => {
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOverview()
      .then((response: unknown) => {
        setTimeout(() => {
          setData(response as OverviewData);
          setLoading(false);
        }, 500);
      })
      .catch((err: unknown) => console.error(err));
  }, []);

  if (loading || !data) {
    return <div className="min-h-screen bg-background p-6 md:p-12" />;
  }

  return (
    <div className="min-h-screen lg:h-screen bg-background p-6 md:p-10 flex flex-col overflow-y-auto lg:overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <Header title={data.sectionTitle} />

            <Link
              to="/insights"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
            >
              Next Insight &rarr;
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="flex-1 lg:min-h-0">
          <div className="flex flex-col lg:flex-row w-full gap-6 h-auto lg:h-full pb-8 lg:pb-0">
            <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[400px] lg:min-h-0">
              <div className="transform scale-[0.6] md:scale-75 lg:scale-100 transition-transform origin-center">
                <ScoreGauge percentage={data.score} status={data.status} />
              </div>
            </div>

            <div className="w-full lg:w-1/2 lg:h-full min-h-[500px]">
              <ComparativeChart
                score={data.score}
                average={data.averageScore}
                subHeader={data.benchmark}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
