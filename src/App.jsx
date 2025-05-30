import Header from './components/Header';
import StaysList from './components/StaysList';
import FilterModal from './components/FilterModal';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <Header />
        <FilterModal />
        <main className="flex-grow">
          <StaysList />
        </main>
        <footer className="p-6 text-center text-gray-500 text-sm">
          <p>© 2025 windbnb. Desarrollado por Juaquin Morales.</p>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;