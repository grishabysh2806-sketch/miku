export interface Product {
  id: string;
  name: {
    en: string;
    ru: string;
  };
  price: number;
  image: string; // Kept for type compatibility but unused in UI
  category: 'Scale' | 'Nendoroid' | 'Figma' | 'Prize';
  description: {
    en: string;
    ru: string;
  };
  rating: number;
  releaseDate: string;
  tags: string[];
}

export type Language = 'en' | 'ru';

export interface Translation {
  [key: string]: {
    en: string;
    ru: string;
  };
}

export interface Review {
  id: string;
  author: string;
  text: { en: string; ru: string };
  rating: number;
}

export interface FAQ {
  question: { en: string; ru: string };
  answer: { en: string; ru: string };
}