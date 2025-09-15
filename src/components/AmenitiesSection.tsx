import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import ElegantCard from "@/components/ui/elegant-card";
import LazyImage from "@/components/ui/LazyImage";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { AMENITY_IMAGES } from "@/config/assets";
import { useLightbox } from "@/hooks/useLightbox";
import { useSlider } from "@/hooks/useSlider";

const AmenitiesSection = React.memo(() => {
  const { t } = useLanguage();
  
  // Use the centralized amenity images and map to localized titles
  const amenities = useMemo(() => AMENITY_IMAGES.map((amenity, index) => {
    const titles = [
      t.amenities.items.residentLounge,
      t.amenities.items.shadedSeating,
      t.amenities.items.gymFitness,
      t.amenities.items.retailArea,
      t.amenities.items.swimmingPool,
      t.amenities.items.yogaPlatform,
    ];
    
    return {
      ...amenity,
      title: titles[index] || amenity.alt,
    };
  }), [t.amenities.items]);

  // Use the slider hook for carousel functionality
  const {
    currentIndex,
    nextSlide,
    prevSlide,
  } = useSlider({
    totalItems: Math.max(1, amenities.length - 2),
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
    totalItems: amenities.length,
  });

  // Memoize the current amenities for display
  const currentAmenities = useMemo(() => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % amenities.length;
      items.push(amenities[index]);
    }
    return items;
  }, [currentIndex, amenities]);

  // Memoize navigation handlers
  const navigationHandlers = useMemo(() => ({
    onPrev: prevSlide,
    onNext: nextSlide,
  }), [prevSlide, nextSlide]);

  return (
    <Section id="amenities" className="pt-32 pb-20 bg-background" maxWidth="max-w-7xl">
      <SectionHeader title={t.amenities.title} subtitle={t.amenities.subtitle} />

        {/* Mobile: Single Column, Desktop: Two-Row Slider */}
        <div className="relative">
          {/* Mobile Layout - Single Column */}
          <div className="block lg:hidden">
            <div className="space-y-4">
              {amenities.map((amenity, index) => (
                <ElegantCard 
                  key={index} 
                  className="overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <LazyImage
                      src={amenity.image}
                      alt={amenity.alt}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                      <h3 className="text-white font-display text-lg font-bold">
                        {amenity.title}
                      </h3>
                    </div>
                  </div>
                </ElegantCard>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Two-Row Slider */}
          <div className="hidden lg:flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={navigationHandlers.onPrev}
              className="z-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous amenities"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Amenities Grid - 2 rows of 3 */}
            <div className="flex flex-col gap-4 overflow-hidden">
              {/* First Row */}
              <div className="flex gap-4">
                {currentAmenities.slice(0, 3).map((amenity, index) => (
                  <ElegantCard 
                    key={`row1-${currentIndex}-${index}`} 
                    className="overflow-hidden cursor-pointer"
                    onClick={() => openLightbox((currentIndex + index) % amenities.length)}
                  >
                    <div className="relative w-80 h-48 overflow-hidden">
                      <LazyImage
                        src={amenity.image}
                        alt={amenity.alt}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <h3 className="text-white font-display text-lg font-bold">
                          {amenity.title}
                        </h3>
                      </div>
                    </div>
                  </ElegantCard>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex gap-4">
                {currentAmenities.slice(3, 6).map((amenity, index) => (
                  <ElegantCard 
                    key={`row2-${currentIndex}-${index}`} 
                    className="overflow-hidden cursor-pointer"
                    onClick={() => openLightbox((currentIndex + index + 3) % amenities.length)}
                  >
                    <div className="relative w-80 h-48 overflow-hidden">
                      <LazyImage
                        src={amenity.image}
                        alt={amenity.alt}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <h3 className="text-white font-display text-lg font-bold">
                          {amenity.title}
                        </h3>
                      </div>
                    </div>
                  </ElegantCard>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={navigationHandlers.onNext}
              className="z-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Next amenities"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
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
                src={amenities[lightboxIndex].image}
                alt={amenities[lightboxIndex].alt}
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
                {lightboxIndex + 1} / {amenities.length}
              </div>
            </div>
          </div>
        )}
    </Section>
  );
});

AmenitiesSection.displayName = 'AmenitiesSection';

export default AmenitiesSection;