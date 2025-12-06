import React, { useState, createContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Background from './components/Background';
import MikuCursor from './components/MikuCursor';
import { Language, Product } from './types';

// Contexts
export const LangContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
}>({ lang: 'en', setLang: () => {} });

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
        <div className="relative min-h-screen overflow-x-hidden selection:bg-miku-pink selection:text-white">
          <Background />
          {/* Only show custom cursor on desktop to avoid touch issues */}
          <div className="hidden md:block">
            <MikuCursor />
          </div>
          
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </CartContext.Provider>
    </LangContext.Provider>
  );
};

export default App;