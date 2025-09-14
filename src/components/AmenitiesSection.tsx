import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import amenityLounge from "@/assets/amenity-lounge-new.png";
import amenitySeating from "@/assets/amenity-seating-new.png";
import amenityGym from "@/assets/amenity-gym-new.png";
import amenityRetail from "@/assets/amenity-retail-new.png";
import amenityPool from "@/assets/amenity-pool-new.png";
import amenityYoga from "@/assets/amenity-yoga-new.png";

const AmenitiesSection = () => {
  const { t } = useLanguage();
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

  return (
    <section id="amenities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold text-lg mb-4">
            {t.amenities.title}
          </div>
          <div className="w-24 h-1 bg-gradient-luxury mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 overflow-hidden group hover:shadow-glow transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={amenity.image}
                  alt={amenity.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-white font-display text-xl font-bold">
                    {amenity.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;