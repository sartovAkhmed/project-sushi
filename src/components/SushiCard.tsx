import React from 'react';
import { SushiItem } from '../types';

interface SushiCardProps {
  item: SushiItem;
  onClick?: () => void;
}

const SushiCard: React.FC<SushiCardProps> = ({ item, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.isNew && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            НОВИНКА
          </div>
        )}
        {item.isPopular && !item.isNew && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
            ХИТ
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">{item.weight} г</div>
          <div className="text-lg font-bold text-red-600">{item.price} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default SushiCard;