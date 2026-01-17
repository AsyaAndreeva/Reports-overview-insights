interface InsightTextProps {
  title: string;
  value: string;
}

export const InsightText = ({ title, value }: InsightTextProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
        {title}
      </span>
      <span className="text-xl font-bold text-white tracking-tight">
        {value}
      </span>
    </div>
  );
};
