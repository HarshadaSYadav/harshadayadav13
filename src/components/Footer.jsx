
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative py-4 mt-8">  {/* Reduced padding and margin */}
      <div className="container mx-auto px-4">
        {/* Back to top button */}
        <div className="flex justify-center mb-4">  {/* Reduced margin */}
          <button 
            onClick={scrollToTop}
            className={`w-12 h-12 rounded-full bg-portfolio-purple flex items-center justify-center text-white hover:bg-portfolio-purple-light transition-all duration-300 hover:-translate-y-1 ${
              showScrollButton ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />  {/* Slightly smaller icon */}
          </button>
        </div>
        
        {/* Copyright text */}
        <div className="text-center text-gray-400 text-sm">  {/* Smaller text */}
          <p>©{currentYear}-{currentYear + 1} All rights reserved | Designed and coded by Harshada Yadav</p>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent -z-10"></div>  {/* Reduced height */}
    </footer>
  );
};

export default Footer;
