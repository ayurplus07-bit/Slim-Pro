import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  Flame, 
  Truck, 
  ShoppingBag,
  Globe2,
  Menu,
  X
} from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOrderClick: () => void;
  onConsultantClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onOrderClick,
  onConsultantClick
}) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live countdown timer for scarcity
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      {/* Top Urgent Alert Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-[#631e50] text-white py-2 px-3 text-xs sm:text-sm font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="font-bold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              {language === 'hi' && 'आज का महा ऑफर: Flat 50% OFF + फ्री होम डिलीवरी पूरे भारत में 🇮🇳'}
              {language === 'en' && 'TODAY SPECIAL: Flat 50% OFF + Free Cash on Delivery across India 🇮🇳'}
              {language === 'hinglish' && 'AAJ KA MEGA OFFER: Flat 50% OFF + Free COD Delivery All India 🇮🇳'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono bg-black/30 px-3 py-1 rounded-full border border-white/20">
            <span className="text-emerald-200">
              {language === 'hi' ? 'ऑफर समाप्त:' : language === 'en' ? 'Offer Ends In:' : 'Offer Khatam:'}
            </span>
            <span className="text-amber-300 font-bold tracking-widest text-sm">
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Trust Tag */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-[#631e50] to-emerald-700 text-white flex items-center justify-center font-black text-xl shadow-md shadow-emerald-900/20">
              🌿
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#631e50] font-['Plus_Jakarta_Sans']">
                  SLIM PRO<span className="text-emerald-600">™</span>
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  AYUSH
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {language === 'hi' ? '100% शुद्ध आयुर्वेदिक पाउडर' : language === 'en' ? '100% Ayurvedic Fat Burner' : 'Pure Ayurvedic Slimming Formula'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
            <a href="#benefits" className="hover:text-emerald-700 transition">
              {language === 'hi' ? 'फायदे' : language === 'en' ? 'Benefits' : 'Fayde'}
            </a>
            <a href="#ingredients" className="hover:text-emerald-700 transition">
              {language === 'hi' ? 'जड़ी-बूटियाँ' : language === 'en' ? 'Ingredients' : 'Ingredients'}
            </a>
            <a href="#calculator" className="hover:text-emerald-700 transition flex items-center gap-1 text-emerald-700">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'hi' ? 'BMI कैलकुलेटर' : language === 'en' ? 'BMI Calculator' : 'BMI Calculator'}
            </a>
            <a href="#transformations" className="hover:text-emerald-700 transition">
              {language === 'hi' ? 'परिणाम' : language === 'en' ? 'Results' : 'Transformations'}
            </a>
            <a href="#pricing" className="hover:text-emerald-700 transition">
              {language === 'hi' ? 'कीमत व पैकेज' : language === 'en' ? 'Packs & Price' : 'Packages'}
            </a>
            <a href="#faqs" className="hover:text-emerald-700 transition">
              {language === 'hi' ? 'सवाल-जवाब' : language === 'en' ? 'FAQs' : 'FAQs'}
            </a>
          </nav>

          {/* Actions: Language Selector, WhatsApp & Order Now */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Toggle Pill */}
            <div className="bg-slate-100 p-0.5 rounded-xl flex items-center border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded-lg transition ${
                  language === 'hi' 
                    ? 'bg-emerald-700 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                हिंदी
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hinglish')}
                className={`px-2 py-1 rounded-lg transition ${
                  language === 'hinglish' 
                    ? 'bg-emerald-700 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hinglish
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-lg transition ${
                  language === 'en' 
                    ? 'bg-emerald-700 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Call Quick Helpline */}
            <a
              href="tel:+918155021359"
              className="hidden lg:flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 px-3 py-2 rounded-xl text-xs font-bold transition"
              title="Call Helpline: 8155021359"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
              <span>8155021359</span>
            </a>

            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20want%20to%20know%20more%20about%20Slim%20Pro%20Powder"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-xl text-xs font-bold shadow-sm transition"
              title="WhatsApp Helpline: 8155021359"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* AI Ayurvedic Diet Advisor Button */}
            <button
              type="button"
              onClick={onConsultantClick}
              className="hidden sm:flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 px-3 py-2 rounded-xl text-xs font-bold transition"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{language === 'hi' ? 'डाइट सलाह' : language === 'en' ? 'AI Diet Guide' : 'Diet Help'}</span>
            </button>

            {/* Main Order CTA Button */}
            <button
              type="button"
              onClick={onOrderClick}
              className="bg-gradient-to-r from-emerald-600 to-[#631e50] hover:from-emerald-700 hover:to-[#4e163e] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-emerald-800/25 flex items-center gap-1.5 sm:gap-2 active:scale-95 transition transform"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{language === 'hi' ? 'ऑर्डर करें (COD)' : language === 'en' ? 'Order COD Now' : 'Order COD'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 text-sm font-bold">
            <a 
              href="#benefits" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
            >
              🌿 {language === 'hi' ? 'फायदे' : language === 'en' ? 'Benefits' : 'Fayde'}
            </a>
            <a 
              href="#ingredients" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
            >
              🍃 {language === 'hi' ? 'जड़ी-बूटियाँ' : language === 'en' ? 'Ingredients' : 'Ingredients'}
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800"
            >
              ⚡ {language === 'hi' ? 'BMI कैलकुलेटर' : language === 'en' ? 'BMI Calculator' : 'BMI Tool'}
            </a>
            <a 
              href="#transformations" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-50 text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
            >
              ⭐ {language === 'hi' ? 'परिणाम' : language === 'en' ? 'Results' : 'Results'}
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onConsultantClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 py-2.5 rounded-xl text-sm font-bold"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{language === 'hi' ? 'आयुर्वेदिक डाइट और डोसेज AI असिस्टेंट' : 'AI Diet & Health Assistant'}</span>
            </button>

            <a
              href="tel:+918155021359"
              className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 py-2.5 rounded-xl text-sm font-black transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>કોલ હેલ્પલાઇન: 8155021359</span>
            </a>

            <a
              href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20want%20to%20order%20Slim%20Pro%20Powder"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-bold transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp ચેટ: 8155021359</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
