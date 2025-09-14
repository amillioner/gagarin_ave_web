import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import InquiryForm from "@/components/InquiryForm";
import PricingSection from "@/components/PricingSection";
import SitePlanSection from "@/components/SitePlanSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Slider */}
      <section id="home" className="relative">
        <HeroSlider />
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Site Plan Section */}
      <section id="siteplan">
        <SitePlanSection />
      </section>

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Location Section */}
      <LocationSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
