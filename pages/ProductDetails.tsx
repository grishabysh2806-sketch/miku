import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LangContext } from '../App';
import { PRODUCTS, TRANSLATIONS, TELEGRAM_URL } from '../constants';
import { ArrowLeft, ExternalLink, Cpu, BarChart3, Clock, Tag } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useContext(LangContext);
  const navigate = useNavigate();
  const t = TRANSLATIONS;

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="text-center p-20 font-mono text-red-500">ERROR: DATA_CORRUPTED</div>;
  }

  const handleBuy = () => window.open(TELEGRAM_URL, '_blank');

  return (
    <div className="min-h-screen pt-8 pb-20 max-w-4xl mx-auto">
      {/* Nav */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-slate-400 hover:text-miku-teal transition-colors font-mono text-sm mb-12"
      >
        <ArrowLeft size={16} /> RETURN_TO_MANIFEST
      </button>

      {/* Header Block */}
      <div className="border-b border-slate-200 pb-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-miku-pink text-white font-mono text-xs mb-4">
              {product.category.toUpperCase()} // SERIES_0{product.id}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight">
              {product.name[lang]}
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <div className="font-mono text-sm text-slate-400">CURRENT_PRICE</div>
            <div className="text-5xl font-mono text-miku-teal font-bold tracking-tighter">
              ${product.price}
            </div>
          </div>
        </div>
      </div>

      {/* Data Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        
        {/* Left Col: Description */}
        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-slate-400 text-sm mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Cpu size={14} /> SYSTEM_DESCRIPTION
            </h3>
            <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed">
              {product.description[lang]}
            </p>
          </div>
          
          <div className="md:hidden">
            <div className="font-mono text-sm text-slate-400">CURRENT_PRICE</div>
            <div className="text-4xl font-mono text-miku-teal font-bold">
              ${product.price}
            </div>
          </div>
        </div>

        {/* Right Col: Specs */}
        <div className="bg-slate-50 p-8 rounded-none border-l-4 border-miku-teal">
          <h3 className="font-mono text-slate-400 text-sm mb-6 flex items-center gap-2">
            <BarChart3 size={14} /> TECHNICAL_SPECS
          </h3>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-mono text-sm flex items-center gap-2"><Clock size={14}/> RELEASE_DATE</span>
              <span className="font-bold text-slate-800">{product.releaseDate}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-mono text-sm flex items-center gap-2"><Tag size={14}/> RATING_SCORE</span>
              <span className="font-bold text-slate-800">{product.rating} / 5.0</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-500 font-mono text-sm">TAGS</span>
              <div className="flex gap-1">
                {product.tags.map(t => (
                  <span key={t} className="text-xs bg-slate-200 px-1">{t}</span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>DEMAND_LEVEL</span>
                <span>98%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 overflow-hidden">
                <div className="h-full bg-miku-pink w-[98%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Action Block */}
      <div className="mt-16 pt-12 border-t border-slate-200 text-center">
        <p className="font-mono text-slate-400 mb-6">
          /// AUTHENTICATION_REQUIRED_FOR_PURCHASE
        </p>
        <button 
          onClick={handleBuy}
          className="w-full md:w-auto px-16 py-6 bg-slate-900 text-white text-xl font-bold font-mono hover:bg-miku-teal transition-all duration-300 shadow-2xl hover:shadow-miku-teal/50 flex items-center justify-center gap-4"
        >
          {t.check_stock[lang]} <ExternalLink />
        </button>
        <p className="mt-4 text-xs text-slate-400">
          Redirects to encrypted channel @mikuverseru
        </p>
      </div>

    </div>
  );
};

export default ProductDetails;