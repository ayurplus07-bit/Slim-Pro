import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { GUJARATI_FAQS } from '../data/productData';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#631e50]/10 text-[#631e50] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'gu' ? 'વારંવાર પૂછાતા પ્રશ્નો' : 'FREQUENTLY ASKED QUESTIONS'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            {language === 'gu' ? 'તમારા મનમાં કોઈ શંકા છે? અહીં વાંચો જવાબો' : 'Frequently Asked Questions'}
          </h2>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {GUJARATI_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-black text-sm sm:text-base text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 transition"
                >
                  <span className="font-['Noto_Sans_Gujarati','Anek_Gujarati']">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#631e50]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
