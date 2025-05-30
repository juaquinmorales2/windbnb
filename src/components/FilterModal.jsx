import { useEffect, useRef } from 'react';
import { X, MapPin, Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import GuestCounter from './GuestCounter';

function FilterModal() {
  const { 
    isFilterOpen,
    setIsFilterOpen,
    searchLocation,
    setSearchLocation,
    locationSuggestions,
    setLocation,
    handleSearch
  } = useAppContext();

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen, setIsFilterOpen]);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterOpen]);

  if (!isFilterOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:w-screen flex items-start justify-center overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-white w-full  rounded-b-2xl mt-0 animate-slideDown"
      >
        <div className="p-4 md:p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold">Edit your search</h2>
            <button onClick={() => setIsFilterOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="md:flex">
          <div className="p-4 md:p-6 md:w-1/2 md:border-r">
            <label className="block text-xs font-bold uppercase mb-2 text-gray-800">Location</label>
            <input
              type="text"
              placeholder="Add location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full p-2 border-b border-transparent focus:border-gray-300 outline-none mb-4"
            />
            
            <div className="space-y-4 mt-4">
              {locationSuggestions.map((loc, index) => (
                <div 
                  key={index}
                  className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => {
                    setSearchLocation(loc);
                    setLocation(loc);
                  }}
                >
                  <MapPin size={20} className="text-gray-500 mr-2" />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 md:p-6 md:w-1/2">
            <label className="block text-xs font-bold uppercase mb-2 text-gray-800">Guests</label>
            <GuestCounter />
          </div>
        </div>

        <div className="p-4 md:p-6 flex justify-center md:justify-end">
          <button 
            onClick={handleSearch}
            className="bg-[#FF5A5F] text-white px-6 py-3 rounded-md flex items-center font-medium hover:bg-opacity-90 transition-all"
          >
            <Search size={20} className="mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;