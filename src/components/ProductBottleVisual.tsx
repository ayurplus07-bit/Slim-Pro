import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Leaf, Zap, HeartPulse, ShoppingBag, ZoomIn } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import bottleImg from '../assets/images/slim_pro_bottle_1788336637000.jpg';

interface Props {
  className?: string;
  showBadges?: boolean;
  language?: Language;
  onOrderClick?: () => void;
}

export const ProductBottleVisual: React.FC<Props> = ({ 
  className = '', 
  showBadges = true,
  language = 'gu',
  onOrderClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-amber-400/20 to-[#631e50]/25 blur-3xl rounded-full scale-110 pointer-events-none" />

      {/* Floating Trust Badges */}
      {showBadges && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-3 -left-2 sm:-left-6 z-30 bg-white/95 backdrop-blur-md border border-emerald-500/30 shadow-xl rounded-2xl p-2.5 flex items-center gap-2.5 text-xs font-bold text-slate-800"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shrink-0">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-emerald-700 uppercase tracking-wider font-extrabold">
                {language === 'gu' ? '૧૦૦% આયુર્વેદિક' : '100% Ayurvedic'}
              </p>
              <p className="font-bold text-slate-900 leading-tight text-xs">
                {language === 'gu' ? '૦% આડઅસર' : 'Zero Side Effects'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-16 -right-2 sm:-right-6 z-30 bg-white/95 backdrop-blur-md border border-[#631e50]/30 shadow-xl rounded-2xl p-2.5 flex items-center gap-2.5 text-xs font-bold text-slate-800"
          >
            <div className="w-8 h-8 rounded-xl bg-[#631e50] text-white flex items-center justify-center shadow-md shrink-0">
              <Zap className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <p className="text-[10px] text-[#631e50] uppercase tracking-wider font-extrabold">
                {language === 'gu' ? 'ઝડપી પાચન શક્તિ' : 'Fast Metabolism'}
              </p>
              <p className="font-bold text-slate-900 leading-tight text-xs">
                {language === 'gu' ? 'ચરબી મુક્ત શરીર' : 'Burn Fat 24x7'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-3 left-2 sm:left-4 z-30 bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl rounded-xl px-3.5 py-1.5 flex items-center gap-2 text-xs font-bold"
          >
            <ShieldCheck className="w-4 h-4 text-amber-100" />
            <span>AYUSH APPROVED & GMP CERTIFIED</span>
          </motion.div>
        </>
      )}

      {/* Product Image Frame */}
      <motion.div 
        animate={{ 
          y: isHovered ? -8 : [0, -6, 0],
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        className="relative z-10 w-72 sm:w-80 md:w-96 rounded-3xl bg-white p-3 sm:p-4 shadow-[0_20px_50px_rgba(99,30,80,0.18)] border-2 border-slate-100 group overflow-hidden"
      >
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 via-white to-amber-50/30">
          {/* Top Brand ribbon */}
          <div className="absolute top-3 left-3 z-20 bg-[#631e50] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1 shadow-md">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>ORIGINAL AYURVEDIC FORMULA</span>
          </div>

          <img
            src={bottleImg}
            alt="Slim Pro Powder - Shape your body in few days"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Bottom verified seal bar */}
          <div className="bg-slate-900 text-white px-3 py-2 text-center text-xs font-bold flex items-center justify-around">
            <span className="text-amber-300">🌿 વજન નિયંત્રણ</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400">🛡️ રોગપ્રતિકારક શક્તિ</span>
            <span className="text-slate-500">•</span>
            <span className="text-teal-300">⚡ એનર્જી બૂસ્ટ</span>
          </div>
        </div>

        {/* Action Button under Bottle */}
        {onOrderClick && (
          <button
            type="button"
            onClick={onOrderClick}
            className="w-full mt-3 bg-gradient-to-r from-[#631e50] to-emerald-800 hover:opacity-95 text-white py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-98 transition flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{language === 'gu' ? 'આ બોટલ ઓર્ડર કરો (COD - ૫૦% છૂટ)' : 'Order This Bottle (COD)'}</span>
          </button>
        )}
      </motion.div>
    </div>
  );
};
