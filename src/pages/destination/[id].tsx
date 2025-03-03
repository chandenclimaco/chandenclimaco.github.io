import { useRouter } from 'next/router';
import { FaMapMarkerAlt, FaArrowLeft, FaChevronRight } from 'react-icons/fa';
import Layout from '@/components/Layout';
import RatingScale from '@/components/RatingScale';
import { getAllDestinations, Destination } from '@/data/destinations';

export default function DestinationPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const destinations = getAllDestinations();
  const destination = destinations.find(d => d.id === Number(id));
  
  if (!destination) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <p className="mb-8">The destination you're looking for doesn't exist or has been removed.</p>
          <a href="/" className="btn-primary">
            Return Home
          </a>
        </div>
      </Layout>
    );
  }
  
  // Extract features from activities for the DestinationFeatures component
  const features = [
    `Flight Cost: ${destination.details.flightCost}`,
    `Accommodation: ${destination.details.accommodation}`,
    `Daily Expenses: ${destination.details.dailyCosts}`,
    ...destination.activities.slice(0, 3)
  ];
  
  // Convert activities to the format expected by ActivityList
  const formattedActivities = destination.activities.map(activity => ({
    name: activity,
    icon: getActivityIcon(activity),
    time: getActivityTime(activity)
  }));
  
  // Convert nightlife to the format expected by ActivityList
  const formattedNightlife = destination.nightlife.map(item => ({
    name: item,
    icon: 'nightlife',
    time: 'night'
  }));
  
  // Convert unique attractions to the format expected by ActivityList
  const formattedAttractions = destination.uniqueAttractions.map(item => ({
    name: item,
    icon: getAttractionIcon(item),
    time: 'both'
  }));
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src={destination.imageUrl}
          alt={`${destination.name}, ${destination.location}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center justify-center text-lg mb-6">
              <FaMapMarkerAlt className="mr-2" />
              <span>{destination.location}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-accent px-3 py-1 rounded-full text-gray-800 font-medium">
                {destination.type}
              </span>
              <span className="bg-primary px-3 py-1 rounded-full text-white font-medium">
                {destination.budget}
              </span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
        >
          <FaArrowLeft />
        </button>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">About {destination.name}</h2>
              <p className="text-gray-700 mb-6">{destination.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Cost Rating</h3>
                  <RatingScale type="cost" value={destination.ratings.cost} />
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Nightlife Rating</h3>
                  <RatingScale type="nightlife" value={destination.ratings.nightlife} />
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Adventure Rating</h3>
                  <RatingScale type="adventure" value={destination.ratings.adventure} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Flight Cost</h3>
                  <p className="text-gray-700">{destination.details.flightCost}</p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Accommodation</h3>
                  <p className="text-gray-700">{destination.details.accommodation}</p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Daily Expenses</h3>
                  <p className="text-gray-700">{destination.details.dailyCosts}</p>
                </div>
              </div>
            </div>
            
            {/* Activities Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-6">Top Activities</h2>
              <div className="space-y-4">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-md">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Nightlife Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-6">Nightlife</h2>
              <div className="space-y-4">
                {destination.nightlife.map((item, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-md">
                    <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Unique Attractions Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-serif text-2xl font-bold mb-6">Unique Attractions</h2>
              <div className="space-y-4">
                {destination.uniqueAttractions.map((item, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-md">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar - 1/3 width on large screens */}
          <div>
            {/* Compare CTA */}
            <div className="bg-primary bg-opacity-10 rounded-lg shadow-md p-6 mb-8">
              <h3 className="font-serif text-xl font-bold mb-4 text-gray-800">Compare with Other Destinations</h3>
              <p className="text-gray-800 mb-4">
                Not sure if {destination.name} is the right choice? Compare it with other destinations.
              </p>
              <a 
                href="/compare" 
                className="btn-primary w-full flex items-center justify-center"
              >
                <span>Go to Comparison Tool</span>
                <FaChevronRight className="ml-2" />
              </a>
            </div>
            
            {/* Travel Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-xl font-bold mb-4">Fox Club Travel Tips</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Book accommodations at least 3 months in advance for the best rates.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Consider traveling with a group to split costs on accommodations and transportation.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Check if your destination requires any special documentation or vaccinations.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Pack light but don't forget essentials like sunscreen and a first aid kit.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Helper functions for activity icons and times
function getActivityIcon(activity: string): string {
  const lowercaseActivity = activity.toLowerCase();
  
  if (lowercaseActivity.includes('beach') || lowercaseActivity.includes('swim'))
    return 'beach';
  if (lowercaseActivity.includes('hik') || lowercaseActivity.includes('trek'))
    return 'hiking';
  if (lowercaseActivity.includes('water') || lowercaseActivity.includes('surf'))
    return 'watersports';
  
  return 'beach'; // Default
}

function getActivityTime(activity: string): 'day' | 'night' | 'both' {
  const lowercaseActivity = activity.toLowerCase();
  
  if (lowercaseActivity.includes('night') || lowercaseActivity.includes('evening'))
    return 'night';
  if (lowercaseActivity.includes('sunset') || lowercaseActivity.includes('all day'))
    return 'both';
  
  return 'day'; // Default for most activities
}

function getAttractionIcon(attraction: string): string {
  const lowercaseAttraction = attraction.toLowerCase();
  
  if (lowercaseAttraction.includes('beach') || lowercaseAttraction.includes('ocean'))
    return 'beach';
  if (lowercaseAttraction.includes('hik') || lowercaseAttraction.includes('mountain'))
    return 'hiking';
  if (lowercaseAttraction.includes('water') || lowercaseAttraction.includes('boat'))
    return 'watersports';
  
  return 'beach'; // Default
} 