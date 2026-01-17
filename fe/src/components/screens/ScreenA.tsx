import { useEffect, useState } from "react";
import type { OverviewData } from "../../types/types";
import { fetchOverview } from "../../api/api";
import { Header } from "../atoms/Header";
import { Link } from "react-router-dom";

export const ScreenA = () => {
  const [data, setData] = useState<OverviewData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOverview()
      .then((response: unknown) => {
        setData(response as OverviewData);
        setLoading(false);
      })
      .catch((err: unknown) => console.error(err));
  }, []);

  if (loading) return <div className="p-10 text-white">Loading data...</div>;
  if (!data) return <div className="p-10 text-red-500">Error loading data</div>;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-grow">
        <Header title={data.sectionTitle} />
      </div>

      <div className="max-w-4xl mx-auto w-full mt-12 flex justify-end">
        <Link
          to="/insights"
          className="px-6 py-3 bg-surface border border-gray-700 rounded-lg hover:border-primary transition-colors hover:text-primary text-white"
        >
          Next Insight &rarr;
        </Link>
      </div>
    </div>
  );
};
