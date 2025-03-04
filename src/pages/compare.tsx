import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import RatingScale from '@/components/RatingScale';
import { getAllDestinations, Destination } from '@/data/destinations';
import { FaTrash, FaPlus, FaExchangeAlt, FaHome } from 'react-icons/fa';

export default function ComparePage() {
  const allDestinations = getAllDestinations();
  const [selectedDestinations, setSelectedDestinations] = useState<Destination[]>([]);
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  
  // Initialize with empty slots
  useEffect(() => {
    if (selectedDestinations.length === 0 && allDestinations.length > 0) {
      // Start with first destination selected
      setSelectedDestinations([allDestinations[0]]);
    }
  }, [allDestinations]);
  
  const handleAddDestination = () => {
    if (selectedDestinations.length < 3 && allDestinations.length > selectedDestinations.length) {
      // Find a destination not already selected
      const availableDestinations = allDestinations.filter(
        dest => !selectedDestinations.some(selected => selected.id === dest.id)
      );
      
      if (availableDestinations.length > 0) {
        setSelectedDestinations([...selectedDestinations, availableDestinations[0]]);
      }
    }
  };
  
  const handleRemoveDestination = (index: number) => {
    const newSelected = [...selectedDestinations];
    newSelected.splice(index, 1);
    setSelectedDestinations(newSelected);
    setShowDropdown(null);
  };
  
  const handleChangeDestination = (index: number, newDestination: Destination) => {
    const newSelected = [...selectedDestinations];
    newSelected[index] = newDestination;
    setSelectedDestinations(newSelected);
    setShowDropdown(null);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4">Compare Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select up to three destinations to compare side by side
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-4 divide-x divide-gray-200">
            {/* First column - criteria */}
            <div className="p-4 bg-gray-50">
              <div className="h-[200px] flex items-end justify-center pb-4">
                <h3 className="font-serif text-xl font-bold">Criteria</h3>
              </div>
              
              <div className="space-y-8">
                <div className="py-4 font-medium">Location</div>
                <div className="py-4 font-medium">Type</div>
                <div className="py-4 font-medium">Budget</div>
                <div className="py-4 font-medium">Cost Rating</div>
                <div className="py-4 font-medium">Nightlife Rating</div>
                <div className="py-4 font-medium">Adventure Rating</div>
                <div className="py-4 font-medium">Flight Cost</div>
                <div className="py-4 font-medium">Accommodation</div>
                <div className="py-4 font-medium">Daily Expenses</div>
              </div>
            </div>
            
            {/* Destination columns */}
            {selectedDestinations.map((destination, index) => (
              <div key={destination.id} className="p-4 relative">
                {/* Destination header with image */}
                <div className="h-[200px] relative rounded-lg overflow-hidden mb-4">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-serif text-xl font-bold">{destination.name}</h3>
                  </div>
                  
                  {/* Controls */}
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button 
                      onClick={() => setShowDropdown(showDropdown === index ? null : index)}
                      className="bg-accent text-gray-800 p-2 rounded-full hover:bg-accent-dark transition-colors z-20"
                      aria-label="Change destination"
                    >
                      <FaExchangeAlt />
                    </button>
                    <button 
                      onClick={() => handleRemoveDestination(index)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors z-20"
                      aria-label="Remove destination"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  {/* Dropdown for changing destination */}
                  {showDropdown === index && (
                    <div className="absolute top-14 right-0 w-full bg-white rounded-md shadow-lg z-30 max-h-[300px] overflow-y-auto">
                      {allDestinations
                        .filter(dest => !selectedDestinations.some(selected => selected.id === dest.id))
                        .map(dest => (
                          <button
                            key={dest.id}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                            onClick={() => handleChangeDestination(index, dest)}
                          >
                            {dest.name}, {dest.location}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
                
                {/* Destination details */}
                <div className="space-y-8">
                  <div className="py-4">{destination.location}</div>
                  <div className="py-4">{destination.type}</div>
                  <div className="py-4">{destination.budget}</div>
                  <div className="py-4">
                    <RatingScale type="cost" value={destination.ratings.cost} />
                  </div>
                  <div className="py-4">
                    <RatingScale type="nightlife" value={destination.ratings.nightlife} />
                  </div>
                  <div className="py-4">
                    <RatingScale type="adventure" value={destination.ratings.adventure} />
                  </div>
                  <div className="py-4">{destination.details.flightCost}</div>
                  <div className="py-4">{destination.details.accommodation}</div>
                  <div className="py-4">{destination.details.dailyCosts}</div>
                </div>
              </div>
            ))}
            
            {/* Empty slots */}
            {selectedDestinations.length < 3 && (
              <div 
                className="p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={handleAddDestination}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl text-gray-700">+</span>
                  </div>
                  <p className="text-gray-700">Add destination</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Back to Home Button */}
        <div className="text-center mt-8">
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            <FaHome className="mr-2" />
            Back to Home
          </a>
        </div>
      </div>
    </Layout>
  );
} 