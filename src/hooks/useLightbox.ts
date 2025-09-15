import { useState, useEffect, useCallback } from 'react';

interface UseLightboxOptions {
  totalItems: number;
  onClose?: () => void;
}

interface UseLightboxReturn {
  isOpen: boolean;
  currentIndex: number;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
  goToImage: (index: number) => void;
}

export const useLightbox = ({
  totalItems,
  onClose,
}: UseLightboxOptions): UseLightboxReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
      setIsOpen(true);
    }
  }, [totalItems]);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToImage = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  }, [totalItems]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeLightbox, nextImage, prevImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
    goToImage,
  };
};
