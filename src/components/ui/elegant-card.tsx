import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface ElegantCardProps extends React.ComponentProps<typeof Card> {
  group?: boolean;
  hover?: boolean;
}

const ElegantCard = React.forwardRef<HTMLDivElement, ElegantCardProps>(
  ({ className, group = false, hover = false, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        "bg-card/95 backdrop-blur-sm shadow-elegant border-border/20",
        group && "group",
        hover && "hover:shadow-glow transition-all duration-500",
        className
      )}
      {...props}
    />
  )
);
ElegantCard.displayName = "ElegantCard";

export default ElegantCard;
