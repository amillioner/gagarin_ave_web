import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => (
  <div className={cn("text-center mb-12", className)}>
    <h2 className="font-display text-4xl font-bold text-primary mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
        {subtitle}
      </p>
    )}
    <div className="w-24 h-1 bg-gradient-luxury mx-auto"></div>
  </div>
);

export default SectionHeader;
