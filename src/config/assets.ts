// Centralized asset imports and configuration
// Hero images
import main0 from "@/assets/main-0.jpg";
import main1 from "@/assets/main-1.jpg";
import main2 from "@/assets/main-2.jpg";
import heroNew1 from "@/assets/hero-new-1.jpg";
import heroNew2 from "@/assets/hero-new-2.jpg";
import heroNew3 from "@/assets/hero-new-3.jpg";

// Amenity images
import amenityLounge from "@/assets/amenity-lounge-new.png";
import amenitySeating from "@/assets/amenity-seating-new.png";
import amenityGym from "@/assets/amenity-gym-new.png";
import amenityRetail from "@/assets/amenity-retail-new.png";
import amenityPool from "@/assets/amenity-pool-new.png";
import amenityYoga from "@/assets/amenity-yoga-new.png";

// Gallery images - Building exteriors
import buildingExterior1 from "@/assets/gallery-building-exterior-1.jpg";
import buildingExterior2 from "@/assets/gallery-building-exterior-2.jpg";
import buildingExterior3 from "@/assets/gallery-building-exterior-3.jpg";
import buildingExterior4 from "@/assets/gallery-building-exterior-4.jpg";
import buildingExterior5 from "@/assets/gallery-building-exterior-5.jpg";
import buildingExterior6 from "@/assets/gallery-building-exterior-6.jpg";

// Gallery images - Interior living spaces
import interiorLiving1 from "@/assets/gallery-interior-living-1.jpg";
import interiorLiving2 from "@/assets/gallery-interior-living-2.jpg";
import interiorLiving3 from "@/assets/gallery-interior-living-3.jpg";
import interiorLiving4 from "@/assets/gallery-interior-living-4.jpg";
import interiorLiving5 from "@/assets/gallery-interior-living-5.jpg";
import interiorLiving6 from "@/assets/gallery-interior-living-6.jpg";

// Gallery images - Amenities
import amenities1 from "@/assets/gallery-amenities-1.jpg";
import amenities2 from "@/assets/gallery-amenities-2.jpg";
import amenities3 from "@/assets/gallery-amenities-3.jpg";
import amenities4 from "@/assets/gallery-amenities-4.jpg";
import amenities5 from "@/assets/gallery-amenities-5.jpg";
import amenities6 from "@/assets/gallery-amenities-6.jpg";
import amenities7 from "@/assets/gallery-amenities-7.jpg";

export const HERO_IMAGES = [
  {
    image: main1,
    alt: "Gagarin Avenue luxury residential complex - aerial view",
    category: "exterior",
  },
  {
    image: main0,
    alt: "Gagarin Avenue luxury residential complex - main view",
    category: "exterior",
  },
  {
    image: main2,
    alt: "Gagarin Avenue luxury residential complex - side view",
    category: "exterior",
  },
  {
    image: heroNew1,
    alt: "Modern luxury residential complex on Gagarin Avenue",
    category: "exterior",
  },
  {
    image: heroNew2,
    alt: "Luxury apartment building exterior at sunset",
    category: "exterior",
  },
  {
    image: heroNew3,
    alt: "Aerial view of modern luxury residential complex",
    category: "exterior",
  },
] as const;

export const AMENITY_IMAGES = [
  {
    image: amenityLounge,
    alt: "Premium resident lounge with luxury furnishings and modern design",
    category: "lounge",
  },
  {
    image: amenitySeating,
    alt: "Elegant outdoor seating areas with contemporary landscape design",
    category: "seating",
  },
  {
    image: amenityGym,
    alt: "State-of-the-art fitness center with premium equipment and amenities",
    category: "fitness",
  },
  {
    image: amenityRetail,
    alt: "Modern retail spaces with upscale shopping and dining options",
    category: "retail",
  },
  {
    image: amenityPool,
    alt: "Luxury swimming pool with resort-style deck and relaxation areas",
    category: "pool",
  },
  {
    image: amenityYoga,
    alt: "Tranquil yoga and wellness platform with serene outdoor setting",
    category: "wellness",
  },
] as const;

export const GALLERY_IMAGES = [
  // Building exteriors
  {
    image: buildingExterior1,
    alt: "Modern residential complex exterior with contemporary architectural design",
    category: "exterior",
  },
  {
    image: buildingExterior2,
    alt: "Elegant building facade showcasing premium finishes and luxury retail spaces",
    category: "exterior",
  },
  {
    image: buildingExterior3,
    alt: "Contemporary building entrance with sophisticated design elements",
    category: "exterior",
  },
  {
    image: buildingExterior4,
    alt: "Premium residential development with modern amenities and landscaping",
    category: "exterior",
  },
  {
    image: buildingExterior5,
    alt: "Luxury building complex with elegant architectural details",
    category: "exterior",
  },
  {
    image: buildingExterior6,
    alt: "Modern residential complex with contemporary design and green spaces",
    category: "exterior",
  },
  
  // Interior living spaces
  {
    image: interiorLiving1,
    alt: "Luxury living space with high-end interior design and modern amenities",
    category: "interior",
  },
  {
    image: interiorLiving2,
    alt: "Elegant interior spaces featuring contemporary finishes and premium fixtures",
    category: "interior",
  },
  {
    image: interiorLiving3,
    alt: "Modern residential units with sophisticated styling and luxury amenities",
    category: "interior",
  },
  {
    image: interiorLiving4,
    alt: "Contemporary interior design with modern furniture and elegant finishes",
    category: "interior",
  },
  {
    image: interiorLiving5,
    alt: "Premium residential spaces with sophisticated design elements",
    category: "interior",
  },
  {
    image: interiorLiving6,
    alt: "Luxury living areas with contemporary styling and modern amenities",
    category: "interior",
  },
  
  // Amenities
  {
    image: amenities1,
    alt: "Luxury amenities and common areas with modern design",
    category: "amenities",
  },
  {
    image: amenities2,
    alt: "Modern recreational facilities and outdoor spaces",
    category: "amenities",
  },
  {
    image: amenities3,
    alt: "Premium fitness center and wellness amenities",
    category: "amenities",
  },
  {
    image: amenities4,
    alt: "Luxury swimming pool and relaxation areas",
    category: "amenities",
  },
  {
    image: amenities5,
    alt: "Contemporary outdoor spaces and landscaping",
    category: "amenities",
  },
  {
    image: amenities6,
    alt: "Modern building complex with green spaces and amenities",
    category: "amenities",
  },
  {
    image: amenities7,
    alt: "Premium residential development overview with luxury amenities",
    category: "amenities",
  },
] as const;

// Helper function to get images by category
export const getImagesByCategory = (images: typeof GALLERY_IMAGES, category: string) => {
  return images.filter(img => img.category === category);
};

// Helper function to get random images
export const getRandomImages = (images: typeof GALLERY_IMAGES, count: number) => {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
