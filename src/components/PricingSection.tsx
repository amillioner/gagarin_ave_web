import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Home, Maximize } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";

const PricingSection = () => {
  const { t } = useLanguage();
  const apartments = [
    {
      type: "1 Bedroom",
      area: "81.00 м²",
      price: "UZS 1.2 B",
      usdPrice: "USD 326K",
    },
    {
      type: "2 Bedroom", 
      area: "86.00 м²",
      price: "UZS 1.8 B",
      usdPrice: "USD 490K",
    },
    {
      type: "3 Bedroom",
      area: "91.5 м²", 
      price: "UZS 2.3 B",
      usdPrice: "USD 626K",
    },
  ];

  return (
    <section id="price" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            {t.pricing.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-luxury mx-auto"></div>
        </div>

        <Card className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 overflow-hidden">
          {/* Table Header */}
          <div className="bg-muted/50 px-8 py-6 border-b border-border/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center font-semibold text-foreground">
                <Home className="h-5 w-5 mr-2 text-primary" />
                Type
              </div>
              <div className="flex items-center font-semibold text-foreground">
                <Maximize className="h-5 w-5 mr-2 text-primary" />
                Area
              </div>
              <div className="font-semibold text-foreground">Price</div>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold px-8"
                          size="lg"
                        >
                          {t.pricing.priceInquiry}
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
              </div>
            ))}
          </div>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            All prices are inclusive of registration and other charges
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              ✓ {t.pricing.readyToMove}
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              ✓ {t.pricing.premiumFinishes}
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              ✓ World-class Amenities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;