import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDialog from "./ContactDialog";
import { PrimaryButton } from "@/components/ui/button-variants";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import LazyImage from "@/components/ui/LazyImage";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useLightbox } from "@/hooks/useLightbox";
import { useTouchSwipe } from "@/hooks/useTouchSwipe";
import { useSlider } from "@/hooks/useSlider";
import { GALLERY_IMAGES } from "@/config/assets";

const GallerySection = React.memo(() => {
  const { t } = useLanguage();
  const galleryRef = useRef<HTMLDivElement>(null);

  // Use the centralized gallery images
  const galleryImages = GALLERY_IMAGES;

  // Use the slider hook for carousel functionality
  const {
    currentIndex,
    nextSlide,
    prevSlide,
  } = useSlider({
    totalItems: galleryImages.length,
    autoPlay: false,
  });

  // Use the lightbox hook
  const {
    isOpen: isLightboxOpen,
    currentIndex: lightboxIndex,
    openLightbox,
    closeLightbox,
    nextImage: nextLightboxImage,
    prevImage: prevLightboxImage,
  } = useLightbox({
    totalItems: galleryImages.length,
  });

  // Use touch swipe for mobile navigation
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
  });

  // Memoize the current images for carousel display
  const currentImages = useMemo(() => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      images.push(galleryImages[index]);
    }
    return images;
  }, [currentIndex, galleryImages]);

  // Memoize touch handlers
  const touchHandlers = useMemo(() => ({
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  }), [handleTouchStart, handleTouchMove, handleTouchEnd]);

  // Memoize navigation handlers
  const navigationHandlers = useMemo(() => ({
    onPrev: prevSlide,
    onNext: nextSlide,
  }), [prevSlide, nextSlide]);

  return (
    <Section id="gallery" className="pt-32 pb-20 bg-background" maxWidth="max-w-7xl">
      <SectionHeader title={t.gallery.title} subtitle={t.gallery.subtitle} />

        {/* Mobile: Single Image, Desktop: Carousel Gallery */}
        <div className="relative mb-8">
          {/* Mobile Layout - Single Image */}
          <div className="block lg:hidden">
            <div 
              ref={galleryRef}
              className="space-y-4"
              {...touchHandlers}
            >
              <div 
                className="relative rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(currentIndex)}
              >
                <LazyImage
                  src={galleryImages[currentIndex].image}
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-64 sm:h-80 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={navigationHandlers.onPrev}
                  className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 shadow-lg transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {galleryImages.length}
                </span>
                
                <button
                  onClick={navigationHandlers.onNext}
                  className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 shadow-lg transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Carousel Gallery */}
          <div className="hidden lg:flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={navigationHandlers.onPrev}
              className="z-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Gallery Images */}
            <div className="flex gap-4 overflow-hidden">
              {currentImages.map((item, index) => (
                <div 
                  key={`${currentIndex}-${index}`} 
                  className="relative rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox((currentIndex + index) % galleryImages.length)}
                >
                  <LazyImage
                    src={item.image}
                    alt={item.alt}
                    className="w-80 h-60 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={navigationHandlers.onNext}
              className="z-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <ContactDialog
            trigger={
              <PrimaryButton size="lg">
                {t.gallery.viewComplete}
              </PrimaryButton>
            }
          />
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={prevLightboxImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Image */}
              <OptimizedImage
                src={galleryImages[lightboxIndex].image}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                priority={true}
              />

              {/* Next Button */}
              <button
                onClick={nextLightboxImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
    </Section>
  );
});

GallerySection.displayName = 'GallerySection';

export default GallerySection;
