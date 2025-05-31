
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute w-full z-50">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between">
         <Link to="/">
            <img 
            src="/Refumo new - no backround.png" 
            alt="Refumo Logo" 
            className="h-10 md:h-12 object-contain"
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-refumo-coral transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-refumo-coral transition-colors">
              Services
            </Link>
            <Link to="/expertise" className="text-white hover:text-refumo-coral transition-colors">
              Expertise
            </Link>
            <Link to="/contact" className="text-white hover:text-refumo-coral transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-refumo-darkblue text-white">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="py-2 hover:text-refumo-coral transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="py-2 hover:text-refumo-coral transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/expertise" 
                className="py-2 hover:text-refumo-coral transition-colors"
                onClick={toggleMenu}
              >
                Expertise
              </Link>
              <Link 
                to="/contact" 
                className="py-2 hover:text-refumo-coral transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
