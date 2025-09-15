import { useState, useEffect, useCallback } from 'react';

interface UseSliderOptions {
  totalItems: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  initialIndex?: number;
}

interface UseSliderReturn {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  isAutoPlaying: boolean;
  pauseAutoPlay: () => void;
  resumeAutoPlay: () => void;
}

export const useSlider = ({
  totalItems,
  autoPlay = false,
  autoPlayInterval = 5000,
  initialIndex = 0,
}: UseSliderOptions): UseSliderReturn => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  }, [totalItems]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
  }, []);

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoPlayInterval]);

  return {
    currentIndex,
    setCurrentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    isAutoPlaying,
    pauseAutoPlay,
    resumeAutoPlay,
  };
};
