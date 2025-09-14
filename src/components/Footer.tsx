import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-card-luxury/95 border-t border-border/20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            <span className="font-medium">Disclaimer :</span> {t.footer.disclaimer}
          </p>

          {/* Copyright and Legal Links */}
          <div className="text-center pt-2">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright} | {t.footer.privacyPolicy} | {t.footer.termsConditions}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;