import { useAppContext } from '../context/AppContext';

function GuestCounter() {
  const { guests, setGuests } = useAppContext();

  const incrementAdults = () => {
    setGuests({ ...guests, adults: guests.adults + 1 });
  };

  const decrementAdults = () => {
    if (guests.adults > 0) {
      setGuests({ ...guests, adults: guests.adults - 1 });
    }
  };

  const incrementChildren = () => {
    setGuests({ ...guests, children: guests.children + 1 });
  };

  const decrementChildren = () => {
    if (guests.children > 0) {
      setGuests({ ...guests, children: guests.children - 1 });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold mb-1">Adults</h3>
        <p className="text-sm text-gray-500 mb-3">Ages 13 or above</p>
        
        <div className="flex items-center">
          <button 
            onClick={decrementAdults}
            className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:border-gray-700"
          >
            -
          </button>
          <span className="mx-4 w-4 text-center">{guests.adults}</span>
          <button 
            onClick={incrementAdults}
            className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:border-gray-700"
          >
            +
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="font-bold mb-1">Children</h3>
        <p className="text-sm text-gray-500 mb-3">Ages 2-12</p>
        
        <div className="flex items-center">
          <button 
            onClick={decrementChildren}
            className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:border-gray-700"
          >
            -
          </button>
          <span className="mx-4 w-4 text-center">{guests.children}</span>
          <button 
            onClick={incrementChildren}
            className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center hover:border-gray-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestCounter;