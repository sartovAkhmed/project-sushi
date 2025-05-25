import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories, getItemsByCategory, sushiItems } from '../data/sushi';
import SushiCard from '../components/SushiCard';
import CategoryCard from '../components/CategoryCard';
import SushiDetail from '../components/SushiDetail';
import { SushiItem } from '../types';

const CatalogPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [selectedSushi, setSelectedSushi] = useState<SushiItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(categoryId);

  // If categoryId is provided, show items from that category
  // Otherwise, show all categories
  const displayItems = categoryId 
    ? getItemsByCategory(categoryId)
    : [];
  
  // When a category is selected from the UI
  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
  };

  // Get items for the active category
  const activeCategoryItems = activeCategory 
    ? getItemsByCategory(activeCategory)
    : [];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          {categoryId 
            ? categories.find(cat => cat.id === categoryId)?.name || 'Каталог' 
            : 'Каталог'}
        </h1>

        {!categoryId && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Категории</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(category => (
                <CategoryCard 
                  key={category.id} 
                  category={category} 
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </div>
        )}

        {(categoryId || activeCategory) && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {activeCategory && !categoryId 
                ? categories.find(cat => cat.id === activeCategory)?.name 
                : 'Блюда'}
            </h2>
            
            {(categoryId ? displayItems : activeCategoryItems).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(categoryId ? displayItems : activeCategoryItems).map(item => (
                  <SushiCard 
                    key={item.id} 
                    item={item} 
                    onClick={() => setSelectedSushi(item)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                В данной категории пока нет блюд.
              </p>
            )}
          </div>
        )}

        {!categoryId && !activeCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sushiItems.map(item => (
              <SushiCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedSushi(item)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedSushi && (
        <SushiDetail item={selectedSushi} onClose={() => setSelectedSushi(null)} />
      )}
    </div>
  );
};

export default CatalogPage;