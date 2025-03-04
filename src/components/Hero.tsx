import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div 
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 py-16 md:py-20 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">{title}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a 
              href="/destinations" 
              className="btn-secondary text-base sm:text-lg py-3 px-6 min-w-[180px] sm:min-w-[200px] touch-manipulation"
              aria-label="Browse Destinations"
            >
              <span>Browse Destinations</span>
              <FaChevronRight className="ml-2" />
            </a>
            
            <a 
              href="/compare" 
              className="btn-secondary text-base sm:text-lg py-3 px-6 min-w-[180px] sm:min-w-[200px] touch-manipulation"
              aria-label="Compare Options"
            >
              <span>Compare Options</span>
              <FaChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient at bottom for better text contrast with content below */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default Hero; 