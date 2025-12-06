import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Terminal, ShoppingBag } from 'lucide-react';
import { TRANSLATIONS, TELEGRAM_URL } from '../constants';
import { LangContext, CartContext } from '../App';

const Layout: React.FC = () => {
  const { lang, setLang } = useContext(LangContext);
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLang = () => setLang(lang === 'en' ? 'ru' : 'en');
  const t = TRANSLATIONS;

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white/50">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-slate-200/50 px-6 py-4 flex justify-between items-center transition-all duration-300">
        
        {/* Brand */}
        <NavLink to="/" className="text-2xl font-display font-bold tracking-tighter text-slate-900 group">
          MIKU<span className="text-miku-teal group-hover:text-miku-pink transition-colors">VERSE</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? "text-miku-teal font-bold" : "text-slate-500 hover:text-slate-900 transition-colors"}>
            [ {t.home[lang]} ]
          </NavLink>
          <NavLink to="/catalog" className={({isActive}) => isActive ? "text-miku-teal font-bold" : "text-slate-500 hover:text-slate-900 transition-colors"}>
            [ {t.catalog[lang]} ]
          </NavLink>
          
          <div className="h-4 w-px bg-slate-300 mx-2"></div>

          <button onClick={toggleLang} className="text-slate-500 hover:text-miku-teal transition font-bold">
            {lang.toUpperCase()}
          </button>
          
          <NavLink to="/cart" className="relative text-slate-500 hover:text-miku-teal transition">
            <ShoppingBag size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-miku-pink text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cart.length}
              </span>
            )}
          </NavLink>

          <a 
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 hover:bg-miku-pink transition-colors duration-300 rounded-sm"
          >
            <Terminal size={14} /> {t.community[lang]}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-mono md:hidden animate-fade-in">
           <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-miku-teal">{t.home[lang]}</NavLink>
           <NavLink to="/catalog" onClick={() => setIsMenuOpen(false)} className="hover:text-miku-teal">{t.catalog[lang]}</NavLink>
           <NavLink to="/cart" onClick={() => setIsMenuOpen(false)} className="hover:text-miku-teal">{t.cart[lang]} ({cart.length})</NavLink>
           <a href={TELEGRAM_URL} className="text-miku-teal font-bold border-b-2 border-miku-teal">TELEGRAM</a>
           <button onClick={toggleLang} className="text-sm text-slate-400 border px-4 py-2 rounded-full">
             LANG: {lang.toUpperCase()}
           </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 relative">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <footer className="py-12 text-center font-mono text-xs text-slate-400 border-t border-slate-200 bg-slate-50/50">
        <div className="mb-4 flex justify-center gap-6">
          <NavLink to="/" className="hover:text-miku-teal transition">{t.home[lang]}</NavLink>
          <NavLink to="/catalog" className="hover:text-miku-teal transition">{t.catalog[lang]}</NavLink>
          <a href={TELEGRAM_URL} className="hover:text-miku-teal transition">TELEGRAM</a>
        </div>
        <p>MIKUVERSE_SYSTEMS © 2024 // TOKYO_SERVER</p>
        <p className="mt-2 text-slate-300">AUTHORIZED DEALER CODE: #3939</p>
      </footer>
    </div>
  );
};

export default Layout;