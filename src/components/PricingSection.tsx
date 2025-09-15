import { Home, Maximize } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDialog from "./ContactDialog";
import { PrimaryButton } from "@/components/ui/button-variants";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import ElegantCard from "@/components/ui/elegant-card";

const PricingSection = () => {
  const { t } = useLanguage();
  const apartments = [
    {
      type: t.pricing.bedrooms.one,
      area: "81.00 м²",
      price: "UZS 995.3 M",
      usdPrice: "USD 77.8K",
    },
    {
      type: t.pricing.bedrooms.two, 
      area: "86.00 м²",
      price: "UZS 1.06 B",
      usdPrice: "USD 82.6K",
    },
    {
      type: t.pricing.bedrooms.three,
      area: "91.5 м²", 
      price: "UZS 1.12 B",
      usdPrice: "USD 87.8K",
    },
  ];

  return (
    <Section id="price" className="pt-32 pb-20 bg-muted/30">
      <SectionHeader title={t.pricing.title} />

        <ElegantCard className="overflow-hidden">
          {/* Table Header */}
          <div className="bg-muted/50 px-8 py-6 border-b border-border/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center font-semibold text-foreground">
                <Home className="h-5 w-5 mr-2 text-primary" />
                {t.pricing.type}
              </div>
              <div className="flex items-center font-semibold text-foreground">
                <Maximize className="h-5 w-5 mr-2 text-primary" />
                {t.pricing.area}
              </div>
              <div className="font-semibold text-foreground">{t.pricing.price}</div>
              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Apartment Rows */}
          <div className="divide-y divide-border/20">
            {apartments.map((apartment, index) => (
              <div key={index} className="px-8 py-8 hover:bg-muted/20 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
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
            {t.pricing.inclusiveNote}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              ✓ {t.pricing.readyToMove}
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              ✓ {t.pricing.premiumFinishes}
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              ✓ {t.pricing.worldClassAmenities}
            </span>
          </div>
        </div>
    </Section>
  );
};

export default PricingSection;