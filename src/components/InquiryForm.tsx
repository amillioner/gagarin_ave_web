import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, User, Shield, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const InquiryForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: t.form.consentRequired,
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Inquiry Submitted!",
      description: t.form.submitSuccess,
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", consent: false });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="bg-card/95 backdrop-blur-sm shadow-elegant border-border/20 p-8 max-w-md">
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl font-bold text-primary mb-2">
          ENQUIRE NOW
        </h2>
        <div className="w-12 h-0.5 bg-gradient-luxury mx-auto"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            {t.form.name}
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-10 bg-background/80 border-border/40 focus:border-primary"
              placeholder={t.form.name}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            {t.form.phone}
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="pl-10 bg-background/80 border-border/40 focus:border-primary"
              placeholder="+(998) 66 230-01-71"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            {t.form.email}
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 bg-background/80 border-border/40 focus:border-primary"
              placeholder={t.form.email}
              required
            />
          </div>
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, consent: !!checked })
            }
            className="border-border/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
          <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
            {t.form.consent}{" "}
            <span className="text-primary underline cursor-pointer">{t.form.privacyPolicy}</span> |{" "}
            <span className="text-primary underline cursor-pointer">{t.form.termsConditions}</span>.
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg mt-6"
        >
          {t.form.submit}
        </Button>
      </form>

      {/* Trust Indicators */}
      <div className="flex justify-around items-center mt-6 pt-6 border-t border-border/20">
        <div className="text-center">
          <Clock className="h-6 w-6 mx-auto mb-1 text-primary" />
          <p className="text-xs text-muted-foreground">{t.form.trustIndicators.support}</p>
        </div>
        <div className="text-center">
          <Shield className="h-6 w-6 mx-auto mb-1 text-primary" />
          <p className="text-xs text-muted-foreground">{t.form.trustIndicators.secure}</p>
        </div>
        <div className="text-center">
          <Award className="h-6 w-6 mx-auto mb-1 text-primary" />
          <p className="text-xs text-muted-foreground">{t.form.trustIndicators.certified}</p>
        </div>
      </div>
    </Card>
  );
};

export default InquiryForm;