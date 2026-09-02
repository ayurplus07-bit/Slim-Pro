import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  TrendingDown, 
  Clock, 
  ArrowRight,
  UserCheck,
  Zap,
  Activity,
  HeartPulse,
  Scale
} from 'lucide-react';
import { Language } from '../types';
import { ProductBottleVisual } from './ProductBottleVisual';
import { TRANSFORMATIONS } from '../data/productData';
import doctorProfileImg from '../assets/images/doctor_profile_photo_1788366517067.jpg';

interface AdvertorialArticleProps {
  language: Language;
  onOrderClick: () => void;
  onCalculateClick: () => void;
}

export const AdvertorialArticle: React.FC<AdvertorialArticleProps> = ({
  language,
  onOrderClick,
  onCalculateClick,
}) => {
  return (
    <article id="article" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      
      {/* Category Tag & Reading Time */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <span className="bg-rose-100 text-rose-800 font-extrabold px-2.5 py-1 rounded-sm uppercase tracking-wide border border-rose-300 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            {language === 'gu' ? 'સ્પેશિયલ ઇન્વેસ્ટિગેશન રિપોર્ટ' : 'SPECIAL INVESTIGATION REPORT'}
          </span>
          <span className="text-slate-500 font-semibold hidden sm:inline">
            {language === 'gu' ? 'વાંચવાનો સમય: ૪ મિનિટ' : '4 Min Read'}
          </span>
        </div>

        <div className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{language === 'gu' ? 'તબીબી રીતે ચકાસાયેલ (Medically Verified)' : 'Medically Verified'}</span>
        </div>
      </div>

      {/* Main Big Advertorial Headline */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-slate-950 leading-[1.3] mb-5 tracking-tight font-['Noto_Sans_Gujarati','Anek_Gujarati']">
        {language === 'gu' && (
          <>
            <span className="text-[#631e50]">ડાયેટિંગ કે કસરત વગર</span> પેટ અને કમરની જૂની ચરબી <span className="bg-amber-100 px-2 py-0.5 text-slate-900 rounded">૧૫ થી ૩૦ દિવસમાં</span> ઓગાળવાની ૧૦૦% આયુર્વેદિક રીત!
          </>
        )}
        {language === 'hi' && (
          <>
            <span className="text-[#631e50]">बिना डाइटिंग या जिम के</span> पेट और कमर की पुरानी चर्बी <span className="bg-amber-100 px-2 py-0.5 text-slate-900 rounded">15 से 30 दिनों में</span> पिघलाने का 100% आयुर्वेदिक रहस्य!
          </>
        )}
        {language === 'en' && (
          <>
            <span className="text-[#631e50]">Without Starvation or Heavy Gym:</span> How to Melt Stubborn Belly Fat in <span className="bg-amber-100 px-2 py-0.5 text-slate-900 rounded">15-30 Days</span> Using 100% Pure Ayurveda!
          </>
        )}
      </h1>

      {/* Sub-headline */}
      <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6 border-l-4 border-[#631e50] pl-4 py-1 bg-[#631e50]/5 rounded-r-lg">
        {language === 'gu' && (
          'અમદાવાદ, સુરત અને રાજકોટના આયુર્વેદ નિષ્ણાતો દ્વારા કરવામાં આવેલા સંશોધનમાં સામે આવ્યું કે શા માટે "સ્લિમ પ્રો પાવડર" (Slim Pro Powder) ચરબીના મૂળ કોષો પર સીધો પ્રહાર કરી મેટાબોલિઝમ ૩ ગણું તેજ બનાવે છે.'
        )}
        {language === 'hi' && (
          'गुजरात के शीर्ष आयुर्वेदिक डॉक्टरों द्वारा प्रमाणित: जानिए कैसे Slim Pro Powder शरीर की आंतरिक पाचन अग्नि को तेज करके पेट की चर्बी को मोम की तरह पिघला देता है।'
        )}
        {language === 'en' && (
          'Scientific breakdown reveals how Slim Pro Powder rekindles internal metabolic fire to flush visceral belly fat without causing weakness.'
        )}
      </p>

      {/* Author Byline Card */}
      <div className="flex items-center justify-between flex-wrap gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full ring-2 ring-emerald-500 overflow-hidden shrink-0 shadow-sm bg-slate-100">
            <img 
              src={doctorProfileImg} 
              alt={language === 'gu' ? 'ડો. નિલેશ શાહ' : 'Dr. Nilesh Shah'} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                {language === 'gu' ? 'ડો. નિલેશ શાહ (M.D. આયુર્વેદિક મેડિસિન)' : 'Dr. Nilesh Shah (M.D. Ayurveda)'}
              </span>
              <UserCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {language === 'gu' 
                ? 'સિનિયર ક્લિનિકલ આયુર્વેદાચાર્ય અને વેલનેસ કન્સલ્ટન્ટ' 
                : 'Senior Clinical Ayurvedacharya & Obesity Specialist'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{language === 'gu' ? '૧૫,૨૦૦+ સંતુષ્ટ ગ્રાહકો' : '15,200+ Verified Buyers'}</span>
        </div>
      </div>

      {/* Main Body Content with Advertorial Layout */}
      <div className="space-y-6 text-slate-800 text-base sm:text-[17px] leading-relaxed">
        
        {/* Section 1: The real problem */}
        <section className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 flex items-center gap-2 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            <span className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center text-sm font-black">1</span>
            {language === 'gu' ? 'શા માટે ૯૫% લોકો ડાયેટિંગ અને કસરત કરવા છતાં વજન ઘટાડી શકતા નથી?' : 'Why 95% Diets Fail?'}
          </h2>
          
          <p className="mb-3">
            {language === 'gu' && (
              'શું તમે પણ રોજ સવારે ચાલવા જાઓ છો, ભૂખ્યા રહો છો કે તેલ-ઘી બંધ કરી દીધું છે છતાં પેટનું વજન ઓછું થતું નથી? આયુર્વેદ અનુસાર આનું મુખ્ય કારણ શરીરમાં કેલરી નહીં, પરંતુ <strong>"મંદાજ્ઞિ" (સ્લો મેટાબોલિઝમ)</strong> છે.'
            )}
            {language === 'hi' && (
              'क्या आप भी डाइटिंग करते हैं और फिर भी वजन कम नहीं होता? आयुर्वेद के अनुसार इसका असली कारण आपकी "मंदाग्नि" (धीमा मेटाबॉलिज्म) है।'
            )}
            {language === 'en' && (
              'Strict dieting and excessive starvation slow down your thyroid and metabolic fire (Mandagni), forcing the body to store even simple water as fat!'
            )}
          </p>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg my-4 text-sm sm:text-base text-rose-950 font-medium">
            <strong>⚠️ કડવી વાસ્તવિકતા:</strong> જ્યારે તમે ભૂખ્યા રહો છો ત્યારે શરીર ચરબી ઓગાળવાને બદલે સ્નાયુઓ (Muscles) તોડી નાખે છે. જેના કારણે ચહેરા પર કરચલીઓ, થાક, માથાનો દુખાવો અને ચક્કર આવવા લાગે છે — અને ડાયેટિંગ છોડતાં જ વજન બમણું વધી જાય છે!
          </div>
        </section>

        {/* Section 2: The Breakthrough Formula - Slim Pro Powder */}
        <section className="bg-gradient-to-br from-amber-50/70 via-emerald-50/50 to-white p-5 sm:p-7 rounded-2xl border border-emerald-200/80 shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-emerald-700 text-white text-xs font-black px-2.5 py-1 rounded uppercase">
              {language === 'gu' ? 'આયુર્વેદિક ક્રાંતિ' : 'AYURVEDIC BREAKTHROUGH'}
            </span>
            <span className="text-emerald-900 text-xs font-bold">૧૦૦% શુદ્ધ જડીબુટ્ટીઓનું સંયોજન</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            {language === 'gu' ? 'સ્લિમ પ્રો પાવડર (Slim Pro Powder) શરીરમાં કેવી રીતે ચમત્કારિક કામ કરે છે?' : 'How Slim Pro Powder Works?'}
          </h2>

          <p className="mb-4">
            {language === 'gu' && (
              'સ્લિમ પ્રો પાવડર એ પ્રાચીન આયુર્વેદિક ગ્રંથોમાં વર્ણવેલ <strong>તજ (દાલચીની), શુદ્ધ હળદર (Curcumin), કાળા મરી (Piperine), ત્રિફળા, ગાર્સિનિયા કમ્બોજિયા, ગૂગળ અને ગિલોય</strong> નું વિશેષ વૈજ્ઞાનિક મિશ્રણ છે.'
            )}
            {language === 'hi' && (
              'Slim Pro Powder दालचीनी, शुद्ध हल्दी, काली मिर्च, त्रिफला, गार्सिनिया, गुग्गुल और गिलोय का सटीक आयुर्वेदिक फॉर्मूला है जो शरीर के जिद्दी विसरल फैट को टारगेट करता है।'
            )}
            {language === 'en' && (
              'Slim Pro Powder combines Ceylon Cinnamon, Pure Curcumin, Piperine, Triphala, Garcinia, Guggulu and Giloy to create a 24/7 thermogenic calorie-burning cycle.'
            )}
          </p>

          {/* 4-Stage Mechanism Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#631e50] text-white flex items-center justify-center font-bold text-sm shrink-0">
                ૧
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                  {language === 'gu' ? 'મેટાબોલિઝમ ૩ ગણું તેજ બને છે' : '3x Faster Metabolism'}
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  કાળા મરી અને તજ શરીરમાં થર્મોજેનેસિસ પ્રક્રિયા શરૂ કરે છે, જેથી બેઠા-બેઠા પણ કેલરી બર્ન થાય છે.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                ૨
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                  {language === 'gu' ? 'નવી ચરબી બનતી અટકે છે' : 'Blocks Fat Formation'}
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  ગાર્સિનિયા કમ્બોજિયા કાર્બોહાઇડ્રેટ્સને ફેટમાં કન્વર્ટ થતાં રોકે છે અને વધારાની ભૂખ કંટ્રોલ કરે છે.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                ૩
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                  {language === 'gu' ? 'જૂની જિદ્દી ચરબી ઓગળે છે' : 'Melts Visceral Belly Fat'}
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  શુદ્ધ ગૂગળ અને હળદર પેટ, કમર અને જાંઘોની આસપાસ જામેલ જૂની કઠણ ચરબીના કોષોને ઓગાળી બહાર કાઢે છે.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                ૪
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                  {language === 'gu' ? 'શરીરનું સંપૂર્ણ ડિટોક્સ & એનર્જી' : 'Total Gut Detox & Stamina'}
                </h4>
                <p className="text-xs text-slate-600 leading-normal">
                  ત્રિફળા અને ગિલોય આંતરડાની સફાઈ કરી ગેસ-કબજિયાત દૂર કરે છે અને દિવસભર ભરપૂર સ્ફૂર્તિ રાખે છે.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Product Visual Integration */}
          <div className="my-6">
            <ProductBottleVisual 
              language={language}
              onOrderClick={onOrderClick}
            />
          </div>

          {/* Interactive Fast Action Call to action */}
          <div className="bg-gradient-to-r from-[#631e50] to-emerald-800 text-white p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md">
            <div>
              <div className="text-amber-300 text-xs font-black uppercase tracking-wider mb-1 flex items-center justify-center sm:justify-start gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {language === 'gu' ? '૫૦% ડિસ્કાઉન્ટ + ફ્રી હોમ ડિલિવરી' : 'FLAT 50% OFF + FREE COD'}
              </div>
              <h3 className="text-lg sm:text-xl font-black">
                {language === 'gu' ? 'આજે જ તમારો સ્લિમ પ્રો પાવડર બુક કરો' : 'Order Slim Pro Powder Today'}
              </h3>
              <p className="text-xs text-white/80 font-medium">
                {language === 'gu' ? 'પાર્સલ ઘરે પહોંચે ત્યારે જ પૈસા આપો (૧૦૦% COD)' : 'Pay only when parcel arrives at your doorstep'}
              </p>
            </div>

            <button
              type="button"
              onClick={onOrderClick}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition flex items-center gap-2 shrink-0"
            >
              <span>{language === 'gu' ? 'હમણાં ઓર્ડર કરો' : 'ORDER NOW (COD)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 3: Comparative Analysis */}
        <section className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            {language === 'gu' ? 'તુલના: સામાન્ય ડાયેટિંગ vs. સ્લિમ પ્રો પાવડર' : 'Comparison Table'}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-slate-100">
                  <th className="p-3 font-extrabold text-slate-700">લક્ષણ</th>
                  <th className="p-3 font-extrabold text-rose-700 bg-rose-50/80">કડક ડાયેટિંગ / કેમિકલ દવાઓ</th>
                  <th className="p-3 font-extrabold text-emerald-800 bg-emerald-50">સ્લિમ પ્રો પાવડર (૧૦૦% આયુર્વેદિક)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-bold text-slate-800">પરિણામની ઝડપ</td>
                  <td className="p-3 text-slate-600 bg-rose-50/30">ખૂબ ધીમું અને અસ્થાયી</td>
                  <td className="p-3 font-bold text-emerald-900 bg-emerald-50/50">૧૫-૨૦ દિવસમાં સ્પષ્ટ ફરક</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800">શરીરમાં નબળાઈ / થાક</td>
                  <td className="p-3 text-rose-600 bg-rose-50/30 font-semibold">હા, ચક્કર અને સુસ્તી આવે છે</td>
                  <td className="p-3 font-bold text-emerald-900 bg-emerald-50/50">ના, ઊર્જા અને સ્ફૂર્તિ વધે છે</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800">આડઅસર (Side Effects)</td>
                  <td className="p-3 text-rose-600 bg-rose-50/30 font-semibold">લીવર-કિડની પર જોખમ શક્ય</td>
                  <td className="p-3 font-bold text-emerald-900 bg-emerald-50/50">૦% આડઅસર (૧૦૦% હર્બલ AYUSH)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-800">કોર્સ પછી વજન વધવું</td>
                  <td className="p-3 text-rose-600 bg-rose-50/30">છોડતાં જ તરત બમણું વધે</td>
                  <td className="p-3 font-bold text-emerald-900 bg-emerald-50/50">મેટાબોલિઝમ સુધરતાં કાયમી નિયંત્રણ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Real Patient Stories from Gujarat */}
        <section id="transformations" className="bg-slate-50 p-5 sm:p-7 rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
            <div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-0.5 rounded border border-emerald-300">
                પ્રત્યક્ષ દર્શી પુરાવા
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
                {language === 'gu' ? 'ગુજરાતના દર્દીઓના વાસ્તવિક પરિણામો' : 'Real Transformations from Gujarat'}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">૧૦૦% સત્તાવાર ગ્રાહકો</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRANSFORMATIONS.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-sm">{item.name}</h3>
                    <p className="text-[11px] text-slate-300">{item.city}</p>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-400/30">
                    વેરિફાઇડ
                  </span>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  {/* Weight Stats comparison */}
                  <div className="grid grid-cols-2 gap-2 my-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-center">
                    <div className="border-r border-slate-200 pr-1">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">પહેલાં</span>
                      <span className="text-base font-black text-rose-600">{item.beforeWeight} KG</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">પછીથી</span>
                      <span className="text-base font-black text-emerald-600">{item.afterWeight} KG</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-2 rounded text-center mb-3">
                    <span className="text-xs font-black text-emerald-800">
                      કુલ વજન ઘટાડો: {item.beforeWeight - item.afterWeight} KG ({item.durationWeeks} અઠવાડિયામાં)
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic mb-3">
                    "{item.storyGu}"
                  </p>

                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                    <span>ઉંમર: {item.age} વર્ષ</span>
                    <span className="text-amber-500 font-bold">★★★★★ ૫/૫</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
