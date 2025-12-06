import { Product, Translation, Review, FAQ } from './types';

export const TELEGRAM_URL = 'https://t.me/mikuverseru';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: { en: 'Hatsune Miku: V4X Scale', ru: 'Hatsune Miku: V4X Scale' },
    price: 189.99,
    image: '', 
    category: 'Scale',
    description: {
      en: 'The definitive Miku figure. Sharp angles, infinite twin-tails, and absolute stage presence. A centerpiece for any serious collection.',
      ru: 'Та самая Мику. Идеальные пропорции, бесконечные хвосты и невероятная детализация. Центр притяжения любой коллекции.'
    },
    rating: 5,
    releaseDate: '2023-10-15',
    tags: ['God Tier', 'Grail']
  },
  {
    id: '2',
    name: { en: 'Sakura Miku: Hanami Ver.', ru: 'Sakura Miku: Hanami Ver.' },
    price: 45.50,
    image: '',
    category: 'Prize',
    description: {
      en: 'Spring vibes all year round. The pink aesthetic is unmatched. High quality for a prize figure and super cute on any desk.',
      ru: 'Весеннее настроение круглый год. Розовая эстетика просто топ. Отличное качество для прайза и супер мило смотрится на столе.'
    },
    rating: 4.5,
    releaseDate: '2024-03-01',
    tags: ['Kawaii', 'Pink']
  },
  {
    id: '3',
    name: { en: 'Racing Miku 2024 GT', ru: 'Racing Miku 2024 GT' },
    price: 120.00,
    image: '',
    category: 'Figma',
    description: {
      en: 'Speed and style combined. Fully posable joint system allows for dynamic racing poses. The flag accessory is huge!',
      ru: 'Скорость и стиль. Полностью подвижные шарниры позволяют ставить её в любые гоночные позы. Флаг в комплекте просто огромный!'
    },
    rating: 4.8,
    releaseDate: '2024-06-20',
    tags: ['Speed', 'Racing']
  },
  {
    id: '4',
    name: { en: 'Snow Miku: Grand Voyage', ru: 'Snow Miku: Grand Voyage' },
    price: 85.00,
    image: '',
    category: 'Nendoroid',
    description: {
      en: 'Winter magic in chibi form. Comes with adorable accessories and interchangeable face plates. A must-have for Nendo collectors.',
      ru: 'Зимняя магия в формате чиби. Куча милых аксессуаров и сменных личек. Маст-хэв для коллекционеров нендроидов.'
    },
    rating: 5,
    releaseDate: '2024-02-14',
    tags: ['Smol', 'Snow']
  },
    {
    id: '5',
    name: { en: 'Symphony 5th Anniversary', ru: 'Symphony 5th Anniversary' },
    price: 250.00,
    image: '',
    category: 'Scale',
    description: {
      en: 'Elegant, musical, timeless. The sculpt mimics sound waves. Requires a large shelf space but totally worth it.',
      ru: 'Элегантная, музыкальная, вечная. Скульпт имитирует звуковые волны. Требует много места на полке, но оно того стоит.'
    },
    rating: 5,
    releaseDate: '2023-12-25',
    tags: ['Premium', 'Orchestra']
  },
  {
    id: '6',
    name: { en: 'Deep Sea Girl', ru: 'Deep Sea Girl' },
    price: 160.00,
    image: '',
    category: 'Scale',
    description: {
      en: 'Based on the legendary song. The translucent hair and water base effect are breathtaking. A literal masterpiece of PVC engineering.',
      ru: 'По мотивам легендарной песни. Прозрачные волосы и эффект воды выглядят невероятно. Настоящий шедевр инженерии ПВХ.'
    },
    rating: 4.9,
    releaseDate: '2023-08-10',
    tags: ['Legendary', 'Cry']
  }
];

export const FAQS: FAQ[] = [
  {
    question: { en: "Are these authentic?", ru: "Это оригиналы?" },
    answer: {
      en: "100% Authentic. We import directly from Japanese distributors like Good Smile Company and AmiAmi. No bootlegs allowed.",
      ru: "100% Оригинал. Мы импортируем напрямую от японских дистрибьюторов вроде Good Smile и AmiAmi. Никаких подделок."
    }
  },
  {
    question: { en: "How fast is shipping?", ru: "Как быстро доставите?" },
    answer: {
      en: "Standard shipping takes 10-14 days. Join our Telegram for updates on express drops and local stock.",
      ru: "Стандартная доставка 10-14 дней. Подписывайтесь на Telegram, чтобы узнавать о наличии на складе в РФ."
    }
  },
  {
    question: { en: "Is the packaging safe?", ru: "Упаковка надежная?" },
    answer: {
      en: "We treat boxes like gold. Double-walled cardboard and plenty of bubble wrap ensure it arrives mint.",
      ru: "Мы относимся к коробкам как к золоту. Двойной картон и куча пупырки гарантируют идеальное состояние."
    }
  }
];

export const TRANSLATIONS: Translation = {
  // Navigation
  home: { en: "HOME", ru: "ГЛАВНАЯ" },
  catalog: { en: "CATALOG", ru: "КАТАЛОГ" },
  community: { en: "COMMUNITY", ru: "КОМЬЮНИТИ" },
  cart: { en: "CART", ru: "КОРЗИНА" },
  
  // Hero & General
  heroTitle: { en: "MIKUVERSE", ru: "MIKUVERSE" },
  heroSubtitle: { en: "THE WORLD IS HERS (AND YOURS)", ru: "МИР ПРИНАДЛЕЖИТ ЕЙ (И ТЕБЕ)" },
  
  // CTAs (Standardized)
  shopNow: { en: "OPEN CATALOG", ru: "СМОТРЕТЬ КАТАЛОГ" },
  joinChannel: { en: "JOIN TELEGRAM", ru: "НАШ TELEGRAM" },
  check_stock: { en: "CHECK AVAILABILITY", ru: "УЗНАТЬ НАЛИЧИЕ" },
  checkout: { en: "CHECKOUT", ru: "ОФОРМИТЬ" },
  
  // Headings
  newArrivals: { en: "NEW ARRIVALS", ru: "НОВИНКИ" },
  whyUs: { en: "WHY MIKUVERSE?", ru: "ПОЧЕМУ МЫ?" },
  reviews: { en: "REVIEWS", ru: "ОТЗЫВЫ" },
  faq: { en: "FAQ", ru: "ЧАСТЫЕ ВОПРОСЫ" },
  
  // Stats/Features
  stats_authenticity: { en: "100% AUTHENTIC", ru: "100% ОРИГИНАЛ" },
  stats_shipping: { en: "FAST SHIPPING", ru: "БЫСТРАЯ ДОСТАВКА" },
  stats_community: { en: "SECURE PACKAGING", ru: "НАДЕЖНАЯ УПАКОВКА" },
  
  // Misc
  total: { en: "TOTAL", ru: "ИТОГО" },
  emptyCart: { en: "CART IS EMPTY", ru: "КОРЗИНА ПУСТА" },
  system_ready: { en: "SYSTEM READY", ru: "СИСТЕМА ГОТОВА" },
  spec_sheet: { en: "SPECIFICATIONS", ru: "ХАРАКТЕРИСТИКИ" },
};