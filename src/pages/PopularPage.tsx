import React, { useState } from 'react';
import { getPopularItems } from '../data/sushi';
import SushiCard from '../components/SushiCard';
import SushiDetail from '../components/SushiDetail';
import { SushiItem } from '../types';

const PopularPage: React.FC = () => {
  const [selectedSushi, setSelectedSushi] = useState<SushiItem | null>(null);
  const popularItems = getPopularItems();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Популярные блюда</h1>
        
        {popularItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map(item => (
              <SushiCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedSushi(item)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">
            Популярные блюда не найдены.
          </p>
        )}
      </div>

      {selectedSushi && (
        <SushiDetail item={selectedSushi} onClose={() => setSelectedSushi(null)} />
      )}
    </div>
  );
};

export default PopularPage;