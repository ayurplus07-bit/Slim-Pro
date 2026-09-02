import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  ShoppingBag, 
  Clock, 
  Calendar,
  Share2,
  Bookmark,
  Eye,
  MessageSquare,
  PhoneCall,
  MessageCircle
} from 'lucide-react';
import { Language } from '../types';

interface AdvertorialHeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOrderClick: () => void;
}

export const AdvertorialHeader: React.FC<AdvertorialHeaderProps> = ({
  language,
  setLanguage,
  onOrderClick,
}) => {
  const [currentDateStr, setCurrentDateStr] = useState('');
  const [readingViews, setReadingViews] = useState(14820);

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      weekday: 'long' 
    };
    setCurrentDateStr(today.toLocaleDateString(language === 'gu' ? 'gu-IN' : language === 'hi' ? 'hi-IN' : 'en-US', options));
  }, [language]);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      
      {/* Top Urgent Alert Bar */}
      <div className="bg-[#631e50] text-white py-1.5 px-3 text-xs sm:text-sm font-semibold">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
              {language === 'gu' ? 'બ્રેકિંગ રિસર્ચ' : 'BREAKING NEWS'}
            </span>
            <span className="font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              {language === 'gu' && 'આજની ખાસ ઓફર: ૫૦% છૂટ + સમગ્ર ગુજરાતમાં ફ્રી હોમ ડિલિવરી (COD) 🇮🇳'}
              {language === 'hi' && 'आज का महा ऑफर: 50% छूट + फ्री होम डिलीवरी पूरे भारत में (COD) 🇮🇳'}
              {language === 'en' && 'TODAY SPECIAL: Flat 50% OFF + Free Cash on Delivery across India 🇮🇳'}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            {/* Direct Call & WhatsApp Helpline */}
            <a
              href="tel:+918155021359"
              className="flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-2.5 py-0.5 rounded text-[11px] shadow-xs transition"
              title="Call Helpline: 8155021359"
            >
              <PhoneCall className="w-3 h-3" />
              <span>8155021359</span>
            </a>

            <a
              href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20want%20to%20order%20Slim%20Pro%20Powder"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[11px] transition"
              title="WhatsApp Helpline: 8155021359"
            >
              <MessageCircle className="w-3 h-3 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Language Switcher */}
            <div className="bg-black/30 p-0.5 rounded-lg flex items-center border border-white/20">
              <button
                type="button"
                onClick={() => setLanguage('gu')}
                className={`px-2 py-0.5 rounded text-xs font-bold transition ${
                  language === 'gu' ? 'bg-amber-400 text-slate-950 font-black' : 'text-white/80 hover:text-white'
                }`}
              >
                ગુજરાતી
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-2 py-0.5 rounded text-xs font-bold transition ${
                  language === 'hi' ? 'bg-amber-400 text-slate-950 font-black' : 'text-white/80 hover:text-white'
                }`}
              >
                हिंदी
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-xs font-bold transition ${
                  language === 'en' ? 'bg-amber-400 text-slate-950 font-black' : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newspaper / Health Journal Masthead */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b-2 border-slate-900 pb-3">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#631e50] to-emerald-700 text-white flex items-center justify-center text-2xl font-black shadow-md">
              🌿
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#631e50] font-['Anek_Gujarati']">
                  ગુજરાત હેલ્થ જર્નલ
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-300">
                  આયુર્વેદિક વિશેષ અંક
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                GUJARAT HEALTH & AYURVEDIC RESEARCH BUREAU • ESTD. 2012
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{currentDateStr || 'આજની તારીખ'}</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center gap-1 text-emerald-700 font-bold">
              <Eye className="w-3.5 h-3.5" />
              <span>{readingViews.toLocaleString('gu-IN')} લોકો વાંચી રહ્યા છે</span>
            </div>
          </div>

        </div>

        {/* Advertorial Category Sub-bar */}
        <div className="flex items-center justify-between py-2 text-xs font-bold text-slate-700 uppercase tracking-wider overflow-x-auto">
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <span className="text-[#631e50] font-black border-b-2 border-[#631e50] pb-0.5">
              {language === 'gu' ? 'વિશેષ અહેવાલ' : 'SPECIAL REPORT'}
            </span>
            <a href="#article" className="hover:text-emerald-700 transition">
              {language === 'gu' ? 'આયુર્વેદિક સંશોધન' : 'AYURVEDA'}
            </a>
            <a href="#calculator" className="hover:text-emerald-700 transition text-emerald-700">
              {language === 'gu' ? 'BMI કેલ્ક્યુલેટર' : 'BMI TOOL'}
            </a>
            <a href="#transformations" className="hover:text-emerald-700 transition">
              {language === 'gu' ? 'સફળ કેસ સ્ટડીઝ' : 'CASE STUDIES'}
            </a>
            <a href="#packages" className="hover:text-emerald-700 transition">
              {language === 'gu' ? 'ઓર્ડર પેકેજીસ' : 'PACKAGES'}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+918155021359"
              className="flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 px-3 py-1 rounded-lg text-xs font-bold transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
              <span>કોલ: 8155021359</span>
            </a>

            <a
              href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-lg text-xs font-bold transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOrderClick}
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-700 to-[#631e50] text-white px-3.5 py-1 rounded-lg text-xs font-black shadow-xs hover:opacity-95 active:scale-95 transition"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{language === 'gu' ? 'ઓર્ડર કરો (COD)' : 'ORDER NOW (COD)'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
