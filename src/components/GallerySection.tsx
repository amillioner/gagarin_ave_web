import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";

const GallerySection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    {
      image: gallery4,
      alt: "Modern living space with premium finishes and natural lighting"
    },
    {
      image: gallery5,
      alt: "Contemporary kitchen design with high-end appliances and elegant cabinetry"
    },
    {
      image: gallery6,
      alt: "Spacious bedroom with luxury amenities and modern design elements"
    },
    {
      image: gallery7,
      alt: "Elegant bathroom with premium fixtures and sophisticated styling"
    },
    {
      image: gallery8,
      alt: "Beautiful outdoor terrace with city views and modern furniture"
    },
    {
      image: gallery9,
      alt: "Luxury amenity space with state-of-the-art fitness equipment"
    },
    {
      image: gallery10,
      alt: "Resort-style pool area with cabanas and relaxation spaces"
    },
    {
      image: gallery11,
      alt: "Modern lobby with contemporary design and welcoming atmosphere"
    },
    {
      image: gallery12,
      alt: "Premium unit interior showcasing high-end finishes and spacious layout"
    },
    {
      image: gallery13,
      alt: "Elegant dining area with modern fixtures and sophisticated design"
    },
    {
      image: gallery14,
      alt: "Luxury amenity lounge with comfortable seating and modern amenities"
    },
    {
      image: gallery15,
      alt: "Beautiful exterior view showcasing the building's modern architecture"
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