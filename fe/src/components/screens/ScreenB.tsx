import { useEffect, useState } from "react";
import type { InsightsData } from "../../types/types";
import { fetchInsights } from "../../api/api"; 
import { SubHeader } from "../atoms/SubHeader";
import { Link } from "react-router-dom";

export const ScreenB = () => {
  const [data, setData] = useState<InsightsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <div className="p-10 text-white">Loading data...</div>;
  if (!data) return <div className="p-10 text-red-500">Error loading data</div>;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-grow">
        <SubHeader title={data.headline} />

        <div className="mt-8 text-muted">
           Insights content will go here...
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full mt-12 flex justify-start">
        <Link
          to="/" 
          className="px-6 py-3 bg-surface border border-gray-700 rounded-lg hover:border-primary transition-colors hover:text-primary text-white"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
};