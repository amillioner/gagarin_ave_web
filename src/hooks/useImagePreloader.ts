import { useState, useEffect, useCallback } from 'react';

interface UseImagePreloaderOptions {
  images: string[];
  onProgress?: (loaded: number, total: number) => void;
  onComplete?: () => void;
  onError?: (error: Error, imageSrc: string) => void;
}

interface UseImagePreloaderReturn {
  isLoaded: boolean;
  progress: number;
  loadedImages: string[];
  failedImages: string[];
  preloadImages: () => void;
}

export const useImagePreloader = ({
  images,
  onProgress,
  onComplete,
  onError,
}: UseImagePreloaderOptions): UseImagePreloaderReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const preloadImages = useCallback(async () => {
    if (images.length === 0) {
      setIsLoaded(true);
      setProgress(100);
      onComplete?.();
      return;
    }

    setIsLoaded(false);
    setProgress(0);
    setLoadedImages([]);
    setFailedImages([]);

    const loadPromises = images.map((src) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });
    });

    let loadedCount = 0;
    const totalImages = images.length;

    try {
      const results = await Promise.allSettled(loadPromises);
      
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          setLoadedImages(prev => [...prev, result.value]);
        } else {
          setFailedImages(prev => [...prev, images[index]]);
          onError?.(result.reason, images[index]);
        }
        loadedCount++;
        const newProgress = (loadedCount / totalImages) * 100;
        setProgress(newProgress);
        onProgress?.(loadedCount, totalImages);
      });

      setIsLoaded(true);
      onComplete?.();
    } catch (error) {
      console.error('Error preloading images:', error);
    }
  }, [images, onProgress, onComplete, onError]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  return {
    isLoaded,
    progress,
    loadedImages,
    failedImages,
    preloadImages,
  };
};
