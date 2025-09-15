import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

interface UsePerformanceMonitorOptions {
  componentName: string;
  onMetrics?: (metrics: PerformanceMetrics) => void;
  logToConsole?: boolean;
}

export const usePerformanceMonitor = ({
  componentName,
  onMetrics,
  logToConsole = false,
}: UsePerformanceMonitorOptions) => {
  const startTime = useRef<number>(Date.now());
  const renderStartTime = useRef<number>(Date.now());

  useEffect(() => {
    const endTime = Date.now();
    const loadTime = endTime - startTime.current;
    const renderTime = endTime - renderStartTime.current;

    // Get memory usage if available
    const memoryUsage = (performance as any).memory?.usedJSHeapSize;

    const metrics: PerformanceMetrics = {
      loadTime,
      renderTime,
      memoryUsage,
    };

    if (logToConsole) {
      console.log(`[Performance] ${componentName}:`, metrics);
    }

    onMetrics?.(metrics);
  }, [componentName, onMetrics, logToConsole]);

  const markRenderStart = () => {
    renderStartTime.current = Date.now();
  };

  const markLoadStart = () => {
    startTime.current = Date.now();
  };

  return {
    markRenderStart,
    markLoadStart,
  };
};
