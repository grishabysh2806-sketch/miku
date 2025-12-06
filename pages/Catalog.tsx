import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../App';
import { PRODUCTS, TRANSLATIONS } from '../constants';
import { ArrowRight, Database, Hash } from 'lucide-react';

const Catalog: React.FC = () => {
  const { lang } = useContext(LangContext);
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  
  const t = TRANSLATIONS;
  const categories = ['All', 'Scale', 'Nendoroid', 'Figma', 'Prize'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <div className="mb-16 border-b-4 border-slate-800 pb-8">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-800 tracking-tighter">
          {t.catalog[lang]}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-6 gap-6">
          <div className="font-mono text-miku-dark bg-miku-light/30 px-4 py-2 rounded">
            DATABASE_ENTRIES: {PRODUCTS.length} // SERVER: TOKYO
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 font-mono text-sm border-2 transition-all rounded-sm ${
                  filter === cat 
                    ? 'bg-slate-800 text-white border-slate-800' 
                    : 'bg-transparent text-slate-500 border-slate-200 hover:border-miku-teal hover:text-miku-teal'
                }`}
              >
                [{cat.toUpperCase()}]
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredProducts.map((product, idx) => (
          <div 
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="group relative bg-white border border-slate-200 hover:border-miku-pink transition-all duration-300 p-6 cursor-pointer overflow-hidden hover:shadow-xl hover:-translate-y-1 rounded-xl"
          >
             {/* Hover Gradient */}
             <div className="absolute inset-0 bg-gradient-to-r from-miku-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"/>

             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
               
               {/* ID & Category */}
               <div className="flex items-center gap-4 min-w-[150px]">
                 <span className="text-4xl font-display font-bold text-slate-200 group-hover:text-miku-pink transition-colors">
                   {(idx + 1).toString().padStart(2, '0')}
                 </span>
                 <div className="flex flex-col">
                   <span className="text-xs font-mono text-slate-400">ID_REF</span>
                   <span className="font-bold text-slate-600 uppercase tracking-widest text-sm">{product.category}</span>
                 </div>
               </div>

               {/* Name */}
               <div className="flex-1">
                 <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-miku-dark transition-colors">
                   {product.name[lang]}
                 </h3>
                 <div className="flex gap-2 mt-2">
                   {product.tags.map(tag => (
                     <span key={tag} className="text-xs font-mono bg-slate-100 text-slate-500 px-2 py-1 rounded-sm">
                       #{tag.toUpperCase()}
                     </span>
                   ))}
                 </div>
               </div>

               {/* Price & Action */}
               <div className="flex items-center gap-8 min-w-[200px] justify-end">
                 <div className="text-right">
                   <div className="text-xs font-mono text-slate-400">MARKET_VALUE</div>
                   <div className="text-2xl font-mono font-bold text-miku-teal">${product.price}</div>
                 </div>
                 <div className="w-12 h-12 flex items-center justify-center border-2 border-slate-200 rounded-full group-hover:bg-slate-800 group-hover:border-slate-800 group-hover:text-white transition-all">
                   <ArrowRight size={20} />
                 </div>
               </div>

             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;