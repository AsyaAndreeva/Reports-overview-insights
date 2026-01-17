import { type ReactNode } from "react";

interface ChartCardProps {
  children: ReactNode;
}

export const ChartCard = ({ children }: ChartCardProps) => {
  return (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-gray-900/40 border border-gray-800 rounded-2xl pt-8">
      {children}
    </div>
  );
};
