import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "ENGLISH" },
    { code: "uz", name: "O'ZBEK" },
    { code: "ru", name: "РУССКИЙ" },
  ];

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === language)?.name || "ENGLISH";
  };

  const handleLanguageChange = () => {
    const currentIndex = languages.findIndex(lang => lang.code === language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex].code);
  };

  // Navigation items for the menu
  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.price, href: "#price" },
    { name: t.nav.sitePlan, href: "#siteplan" },
    { name: t.nav.amenities, href: "#amenities" },
    { name: t.nav.gallery, href: "#gallery" },
    { name: t.nav.location, href: "#location" },
    { name: t.nav.brochure, href: "#brochure" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card-luxury/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display text-2xl font-bold text-primary">
            {t.hero.title}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Language Selector & Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Simple Language Selector */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="border border-border text-card-luxury-foreground hover:bg-accent/50 font-medium"
              onClick={handleLanguageChange}
            >
              {getCurrentLanguageName()}
            </Button>
            
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="h-4 w-4 mr-2" />
              +(998) 66 2300171
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold">
                  {t.nav.requestCallBack}
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-card-luxury-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-2 pb-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full border border-border text-card-luxury-foreground hover:bg-accent/50 font-medium"
                  onClick={handleLanguageChange}
                >
                  {getCurrentLanguageName()}
                </Button>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  +(998) 66 2300171
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold">
                      {t.nav.requestCallBack}
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
        )}
      </div>
    </nav>
  );
};

export default Navigation;