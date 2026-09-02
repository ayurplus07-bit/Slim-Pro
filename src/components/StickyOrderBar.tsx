import React, { useState, useEffect } from 'react';
import { ShoppingBag, Flame, Clock, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import bottleImg from '../assets/images/slim_pro_bottle_1788336637000.jpg';

interface StickyOrderBarProps {
  language: Language;
  onOrderClick: () => void;
}

export const StickyOrderBar: React.FC<StickyOrderBarProps> = ({ language, onOrderClick }) => {
  const [timeLeft, setTimeLeft] = useState(892);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#631e50] shadow-2xl px-3 py-2 sm:hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img
            src={bottleImg}
            alt="Slim Pro Powder"
            referrerPolicy="no-referrer"
            className="w-10 h-10 object-contain rounded-lg border border-slate-200 bg-white p-0.5"
          />
          <div>
            <div className="flex items-center gap-1 text-[11px] font-black text-rose-700">
              <Flame className="w-3 h-3 fill-rose-600" />
              <span>૫૦% છૂટ | {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>
            <p className="text-xs font-black text-slate-900 leading-tight">
              ૧૦૦% ફ્રી COD ડિલિવરી
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="tel:+918155021359"
            className="p-2 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-xl font-bold flex items-center justify-center shadow-xs active:scale-95 transition"
            title="Call 8155021359"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold flex items-center justify-center shadow-xs active:scale-95 transition"
            title="WhatsApp 8155021359"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>
          <button
            type="button"
            onClick={onOrderClick}
            className="bg-gradient-to-r from-emerald-700 to-[#631e50] text-white px-3 py-2 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition flex items-center gap-1 shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ઓર્ડર (COD)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
