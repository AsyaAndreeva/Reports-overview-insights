import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; 
  className?: string;
}

export const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
  return (
    <div
      className={`opacity-0 animate-enter ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};