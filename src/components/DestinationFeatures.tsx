import React from 'react';
import { FaWifi, FaUtensils, FaShuttleVan, FaSwimmingPool, FaCocktail, FaUmbrellaBeach } from 'react-icons/fa';

interface DestinationFeaturesProps {
  features: string[];
}

const DestinationFeatures: React.FC<DestinationFeaturesProps> = ({ features }) => {
  // Function to get the appropriate icon for a feature
  const getFeatureIcon = (feature: string) => {
    const lowercaseFeature = feature.toLowerCase();
    
    if (lowercaseFeature.includes('wifi') || lowercaseFeature.includes('internet'))
      return <FaWifi />;
    if (lowercaseFeature.includes('restaurant') || lowercaseFeature.includes('dining'))
      return <FaUtensils />;
    if (lowercaseFeature.includes('transportation') || lowercaseFeature.includes('shuttle'))
      return <FaShuttleVan />;
    if (lowercaseFeature.includes('pool') || lowercaseFeature.includes('swimming'))
      return <FaSwimmingPool />;
    if (lowercaseFeature.includes('bar') || lowercaseFeature.includes('drinks'))
      return <FaCocktail />;
    if (lowercaseFeature.includes('beach') || lowercaseFeature.includes('ocean'))
      return <FaUmbrellaBeach />;
      
    // Default icon if no match
    return <FaUmbrellaBeach />;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h3 className="text-xl font-serif font-bold mb-4">Destination Features</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-all"
          >
            <div className="text-primary mr-3">
              {getFeatureIcon(feature)}
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationFeatures; 