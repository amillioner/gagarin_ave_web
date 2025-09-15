import React, { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDialog from "./ContactDialog";
import { PrimaryButton, OutlinePrimaryButtonSmall } from "@/components/ui/button-variants";
import Logo from "./Logo";
import { LANGUAGES, NAVIGATION_ITEMS, CONTACT_INFO } from "@/config/constants";
import { scrollToTop } from "@/utils/helpers";

const Navigation = React.memo(() => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getCurrentLanguageName = useCallback(() => {
    return LANGUAGES.find(lang => lang.code === language)?.name || "ENG";
  }, [language]);

  const handleLanguageChange = useCallback((newLanguage: string) => {
    setLanguage(newLanguage);
  }, [setLanguage]);

  // Navigation items for the menu
  const navItems = useMemo(() => NAVIGATION_ITEMS.map(item => ({
    name: t.nav[item.key as keyof typeof t.nav],
    href: item.href,
  })), [t.nav]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card-luxury/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-display text-lg sm:text-xl md:text-2xl font-bold text-primary min-w-[120px] sm:min-w-[160px] md:min-w-[200px] whitespace-pre-line cursor-pointer"
            onClick={scrollToTop}
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
                {LANGUAGES.map((lang) => (
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
                {CONTACT_INFO.phones.map((phone) => (
                  <DropdownMenuItem key={phone.number} asChild>
                    <a href={`tel:${phone.number}`} className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {phone.display}
                    </a>
                  </DropdownMenuItem>
                ))}
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
            onClick={toggleMenu}
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
                        onClick={closeMenu}
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
                    onClick={closeMenu}
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
                    {LANGUAGES.map((lang) => (
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
                    {CONTACT_INFO.phones.map((phone) => (
                      <DropdownMenuItem key={phone.number} asChild>
                        <a href={`tel:${phone.number}`} className="cursor-pointer hover:bg-accent/50 focus:bg-accent/50 text-card-foreground flex items-center py-3">
                          <Phone className="h-4 w-4 mr-2" />
                          {phone.display}
                        </a>
                      </DropdownMenuItem>
                    ))}
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
});

Navigation.displayName = 'Navigation';

export default Navigation;