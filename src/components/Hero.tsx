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
      className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/destinations" 
              className="btn-primary min-w-[200px]"
            >
              <span>Browse Destinations</span>
              <FaChevronRight className="ml-2" />
            </a>
            
            <a 
              href="/compare" 
              className="btn-secondary min-w-[200px]"
            >
              <span>Compare Options</span>
              <FaChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 