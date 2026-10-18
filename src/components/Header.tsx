
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Focus & Criteria", href: "/#focus-criteria" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Transactions", href: "/#transactions" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const solid = scrolled || isMenuOpen;

  const linkClass =
    "relative text-sm font-medium tracking-wide text-gray-200 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-refumo-coral after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        solid
          ? "bg-refumo-darkblue/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16 md:h-18 py-3" : "h-20 md:h-24 py-4"}`}>
          <Link to="/" aria-label="Refumo home">
            <img
              src="/refumo orange no backround.png"
              alt="Refumo Logo"
              className={`object-contain transition-all duration-300 ${scrolled ? "h-9 md:h-10" : "h-10 md:h-12"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className={linkClass}>
              Home
            </Link>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden -mr-2 inline-flex items-center justify-center w-12 h-12 rounded-full text-white hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 text-white animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <Link
              to="/"
              className="py-4 text-lg border-b border-white/10 hover:text-refumo-coral transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`py-4 text-lg hover:text-refumo-coral transition-colors ${i < navItems.length - 1 ? "border-b border-white/10" : ""}`}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
