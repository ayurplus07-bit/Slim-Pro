import React, { useState, useEffect } from 'react';
import { ShoppingBag, MapPin, CheckCircle2, X } from 'lucide-react';
import { LIVE_GUJARATI_ORDERS } from '../data/productData';
import bottleImg from '../assets/images/slim_pro_bottle_1788336637000.jpg';

export const LiveOrderToast: React.FC = () => {
  const [currentOrder, setCurrentOrder] = useState<typeof LIVE_GUJARATI_ORDERS[0] | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentOrder(LIVE_GUJARATI_ORDERS[index % LIVE_GUJARATI_ORDERS.length]);
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
      }, 5000);

      index++;
    }, 11000);

    // Initial trigger after 3s
    const firstTimeout = setTimeout(() => {
      setCurrentOrder(LIVE_GUJARATI_ORDERS[0]);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  if (!visible || !currentOrder) return null;

  return (
    <div className="fixed bottom-20 left-4 z-50 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-emerald-500/40 animate-slide-up flex items-center gap-3">
      <img
        src={bottleImg}
        alt="Slim Pro Powder"
        referrerPolicy="no-referrer"
        className="w-12 h-12 rounded-xl object-contain bg-white border border-slate-200 p-0.5 shadow-xs shrink-0"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-xs text-slate-900 truncate">
            {currentOrder.name}
          </span>
          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1 rounded">
            COD
          </span>
        </div>
        <p className="text-[11px] text-slate-600 truncate">
          {currentOrder.city} • <span className="font-bold text-[#631e50]">{currentOrder.pack}</span>
        </p>
        <p className="text-[10px] text-slate-400 font-medium">
          {currentOrder.time} • વેરિફાઇડ ઓર્ડર
        </p>
      </div>

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="text-slate-400 hover:text-slate-600 p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
