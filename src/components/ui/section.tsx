import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  maxWidth?: string;
  padding?: string;
}

const Section = ({ 
  id, 
  children, 
  className = "pt-32 pb-20 bg-background", 
  maxWidth = "max-w-6xl",
  padding = "px-4"
}: SectionProps) => (
  <section id={id} className={className}>
    <div className={cn("container mx-auto", padding, maxWidth)}>
      {children}
    </div>
  </section>
);

export default Section;
