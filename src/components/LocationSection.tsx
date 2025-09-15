import { MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDialog from "./ContactDialog";
import { PrimaryButtonFull } from "@/components/ui/button-variants";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import ElegantCard from "@/components/ui/elegant-card";
import { CONNECTIVITY_DATA, CONTACT_INFO, APP_CONFIG } from "@/config/constants";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="location" className="pt-32 pb-20 bg-muted/30">
      <SectionHeader title={t.location.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <ElegantCard className="overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-4">
                <h3 className="font-display text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  {t.location.primeLocation}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-luxury mx-auto"></div>
              </div>
              
              <div className="relative w-full h-80 rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.221628018829!2d55.11606707446524!3d25.056847777799172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcded12651f88d28c!2zMjXCsDAzJzI0LjciTiA1NcKwMDcnMDguNiJF!5e0!3m2!1sen!2sae!4v1647874561234!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>

              <div className="text-center">
                <div className="text-primary font-semibold">
                  {APP_CONFIG.location}
                </div>
                <div className="space-y-2">
                  {CONTACT_INFO.phones.map((phone) => (
                    <div key={phone.number} className="text-primary font-semibold">
                      <a href={`tel:${phone.number}`} className="hover:underline">
                        {phone.display}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ElegantCard>

          {/* Connectivity */}
          <ElegantCard>
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  {t.location.connectivity}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-luxury mx-auto"></div>
              </div>

              <div className="space-y-4 mb-6">
                {CONNECTIVITY_DATA.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/20 hover:bg-background/80 transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-card-foreground font-medium">{item.name}</span>
                    </div>
                    <div className="text-primary font-semibold text-sm">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <ContactDialog
                  trigger={
                    <PrimaryButtonFull size="lg">
                      {t.location.requestDetails}
                    </PrimaryButtonFull>
                  }
                />
              </div>
            </div>
          </ElegantCard>
        </div>
    </Section>
  );
};

export default LocationSection;