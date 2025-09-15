import React, { Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import PricingSection from "@/components/PricingSection";
import LazyWrapper from "@/components/ui/LazyWrapper";
import {
  LazyGallerySection,
  LazyAmenitiesSection,
  LazySitePlanSection,
  LazyLocationSection,
  LazyFooter,
} from "@/components/LazyComponents";

const Index = React.memo(() => {
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
        <LazyWrapper minHeight="400px">
          <LazySitePlanSection />
        </LazyWrapper>
      </section>

      {/* Amenities Section */}
      <LazyWrapper minHeight="600px">
        <LazyAmenitiesSection />
      </LazyWrapper>

      {/* Gallery Section */}
      <LazyWrapper minHeight="500px">
        <LazyGallerySection />
      </LazyWrapper>

      {/* Location Section */}
      <LazyWrapper minHeight="400px">
        <LazyLocationSection />
      </LazyWrapper>

      {/* Footer */}
      <LazyWrapper minHeight="200px">
        <LazyFooter />
      </LazyWrapper>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
