import React, { useContext } from 'react';
import { LangContext, CartContext } from '../App';
import { TRANSLATIONS } from '../constants';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { lang } = useContext(LangContext);
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const t = TRANSLATIONS;
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-2xl font-bold text-slate-700">{t.emptyCart[lang]}</h2>
        <button 
          onClick={() => navigate('/catalog')} 
          className="px-6 py-3 bg-miku-teal text-white rounded-full font-bold hover:bg-miku-dark transition"
        >
          {t.shopNow[lang]}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-display font-bold text-slate-800">{t.cart[lang]}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex gap-4 p-4 bg-white/60 backdrop-blur border border-white rounded-2xl shadow-sm items-center">
              <img src={item.image} alt={item.name[lang]} className="w-20 h-20 object-cover rounded-xl bg-gray-100" />
              
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 line-clamp-1">{item.name[lang]}</h3>
                <p className="text-miku-teal font-bold">${item.price}</p>
              </div>

              <div className="flex items-center gap-3 bg-slate-100 rounded-full px-2 py-1">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-miku-pink"><Minus size={14}/></button>
                <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-miku-teal"><Plus size={14}/></button>
              </div>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-slate-300 hover:text-red-500 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="bg-white/80 backdrop-blur p-6 rounded-3xl border border-white sticky top-24 shadow-xl">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">{t.total[lang]}</h3>
            <div className="flex justify-between mb-2">
               <span className="text-slate-500">Subtotal</span>
               <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6">
               <span className="text-slate-500">Shipping</span>
               <span className="text-green-500 font-bold">Free</span>
            </div>
            <div className="text-3xl font-display font-bold text-slate-800 mb-6 flex justify-between">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-miku-pink text-white font-bold py-4 rounded-xl shadow-lg shadow-miku-pink/30 hover:brightness-110 transition-all">
              {t.checkout[lang]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;