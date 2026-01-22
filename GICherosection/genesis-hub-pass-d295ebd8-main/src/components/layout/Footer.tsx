import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import gicLogo from "@/assets/gic-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gic-dark text-gic-light dark:bg-gic-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2">
              <img src={gicLogo} alt="GIC Logo" className="h-12 w-12 rounded-full object-cover" />
              <div className="flex items-center gap-1">
                <span className="font-display font-bold text-2xl text-primary">GIC</span>
                <span className="font-display font-bold text-2xl text-gic-light">2026</span>
              </div>
            </Link>
            <p className="text-gic-light/70 text-sm leading-relaxed max-w-sm">
              Global Innovators Conclave 2026 - A premier international innovation and entrepreneurship event organized by St. Martin's Engineering College, Hyderabad.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gic-light/50">27-28 February 2026</span>
              <span className="text-gic-light/30">|</span>
              <span className="text-gic-light/50">Hyderabad, India</span>
            </div>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full bg-gic-light/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-gic-light" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-5 text-gic-light">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-gic-light/70">
                  St. Martin's Engineering College, Dhulapally, Hyderabad
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@gic2026.com" className="text-gic-light/70 hover:text-primary transition-colors">
                  info@gic2026.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-gic-light/70 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gic-light/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gic-light/50 text-sm">
            © {currentYear} Global Innovators Conclave. All rights reserved.
          </p>
          <a 
            href="https://smec.ac.in" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gic-light/50 hover:text-primary transition-colors inline-flex items-center gap-1 text-sm"
          >
            St. Martin's Engineering College <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
