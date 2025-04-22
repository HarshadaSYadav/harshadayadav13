
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-portfolio-dark/90 backdrop-blur-sm py-2' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">HashTech</h1>
        
        {/* Desktop Navigation with new hover effect */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-portfolio-purple relative group py-2"
            >
              <span>{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-purple group-hover:w-full transition-all duration-300 ease-out"></span>
              <span className="absolute -top-1 right-0 w-0 h-0.5 bg-portfolio-purple-light group-hover:w-full transition-all duration-300 ease-out delay-100"></span>
              <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 bg-purple-500 rounded-lg blur-lg transition-opacity"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-portfolio-dark/95 backdrop-blur-md py-4 border-t border-gray-800">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-portfolio-purple py-2 transition-colors relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-purple group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
