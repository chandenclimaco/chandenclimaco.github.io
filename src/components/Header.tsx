import { useState, useEffect } from 'react';
import { FaSun, FaMapMarkedAlt, FaInfoCircle, FaPlaneDeparture, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  // Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };
  
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
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
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
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className={isScrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <FaBars className={isScrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Drawer */}
        <div className={`md:hidden fixed inset-0 z-50 bg-primary-dark transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '0', marginTop: '0' }}>
          <div className="flex justify-end p-4">
            <button 
              className="text-white text-2xl focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <nav className="px-4 py-2">
            <ul className="space-y-6">
              <li>
                <a 
                  href="/" 
                  className="flex items-center text-white text-xl hover:text-accent transition-colors"
                  onClick={handleNavClick}
                >
                  <FaMapMarkedAlt className="mr-3 text-accent" />
                  <span>Destinations</span>
                </a>
              </li>
              <li>
                <a 
                  href="/compare" 
                  className="flex items-center text-white text-xl hover:text-accent transition-colors"
                  onClick={handleNavClick}
                >
                  <FaPlaneDeparture className="mr-3 text-accent" />
                  <span>Compare</span>
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="flex items-center text-white text-xl hover:text-accent transition-colors"
                  onClick={handleNavClick}
                >
                  <FaInfoCircle className="mr-3 text-accent" />
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