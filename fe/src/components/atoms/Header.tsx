interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h1>
    </div>
  );
};
