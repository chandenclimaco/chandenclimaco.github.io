import React from 'react';
import { FaSun, FaMoon, FaUmbrellaBeach, FaGlassCheers, FaHiking, FaWater } from 'react-icons/fa';

interface Activity {
  name: string;
  icon: string;
  time: 'day' | 'night' | 'both';
}

interface ActivityListProps {
  activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  // Helper function to get the correct icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'beach':
        return <FaUmbrellaBeach />;
      case 'nightlife':
        return <FaGlassCheers />;
      case 'hiking':
        return <FaHiking />;
      case 'watersports':
        return <FaWater />;
      default:
        return <FaSun />;
    }
  };

  // Helper function to get time icon
  const getTimeIcon = (time: 'day' | 'night' | 'both') => {
    if (time === 'day') return <FaSun className="text-yellow-500" />;
    if (time === 'night') return <FaMoon className="text-indigo-400" />;
    return (
      <div className="flex">
        <FaSun className="text-yellow-500 mr-1" />
        <FaMoon className="text-indigo-400" />
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <h3 className="text-xl font-serif font-bold mb-4">Popular Activities</h3>
      
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li 
            key={index}
            className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-all"
          >
            <div className="bg-primary bg-opacity-20 p-3 rounded-full text-primary">
              {getIcon(activity.icon)}
            </div>
            <div className="ml-4 flex-grow">
              <p className="font-medium">{activity.name}</p>
            </div>
            <div className="ml-2 text-gray-500">
              {getTimeIcon(activity.time)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityList; 