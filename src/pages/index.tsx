import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import DestinationCard from '@/components/DestinationCard';
import { getAllDestinations } from '@/data/destinations';

export default function Home() {
  const destinations = getAllDestinations();
  const featuredDestinations = destinations.slice(0, 3); // Show first 3 destinations as featured
  
  return (
    <Layout>
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2000"
        title="Discover Your Perfect Spring Break"
        subtitle="Explore the top destinations for an unforgettable Fox Club experience in March 2025"
      />
      
      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Featured Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out these top picks for your next Spring Break adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <div key={destination.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <DestinationCard 
                  destination={destination}
                  priority={index === 0} // Only prioritize loading the first image
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/destinations" className="btn-primary inline-block min-w-[200px]">
              View All Destinations
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Why Choose Our Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The ultimate resource for planning your Fox Club Spring Break experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Curated Destinations",
                description: "We've carefully selected and reviewed the top Spring Break spots specifically for Fox Club members.",
                icon: "🌴"
              },
              {
                title: "Exclusive Information",
                description: "Get insider tips and details you won't find in standard travel guides.",
                icon: "🔍"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-800">Ready to Plan Your Trip?</h2>
          <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
            Compare destinations side by side and find the perfect match for your Spring Break preferences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/destinations" className="btn-secondary min-w-[200px]">
              Browse Destinations
            </a>
            <a href="/compare" className="btn-secondary min-w-[200px]">
              Compare Options
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 