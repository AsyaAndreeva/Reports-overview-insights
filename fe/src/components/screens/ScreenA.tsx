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
    <div className="min-h-screen bg-background p-6 md:p-12 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-grow">
        <FadeIn>
          <div className="flex justify-between items-center mb-12">
            <Header title={data.sectionTitle} />

            <Link
              to="/insights"
              className="px-6 py-3 bg-surface border border-gray-700 rounded-lg hover:border-primary transition-colors hover:text-primary text-white"
            >
              Next Insight &rarr;
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex w-full gap-6">
            <div className="w-1/2">
              <ScoreGauge percentage={data.score} status={data.status} />
            </div>

            <div className="w-1/2">
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
