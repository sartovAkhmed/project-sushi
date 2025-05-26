import React from "react";
import { SushiItem } from "../types";
import { X } from "lucide-react";

interface SushiDetailProps {
  item: SushiItem;
  onClose: () => void;
}

const SushiDetail: React.FC<SushiDetailProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <X size={24} className="text-gray-800" />
        </button>

        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            />
          </div>

          <div className="p-6 md:w-1/2">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
              <div>
                {item.isNew && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    НОВИНКА
                  </span>
                )}
                {item.isPopular && !item.isNew && (
                  <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                    ХИТ
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-6">{item.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Состав:
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">Вес: {item.weight} г</div>
              <div className="text-2xl font-bold text-red-600">
                {item.price} сом
              </div>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SushiDetail;
