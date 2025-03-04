import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkBg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Fox Club Spring Break</h3>
            <p className="text-gray-300 mb-4">
              Explore the best destinations for your next Spring Break adventure. 
              Curated exclusively for Fox Club members.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="mailto:info@foxclub.example.com" className="text-gray-300 hover:text-accent transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="/destinations" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  All Destinations
                </a>
              </li>
              <li>
                <a href="/compare" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  Compare
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Travel Tips</h3>
            <ul className="space-y-2">
              <li>
                <a href="/tips/packing" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  Packing Guides
                </a>
              </li>
              <li>
                <a href="/tips/budget" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  Budget Planning
                </a>
              </li>
              <li>
                <a href="/tips/safety" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="/tips/group-travel" className="text-gray-300 hover:text-accent transition-colors cursor-pointer">
                  Group Travel Advice
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>© {currentYear} Fox Club Spring Break. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Created exclusively for Fox Club members. Not affiliated with any travel agency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 