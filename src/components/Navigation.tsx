import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import InquiryForm from "./InquiryForm";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "ENG", fullName: "English" },
    { code: "uz", name: "UZB", fullName: "O'zbek" },
    { code: "ru", name: "RUS", fullName: "Русский" },
  ];

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === language)?.name || "ENG";
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
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
          <div className="font-display text-2xl font-bold text-primary min-w-[200px]">
            {t.hero.title}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.name === t.nav.brochure ? (
                <Dialog key={item.name}>
                  <DialogTrigger asChild>
                    <button className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap min-w-[80px] text-center">
                      {item.name}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-xl font-bold">
                        {t.nav.brochure}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <InquiryForm />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap min-w-[80px] text-center"
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Language Selector & Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 ml-8">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="border border-border text-card-luxury-foreground hover:bg-accent/50 font-medium"
                >
                  {getCurrentLanguageName()}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border/20 shadow-elegant z-50" align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="ml-2 text-muted-foreground text-sm">{lang.fullName}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="h-4 w-4 mr-2" />
              +(998) 66 230-01-71
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-luxury hover:opacity-90 text-primary-foreground font-semibold whitespace-nowrap min-w-[140px]">
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
                item.name === t.nav.brochure ? (
                  <Dialog key={item.name}>
                    <DialogTrigger asChild>
                      <button 
                        className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium py-2 w-full text-left"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-center text-xl font-bold">
                          {t.nav.brochure}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <InquiryForm />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              <div className="pt-2 pb-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full border border-border text-card-luxury-foreground hover:bg-accent/50 font-medium"
                    >
                      {getCurrentLanguageName()}
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border/20 shadow-elegant z-50 w-48">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground"
                      >
                        <span className="font-medium">{lang.name}</span>
                        <span className="ml-2 text-muted-foreground text-sm">{lang.fullName}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  +(998) 66 230-01-71
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