import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";

const GallerySection = () => {
  const { t } = useLanguage();
  const galleryImages = [
    {
      image: gallery1,
      alt: "Luxury residential exterior showcasing modern architecture and landscaping"
    },
    {
      image: gallery2,
      alt: "Premium apartment interior with contemporary design and elegant finishes"
    },
    {
      image: gallery3,
      alt: "Elegant outdoor amenity spaces with resort-style pool and relaxation areas"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4" style={{ color: '#B8860B' }}>
            {t.gallery.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-luxury mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((item, index) => (
            <Card key={index} className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 overflow-hidden group hover:shadow-glow transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            </Card>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default GallerySection;