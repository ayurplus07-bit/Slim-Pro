import React, { useState } from 'react';
import { PhoneCall, MessageCircle, X } from 'lucide-react';
import { Language } from '../types';

interface FloatingContactButtonsProps {
  language?: Language;
}

export const FloatingContactButtons: React.FC<FloatingContactButtonsProps> = ({ language = 'gu' }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      
      {/* Help bubble tooltip (dismissible) */}
      {showTooltip && (
        <div className="bg-slate-900/95 text-white text-xs py-1.5 px-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2 animate-bounce">
          <span className="font-semibold">
            {language === 'gu' ? 'કોઈપણ પ્રશ્ન હોય તો કોલ/WhatsApp કરો!' : 'Questions? Call or WhatsApp us!'}
          </span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons Group */}
      <div className="flex flex-col gap-2.5">
        {/* Direct Call Button */}
        <a
          href="tel:+918155021359"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white"
          title="Direct Call: 8155021359"
          aria-label="Direct Call Helpline 8155021359"
        >
          <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
          
          {/* Hover Label */}
          <span className="hidden sm:group-hover:inline-block absolute right-16 bg-slate-900 text-white font-bold text-xs py-1.5 px-3 rounded-xl whitespace-nowrap shadow-lg">
            કોલ કરો: 8155021359
          </span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20want%20to%20know%20more%20about%20Slim%20Pro%20Powder"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white"
          title="WhatsApp: 8155021359"
          aria-label="WhatsApp Chat 8155021359"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />

          {/* Online Indicator Dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />

          {/* Hover Label */}
          <span className="hidden sm:group-hover:inline-block absolute right-16 bg-slate-900 text-white font-bold text-xs py-1.5 px-3 rounded-xl whitespace-nowrap shadow-lg">
            WhatsApp: 8155021359
          </span>
        </a>
      </div>

    </div>
  );
};
