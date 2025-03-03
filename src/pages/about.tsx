import React from 'react';
import Layout from '@/components/Layout';
import { FaUser, FaCalendarAlt, FaMapMarkedAlt, FaShieldAlt } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto animate-fade-in-up"
          >
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About This Project
              </h1>
              <p className="text-gray-600 text-lg">
                Fox Club Spring Break Destinations – Exclusively for Members
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                Spring Break 2025 Planning
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hello Czars and other members! We the initiates decided that what would be most useful
                for the club members for this project wasn't going to be a Google Doc or slideshow, so 
                we crafted this website that's packed with not only information but also tools to help
                you navigate the best destinations for this upcoming spring break.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                For some info about our process: we used OpenAI's newest feature, DeepResearch, with
                a carefully researched prompt we built ourselves. The model then spent about one hour
                doing research specifically for the club (which we specified was a group of guys) going
                on a spring break trip during Harvard's spring break dated; then we fact-checked the
                information, compiled the results, and added a few tidbits of our own.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background p-6 rounded-lg flex">
                  <div className="mr-4 text-primary">
                    <FaCalendarAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Trip Dates</h3>
                    <p className="text-gray-600">March 15–23, 2025</p>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg flex">
                  <div className="mr-4 text-primary">
                    <FaUser size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Fox Club Members Only</h3>
                    <p className="text-gray-600">Content curated exclusively for club members</p>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg flex">
                  <div className="mr-4 text-primary">
                    <FaMapMarkedAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">10 Top Destinations</h3>
                    <p className="text-gray-600">Ranging from beach parties to cultural adventures</p>
                  </div>
                </div>
                
                <div className="bg-background p-6 rounded-lg flex">
                  <div className="mr-4 text-primary">
                    <FaShieldAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Safety Focused</h3>
                    <p className="text-gray-600">All destinations vetted for safety and security</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href="/" className="btn-primary py-3 px-8 inline-block min-w-[200px]">
                Explore Destinations
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 