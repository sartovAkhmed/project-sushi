import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div 
      className="relative group overflow-hidden rounded-lg cursor-pointer h-48 shadow-md"
      onClick={onClick}
    >
      <img 
        src={category.imageUrl} 
        alt={category.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
        <p className="text-white/80 text-sm line-clamp-2">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;