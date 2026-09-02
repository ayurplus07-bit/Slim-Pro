import React from 'react';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  Phone, 
  ArrowLeft, 
  ShieldCheck, 
  MessageCircle, 
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  HeartHandshake
} from 'lucide-react';
import { OrderDetails, Language } from '../types';
import bottleSingleImg from '../assets/images/slim_pro_bottle_1788336637000.jpg';
import bottleBundleImg from '../assets/images/slim_pro_bundle_1788336656900.jpg';

interface ThankYouPageProps {
  order: OrderDetails | null;
  language: Language;
  onBackToHome: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ order, language, onBackToHome }) => {
  // If user visits /thankyou directly without order state, provide fallback order preview
  const currentOrder: OrderDetails = order || {
    orderId: `SLIM-GUJ-${Math.floor(100000 + Math.random() * 900000)}`,
    customerName: 'સન્માનિત ગ્રાહક',
    phone: 'XXXXXXXXXX',
    address: 'તમારું નોંધાયેલ સરનામું',
    city: 'ગુજરાત',
    state: 'ગુજરાત (Gujarat)',
    pincode: '380001',
    packageId: 'bestseller-2',
    packageName: '૨ બોટલ ટ્રાન્સફોર્મેશન કોર્સ (૨ મહિના - ૭ થી ૧૨ કિલો વજન ઘટાડો)',
    totalAmount: 1799,
    paymentMethod: 'COD',
    orderDate: new Date().toLocaleDateString('gu-IN'),
    expectedDelivery: '૩ થી ૪ કાર્યકારી દિવસોમાં',
  };

  const whatsappMessage = encodeURIComponent(
    `નમસ્તે Slim Pro ટીમ, મેં ઓર્ડર બુક કર્યો છે.\n\n` +
    `📋 ઓર્ડર ID: ${currentOrder.orderId}\n` +
    `👤 નામ: ${currentOrder.customerName}\n` +
    `📞 ફોન: ${currentOrder.phone}\n` +
    `📦 પેકેજ: ${currentOrder.packageName}\n` +
    `💰 રકમ: ₹${currentOrder.totalAmount} (કેશ ઓન ડિલિવરી)\n` +
    `📍 સરનામું: ${currentOrder.address}, ${currentOrder.city} - ${currentOrder.pincode}\n\n` +
    `કૃપા કરીને મારો ઓર્ડર કન્ફર્મ કરો અને ડિસ્પેચ વિગતો મોકલો.`
  );

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-slate-900 py-8 px-4 sm:px-6 lg:px-8 font-['Noto_Sans_Gujarati','Anek_Gujarati','Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in zoom-in duration-300">
        
        {/* Top Navigation Back */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#631e50] bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>હોમ પેજ પર પાછા જાઓ</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>૧૦૦% સત્તાવાર બુકિંગ</span>
          </div>
        </div>

        {/* Hero Success Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 text-center relative overflow-hidden">
          
          {/* Top Decorative Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#631e50] via-emerald-600 to-[#631e50]" />

          <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <span className="bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-wider inline-block">
            🎉 ઓર્ડર સફળતાપૂર્વક કન્ફર્મ થયો!
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
            અભિનંદન, {currentOrder.customerName}!
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mt-2 leading-relaxed font-semibold">
            તમારો <span className="font-extrabold text-[#631e50]">Slim Pro Powder</span> નો ઓર્ડર સફળતાપૂર્વક સિસ્ટમમાં નોંધાઈ ગયો છે. તમને ટૂંક સમયમાં કન્ફર્મેશન કોલ અથવા મેસેજ મળશે.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 text-xs font-mono font-bold text-slate-800">
            <span className="text-slate-500 font-sans">તમારો ઓર્ડર ID:</span>
            <span className="text-[#631e50] font-black text-sm">{currentOrder.orderId}</span>
          </div>
        </div>

        {/* Order Details & Summary Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Column: Product & Price */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Package className="w-5 h-5 text-[#631e50]" />
              <span>ઓર્ડર વિગતો (Order Summary)</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <img
                src={currentOrder.packageId === 'family-3' ? bottleBundleImg : bottleSingleImg}
                alt={currentOrder.packageName}
                referrerPolicy="no-referrer"
                className="w-20 h-20 object-contain rounded-xl bg-white p-1.5 border border-slate-200 shadow-xs shrink-0 mx-auto sm:mx-0"
              />
              <div className="space-y-1 text-xs">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                  ૧૦૦% શુદ્ધ આયુર્વેદિક
                </span>
                <h3 className="font-black text-slate-900 text-sm">{currentOrder.packageName}</h3>
                <p className="text-slate-500 font-medium">બ્રાન્ડ: Slim Pro Powder (Ayurvedic Weight Control)</p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-bold">પેમેન્ટ પદ્ધતિ:</span>
                <span className="font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                  કેશ ઓન ડિલિવરી (COD - રોકડા)
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-bold">ડિલિવરી ચાર્જ:</span>
                <span className="font-black text-emerald-700">૧૦૦% મફત (FREE)</span>
              </div>

              <div className="flex justify-between items-center py-2 bg-amber-50/70 px-3 rounded-xl border border-amber-200">
                <span className="font-black text-slate-900 text-sm">કુલ ચૂકવવાપાત્ર રકમ:</span>
                <span className="text-xl font-black text-[#631e50]">₹{currentOrder.totalAmount}</span>
              </div>
            </div>

            {/* Delivery Address Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>ડિલિવરી સરનામું:</span>
              </div>
              <p className="font-bold text-slate-800 pl-5">
                {currentOrder.customerName}
              </p>
              <p className="text-slate-600 pl-5 leading-relaxed">
                {currentOrder.address}, {currentOrder.city}, {currentOrder.state} - {currentOrder.pincode}
              </p>
              <p className="text-slate-600 pl-5 font-bold">
                સંપર્ક નંબર: +91 {currentOrder.phone}
              </p>
            </div>
          </div>

          {/* Right Column: Next Steps & Help */}
          <div className="space-y-4">
            
            {/* Delivery Timeline */}
            <div className="bg-emerald-950 text-white rounded-3xl p-5 shadow-md space-y-3">
              <h3 className="font-bold text-emerald-300 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>અપેક્ષિત ડિલિવરી</span>
              </h3>
              <p className="text-base font-black text-white">
                {currentOrder.expectedDelivery}
              </p>
              <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                તમારું પાર્સલ સુરક્ષિત રીતે પેક કરીને એક્સપ્રેસ કુરિયર દ્વારા મોકલવામાં આવશે.
              </p>
            </div>

            {/* WhatsApp & Call Direct Confirmation */}
            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-200 space-y-3">
              <h3 className="font-black text-slate-900 text-xs uppercase tracking-wider">
                ઓર્ડર ટ્રેકિંગ & કસ્ટમર સપોર્ટ
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                વોટ્સએપ અથવા ફોન કોલ દ્વારા ઓર્ડર ID જણાવીને તમારા પાર્સલનું લાઇવ સ્ટેટસ મેળવો.
              </p>
              
              <a
                href={`https://wa.me/918155021359?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp પર વાત કરો (8155021359)</span>
              </a>

              <a
                href="tel:+918155021359"
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition"
              >
                <Phone className="w-4 h-4" />
                <span>કસ્ટમર કેર કોલ કરો (8155021359)</span>
              </a>

              <button
                type="button"
                onClick={onBackToHome}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-xl font-bold text-xs transition"
              >
                હોમ પેજ પર જાઓ
              </button>
            </div>

          </div>

        </div>

        {/* 3 Step What Happens Next Infographic */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200">
          <h2 className="text-base sm:text-lg font-black text-slate-900 text-center mb-6">
            હવે પછી શું થશે? (આગળની પ્રક્રિયા)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            <div className="space-y-2 p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
              <div className="w-10 h-10 bg-amber-500 text-white rounded-xl font-black text-sm flex items-center justify-center mx-auto shadow-sm">
                ૧
              </div>
              <h3 className="font-black text-xs sm:text-sm text-slate-900">કન્ફર્મેશન કોલ</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                અમારી આયુર્વેદિક ટીમ ૨૪ કલાકમાં તમારા મોબાઈલ પર કોલ કરીને સરનામું વેરીફાય કરશે.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl font-black text-sm flex items-center justify-center mx-auto shadow-sm">
                ૨
              </div>
              <h3 className="font-black text-xs sm:text-sm text-slate-900">એક્સપ્રેસ ડિસ્પેચ</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                સુરક્ષિત પેકેજિંગ સાથે બ્લુડાર્ટ / દિલ્હીવરી કુરિયર દ્વારા પાર્સલ રવાના થશે.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
              <div className="w-10 h-10 bg-[#631e50] text-white rounded-xl font-black text-sm flex items-center justify-center mx-auto shadow-sm">
                ૩
              </div>
              <h3 className="font-black text-xs sm:text-sm text-slate-900">ઘરે ડિલિવરી & COD</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                જ્યારે પાર્સલ તમારા ઘરે પહોંચે ત્યારે જ રોકડા (COD) ચૂકવવાના રહેશે.
              </p>
            </div>

          </div>
        </div>

        {/* Assurance Note */}
        <div className="text-center text-xs text-slate-500 py-4 flex items-center justify-center gap-1.5">
          <HeartHandshake className="w-4 h-4 text-[#631e50]" />
          <span>આયુર્વેદિક આરોગ્ય યાત્રામાં Slim Pro પસંદ કરવા બદલ આભાર!</span>
        </div>

      </div>
    </div>
  );
};
