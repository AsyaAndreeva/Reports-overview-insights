interface ScoreLabelProps {
  percentage: number;
  status: string;
}

export const ScoreLabel = ({ percentage, status }: ScoreLabelProps) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-6xl font-bold text-gray-300 tracking-tighter">
        {percentage}%
      </span>
      <div className="mt-2 px-3 py-1">
        <span className="text-gray-300 font-bold uppercase tracking-widest text-xl">
          {status}
        </span>
      </div>
    </div>
  );
};
