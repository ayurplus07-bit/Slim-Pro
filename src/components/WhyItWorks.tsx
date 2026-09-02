import React from 'react';
import { 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  X, 
  Leaf, 
  RefreshCw, 
  Activity, 
  Heart,
  TrendingDown,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface WhyItWorksProps {
  language: Language;
  onOrderClick: () => void;
}

export const WhyItWorks: React.FC<WhyItWorksProps> = ({ language, onOrderClick }) => {
  const steps = [
    {
      step: '01',
      days: 'Day 1 - 5',
      titleHi: 'गहरी डिटॉक्सिफिकेशन (Deep Detox)',
      titleEn: 'Deep Colon & Toxin Detox',
      titleHinglish: 'Deep Colon & Toxin Detox',
      descHi: 'त्रिफला और हल्दी आंतों में वर्षों से जमी गंदगी और विषाक्त पदार्थों (Toxins) को बाहर निकालते हैं, जिससे पेट हल्का और गैस-कब्ज समाप्त होती है।',
      descEn: 'Flushes out accumulated gut toxins and unabsorbed wastes, instantly flattening bloated stomach.',
      descHinglish: 'Purani constipation aur gut toxins ko saaf karta hai. Bloating turant gayab ho jati hai.',
      icon: '🍃',
      color: 'border-emerald-500 bg-emerald-50 text-emerald-800'
    },
    {
      step: '02',
      days: 'Day 6 - 15',
      titleHi: 'मेटाबॉलिज्म एक्टिवेशन (3X Metabolism Boost)',
      titleEn: 'Metabolism Ignition (3X Rate)',
      titleHinglish: 'Metabolism Ignition (3X Rate)',
      descHi: 'दालचीनी और काली मिर्च का अर्क आपके सुस्त मेटाबॉलिज्म को 3 गुना तेज करते हैं। अब शरीर बैठे-बैठे भी लगातार कैलोरी बर्न करता है।',
      descEn: 'Cinnamon & Piperine ignite thermogenesis, forcing the body to burn fat for energy 24x7.',
      descHinglish: 'Dalchini aur Piperine resting metabolic rate badhate hain jisse continuous calorie burn hota hai.',
      icon: '🔥',
      color: 'border-amber-500 bg-amber-50 text-amber-900'
    },
    {
      step: '03',
      days: 'Day 16 - 30',
      titleHi: 'पेट व जांघों की जिद्दी चर्बी का खात्मा',
      titleEn: 'Targeted Visceral Fat Melt',
      titleHinglish: 'Belly & Thigh Fat Breakdown',
      descHi: 'गार्सिनिया कंबोजिया (HCA) और गुग्गुलु पेट, कमर और जांघों पर जमी सख्त विसरल फैट (Visceral Fat) को तोड़कर ऊर्जा में बदलते हैं।',
      descEn: 'HCA blocks new fat cell formation while Guggulu dissolves dense abdominal adipose tissue.',
      descHinglish: 'Garcinia aur Guggulu pait aur kamar ke stubborn fat cells ko break down karke melt karte hain.',
      icon: '⚡',
      color: 'border-rose-500 bg-rose-50 text-rose-900'
    },
    {
      step: '04',
      days: 'Day 31 - 45+',
      titleHi: 'स्थायी टोंड बॉडी व 3X इम्यूनिटी',
      titleEn: 'Toned Physique & Immunity Lock',
      titleHinglish: 'Toned Physique & Immunity Lock',
      descHi: 'गिलोय और अश्वगंधा मांसपेशियों को टोन करते हैं, कमजोरी रोकते हैं और इम्यून सिस्टम को मजबूत बना कर वजन को स्थायी रूप से लॉक करते हैं।',
      descEn: 'Giloy & Ashwagandha strengthen immunity, tone muscle contour, and lock target weight permanently.',
      descHinglish: 'Immunity strong hoti hai, skin glow badhta hai aur weight dubara kabhi nahi badhta.',
      icon: '🛡️',
      color: 'border-purple-500 bg-purple-50 text-purple-900'
    },
  ];

  return (
    <section id="benefits" className="py-14 sm:py-20 bg-[#faf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5 text-emerald-700" />
            <span>SCIENTIFIC AYURVEDIC FAT-LOSS MECHANISM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {language === 'hi' && 'Slim Pro Powder आपके शरीर में कैसे काम करता है?'}
            {language === 'en' && 'How Slim Pro Powder Melts Fat Step-by-Step'}
            {language === 'hinglish' && 'Slim Pro Powder Body Me Kaise Kaam Karta Hai?'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {language === 'hi' && 'यह कोई अस्थायी वॉटर-वेट लॉस नहीं है — यह 4-चरणों में मेटाबॉलिज्म को रीसेट करके स्थायी रूप से चर्बी पिघलाता है।'}
            {language === 'en' && 'Not a temporary water-loss trick. A 4-stage Ayurvedic cellular reset that transforms body composition.'}
            {language === 'hinglish' && 'Yeh temporary water weight nahi ghatata balki natural metabolism ko reset karke permanent fat burn karta hai.'}
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 bg-white border-2 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1.5 ${s.color.split(' ')[0]}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span className={`text-xs font-black px-2.5 py-1 rounded-full border ${s.color}`}>
                    {s.days}
                  </span>
                </div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">STAGE {s.step}</p>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-tight">
                  {language === 'hi' ? s.titleHi : language === 'en' ? s.titleEn : s.titleHinglish}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'hi' ? s.descHi : language === 'en' ? s.descEn : s.descHinglish}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
                <Check className="w-3.5 h-3.5" />
                <span>100% Ayurvedic Action</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section: Slim Pro vs Other Market Methods */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-[#4e153d] text-white p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black">
              {language === 'hi' && 'Slim Pro Powder बनाम बाजार की अन्य दवाइयाँ व डाइटिंग'}
              {language === 'en' && 'Slim Pro Powder vs Chemical Diet Pills vs Starvation'}
              {language === 'hinglish' && 'Slim Pro Powder vs Market Diet Pills vs Starvation Diet'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
              {language === 'hi' ? 'जानिए क्यों 90% डायट प्लान फेल होते हैं और Slim Pro क्यों सफल होता है' : 'Discover the true difference of pure Ayurvedic science'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100/90 text-slate-700 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4 sm:p-5 w-2/5">विशेषताएं (Features)</th>
                  <th className="p-4 sm:p-5 bg-emerald-50/80 text-emerald-900 border-x-2 border-emerald-400 font-extrabold text-sm text-center">
                    🌿 Slim Pro Powder
                  </th>
                  <th className="p-4 sm:p-5 text-center text-slate-500">केमिकल पिल्स / सप्लीमेंट्स</th>
                  <th className="p-4 sm:p-5 text-center text-slate-500">भूखा रहना (Starvation)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                {[
                  {
                    feat: 'सामग्री की शुद्धता (Ingredients)',
                    slim: '100% शुद्ध जड़ी-बूटी (AYUSH Certified)',
                    pills: 'हार्मोनल केमिकल्स व सिंथेटिक्स',
                    diet: 'पोषक तत्वों की भारी कमी',
                  },
                  {
                    feat: 'साइड इफेक्ट्स का खतरा',
                    slim: '0% साइड इफेक्ट्स (Zero Side Effects)',
                    pills: 'दिल की धड़कन, सिरदर्द, अनिद्रा',
                    diet: 'चक्कर आना, बाल झड़ना, कमजोरी',
                  },
                  {
                    feat: 'वजन दोबारा बढ़ने का डर (Rebound)',
                    slim: 'नहीं (मेटाबॉलिज्म रीसेट होने से स्थायी)',
                    pills: 'दवा छोड़ते ही दोगुना वजन बढ़ना',
                    diet: 'डाइट छोड़ते ही तुरंत वजन वापसी',
                  },
                  {
                    feat: 'एनर्जी और इम्यूनिटी स्तर',
                    slim: '3X ऊर्जा व मजबूत रोग प्रतिरोधक क्षमता',
                    pills: 'शरीर में सुस्ती व थकान',
                    diet: 'गंभीर कमजोरी और चिड़चिड़ापन',
                  },
                  {
                    feat: 'पाचन और कब्ज में सुधार',
                    slim: 'त्रिफला व हल्दी से आंतों का पूर्ण शोधन',
                    pills: 'पेट में मरोड़ व गैस की समस्या',
                    diet: 'एसिडिटी और कब्ज की बीमारी',
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/60 transition">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feat}</td>
                    <td className="p-4 sm:p-5 bg-emerald-50/50 text-emerald-950 font-black border-x-2 border-emerald-400 text-center flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.slim}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-600">
                      <span className="inline-flex items-center gap-1 text-rose-700 font-semibold">
                        <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        {row.pills}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-center text-slate-600">
                      <span className="inline-flex items-center gap-1 text-amber-800 font-semibold">
                        <X className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        {row.diet}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-6 bg-emerald-50/40 text-center border-t border-slate-200">
            <button
              type="button"
              onClick={onOrderClick}
              className="bg-gradient-to-r from-emerald-700 to-[#631e50] hover:from-emerald-800 hover:to-[#4e153d] text-white font-black text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-emerald-800/20 inline-flex items-center gap-2 active:scale-95 transition"
            >
              <span>{language === 'hi' ? '100% सुरक्षित Slim Pro Powder आर्डर करें (COD) ➔' : 'Order 100% Safe Slim Pro Powder Now (COD) ➔'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
