import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import SushiCard from '../components/SushiCard';
import CategoryCard from '../components/CategoryCard';
import SushiDetail from '../components/SushiDetail';
import { categories, getPopularItems, getNewItems } from '../data/sushi';
import { SushiItem } from '../types';

const HomePage: React.FC = () => {
  const [selectedSushi, setSelectedSushi] = useState<SushiItem | null>(null);
  const navigate = useNavigate();
  
  const popularItems = getPopularItems();
  const newItems = getNewItems();

  return (
    <>
      <div className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg" 
            alt="Суши" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Лучшие суши и роллы в вашем городе</h1>
            <p className="text-lg md:text-xl mb-8">
              Мы готовим только из свежих продуктов высочайшего качества. Попробуйте и убедитесь сами!
            </p>
            <button 
              onClick={() => navigate('/catalog')}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Смотреть каталог
            </button>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Категории</h2>
            <button 
              onClick={() => navigate('/catalog')}
              className="text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              Все категории <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                onClick={() => navigate(`/catalog/${category.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Популярные блюда</h2>
            <button 
              onClick={() => navigate('/popular')}
              className="text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              Смотреть все <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.slice(0, 4).map(item => (
              <SushiCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedSushi(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Новинки</h2>
            <button 
              onClick={() => navigate('/catalog')}
              className="text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              Смотреть все <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newItems.map(item => (
              <SushiCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedSushi(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-gray-300 mb-6">
                СушиМастер - это высокое качество продукции, сервиса и скорость доставки.
                Мы используем только свежие ингредиенты и соблюдаем все стандарты приготовления.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Качество</h3>
                  <p className="text-gray-400">Только свежие ингредиенты высочайшего качества</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Скорость</h3>
                  <p className="text-gray-400">Доставка в течение 60 минут или следующий заказ бесплатно</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Акции</h3>
                  <p className="text-gray-400">Регулярные скидки и специальные предложения</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Ассортимент</h3>
                  <p className="text-gray-400">Более 100 видов суши и роллов на любой вкус</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-8">
              <img 
                src="https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg" 
                alt="Суши и роллы" 
                className="rounded-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {selectedSushi && (
        <SushiDetail item={selectedSushi} onClose={() => setSelectedSushi(null)} />
      )}
    </>
  );
};

export default HomePage;