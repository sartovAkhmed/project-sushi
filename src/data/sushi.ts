import { SushiItem, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'classic-rolls',
    name: 'Классические роллы',
    description: 'Традиционные японские роллы с разнообразными начинками',
    imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
  },
  {
    id: 'baked-rolls',
    name: 'Запеченные роллы',
    description: 'Горячие роллы, запеченные под соусом',
    imageUrl: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
  },
  {
    id: 'sushi',
    name: 'Суши',
    description: 'Традиционные суши с рыбой на рисе',
    imageUrl: 'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg',
  },
  {
    id: 'sets',
    name: 'Сеты',
    description: 'Наборы из различных видов суши и роллов',
    imageUrl: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg',
  },
];

export const sushiItems: SushiItem[] = [
  {
    id: 1,
    name: 'Филадельфия',
    category: 'classic-rolls',
    description: 'Нежный сливочный сыр, свежий лосось и авокадо',
    price: 450,
    weight: 280,
    ingredients: ['Лосось', 'Сливочный сыр', 'Авокадо', 'Огурец', 'Рис', 'Нори'],
    imageUrl: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
    isPopular: true,
  },
  {
    id: 2,
    name: 'Калифорния',
    category: 'classic-rolls',
    description: 'Классический ролл с крабовым мясом, авокадо и огурцом',
    price: 380,
    weight: 260,
    ingredients: ['Крабовое мясо', 'Авокадо', 'Огурец', 'Тобико', 'Рис', 'Нори'],
    imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
    isPopular: true,
  },
  {
    id: 3,
    name: 'Дракон',
    category: 'classic-rolls',
    description: 'Изысканный ролл с угрем, авокадо и соусом унаги',
    price: 520,
    weight: 290,
    ingredients: ['Угорь', 'Авокадо', 'Огурец', 'Соус унаги', 'Кунжут', 'Рис', 'Нори'],
    imageUrl: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg',
    isPopular: true,
  },
  {
    id: 4,
    name: 'Унаги Маки',
    category: 'classic-rolls',
    description: 'Ролл с жареным угрем и огурцом под соусом унаги',
    price: 490,
    weight: 250,
    ingredients: ['Угорь', 'Огурец', 'Соус унаги', 'Кунжут', 'Рис', 'Нори'],
    imageUrl: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg',
  },
  {
    id: 5,
    name: 'Спайси лосось',
    category: 'classic-rolls',
    description: 'Острый ролл с лососем и пикантным соусом',
    price: 420,
    weight: 240,
    ingredients: ['Лосось', 'Спайси соус', 'Огурец', 'Зеленый лук', 'Рис', 'Нори'],
    imageUrl: 'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg',
  },
  {
    id: 6,
    name: 'Вулкан',
    category: 'baked-rolls',
    description: 'Запеченный ролл с креветкой, соусами спайси и унаги',
    price: 490,
    weight: 300,
    ingredients: ['Креветка', 'Сливочный сыр', 'Спайси соус', 'Соус унаги', 'Рис', 'Нори'],
    imageUrl: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg',
    isPopular: true,
  },
  {
    id: 7,
    name: 'Хот филадельфия',
    category: 'baked-rolls',
    description: 'Запеченная филадельфия под сырным соусом',
    price: 520,
    weight: 310,
    ingredients: ['Лосось', 'Сливочный сыр', 'Огурец', 'Сырный соус', 'Рис', 'Нори'],
    imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
    isNew: true,
  },
  {
    id: 8,
    name: 'Суши с лососем',
    category: 'sushi',
    description: 'Классические суши с свежим лососем',
    price: 120,
    weight: 40,
    ingredients: ['Лосось', 'Рис', 'Васаби'],
    imageUrl: 'https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg',
    isPopular: true,
  },
  {
    id: 9,
    name: 'Суши с угрем',
    category: 'sushi',
    description: 'Нежные суши с копченым угрем и соусом унаги',
    price: 140,
    weight: 40,
    ingredients: ['Угорь', 'Соус унаги', 'Рис', 'Кунжут'],
    imageUrl: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg',
  },
  {
    id: 10,
    name: 'Сет "Филадельфия"',
    category: 'sets',
    description: 'Набор из различных вариаций ролла Филадельфия',
    price: 1490,
    weight: 1000,
    ingredients: ['Филадельфия классическая', 'Филадельфия с угрем', 'Филадельфия с тунцом', 'Соевый соус', 'Имбирь', 'Васаби'],
    imageUrl: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg',
    isPopular: true,
  },
  {
    id: 11,
    name: 'Сет "Дракон"',
    category: 'sets',
    description: 'Огненный набор из острых и запеченных роллов',
    price: 1690,
    weight: 1200,
    ingredients: ['Дракон', 'Калифорния', 'Вулкан', 'Спайси лосось', 'Соевый соус', 'Имбирь', 'Васаби'],
    imageUrl: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg',
    isNew: true,
  },
];

export const getItemsByCategory = (categoryId: string) => {
  return sushiItems.filter(item => item.category === categoryId);
};

export const getPopularItems = () => {
  return sushiItems.filter(item => item.isPopular);
};

export const getNewItems = () => {
  return sushiItems.filter(item => item.isNew);
};

export const searchItems = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return sushiItems.filter(
    item => 
      item.name.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))
  );
};