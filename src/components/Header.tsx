import { useState, useEffect } from 'react';
import { FaSun, FaMapMarkedAlt, FaInfoCircle, FaPlaneDeparture } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial state based on current scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-black/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="cursor-pointer">
            <div 
              className="flex items-center"
            >
              <FaSun className="text-accent text-2xl mr-2" />
              <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Fox Club Spring Break
              </span>
            </div>
          </a>
          
          <nav>
            <ul className="flex space-x-6 items-center">
              <li 
                className="animate-fade-in-up" 
                style={{ animationDelay: '0.1s' }}
              >
                <a href="/" className={`flex items-center cursor-pointer ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}>
                  <FaMapMarkedAlt className="mr-1" />
                  <span>Destinations</span>
                </a>
              </li>
              <li 
                className="animate-fade-in-up" 
                style={{ animationDelay: '0.2s' }}
              >
                <a href="/compare" className={`flex items-center cursor-pointer ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}>
                  <FaPlaneDeparture className="mr-1" />
                  <span>Compare</span>
                </a>
              </li>
              <li 
                className="animate-fade-in-up" 
                style={{ animationDelay: '0.3s' }}
              >
                <a href="/about" className={`flex items-center cursor-pointer ${isScrolled ? 'text-primary' : 'text-white'} hover:text-accent transition-colors`}>
                  <FaInfoCircle className="mr-1" />
                  <span>About</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 