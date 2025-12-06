import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Zap, ShieldCheck, Truck, Package, HelpCircle, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { LangContext } from '../App';
import { TRANSLATIONS, TELEGRAM_URL, PRODUCTS, FAQS } from '../constants';

const Home: React.FC = () => {
  const { lang } = useContext(LangContext);
  const navigate = useNavigate();
  const t = TRANSLATIONS;

  const openTelegram = () => window.open(TELEGRAM_URL, '_blank');

  return (
    <div className="flex flex-col gap-0 pb-20">
      
      {/* BLOCK 1: HERO - The Hook */}
      <section className="min-h-[85vh] flex flex-col justify-center items-start relative ml-4 md:ml-0 pl-4 md:pl-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-miku-teal/5 to-transparent pointer-events-none -z-10" />
        
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
          <span className="w-2 h-2 bg-miku-pink rounded-full animate-pulse"></span>
          <span className="font-mono text-xs text-slate-500 tracking-wider">
            {lang === 'en' ? "CERTIFIED BANGER" : "СЕРТИФИЦИРОВАННЫЙ БЭНГЕР"}
          </span>
        </div>
        
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-display font-bold text-slate-800 tracking-tighter mix-blend-darken">
          MIKU<br/>VERSE
        </h1>
        
        <p className="mt-8 text-xl md:text-2xl font-mono text-slate-600 max-w-xl border-l-4 border-miku-teal pl-6 py-1">
          {t.heroSubtitle[lang]} <span className="text-miku-pink font-bold">#39</span>
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <button 
            onClick={() => navigate('/catalog')}
            className="px-8 py-5 bg-slate-900 text-white font-mono text-lg hover:bg-miku-teal hover:shadow-lg hover:shadow-miku-teal/30 transition-all duration-300 flex items-center justify-center gap-3 rounded-sm group"
          >
            {t.shopNow[lang]} <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={openTelegram}
            className="px-8 py-5 border-2 border-slate-200 text-slate-700 font-mono text-lg hover:border-miku-pink hover:text-miku-pink transition-all duration-300 flex items-center justify-center gap-3 rounded-sm"
          >
            {t.joinChannel[lang]} <Terminal size={18} />
          </button>
        </div>

        <div className="absolute bottom-8 left-0 animate-bounce text-slate-300 hidden md:block">
          <ArrowDown size={32} />
        </div>
      </section>

      {/* BLOCK 2: TRUST / VALUE PROPS */}
      <section className="py-20 border-y border-slate-100 bg-white/50">
        <div className="text-center mb-12">
           <h3 className="font-mono text-sm text-slate-400 tracking-widest">{t.whyUs[lang]}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-miku-teal/10 rounded-2xl flex items-center justify-center text-miku-teal mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{t.stats_authenticity[lang]}</h3>
            <p className="text-slate-500 font-light text-sm">
              {lang === 'en' ? "We don't sell sus bootlegs. Only real deal." : "Никакой пали. Только оригинал, брат."}
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-miku-pink/10 rounded-2xl flex items-center justify-center text-miku-pink mb-6 group-hover:scale-110 transition-transform">
              <Truck size={32} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{t.stats_shipping[lang]}</h3>
            <p className="text-slate-500 font-light text-sm">
              {lang === 'en' ? "Zoom zoom. Dispatched faster than you can say 'Sekai'." : "Вжух. Отправляем быстрее, чем ты скажешь 'Секай'."}
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
              <Package size={32} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{t.stats_community[lang]}</h3>
            <p className="text-slate-500 font-light text-sm">
              {lang === 'en' ? "Packed with love and probably too much bubble wrap." : "Упаковано с любовью и, возможно, слишком большим количеством пупырки."}
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 3: SHOWCASE - The Desire */}
      <section className="py-32 overflow-hidden">
        <div className="px-4 md:px-12 mb-12 flex justify-between items-end">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-800">{t.newArrivals[lang]}</h2>
          <button onClick={() => navigate('/catalog')} className="hidden md:flex items-center gap-2 font-mono hover:text-miku-teal transition">
            SEE ALL <ChevronRight size={16} />
          </button>
        </div>

        {/* Marquee Effect */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-8 animate-float px-4 md:px-12 overflow-x-auto snap-x scrollbar-hide">
            {PRODUCTS.slice(0, 4).map((p) => (
              <div 
                key={p.id} 
                onClick={() => navigate(`/product/${p.id}`)}
                className="min-w-[280px] md:min-w-[350px] bg-white border border-slate-100 p-6 rounded-3xl snap-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="px-3 py-1 bg-slate-900 text-white text-xs font-mono rounded-full">{p.category}</span>
                  <span className="text-miku-pink font-bold">${p.price}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-miku-teal transition-colors">
                  {p.name[lang]}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 mb-6 font-mono">
                  {p.description[lang]}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-slate-800 transition-colors">
                  CHECK STATS <ArrowDown className="-rotate-90" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 4: EDUCATION - The Problem */}
      <section className="py-24 bg-slate-900 text-white px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,197,187,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,197,187,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Zap size={48} className="mx-auto text-yellow-400 mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            {lang === 'en' ? "DON'T BUY CRINGE BOOTLEGS." : "НЕ ПОКУПАЙ КРИНЖОВЫЕ БУТЛЕГИ."}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
            <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-2xl">
              <h3 className="text-red-400 font-mono font-bold text-xl mb-4">BOOTLEGS (L)</h3>
              <ul className="space-y-3 text-slate-400 text-sm font-mono list-disc pl-4">
                <li>
                  {lang === 'en' ? "Shiny face (greasy looking)" : "Блестящее лицо (выглядит жирным)"}
                </li>
                <li>
                  {lang === 'en' ? "Derpy eyes looking two directions" : "Глаза смотрят в разные стороны"}
                </li>
                <li>
                  {lang === 'en' ? "Smells like gasoline" : "Воняет дешевым пластиком"}
                </li>
                <li>
                  {lang === 'en' ? "Zero drip, purely cringe" : "Ноль стиля, полный кринж"}
                </li>
              </ul>
            </div>
            <div className="bg-miku-teal/10 border border-miku-teal/30 p-8 rounded-2xl">
              <h3 className="text-miku-teal font-mono font-bold text-xl mb-4">MIKUVERSE (W)</h3>
              <ul className="space-y-3 text-slate-300 text-sm font-mono list-disc pl-4">
                <li>
                  {lang === 'en' ? "Matte finish, high quality" : "Матовый финиш, топ качество"}
                </li>
                <li>
                  {lang === 'en' ? "Sculpt verified by god herself" : "Скульпт одобрен самой богиней"}
                </li>
                <li>
                  {lang === 'en' ? "Box condition: Immaculate" : "Коробка в идеале"}
                </li>
                <li>
                  {lang === 'en' ? "Investment (Stonks)" : "Инвестиция (Stonks)"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5: TELEGRAM - The Solution */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#2AABEE] to-[#229ED9] rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
          <Terminal className="absolute top-8 right-8 text-white/20 w-32 h-32" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-xs font-bold mb-6 flex items-center gap-2">
                <Sparkles size={12} /> {lang === 'en' ? "SECRET CLUB" : "ЗАКРЫТЫЙ КЛУБ"}
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                {lang === 'en' ? "Don't sleep on the drop." : "Не проспи дроп."}
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                {lang === 'en' 
                  ? "We post the rarest loot on Telegram 24h before the normies see it. Exclusive promo codes and memes included." 
                  : "Мы постим самый редкий лут в Телегу за 24 часа до того, как его увидят нормисы. Эксклюзивные промики и мемы внутри."}
              </p>
              <button 
                onClick={openTelegram}
                className="bg-white text-[#229ED9] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                {t.joinChannel[lang]}
              </button>
            </div>
            
            {/* Phone Mockup */}
            <div className="w-64 bg-white rounded-[2rem] p-4 shadow-xl rotate-3 border-4 border-slate-100/20">
              <div className="bg-slate-100 h-full rounded-xl p-3 space-y-3">
                <div className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-16 bg-miku-teal/20 rounded-lg"></div>
                <div className="h-32 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 7: FAQ - Handling Objections */}
      <section className="py-24 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-12 flex items-center justify-center gap-3">
          <HelpCircle className="text-miku-teal" /> {t.faq[lang]}
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-6 hover:border-miku-teal transition-colors bg-white/50">
              <h3 className="font-bold text-lg text-slate-800 mb-2">{faq.question[lang]}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-mono">{faq.answer[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 8: FINAL CTA */}
      <section className="py-32 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-800 mb-8">
          {lang === 'en' ? "Ready to ascend?" : "Готов вознестись?"}
        </h2>
        <p className="text-xl text-slate-500 mb-12 font-mono">
          {lang === 'en' ? "Your shelf is begging for this." : "Твоя полка умоляет об этом."}
        </p>
        <button 
          onClick={() => navigate('/catalog')}
          className="px-12 py-6 bg-miku-teal text-white font-display font-bold text-2xl rounded-2xl shadow-xl shadow-miku-teal/40 hover:scale-105 hover:-rotate-1 transition-all"
        >
          {t.shopNow[lang]}
        </button>
      </section>

    </div>
  );
};

export default Home;