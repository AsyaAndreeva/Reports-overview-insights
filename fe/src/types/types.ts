export interface OverviewData {
  sectionTitle: string;
  score: number;
  status: string;
  benchmark: string;
  averageScore: number;
}

export interface InsightBlock {
  id: number;
  title: string;
  value: string;
  change: string;
  visual: {
    type: "sparkline-sharp" | "sparkline-smooth" | "bar" | "radial";
    data?: number[];
    value?: number;
    current?: number;
    max?: number;
  };
}

export interface InsightsData {
  headline: string;
  insightBlocks: InsightBlock[];
  mainChart: {
    type: string;
    title: string;
    labels: string[];
    values: number[];
    highlightPoint: {
      index: number;
      label: string;
    };
  };
  navigation: {
    previous: string | null;
    next: string | null;
  };
}
