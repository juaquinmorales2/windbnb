import { Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import Logo from './Logo';

function Header() {
  const { 
    location, 
    totalGuests, 
    setIsFilterOpen,
  } = useAppContext();

  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row md:items-center md:justify-between">
      <Logo />
      
      <div 
        className="mt-4 md:mt-0 flex rounded-full shadow-md border border-gray-200 overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] duration-200"
        onClick={() => setIsFilterOpen(true)}
      >
        <div className="flex-1 py-3 px-4 border-r border-gray-200">
          <p className="text-sm text-gray-700 font-medium truncate">
            {location || 'Add location'}
          </p>
        </div>
        <div className="flex-1 py-3 px-4 border-r border-gray-200">
          <p className="text-sm text-gray-500 truncate">
            {totalGuests > 0 ? `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}` : 'Add guests'}
          </p>
        </div>
        <button className="p-3 bg-[#FF5A5F] flex items-center justify-center">
          <Search size={20} className="text-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;