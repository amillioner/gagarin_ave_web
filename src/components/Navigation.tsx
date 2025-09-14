import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, Phone } from "lucide-react";
import InquiryForm from "./InquiryForm";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

  const languages = [
    { code: "en", name: "ENGLISH" },
    { code: "uz", name: "O'ZBEK" },
    { code: "ru", name: "РУССКИЙ" },
  ];

  // Navigation items for the menu

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Price", href: "#price" },
    { name: "Site Plan", href: "#siteplan" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Brochure", href: "#brochure" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card-luxury/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display text-2xl font-bold text-primary">
            LUXE RESIDENCES
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
              onClick={() => {
                const currentIndex = languages.findIndex(lang => lang.name === selectedLanguage);
                const nextIndex = (currentIndex + 1) % languages.length;
                setSelectedLanguage(languages[nextIndex].name);
              }}
            >
              {selectedLanguage}
            </Button>
            
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="h-4 w-4 mr-2" />
              +(998) 66 2300171
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold">
                  Request Call Back
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl font-bold">
                    Contact Us
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
              
              {/* Mobile Language Selector */}
              <div className="pt-2 pb-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full border border-border text-card-luxury-foreground hover:bg-accent/50 font-medium"
                  onClick={() => {
                    const currentIndex = languages.findIndex(lang => lang.name === selectedLanguage);
                    const nextIndex = (currentIndex + 1) % languages.length;
                    setSelectedLanguage(languages[nextIndex].name);
                  }}
                >
                  {selectedLanguage}
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
                      Request Call Back
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-xl font-bold">
                        Contact Us
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