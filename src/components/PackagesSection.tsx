import React from 'react';
import { Check, Sparkles, ShoppingBag, ShieldCheck, Flame, Gift } from 'lucide-react';
import { Language } from '../types';
import { PRODUCT_PACKAGES } from '../data/productData';
import bottleSingleImg from '../assets/images/slim_pro_bottle_1788336637000.jpg';
import bottleBundleImg from '../assets/images/slim_pro_bundle_1788336656900.jpg';

interface PackagesSectionProps {
  language: Language;
  selectedPackageId: string;
  onSelectPackage: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  language,
  selectedPackageId,
  onSelectPackage,
}) => {
  return (
    <section id="packages" className="py-10 sm:py-14 bg-gradient-to-b from-white via-amber-50/20 to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2 border border-rose-300">
            <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>{language === 'gu' ? 'મર્યાદિત સમયની ૫૦% છૂટ ઓફર' : 'LIMITED TIME 50% OFF OFFER'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            {language === 'gu' 
              ? 'તમારા શરીર મુજબ યોગ્ય પેકેજ પસંદ કરો' 
              : 'Choose the Right Package for Your Body'}
          </h2>

          <p className="text-sm text-slate-600 font-medium mt-2">
            {language === 'gu'
              ? '૧૦૦% ફ્રી કેશ ઓન ડિલિવરી (COD) • ડિલિવરી મળે ત્યારે જ પૈસા આપો'
              : '100% Free Cash on Delivery across India • Pay only when parcel reaches your doorstep'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRODUCT_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            
            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg.id)}
                className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-white border-2 border-[#631e50] shadow-xl md:-translate-y-2 ring-2 ring-[#631e50]/20'
                    : pkg.isBestValue
                    ? 'bg-white border-2 border-emerald-600 shadow-lg'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Top Floating Badge */}
                {pkg.badgeGu && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-[90%] text-center">
                    <span className={`text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-sm block truncate ${
                      pkg.isPopular
                        ? 'bg-[#631e50] text-amber-300'
                        : pkg.isBestValue
                        ? 'bg-emerald-700 text-white'
                        : 'bg-slate-800 text-white'
                    }`}>
                      {language === 'gu' ? pkg.badgeGu : language === 'hi' ? pkg.badgeHi : pkg.badgeEn}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title */}
                  <div className="pt-2 text-center mb-3">
                    <h3 className="text-lg font-black text-slate-900 leading-snug">
                      {language === 'gu' ? pkg.nameGu : language === 'hi' ? pkg.nameHi : pkg.nameEn}
                    </h3>
                    <div className="inline-block bg-amber-100 text-amber-900 text-xs font-extrabold px-2.5 py-0.5 rounded-md mt-1">
                      {pkg.expectedLoss}
                    </div>
                  </div>

                  {/* Bottle Visual representation */}
                  <div className="my-3 p-2 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden h-36">
                    {pkg.bottles === 3 ? (
                      <img
                        src={bottleBundleImg}
                        alt="3 Bottles Family Pack - Slim Pro Powder"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain rounded-xl hover:scale-105 transition duration-300"
                      />
                    ) : pkg.bottles === 2 ? (
                      <div className="flex items-center justify-center gap-1">
                        <img
                          src={bottleSingleImg}
                          alt="Slim Pro Powder Bottle 1"
                          referrerPolicy="no-referrer"
                          className="h-32 w-auto object-contain -mr-4 z-0 hover:scale-105 transition"
                        />
                        <img
                          src={bottleSingleImg}
                          alt="Slim Pro Powder Bottle 2"
                          referrerPolicy="no-referrer"
                          className="h-32 w-auto object-contain z-10 drop-shadow-md hover:scale-105 transition"
                        />
                      </div>
                    ) : (
                      <img
                        src={bottleSingleImg}
                        alt="Slim Pro Powder 1 Month Pack"
                        referrerPolicy="no-referrer"
                        className="h-32 w-auto object-contain hover:scale-105 transition"
                      />
                    )}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="text-center my-4 pb-4 border-b border-slate-200">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-950">
                        ₹{pkg.discountPrice}
                      </span>
                      <span className="text-sm font-bold text-slate-400 line-through">
                        ₹{pkg.originalPrice}
                      </span>
                    </div>
                    <p className="text-xs font-black text-emerald-700 mt-1">
                      તમારી કુલ બચત: ₹{pkg.savings} (FLAT ૫૦% થી ૬૪% OFF)
                    </p>
                  </div>

                  {/* Free Gifts & Inclusions */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1">
                      <Gift className="w-3.5 h-3.5 text-[#631e50]" />
                      <span>આ પેક સાથે તદ્દન મફત:</span>
                    </p>

                    {(language === 'gu' ? pkg.freeGiftsGu : language === 'hi' ? pkg.freeGiftsHi : pkg.freeGiftsEn).map((gift, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{gift}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selection / Order Button */}
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition flex items-center justify-center gap-2 ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-[#631e50] to-emerald-800 text-white'
                      : pkg.isBestValue
                      ? 'bg-emerald-700 text-white hover:bg-emerald-600'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {isSelected ? '✓ પસંદ કરેલ છે (ઓર્ડર ફોર્મ)' : 'આ પેકેજ બુક કરો (COD)'}
                  </span>
                </button>

              </div>
            );
          })}
        </div>

        {/* Payment Assurance Banner */}
        <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-emerald-950">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            ૧૦૦% કેશ ઓન ડિલિવરી (COD)
          </span>
          <span>•</span>
          <span>કોઈ ઓનલાઇન પેમેન્ટનું જોખમ નહીં</span>
          <span>•</span>
          <span>પાર્સલ હાથમાં આવે ત્યારે જ રોકડા પૈસા આપો</span>
          <span>•</span>
          <span>ઓલ ઇન્ડિયા ફ્રી હોમ ડિલિવરી</span>
        </div>

      </div>
    </section>
  );
};
