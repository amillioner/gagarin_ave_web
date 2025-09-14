import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import galleryBedroom from "@/assets/gallery-bedroom.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryLiving from "@/assets/gallery-living.jpg";

const GallerySection = () => {
  const galleryImages = [
    {
      image: galleryBedroom,
      alt: "Luxury bedroom with modern furniture and elegant decor"
    },
    {
      image: galleryExterior,
      alt: "Modern apartment building exterior with landscaped grounds"
    },
    {
      image: galleryLiving,
      alt: "Luxury living room with modern furniture and city view"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4" style={{ color: '#B8860B' }}>
            Project Gallery
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
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Artistic Impression
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold"
            size="lg"
          >
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;