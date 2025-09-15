import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDialog from "./ContactDialog";
import { PrimaryButton, OutlinePrimaryButtonSmall } from "@/components/ui/button-variants";
import Logo from "./Logo";

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
          <div 
            className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary min-w-[120px] sm:min-w-[160px] md:min-w-[200px] whitespace-pre-line cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {t.hero.title}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.name === t.nav.brochure ? (
                <ContactDialog
                  key={item.name}
                  trigger={
                    <button className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap min-w-[80px] text-center">
                      {item.name}
                    </button>
                  }
                  title={t.nav.brochure}
                />
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
                  className="border border-border text-card-luxury-foreground hover:bg-accent/50 font-medium min-w-[60px]"
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <OutlinePrimaryButtonSmall>
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                  <ChevronDown className="h-4 w-4 ml-2" />
                </OutlinePrimaryButtonSmall>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border/20 shadow-elegant z-50" align="end">
                <DropdownMenuItem asChild>
                  <a href="tel:+998662300171" className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +(998) 66 230-01-71
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="tel:+998955005555" className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +(998) 95 500-55-55
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ContactDialog
              trigger={
                <PrimaryButton className="whitespace-nowrap min-w-[140px]">
                  {t.nav.requestCallBack}
                </PrimaryButton>
              }
            />
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
                  <ContactDialog
                    key={item.name}
                    trigger={
                      <button 
                        className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium py-3 w-full text-left text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </button>
                    }
                    title={t.nav.brochure}
                  />
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-card-luxury-foreground hover:text-primary transition-colors duration-300 font-medium py-3 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              <div className="pt-4 pb-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full border border-border text-card-luxury-foreground hover:bg-accent/50 font-medium py-3"
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
              
              <div className="flex flex-col space-y-3 pt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <OutlinePrimaryButtonSmall className="w-full py-3">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </OutlinePrimaryButtonSmall>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border/20 shadow-elegant z-50 w-48">
                    <DropdownMenuItem asChild>
                      <a href="tel:+998662300171" className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground flex items-center py-3">
                        <Phone className="h-4 w-4 mr-2" />
                        +(998) 66 230-01-71
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="tel:+998955005555" className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground flex items-center py-3">
                        <Phone className="h-4 w-4 mr-2" />
                        +(998) 95 500-55-55
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ContactDialog
                  trigger={
                    <PrimaryButton className="w-full py-3">
                      {t.nav.requestCallBack}
                    </PrimaryButton>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;