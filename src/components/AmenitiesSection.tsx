import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import amenityLounge from "@/assets/amenity-lounge.jpg";
import amenityGym from "@/assets/amenity-gym.jpg";
import amenityPool from "@/assets/amenity-pool.jpg";
import amenityRetail from "@/assets/amenity-retail.jpg";
import amenitySeating from "@/assets/amenity-seating.jpg";
import amenityYoga from "@/assets/amenity-yoga.jpg";

const AmenitiesSection = () => {
  const { t } = useLanguage();
  const amenities = [
    {
      title: t.amenities.items.residentLounge,
      image: amenityLounge,
      alt: "Luxury resident lounge with modern furniture and elegant seating areas"
    },
    {
      title: t.amenities.items.shadedSeating,
      image: amenitySeating,
      alt: "Outdoor shaded seating area with modern benches and landscaped gardens"
    },
    {
      title: t.amenities.items.gymFitness,
      image: amenityGym,
      alt: "Modern gym and fitness center with exercise equipment and floor-to-ceiling windows"
    },
    {
      title: t.amenities.items.retailArea,
      image: amenityRetail,
      alt: "Modern retail shopping area with clean design and contemporary storefronts"
    },
    {
      title: t.amenities.items.swimmingPool,
      image: amenityPool,
      alt: "Beautiful swimming pool area with clear blue water and luxury pool deck"
    },
    {
      title: t.amenities.items.yogaPlatform,
      image: amenityYoga,
      alt: "Yoga platform with wooden deck and peaceful outdoor setting"
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