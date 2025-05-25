import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItems } from '../data/sushi';
import SushiCard from '../components/SushiCard';
import SushiDetail from '../components/SushiDetail';
import { SushiItem } from '../types';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState<SushiItem[]>([]);
  const [selectedSushi, setSelectedSushi] = useState<SushiItem | null>(null);

  useEffect(() => {
    if (query) {
      const results = searchItems(query);
      setSearchResults(results);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = searchItems(searchQuery);
      setSearchResults(results);
      
      // Update URL without reloading the page
      const newUrl = `${window.location.pathname}?q=${encodeURIComponent(searchQuery)}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Поиск</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex">
            <input
              type="text"
              placeholder="Введите название блюда или ингредиент..."
              className="flex-1 py-3 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-r-lg transition-colors"
            >
              Искать
            </button>
          </div>
        </form>
        
        {query && (
          <div className="mb-6">
            <p className="text-lg">
              Результаты поиска по запросу: <span className="font-semibold">"{query}"</span>
            </p>
          </div>
        )}
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map(item => (
              <SushiCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedSushi(item)}
              />
            ))}
          </div>
        ) : (
          query && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">По вашему запросу ничего не найдено.</p>
              <p className="text-gray-600">Попробуйте изменить запрос или просмотреть наш каталог.</p>
            </div>
          )
        )}
      </div>

      {selectedSushi && (
        <SushiDetail item={selectedSushi} onClose={() => setSelectedSushi(null)} />
      )}
    </div>
  );
};

export default SearchPage;