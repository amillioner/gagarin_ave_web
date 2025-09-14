import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import PropertyInfo from "@/components/PropertyInfo";
import InquiryForm from "@/components/InquiryForm";
import PricingSection from "@/components/PricingSection";
import SitePlanSection from "@/components/SitePlanSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Slider */}
      <section id="home" className="relative">
        <HeroSlider />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8 pt-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 max-w-7xl">
            {/* Property Information Card - Left Side */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <PropertyInfo />
            </div>
            
            {/* Spacer for center */}
            <div className="hidden lg:block flex-1"></div>
            
            {/* Inquiry Form - Right Side */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Site Plan Section */}
      <SitePlanSection />
    </div>
  );
};

export default Index;
