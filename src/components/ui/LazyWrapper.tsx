import React, { Suspense } from 'react';
import { cn } from '@/lib/utils';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
  minHeight?: string;
}

const DefaultFallback = ({ minHeight = "200px" }: { minHeight?: string }) => (
  <div 
    className="flex items-center justify-center bg-muted/30 animate-pulse rounded-lg"
    style={{ minHeight }}
  >
    <div className="text-muted-foreground text-sm">Loading...</div>
  </div>
);

const LazyWrapper: React.FC<LazyWrapperProps> = ({
  children,
  fallback,
  className,
  minHeight = "200px",
}) => {
  return (
    <div className={cn("w-full", className)}>
      <Suspense fallback={fallback || <DefaultFallback minHeight={minHeight} />}>
        {children}
      </Suspense>
    </div>
  );
};

export default LazyWrapper;
