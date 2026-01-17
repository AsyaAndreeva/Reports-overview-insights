import { useEffect, useState } from "react";
import type { OverviewData } from "../../types/types";
import { fetchOverview } from "../../api/api";
import { Header } from "../atoms/Header";
import { Link } from "react-router-dom";
import { FadeIn } from "../atoms/FadeIn";


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
      <div className="max-w-4xl mx-auto w-full flex-grow">
        
        <FadeIn>
          <div className="flex justify-between items-start mb-6">
            <Header title={data.sectionTitle} />
          </div>
        </FadeIn>

        <FadeIn delay={100}>
            <div className="mt-8 border border-gray-800 h-64 rounded flex items-center justify-center text-muted">
         
            </div>
        </FadeIn>
      </div>

      <div className="max-w-4xl mx-auto w-full mt-12 flex justify-end">
        <FadeIn delay={200}>
          <Link
            to="/insights"
            className="px-6 py-3 bg-surface border border-gray-700 rounded-lg hover:border-primary transition-colors hover:text-primary text-white"
          >
            Next Insight &rarr;
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};