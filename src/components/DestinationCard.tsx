import { useState } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import { Destination } from '@/data/destinations';
import RatingScale from './RatingScale';

interface DestinationCardProps {
  destination: Destination;
  priority?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  destination,
  priority = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="card h-full flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={`${destination.name}, ${destination.location}`}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center text-xs">
            <span className="bg-accent px-2 py-1 rounded-full font-medium">{destination.type}</span>
            <span className="ml-2 bg-primary bg-opacity-70 px-2 py-1 rounded-full font-medium">{destination.budget}</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col">
        <div className="mb-3">
          <h3 className="font-serif text-xl font-bold text-gray-800">{destination.name}</h3>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <FaMapMarkerAlt className="mr-1 text-accent" />
            <span>{destination.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {destination.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <RatingScale type="cost" value={destination.ratings.cost} />
          <RatingScale type="nightlife" value={destination.ratings.nightlife} />
          <RatingScale type="adventure" value={destination.ratings.adventure} />
        </div>
        
        <a 
          href={`/destination/${destination.id}`}
          className="btn-primary flex items-center justify-center w-full"
        >
          <span>Explore</span>
          <FaChevronRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default DestinationCard; 