import React, { useState } from 'react';
import Layout from '@/components/Layout';
import DestinationCard from '@/components/DestinationCard';
import { getAllDestinations } from '@/data/destinations';
import { FaFilter, FaSortAmountDown } from 'react-icons/fa';

export default function DestinationsPage() {
  const allDestinations = getAllDestinations();
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  
  // Filter destinations based on type
  const filteredDestinations = filterType === 'all' 
    ? allDestinations 
    : allDestinations.filter(dest => dest.type.toLowerCase().includes(filterType.toLowerCase()));
  
  // Sort destinations based on criteria
  const sortedDestinations = [...filteredDestinations].sort((a, b) => {
    if (sortBy === 'cost-low') {
      return a.ratings.cost - b.ratings.cost;
    }
    if (sortBy === 'cost-high') {
      return b.ratings.cost - a.ratings.cost;
    }
    if (sortBy === 'nightlife') {
      return b.ratings.nightlife - a.ratings.nightlife;
    }
    if (sortBy === 'adventure') {
      return b.ratings.adventure - a.ratings.adventure;
    }
    // Default sort by id
    return a.id - b.id;
  });
  
  const filterTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'international', label: 'International' },
    { value: 'domestic', label: 'Domestic' },
    { value: 'beach', label: 'Beach' },
    { value: 'city', label: 'City' }
  ];
  
  const sortOptions = [
    { value: 'default', label: 'Default Order' },
    { value: 'cost-low', label: 'Cost: Low to High' },
    { value: 'cost-high', label: 'Cost: High to Low' },
    { value: 'nightlife', label: 'Best Nightlife' },
    { value: 'adventure', label: 'Most Adventurous' }
  ];
  
  return (
    <Layout>
      <div className="bg-primary bg-opacity-10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">
            All Spring Break Destinations
          </h1>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
            Browse all our curated destinations for Fox Club members. Filter and sort to find your perfect match.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <FaFilter className="text-primary mr-2" />
            <span className="text-gray-700 font-medium mr-3">Filter:</span>
            <div className="flex flex-wrap gap-2">
              {filterTypes.map(type => (
                <button
                  key={type.value}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filterType === type.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setFilterType(type.value)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <FaSortAmountDown className="text-primary mr-2" />
            <span className="text-gray-700 font-medium mr-3">Sort:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-3 py-1 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedDestinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DestinationCard 
                destination={destination}
                priority={index < 6} 
              />
            </div>
          ))}
        </div>
        
        {/* No results */}
        {sortedDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-700 text-lg mb-4">No destinations match your current filters.</p>
            <button 
              onClick={() => setFilterType('all')}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
} 