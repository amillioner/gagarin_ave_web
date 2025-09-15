import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import amenityLounge from "@/assets/amenity-lounge-new.png";
import amenitySeating from "@/assets/amenity-seating-new.png";
import amenityGym from "@/assets/amenity-gym-new.png";
import amenityRetail from "@/assets/amenity-retail-new.png";
import amenityPool from "@/assets/amenity-pool-new.png";
import amenityYoga from "@/assets/amenity-yoga-new.png";

const AmenitiesSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const amenities = [
    {
      title: t.amenities.items.residentLounge,
      image: amenityLounge,
      alt: "Premium resident lounge with luxury furnishings and modern design"
    },
    {
      title: t.amenities.items.shadedSeating,
      image: amenitySeating,
      alt: "Elegant outdoor seating areas with contemporary landscape design"
    },
    {
      title: t.amenities.items.gymFitness,
      image: amenityGym,
      alt: "State-of-the-art fitness center with premium equipment and amenities"
    },
    {
      title: t.amenities.items.retailArea,
      image: amenityRetail,
      alt: "Modern retail spaces with upscale shopping and dining options"
    },
    {
      title: t.amenities.items.swimmingPool,
      image: amenityPool,
      alt: "Luxury swimming pool with resort-style deck and relaxation areas"
    },
    {
      title: t.amenities.items.yogaPlatform,
      image: amenityYoga,
      alt: "Tranquil yoga and wellness platform with serene outdoor setting"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, amenities.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.max(1, amenities.length - 2)) % Math.max(1, amenities.length - 2));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % amenities.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + amenities.length) % amenities.length);
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (event.key === 'Escape') {
          closeLightbox();
        } else if (event.key === 'ArrowLeft') {
          prevLightboxImage();
        } else if (event.key === 'ArrowRight') {
          nextLightboxImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  // Get the current 6 amenities to display in 2 rows of 3
  const getCurrentAmenities = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % amenities.length;
      items.push(amenities[index]);
    }
    return items;
  };

  return (
    <section id="amenities" className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            {t.amenities.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            {t.amenities.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-luxury mx-auto"></div>
        </div>

        {/* Two-Row Slider */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="z-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous amenities"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Amenities Grid - 2 rows of 3 */}
            <div className="flex flex-col gap-4 overflow-hidden">
              {/* First Row */}
              <div className="flex gap-4">
                {getCurrentAmenities().slice(0, 3).map((amenity, index) => (
                  <Card 
                    key={`row1-${currentIndex}-${index}`} 
                    className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 overflow-hidden group hover:shadow-glow transition-all duration-500 cursor-pointer"
                    onClick={() => openLightbox((currentIndex + index) % amenities.length)}
                  >
                    <div className="relative w-80 h-48 overflow-hidden">
                      <img 
                        src={amenity.image}
                        alt={amenity.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <h3 className="text-white font-display text-lg font-bold">
                          {amenity.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Second Row */}
              <div className="flex gap-4">
                {getCurrentAmenities().slice(3, 6).map((amenity, index) => (
                  <Card 
                    key={`row2-${currentIndex}-${index}`} 
                    className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 overflow-hidden group hover:shadow-glow transition-all duration-500 cursor-pointer"
                    onClick={() => openLightbox((currentIndex + index + 3) % amenities.length)}
                  >
                    <div className="relative w-80 h-48 overflow-hidden">
                      <img 
                        src={amenity.image}
                        alt={amenity.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <h3 className="text-white font-display text-lg font-bold">
                          {amenity.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
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
              <img
                src={amenities[lightboxIndex].image}
                alt={amenities[lightboxIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
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
      </div>
    </section>
  );
};

export default AmenitiesSection;