
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
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

            <p className="text-gray-400 leading-relaxed text-sm">
              Alternative Capital Group for Real Estate<br />
              <span className="text-gray-300 font-medium">Luxembourg | London</span>
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
                <a href="/#focus-criteria" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                  Focus &amp; Criteria
                </a>
              </li>
              <li>
                <a href="/#expertise" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                  Expertise
                </a>
              </li>
              <li>
                <a href="/#leadership" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                  Leadership
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
                <Link to="/disclaimer" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                  Regulatory Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                  Privacy Policy
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
                <MapPin size={20} className="mr-2 mt-1 text-refumo-coral flex-shrink-0" />
                <span className="text-gray-400">
                  <strong className="text-white">Luxembourg | London</strong><br />
                  10 Rue Beaumont, L-1219 Luxembourg
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-refumo-coral flex-shrink-0" />
                <span className="text-gray-400">+44 7488 897774</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-refumo-coral flex-shrink-0" />
                <a href="mailto:info@refumo.com" className="text-gray-400 hover:text-refumo-coral transition-colors inline-block py-1">
                  info@refumo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Block */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 text-gray-400 text-xs leading-relaxed space-y-2">
            <p className="font-semibold text-gray-300 tracking-wide uppercase">
              IMPORTANT LEGAL &amp; REGULATORY DISCLAIMER:
            </p>
            <p>
              This website is provided by Refumo Investments (<em>Refumo S.&agrave; r.l.</em>, 10 Rue Beaumont, L-1219 Luxembourg, and affiliated UK/European group entities) for information purposes only and is directed exclusively at institutional counterparties, professional investors (as defined under MiFID II and the UK FCA COBS rules), and commercial corporate borrowers. Nothing on this website constitutes investment advice, a financial promotion to retail clients, an offer to sell, or a solicitation of any offer to buy or subscribe for any security or financial instrument, nor shall it be relied upon in connection with any investment decision. Refumo does not conduct regulated investment services for third parties or regulated consumer/residential mortgage lending. Commercial real estate financing criteria are strictly limited to corporate special purpose vehicles (SPVs); any transaction involving regulated structures or jurisdictions is executed solely in conjunction with authorised banking, securitisation, or licensed fund management partners. Past performance of the leadership team or prior transactions is not indicative of future results.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Refumo Investments. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

