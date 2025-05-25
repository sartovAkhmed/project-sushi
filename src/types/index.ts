export interface SushiItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  weight: number;
  ingredients: string[];
  imageUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}