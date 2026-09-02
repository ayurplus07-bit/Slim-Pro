import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Star, 
  Flame, 
  Award, 
  ArrowRight,
  TrendingDown,
  Users,
  Clock
} from 'lucide-react';
import { Language } from '../types';
import { ProductBottleVisual } from './ProductBottleVisual';
import { motion } from 'motion/react';

interface HeroProps {
  language: Language;
  onOrderClick: () => void;
  onCalculatorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOrderClick,
  onCalculatorClick
}) => {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 pb-12 sm:pb-16 bg-gradient-to-b from-emerald-50/60 via-[#fdfcf9] to-white">
      
      {/* Decorative Ayurvedic Leaf Background Flares */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-emerald-200/30 via-amber-200/20 to-purple-200/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-5 text-center">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300/80 px-3.5 py-1 rounded-full text-xs font-black shadow-xs tracking-wide">
            <Award className="w-3.5 h-3.5 text-emerald-700 fill-emerald-600" />
            <span>{language === 'hi' ? 'आयुष (AYUSH) और GMP प्रमाणित' : language === 'en' ? 'AYUSH & GMP Certified Formula' : 'AYUSH & GMP Certified Formula'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>4.9/5 (14,850+ {language === 'hi' ? 'संतुष्ट ग्राहक' : language === 'en' ? 'Verified Reviews' : 'Happy Customers'})</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-800 border border-rose-200 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>{language === 'hi' ? '86 लोग अभी देख रहे हैं' : language === 'en' ? '86 People viewing right now' : '86 Log abhi dekh rahe hain'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: High Conversion Sales Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-5xl font-black tracking-tight text-slate-900 leading-[1.2]">
                {language === 'hi' && (
                  <>
                    बिना डाइटिंग और भारी कसरत के{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#631e50] underline decoration-amber-400 decoration-wavy decoration-2">
                      पेट की जिद्दी चर्बी
                    </span>{' '}
                    तेजी से घटाएं!
                  </>
                )}
                {language === 'en' && (
                  <>
                    Burn Stubborn Belly Fat Naturally with{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#631e50] underline decoration-amber-400 decoration-wavy decoration-2">
                      Slim Pro Powder
                    </span>{' '}
                    in Few Days!
                  </>
                )}
                {language === 'hinglish' && (
                  <>
                    Bina Dieting & Heavy Exercise ke{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#631e50] underline decoration-amber-400 decoration-wavy decoration-2">
                      Pait ki Purani Charbi
                    </span>{' '}
                    Tezi Se Ghatayein!
                  </>
                )}
              </h1>

              {/* Sub-headline / Tagline */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {language === 'hi' && (
                  <>
                    100% शुद्ध आयुर्वेदिक <strong className="text-[#631e50]">Slim Pro Powder</strong> दालचीनी, हल्दी, काली मिर्च और त्रिफला के शक्तिशाली अर्क से बना है — मेटाबॉलिज्म बूस्ट करे, भूख कंट्रोल करे और इम्यूनिटी 3X बढ़ाए।
                  </>
                )}
                {language === 'en' && (
                  <>
                    100% Pure Ayurvedic formulation powered by Cinnamon, Curcumin, Piperine & Triphala. Triple action: Fast Fat Burning, Hunger Suppression & 3X Immunity!
                  </>
                )}
                {language === 'hinglish' && (
                  <>
                    100% Pure Ayurvedic <strong className="text-[#631e50]">Slim Pro Powder</strong> — Dalchini, Haldi, Kali Mirch aur Triphala se bana natural formula jo bina kisi side effect ke 15 dino me pait aur kamar ki charbi pighlata hai.
                  </>
                )}
              </p>
            </div>

            {/* Bullet Points with Visual Highlighters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-left pt-1">
              {[
                {
                  hi: '15-20 दिनों में 4 से 7 किलो तक वजन कम करने में असरदार',
                  en: 'Effective for losing 4-7 kg in 15-20 days naturally',
                  hinglish: '15-20 dino me 4-7 KG natural weight loss result',
                },
                {
                  hi: '100% आयुर्वेदिक फॉर्मूला - कोई साइड इफेक्ट नहीं (Zero Side Effects)',
                  en: '100% Herbal & Ayurvedic - Zero Side Effects guarantee',
                  hinglish: '100% Ayurvedic herbs - Zero chemical, zero side effects',
                },
                {
                  hi: 'कमर, जांघों और पेट की लटकती चर्बी को पिघलाए',
                  en: 'Targets stubborn belly, waist & thigh fat tissues',
                  hinglish: 'Belly fat, thighs aur waist size ko tezi se shape me laye',
                },
                {
                  hi: 'गैस, कब्ज व एसिडिटी दूर कर पाचन और ऊर्जा बढ़ाए',
                  en: 'Cleanses gut, relieves bloating and triples daily stamina',
                  hinglish: 'Digestion strong banaye aur pure din energetic rakhe',
                },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 bg-white/90 border border-emerald-100 rounded-xl p-2.5 shadow-xs"
                >
                  <div className="mt-0.5 rounded-full bg-emerald-100 text-emerald-700 p-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-600 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {language === 'hi' ? item.hi : language === 'en' ? item.en : item.hinglish}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & Scarcity Banner Box */}
            <div className="bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-purple-500/15 border-2 border-emerald-500/40 rounded-2xl p-4 sm:p-5 shadow-sm text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      LIMITED TIME DISCOUNT
                    </span>
                    <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-rose-600" />
                      FLAT 50% OFF
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3 mt-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      ₹1,199
                    </span>
                    <span className="text-base sm:text-lg text-slate-400 line-through font-semibold">
                      ₹2,499
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      SAVE ₹1,300
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-600 mt-1 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    {language === 'hi' ? 'फ्री होम डिलीवरी + कैश ऑन डिलीवरी (COD) उपलब्ध' : language === 'en' ? 'Free Shipping + Cash on Delivery (COD) Available' : 'Free COD Delivery All Across India'}
                  </p>
                </div>

                {/* Main Action Buttons */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={onOrderClick}
                    className="w-full sm:w-auto bg-gradient-to-r from-[#631e50] via-[#7d2464] to-emerald-700 hover:from-[#501740] hover:to-emerald-800 text-white font-black text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#631e50]/30 flex items-center justify-center gap-2 active:scale-95 transition transform animate-pulse"
                  >
                    <span>{language === 'hi' ? 'अभी आर्डर करें (COD)' : language === 'en' ? 'ORDER NOW (COD)' : 'ABHI ORDER KAREIN (COD)'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Quick Action: BMI Calculator & Doctor Guarantee */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm font-semibold text-slate-600">
              <button
                type="button"
                onClick={onCalculatorClick}
                className="text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1.5 font-bold"
              >
                <TrendingDown className="w-4 h-4" />
                <span>{language === 'hi' ? 'अपना वजन व BMI चेक करें ➔' : language === 'en' ? 'Calculate Your Ideal Weight & BMI ➔' : 'Apna BMI aur Target Weight Check Karein ➔'}</span>
              </button>

              <span className="hidden sm:inline text-slate-300">•</span>

              <div className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>15 Days Money-Back Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Product Visual & Callouts */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Top Bottle Badge */}
            <div className="mb-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-black px-4 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ORIGINAL AYURVEDIC FORMULATION</span>
            </div>

            {/* Product Bottle */}
            <ProductBottleVisual className="my-2" showBadges={true} />

            {/* Micro Feature Grid below bottle */}
            <div className="w-full max-w-sm grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="bg-white/90 border border-slate-200 rounded-xl p-2 shadow-xs">
                <p className="text-lg">🌿</p>
                <p className="text-[11px] font-bold text-slate-800 mt-0.5">100% Herbal</p>
                <p className="text-[9px] text-slate-500">No Chemicals</p>
              </div>
              <div className="bg-white/90 border border-slate-200 rounded-xl p-2 shadow-xs">
                <p className="text-lg">⚡</p>
                <p className="text-[11px] font-bold text-slate-800 mt-0.5">Fast Result</p>
                <p className="text-[9px] text-slate-500">15 Days Action</p>
              </div>
              <div className="bg-white/90 border border-slate-200 rounded-xl p-2 shadow-xs">
                <p className="text-lg">🇮🇳</p>
                <p className="text-[11px] font-bold text-slate-800 mt-0.5">AYUSH Govt</p>
                <p className="text-[9px] text-slate-500">Certified Standard</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
