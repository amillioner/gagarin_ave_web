import { FileText, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDialog from "./ContactDialog";
import { PrimaryButtonFull } from "@/components/ui/button-variants";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import ElegantCard from "@/components/ui/elegant-card";
import masterPlan from "@/assets/master-plan.jpg";
import unitPlan from "@/assets/unit-plan.jpg";

const SitePlanSection = () => {
  const { t } = useLanguage();
  return (
    <Section id="site-plan" className="pt-32 pb-20 bg-background">
      <SectionHeader title={t.sitePlan.title} subtitle={t.sitePlan.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Master Plan Layout */}
          <ElegantCard className="overflow-hidden" group>
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
              
              <ContactDialog
                trigger={
                  <PrimaryButtonFull size="lg">
                    <FileText className="h-5 w-5 mr-2" />
                    {t.sitePlan.viewMasterPlan}
                  </PrimaryButtonFull>
                }
              />
            </div>
          </ElegantCard>

          {/* Unit Plan Layout */}
          <ElegantCard className="overflow-hidden" group>
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
              
              <ContactDialog
                trigger={
                  <PrimaryButtonFull size="lg">
                    <Home className="h-5 w-5 mr-2" />
                    {t.sitePlan.requestUnitPlan}
                  </PrimaryButtonFull>
                }
              />
            </div>
          </ElegantCard>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.sitePlan.description}
          </p>
        </div>
    </Section>
  );
};

export default SitePlanSection;