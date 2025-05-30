import { createContext, useState, useContext } from 'react';
import { stays } from '../stays';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [guests, setGuests] = useState({ adults: 0, children: 0 });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const uniqueLocations = Array.from(
    new Set(stays.map((stay) => `${stay.city}, ${stay.country}`))
  );

  const locationSuggestions = uniqueLocations.filter(
    (loc) => searchLocation === '' || loc.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const totalGuests = guests.adults + guests.children;

  const filteredStays = stays.filter((stay) => {
    const matchesLocation = !location || `${stay.city}, ${stay.country}` === location;
    const matchesGuests = totalGuests === 0 || stay.maxGuests >= totalGuests;
    return matchesLocation && matchesGuests;
  });

  const handleSearch = () => {
    if (searchLocation !== '') {
      const matchedLocation = locationSuggestions.find(
        (loc) => loc.toLowerCase().includes(searchLocation.toLowerCase())
      );
      setLocation(matchedLocation || null);
    }
    setIsFilterOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        guests,
        setGuests,
        filteredStays,
        isFilterOpen,
        setIsFilterOpen,
        searchLocation,
        setSearchLocation,
        handleSearch,
        locationSuggestions,
        totalGuests,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}