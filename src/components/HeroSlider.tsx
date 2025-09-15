import React, { useRef, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_IMAGES } from "@/config/assets";
import { SLIDER_CONFIG } from "@/config/constants";
import { useSlider } from "@/hooks/useSlider";
import { useTouchSwipe } from "@/hooks/useTouchSwipe";
import OptimizedImage from "@/components/ui/OptimizedImage";

const HeroSlider = React.memo(() => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const {
    currentIndex: currentSlide,
    nextSlide,
    prevSlide,
  } = useSlider({
    totalItems: HERO_IMAGES.length,
    autoPlay: true,
    autoPlayInterval: SLIDER_CONFIG.autoPlayInterval,
  });

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    threshold: SLIDER_CONFIG.touchSensitivity,
  });

  // Memoize the slider configuration
  const sliderConfig = useMemo(() => ({
    autoPlayInterval: SLIDER_CONFIG.autoPlayInterval,
    touchSensitivity: SLIDER_CONFIG.touchSensitivity,
    transitionDuration: SLIDER_CONFIG.transitionDuration,
  }), []);

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
    <div 
      ref={sliderRef}
      className="relative h-screen sm:h-[80vh] md:h-screen overflow-hidden"
      {...touchHandlers}
    >
      {/* Image Slides */}
      <div className="relative w-full h-full">
        {HERO_IMAGES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-${sliderConfig.transitionDuration} ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <OptimizedImage
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden sm:flex absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-colors"
        onClick={navigationHandlers.onPrev}
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="hidden sm:flex absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 transition-colors"
        onClick={navigationHandlers.onNext}
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
});

HeroSlider.displayName = 'HeroSlider';

export default HeroSlider;