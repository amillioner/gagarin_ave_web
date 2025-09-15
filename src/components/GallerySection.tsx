import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
// Building exteriors
import buildingExterior1 from "@/assets/gallery-building-exterior-1.jpg";
import buildingExterior2 from "@/assets/gallery-building-exterior-2.jpg";
import buildingExterior3 from "@/assets/gallery-building-exterior-3.jpg";
import buildingExterior4 from "@/assets/gallery-building-exterior-4.jpg";
import buildingExterior5 from "@/assets/gallery-building-exterior-5.jpg";
import buildingExterior6 from "@/assets/gallery-building-exterior-6.jpg";

// Interior living spaces
import interiorLiving1 from "@/assets/gallery-interior-living-1.jpg";
import interiorLiving2 from "@/assets/gallery-interior-living-2.jpg";
import interiorLiving3 from "@/assets/gallery-interior-living-3.jpg";
import interiorLiving4 from "@/assets/gallery-interior-living-4.jpg";
import interiorLiving5 from "@/assets/gallery-interior-living-5.jpg";
import interiorLiving6 from "@/assets/gallery-interior-living-6.jpg";

// Amenities
import amenities1 from "@/assets/gallery-amenities-1.jpg";
import amenities2 from "@/assets/gallery-amenities-2.jpg";
import amenities3 from "@/assets/gallery-amenities-3.jpg";
import amenities4 from "@/assets/gallery-amenities-4.jpg";
import amenities5 from "@/assets/gallery-amenities-5.jpg";
import amenities6 from "@/assets/gallery-amenities-6.jpg";
import amenities7 from "@/assets/gallery-amenities-7.jpg";

const GallerySection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    // Building exteriors
    {
      image: buildingExterior1,
      alt: "Modern residential complex exterior with contemporary architectural design"
    },
    {
      image: buildingExterior2,
      alt: "Elegant building facade showcasing premium finishes and luxury retail spaces"
    },
    {
      image: buildingExterior3,
      alt: "Contemporary building entrance with sophisticated design elements"
    },
    {
      image: buildingExterior4,
      alt: "Premium residential development with modern amenities and landscaping"
    },
    {
      image: buildingExterior5,
      alt: "Luxury building complex with elegant architectural details"
    },
    {
      image: buildingExterior6,
      alt: "Modern residential complex with contemporary design and green spaces"
    },
    
    // Interior living spaces
    {
      image: interiorLiving1,
      alt: "Luxury living space with high-end interior design and modern amenities"
    },
    {
      image: interiorLiving2,
      alt: "Elegant interior spaces featuring contemporary finishes and premium fixtures"
    },
    {
      image: interiorLiving3,
      alt: "Modern residential units with sophisticated styling and luxury amenities"
    },
    {
      image: interiorLiving4,
      alt: "Contemporary interior design with modern furniture and elegant finishes"
    },
    {
      image: interiorLiving5,
      alt: "Premium residential spaces with sophisticated design elements"
    },
    {
      image: interiorLiving6,
      alt: "Luxury living areas with contemporary styling and modern amenities"
    },
    
    // Amenities
    {
      image: amenities1,
      alt: "Luxury amenities and common areas with modern design"
    },
    {
      image: amenities2,
      alt: "Modern recreational facilities and outdoor spaces"
    },
    {
      image: amenities3,
      alt: "Premium fitness center and wellness amenities"
    },
    {
      image: amenities4,
      alt: "Luxury swimming pool and relaxation areas"
    },
    {
      image: amenities5,
      alt: "Contemporary outdoor spaces and landscaping"
    },
    {
      image: amenities6,
      alt: "Modern building complex with green spaces and amenities"
    },
    {
      image: amenities7,
      alt: "Premium residential development overview with luxury amenities"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
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

  // Get the current 3 images to display in carousel
  const getCurrentImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      images.push(galleryImages[index]);
    }
    return images;
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4" style={{ color: '#B8860B' }}>
            {t.gallery.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-luxury mx-auto"></div>
        </div>

        {/* Carousel Gallery */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="z-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Gallery Images */}
            <div className="flex gap-4 overflow-hidden">
              {getCurrentImages().map((item, index) => (
                <div 
                  key={`${currentIndex}-${index}`} 
                  className="relative rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox((currentIndex + index) % galleryImages.length)}
                >
                  <div className="relative w-80 h-60 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="z-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold"
                size="lg"
              >
                {t.gallery.viewComplete}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold">
                  {t.nav.contactUs}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <InquiryForm />
              </div>
            </DialogContent>
          </Dialog>
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
                src={galleryImages[lightboxIndex].image}
                alt={galleryImages[lightboxIndex].alt}
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
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
