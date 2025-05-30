import { Star } from 'lucide-react';

function StayCard({ stay }) {
  return (
    <div className="flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      <div className="w-full h-60 rounded-3xl overflow-hidden mb-3">
        <img 
          src={stay.photo} 
          alt={stay.title.en} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {stay.superHost && (
            <span className="text-xs font-bold border border-gray-800 rounded-full px-2 py-1 mr-2">
              SUPERHOST
            </span>
          )}
          <span className="text-sm text-gray-500">
            {stay.type.en}{stay.beds ? ` · ${stay.beds} beds` : ''}
          </span>
        </div>
        
        <div className="flex items-center">
          <Star size={16} className="text-[#FF5A5F] fill-[#FF5A5F] mr-1" />
          <span className="text-sm text-gray-700">{stay.rating}</span>
        </div>
      </div>
      
      <h3 className="text-base font-medium text-gray-900">{stay.title.en}</h3>
    </div>
  );
}

export default StayCard;