import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, MapPin, Building, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";

const PropertyInfo = () => {
  const { t } = useLanguage();
  
  return (
    <Card className="bg-gradient-card backdrop-blur-sm shadow-luxury border-border/20 p-8 max-w-lg">
      <div className="space-y-6">
        {/* Property Title */}
        <div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2 whitespace-pre-line">
            {t.hero.title}
          </h1>
          <div className="flex items-center text-muted-foreground mb-1">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-xl">{t.hero.subtitle}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Building className="h-5 w-5 mr-2" />
            <span className="text-lg">{t.hero.developer}</span>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-primary/10 border-2 border-dashed border-primary rounded-lg p-4">
          <div className="flex items-center mb-3">
            <CreditCard className="h-5 w-5 mr-2 text-primary" />
            <span className="font-semibold text-foreground">{t.propertyInfo.flexiblePayment}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{t.propertyInfo.paymentPlan}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">{t.propertyInfo.downPayment}</span>
            </div>
          </div>
        </div>

        {/* Apartment Types */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {t.pricing.apartments}
          </h3>
          <p className="text-muted-foreground mb-2">{t.pricing.startsFrom}</p>
          <div className="text-3xl font-bold text-primary mb-1">
            $850K <span className="text-lg font-normal text-muted-foreground">/ $2.3M</span>
          </div>
          <p className="text-sm text-muted-foreground">{t.pricing.onwards}</p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="w-full bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg"
                size="lg"
              >
                {t.propertyInfo.enquireNow}
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
          
          <div className="flex space-x-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t.propertyInfo.organizeSiteVisit}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-bold">
                    {t.propertyInfo.scheduleSiteVisit}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <InquiryForm />
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              variant="outline" 
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyInfo;