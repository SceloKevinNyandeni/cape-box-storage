import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cape Box Storage
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Safe, secure & affordable storage – made for students in Cape Town. We collect, store & return your boxes — stress-free.
            </p>
            <div className="space-y-2">
              <a href="tel:0682791313" className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>068 279 1313</span>
              </a>
              <a href="mailto:capeboxstorage@gmail.com" className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>capeboxstorage@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Cape Town, Western Cape</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-background/80 hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("how-it-works")} className="text-background/80 hover:text-primary transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-background/80 hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 text-background">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/27682791313"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-background/80 hover:text-accent transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/capeboxstorage/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-background/80 hover:text-accent transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm text-center md:text-left">
            © {currentYear} Cape Box Storage. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </button>
            <button className="text-background/70 hover:text-background transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
