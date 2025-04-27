import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";

const Footer = () => {
  return (
    <>
      <div className="bg-white py-4">
        <TradingViewWidget />
      </div>
      <footer className="bg-refumo-darkblue text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">REFUMO</h3>
              <p className="text-gray-300 mb-4">
                Pan-European Property Investment<br />
                Value-Driven Strategy<br />
                Enduring Relationships
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/expertise" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies-policy" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 text-refumo-coral" />
                  <span className="text-gray-300">
                    32 St George Street, London W1S 2EA
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-refumo-coral" />
                  <span className="text-gray-300">+44 7488 897774</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-refumo-coral" />
                  <a href="mailto:info@refumo.com" className="text-gray-300 hover:text-refumo-coral transition-colors">
                    info@refumo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Refumo Investments. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
