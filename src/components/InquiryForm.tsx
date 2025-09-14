import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, User, Shield, Clock, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InquiryForm = () => {
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
        description: "Please agree to the processing of your data.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Inquiry Submitted!",
      description: "We'll contact you within 24 hours.",
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
            Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-10 bg-background/80 border-border/40 focus:border-primary"
              placeholder="Your Full Name"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            Mobile Number
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
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
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
              placeholder="your.email@example.com"
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
            I consent to the processing of provided data according to{" "}
            <span className="text-primary underline cursor-pointer">Privacy Policy</span> |{" "}
            <span className="text-primary underline cursor-pointer">Terms & Conditions</span>.
            I authorize representatives to call, SMS, email or WhatsApp me about products and offers.
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold py-6 text-lg mt-6"
        >
          Submit
        </Button>
      </form>

      {/* Trust Indicators */}
      <div className="flex justify-around items-center mt-6 pt-6 border-t border-border/20">
        <div className="text-center">
          <Clock className="h-6 w-6 mx-auto mb-1 text-primary" />
          <p className="text-xs text-muted-foreground">Instant<br />Call Back</p>
        </div>
        <div className="text-center">
          <Shield className="h-6 w-6 mx-auto mb-1 text-primary" />
          <p className="text-xs text-muted-foreground">Free Site<br />Visit</p>
        </div>
        <div className="text-center">
          <Award className="h-6 w-6 mx-auto mb-1 text-primary" />
          <p className="text-xs text-muted-foreground">Best Price<br />Guarantee</p>
        </div>
      </div>
    </Card>
  );
};

export default InquiryForm;