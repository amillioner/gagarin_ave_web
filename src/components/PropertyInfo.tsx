import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, MapPin, Building, CreditCard } from "lucide-react";

const PropertyInfo = () => {
  return (
    <Card className="bg-gradient-card backdrop-blur-sm shadow-luxury border-border/20 p-8 max-w-lg">
      <div className="space-y-6">
        {/* Property Title */}
        <div>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">
            LUXE RESIDENCES
          </h1>
          <div className="flex items-center text-muted-foreground mb-1">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-xl">At Premium District</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Building className="h-5 w-5 mr-2" />
            <span className="text-lg">By Elite Properties</span>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-primary/10 border-2 border-dashed border-primary rounded-lg p-4">
          <div className="flex items-center mb-3">
            <CreditCard className="h-5 w-5 mr-2 text-primary" />
            <span className="font-semibold text-foreground">Flexible Payment Options Available</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">Easy 70/30 Payment Plan</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-primary" />
              <span className="text-sm">Down Payment 20%</span>
            </div>
          </div>
        </div>

        {/* Apartment Types */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Luxury 1, 2 & 3 Bed Apartments
          </h3>
          <p className="text-muted-foreground mb-2">Starts From</p>
          <div className="text-3xl font-bold text-primary mb-1">
            $850K <span className="text-lg font-normal text-muted-foreground">/ $2.3M</span>
          </div>
          <p className="text-sm text-muted-foreground">Onwards</p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button 
            className="w-full bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg"
            size="lg"
          >
            Enquire Now
          </Button>
          
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Organize Site Visit
            </Button>
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