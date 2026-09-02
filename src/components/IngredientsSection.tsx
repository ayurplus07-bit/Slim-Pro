import React from 'react';
import { Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { INGREDIENTS } from '../data/productData';

interface IngredientsSectionProps {
  language: Language;
}

export const IngredientsSection: React.FC<IngredientsSectionProps> = ({ language }) => {
  return (
    <section className="py-8 sm:py-12 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-emerald-300">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'gu' ? '૧૦૦% શુદ્ધ આયુર્વેદિક જડીબુટ્ટીઓ' : '100% PURE AYURVEDIC HERBS'}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            {language === 'gu' 
              ? 'સ્લિમ પ્રો પાવડરના ૮ દિવ્ય ઘટકો અને તેનું કાર્ય' 
              : '8 Powerful Ayurvedic Ingredients & Their Actions'}
          </h2>
          
          <p className="text-sm text-slate-600 font-medium mt-1.5">
            {language === 'gu'
              ? 'કોઈ કેમિકલ કે પ્રિઝર્વેટિવ્સ નહીં — માત્ર પ્રકૃતિની શુદ્ધતમ ઔષધિઓ'
              : 'Zero chemicals, zero steroids. Formulated with authentic botanical extracts'}
          </p>
        </div>

        {/* 8 Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INGREDIENTS.map((ing) => (
            <div 
              key={ing.id}
              className="bg-slate-50 hover:bg-amber-50/50 p-4 rounded-xl border border-slate-200 hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  {ing.id === 'kali-mirch' ? (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-stone-800 to-amber-950 flex items-center justify-center text-xl shadow-md border border-stone-700/50 relative overflow-hidden group-hover:scale-110 transition-transform">
                      <span className="text-2xl" role="img" aria-label="Black pepper seeds">🫑</span>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-[9px] font-black text-slate-950">
                        ⚡
                      </div>
                    </div>
                  ) : (
                    <span className="text-3xl filter drop-shadow-xs">{ing.icon}</span>
                  )}
                  <span className="text-[10px] font-bold bg-white text-[#631e50] px-2 py-0.5 rounded border border-slate-200">
                    {ing.keyAction}
                  </span>
                </div>

                <h3 className="font-black text-slate-900 text-sm sm:text-base leading-snug">
                  {language === 'gu' ? ing.nameGu : language === 'hi' ? ing.nameHi : ing.nameEn}
                </h3>
                
                <p className="text-[11px] text-slate-500 font-mono italic mb-2">
                  {ing.botanicalName}
                </p>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {language === 'gu' ? ing.benefitsGu : language === 'hi' ? ing.benefitsHi : ing.benefitsEn}
                </p>
              </div>

              <div className="pt-2.5 mt-3 border-t border-slate-200/80 flex items-center gap-1 text-[10px] font-extrabold text-emerald-700">
                <ShieldCheck className="w-3 h-3" />
                <span>૧૦૦% ક્લિનિકલી ટેસ્ટેડ</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Certification Banner */}
        <div className="mt-8 p-4 bg-gradient-to-r from-emerald-900 via-slate-900 to-[#631e50] rounded-xl text-white flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wider text-emerald-300">આયુષ મંત્રાલય</p>
              <p className="text-[11px] text-white/80 font-medium">AYUSH Approved Standards</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wider text-amber-300">GMP પ્રમાણિત લેબ</p>
              <p className="text-[11px] text-white/80 font-medium">Good Manufacturing Practice</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <div className="text-left">
              <p className="text-xs font-black uppercase tracking-wider text-emerald-300">૧૦૦% નેચરલ હર્બ્સ</p>
              <p className="text-[11px] text-white/80 font-medium">No Chemicals or Steroids</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
