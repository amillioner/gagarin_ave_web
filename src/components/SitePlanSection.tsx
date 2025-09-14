import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";
import masterPlan from "@/assets/master-plan.jpg";
import unitPlan from "@/assets/unit-plan.jpg";

const SitePlanSection = () => {
  const { t } = useLanguage();
  return (
    <section id="site-plan" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            {t.sitePlan.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            {t.sitePlan.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-luxury mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Master Plan Layout */}
          <Card className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 overflow-hidden group hover:shadow-glow transition-all duration-500">
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Master Plan Layout
                </h3>
                <div className="w-16 h-0.5 bg-gradient-luxury mx-auto"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                <img 
                  src={masterPlan}
                  alt="Master Plan Layout - Aerial view of the luxury residential development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                    View Master Plan Layout
                  </span>
                </div>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold"
                    size="lg"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    {t.sitePlan.viewMasterPlan}
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
          </Card>

          {/* Unit Plan Layout */}
          <Card className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 overflow-hidden group hover:shadow-glow transition-all duration-500">
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  <Home className="h-6 w-6 text-primary" />
                  Unit Plan Layout
                </h3>
                <div className="w-16 h-0.5 bg-gradient-luxury mx-auto"></div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                <img 
                  src={unitPlan}
                  alt="Unit Plan Layout - Detailed floor plans of luxury apartments"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                    Request Unit Plan Layout
                  </span>
                </div>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold"
                    size="lg"
                  >
                    <Home className="h-5 w-5 mr-2" />
                    {t.sitePlan.requestUnitPlan}
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
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.sitePlan.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SitePlanSection;