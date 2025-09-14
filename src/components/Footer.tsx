const Footer = () => {
  return (
    <footer className="bg-card-luxury/95 border-t border-border/20 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4">
          {/* Simple Disclaimer Text */}
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            <span className="font-medium">Disclaimer :</span> We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.
          </p>

          {/* Copyright and Legal Links */}
          <div className="text-center pt-2">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025 | {" "}
              <a 
                href="#privacy" 
                className="hover:text-primary transition-colors duration-300 underline"
              >
                Privacy Policy
              </a>
              {" | "}
              <a 
                href="#terms" 
                className="hover:text-primary transition-colors duration-300 underline"
              >
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;