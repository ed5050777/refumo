
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";
import TradingViewTimeline from "./TradingViewTimeline";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-6 border-t border-gray-200/70">
        <TradingViewWidget />
        <div className="container mx-auto px-4 mt-4">
          <TradingViewTimeline />
        </div>
      </div>
      <footer className="bg-refumo-darkblue text-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div>

            <Link to="/">
            <img 
            src="/refumo orange no backround.png" 
            alt="Refumo Logo" 
            className="h-12 object-contain mb-6"
            />
            </Link>

              <p className="text-gray-400 leading-relaxed">
                Pan-European Property Investment<br />
                Value-Driven Strategy<br />
                Enduring Relationships
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/#services" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#expertise" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    Expertise
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies-policy" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 text-refumo-coral" />
                  <span className="text-gray-400">
                    10 Rue Beaumont, L-1219 Luxembourg
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-refumo-coral" />
                  <span className="text-gray-400">+44 7488 897774</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-refumo-coral" />
                  <a href="mailto:info@refumo.com" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                    info@refumo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-14 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Refumo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

