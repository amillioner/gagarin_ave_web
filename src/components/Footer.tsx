const Footer = () => {
  return (
    <footer className="bg-card-luxury/95 border-t border-border/20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4">
          {/* Disclaimer */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="font-semibold text-primary mb-3">Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.
            </p>
          </div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border/20">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025 | All rights reserved
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#privacy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="#terms" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;