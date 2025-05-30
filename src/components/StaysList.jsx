import StayCard from './StayCard';
import { useAppContext } from '../context/AppContext';

function StaysList() {
  const { filteredStays } = useAppContext();

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Stays in Finland</h1>
        <span className="text-sm text-gray-500">{filteredStays.length}+ stays</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStays.map((stay, index) => (
          <StayCard key={index} stay={stay} />
        ))}
      </div>
    </div>
  );
}

export default StaysList;