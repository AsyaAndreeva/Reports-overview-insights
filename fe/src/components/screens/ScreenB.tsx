import { useEffect, useState } from "react";
import type { InsightsData } from "../../types/types";
import { fetchInsights } from "../../api/api";
import { SubHeader } from "../atoms/SubHeader";
import { FadeIn } from "../atoms/FadeIn";
import { Link } from "react-router-dom";

export const ScreenB = () => {
  const [data, setData] = useState<InsightsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights()
      .then((response) => {
        setTimeout(() => {
          setData(response);
          setLoading(false);
        }, 500);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading || !data) return <div className="min-h-screen bg-background p-6 md:p-12" />;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-grow">
        <FadeIn>
          <SubHeader title={data.headline} />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 text-muted">
          </div>
        </FadeIn>
      </div>

      <div className="max-w-4xl mx-auto w-full mt-12 flex justify-start">
        <FadeIn delay={200}>
          <Link
            to="/"
            className="px-6 py-3 bg-surface border border-gray-700 rounded-lg hover:border-primary transition-colors hover:text-primary text-white"
          >
            &larr; Back
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};