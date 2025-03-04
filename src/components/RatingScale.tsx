import { FaDollarSign, FaGlassMartiniAlt, FaHiking, FaLandmark, FaStar } from 'react-icons/fa';

interface RatingScaleProps {
  type: 'cost' | 'nightlife' | 'adventure' | 'culture' | 'uniqueness';
  value: number;
  showLabel?: boolean;
}

const RatingScale: React.FC<RatingScaleProps> = ({ type, value, showLabel = true }) => {
  // Validate value is between 1 and 5
  const safeValue = Math.min(Math.max(value, 1), 5);
  
  const getLabel = (): string => {
    switch (type) {
      case 'cost':
        return 'Cost';
      case 'nightlife':
        return 'Nightlife';
      case 'adventure':
        return 'Adventure';
      case 'culture':
        return 'Culture';
      case 'uniqueness':
        return 'Uniqueness';
      default:
        return '';
    }
  };
  
  const getIcon = () => {
    switch (type) {
      case 'cost':
        return <FaDollarSign className="text-gray-900" />;
      case 'nightlife':
        return <FaGlassMartiniAlt className="text-gray-900" />;
      case 'adventure':
        return <FaHiking className="text-gray-900" />;
      case 'culture':
        return <FaLandmark className="text-gray-900" />;
      case 'uniqueness':
        return <FaStar className="text-gray-900" />;
      default:
        return null;
    }
  };
  
  // For cost, we want to invert the scale (5 = cheapest, 1 = most expensive)
  const normalizedValue = type === 'cost' ? 6 - safeValue : safeValue;
  
  return (
    <div className="flex flex-wrap items-center mb-2 sm:mb-0">
      {showLabel && (
        <div className="flex items-center w-24 mr-2 mb-1 sm:mb-0">
          {getIcon()}
          <span className="ml-1 text-sm font-medium text-gray-900">{getLabel()}</span>
        </div>
      )}
      <div className="rating-scale">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`rating-dot ${dot <= normalizedValue ? 'rating-dot-filled' : ''}`}
            aria-label={`${dot} of 5`}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingScale; 