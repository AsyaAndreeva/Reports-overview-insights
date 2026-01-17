import type { OverviewData, InsightsData } from '../types/types';

const API_URL = 'http://localhost:3001';

export const fetchOverview = async (): Promise<OverviewData> => {
  const res = await fetch(`${API_URL}/overview`);
  if (!res.ok) throw new Error('Failed to fetch overview');
  return res.json();
};

export const fetchInsights = async (): Promise<InsightsData> => {
  const res = await fetch(`${API_URL}/insights`);
  if (!res.ok) throw new Error('Failed to fetch insights');
  return res.json();
};