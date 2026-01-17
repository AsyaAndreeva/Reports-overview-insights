interface HeaderProps {
  title: string;
}

export const SubHeader = ({ title }: HeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-xl md:text-xl font-bold text-white tracking-tight">
        {title}
      </h1>
    </div>
  );
};
