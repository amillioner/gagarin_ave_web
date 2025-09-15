import React, { useMemo } from "react";
import { Home, Maximize } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDialog from "./ContactDialog";
import { PrimaryButton } from "@/components/ui/button-variants";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import ElegantCard from "@/components/ui/elegant-card";
import { PRICING_DATA } from "@/config/constants";

const PricingSection = React.memo(() => {
  const { t } = useLanguage();
  
  const apartments = useMemo(() => PRICING_DATA.apartments.map((apt, index) => ({
    type: index === 0 ? t.pricing.bedrooms.one : 
          index === 1 ? t.pricing.bedrooms.two : 
          t.pricing.bedrooms.three,
    area: apt.area,
    price: apt.price,
    usdPrice: apt.usdPrice,
  })), [t.pricing.bedrooms]);

  return (
    <Section id="price" className="pt-32 pb-20 bg-muted/30">
      <SectionHeader title={t.pricing.title} />

        <ElegantCard className="overflow-hidden">
          {/* Desktop Table Header */}
          <div className="hidden md:block bg-muted/50 px-8 py-6 border-b border-border/20">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center font-semibold text-foreground">
                <Home className="h-5 w-5 mr-2 text-primary" />
                {t.pricing.type}
              </div>
              <div className="flex items-center font-semibold text-foreground">
                <Maximize className="h-5 w-5 mr-2 text-primary" />
                {t.pricing.area}
              </div>
              <div className="font-semibold text-foreground">{t.pricing.price}</div>
              <div></div>
            </div>
          </div>

          {/* Apartment Rows */}
          <div className="divide-y divide-border/20">
            {apartments.map((apartment, index) => (
              <div key={index} className="px-4 md:px-8 py-6 md:py-8 hover:bg-muted/20 transition-colors duration-300">
                {/* Mobile Layout */}
                <div className="block md:hidden space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {apartment.type}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Maximize className="h-5 w-5 mr-2 text-primary" />
                      <span className="text-muted-foreground">{t.pricing.area}</span>
                    </div>
                    <p className="text-lg text-foreground font-medium">
                      {apartment.area}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-primary">
                      {apartment.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {apartment.usdPrice}
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <ContactDialog
                      trigger={
                        <PrimaryButton className="w-full" size="lg">
                          {t.pricing.priceInquiry}
                        </PrimaryButton>
                      }
                    />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-4 gap-4 items-center">
                  {/* Type */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {apartment.type}
                    </h3>
                  </div>

                  {/* Area */}
                  <div>
                    <p className="text-lg text-muted-foreground">
                      {apartment.area}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {apartment.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {apartment.usdPrice}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-end">
                    <ContactDialog
                      trigger={
                        <PrimaryButton className="px-8" size="lg">
                          {t.pricing.priceInquiry}
                        </PrimaryButton>
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ElegantCard>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            {PRICING_DATA.inclusiveNote}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {PRICING_DATA.features.map((feature, index) => (
              <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✓ {feature}
              </span>
            ))}
          </div>
        </div>
    </Section>
  );
});

PricingSection.displayName = 'PricingSection';

export default PricingSection;