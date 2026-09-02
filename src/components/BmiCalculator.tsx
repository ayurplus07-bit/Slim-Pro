import React, { useState } from 'react';
import { Scale, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Flame, User } from 'lucide-react';
import { Language } from '../types';

interface BmiCalculatorProps {
  language: Language;
  onSelectPackage: (packageId: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ language, onSelectPackage }) => {
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [age, setAge] = useState<number>(34);
  const [heightCm, setHeightCm] = useState<number>(162);
  const [weightKg, setWeightKg] = useState<number>(76);
  const [targetWeightKg, setTargetWeightKg] = useState<number>(62);
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  // Height in meters
  const heightM = heightCm / 100;
  const bmiValue = weightKg / (heightM * heightM);
  const bmi = Number(bmiValue.toFixed(1));
  const excessWeight = Math.max(0, weightKg - targetWeightKg);

  // Determine BMI status
  let bmiCategoryGu = 'સામાન્ય વજન';
  let bmiCategoryColor = 'text-emerald-600 bg-emerald-50 border-emerald-300';
  let recommendedPackId = 'starter-1';
  let daysEstimate = '૩૦ દિવસ';

  if (bmi < 18.5) {
    bmiCategoryGu = 'ઓછું વજન (Underweight)';
    bmiCategoryColor = 'text-amber-600 bg-amber-50 border-amber-300';
    recommendedPackId = 'starter-1';
    daysEstimate = '૩૦ દિવસ';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategoryGu = 'સામાન્ય વજન (Normal/Fit)';
    bmiCategoryColor = 'text-emerald-700 bg-emerald-50 border-emerald-300';
    recommendedPackId = 'starter-1';
    daysEstimate = '૩૦ દિવસ (ડિટોક્સ અને ઇમ્યુનિટી)';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategoryGu = 'વધુ વજન (Overweight / ચરબી જમા)';
    bmiCategoryColor = 'text-amber-700 bg-amber-50 border-amber-300';
    recommendedPackId = excessWeight > 8 ? 'bestseller-2' : 'starter-1';
    daysEstimate = `${Math.ceil(excessWeight * 4.5)} દિવસ`;
  } else {
    bmiCategoryGu = 'અત્યંત વધુ વજન (Obesity / ગંભીર મેદસ્વિતા)';
    bmiCategoryColor = 'text-rose-700 bg-rose-50 border-rose-300';
    recommendedPackId = excessWeight > 12 ? 'ultimate-3' : 'bestseller-2';
    daysEstimate = `${Math.ceil(excessWeight * 4)} દિવસ`;
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculated(true);
  };

  return (
    <section id="calculator" className="py-8 bg-gradient-to-b from-slate-50 via-amber-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#631e50]/10 text-[#631e50] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5" />
            <span>{language === 'gu' ? 'ઓનલાઇન બોડી ફેટ એનાલાઇઝર' : 'ONLINE BODY FAT ANALYZER'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            {language === 'gu' 
              ? 'તમારો BMI અને વજન ઘટાડવાનો લક્ષ્યાંક ચકાસો' 
              : 'Calculate Your BMI & Target Weight Loss'}
          </h2>
          <p className="text-sm text-slate-600 font-medium mt-1">
            {language === 'gu'
              ? 'તમારી ઊંચાઈ અને વજન નાખીને જાણો કે તમારા શરીર માટે કેટલા મહિનાનો કોર્સ ઉત્તમ રહેશે'
              : 'Enter your height and current weight to get personalized Ayurvedic course recommendation'}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Form Column (7 cols) */}
            <form onSubmit={handleCalculate} className="p-5 sm:p-7 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-200 space-y-4">
              
              {/* Gender selector */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1.5">
                  {language === 'gu' ? 'લિંગ પસંદ કરો (Gender)' : 'Gender'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition ${
                      gender === 'female'
                        ? 'bg-[#631e50] text-white border-[#631e50] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>👩 સ્ત્રી (Female)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition ${
                      gender === 'male'
                        ? 'bg-[#631e50] text-white border-[#631e50] shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>👨 પુરુષ (Male)</span>
                  </button>
                </div>
              </div>

              {/* Age & Height */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'gu' ? 'ઉંમર (Age)' : 'Age'}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={15}
                      max={90}
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">વર્ષ</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'gu' ? 'ઊંચાઈ (Height)' : 'Height'}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={120}
                      max={220}
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">CM</span>
                  </div>
                </div>
              </div>

              {/* Current Weight & Target Weight */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'gu' ? 'હાલનું વજન' : 'Current Weight'}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={35}
                      max={180}
                      value={weightKg}
                      onChange={(e) => setWeightKg(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">KG</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1">
                    {language === 'gu' ? 'લક્ષ્ય વજન' : 'Target Weight'}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={35}
                      max={180}
                      value={targetWeightKg}
                      onChange={(e) => setTargetWeightKg(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">KG</span>
                  </div>
                </div>
              </div>

              {/* Excess Weight Indicator */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs flex items-center justify-between">
                <span className="font-bold text-amber-950">
                  {language === 'gu' ? 'ઓગાળવાની જરૂરી ચરબી:' : 'Fat to burn:'}
                </span>
                <span className="font-black text-sm text-rose-600">
                  {excessWeight > 0 ? `${excessWeight} KG વધારાની ચરબી` : 'તમે પહેલેથી જ ફિટ છો!'}
                </span>
              </div>
            </form>

            {/* Results Column (5 cols) */}
            <div className="p-5 sm:p-7 lg:col-span-5 bg-slate-50/80 flex flex-col justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                  {language === 'gu' ? 'તમારો રિપોર્ટ અને વિશ્લેષણ' : 'YOUR BODY REPORT'}
                </div>

                {/* Big BMI Number */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {bmi}
                  </span>
                  <span className="text-sm font-bold text-slate-500">BMI સ્કોર</span>
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-black border mb-4 ${bmiCategoryColor}`}>
                  {bmiCategoryGu}
                </div>

                {/* Estimated Days */}
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-500 font-semibold">અપેક્ષિત સમયગાળો:</span>
                    <span className="font-bold text-slate-900">{daysEstimate}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                    <span className="text-slate-500 font-semibold">મેટાબોલિક સ્ટેટસ:</span>
                    <span className="font-bold text-[#631e50]">મંદાજ્ઞિ (Slow Metabolism)</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="text-slate-500 font-semibold">આયુર્વેદિક ભલામણ:</span>
                    <span className="font-black text-emerald-800">
                      {recommendedPackId === 'ultimate-3' 
                        ? '૩-બોટલ ફેમિલી પેક' 
                        : recommendedPackId === 'bestseller-2' 
                        ? '૨-બોટલ ટ્રાન્સફોર્મેશન કોર્સ' 
                        : '૧-બોટલ સ્ટાર્ટર પેક'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => onSelectPackage(recommendedPackId)}
                  className="w-full bg-gradient-to-r from-[#631e50] to-emerald-700 hover:opacity-95 text-white py-3 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{language === 'gu' ? 'ભલામણ કરેલ પેક પસંદ કરો' : 'SELECT RECOMMENDED PACK'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
