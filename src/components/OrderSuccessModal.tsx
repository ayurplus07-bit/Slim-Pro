import React from 'react';
import { CheckCircle2, Package, Truck, Phone, X, ShieldCheck, MessageCircle, Calendar } from 'lucide-react';
import { OrderDetails } from '../types';
import bottleImg from '../assets/images/slim_pro_bottle_1788336637000.jpg';

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const whatsappMessage = encodeURIComponent(
    `નમસ્તે, મેં Slim Pro Powder ઓર્ડર કર્યો છે.\nઓર્ડર ID: ${order.orderId}\nગ્રાહક: ${order.customerName}\nપેકેજ: ${order.packageName}\nરકમ (COD): ₹${order.totalAmount}\nસરનામું: ${order.address}, ${order.city}`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in duration-200 my-8">
        
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 p-1.5 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center mb-6">
          <div className="relative inline-block mx-auto mb-2">
            <img
              src={bottleImg}
              alt="Slim Pro Powder"
              referrerPolicy="no-referrer"
              className="w-20 h-20 object-contain mx-auto rounded-2xl p-1 bg-amber-50/60 border border-amber-200 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-md">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider block w-fit mx-auto mt-2">
            ઓર્ડર સફળતાપૂર્વક નોંધાયો!
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-2 font-['Noto_Sans_Gujarati','Anek_Gujarati']">
            અભિનંદન, {order.customerName}!
          </h2>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            તમારો Slim Pro Powder નો ઓર્ડર સ્વીકારી લેવામાં આવ્યો છે.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-2.5 text-xs text-slate-700 mb-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-bold">ઓર્ડર ID:</span>
            <span className="font-mono font-black text-[#631e50]">{order.orderId}</span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-bold">પસંદ કરેલ પેકેજ:</span>
            <span className="font-bold text-slate-900">{order.packageName}</span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-bold">ચૂકવવાપાત્ર રકમ (COD):</span>
            <span className="text-base font-black text-emerald-800">₹{order.totalAmount} (રોકડા)</span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-bold">અપેક્ષિત ડિલિવરી તારીખ:</span>
            <span className="font-bold text-slate-900 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              {order.expectedDelivery}
            </span>
          </div>

          <div className="pt-1">
            <span className="text-slate-500 font-bold block mb-0.5">ડિલિવરી સરનામું:</span>
            <p className="font-semibold text-slate-800">
              {order.address}, {order.city}, {order.state} - {order.pincode}
            </p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              મોબાઈલ: +91 {order.phone}
            </p>
          </div>
        </div>

        {/* WhatsApp & Call Action Buttons */}
        <div className="space-y-2.5">
          <a
            href={`https://wa.me/918155021359?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp પર ઓર્ડર કન્ફર્મ કરો (8155021359)</span>
          </a>

          <a
            href="tel:+918155021359"
            className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
          >
            <Phone className="w-4 h-4" />
            <span>કોલ હેલ્પલાઇન: 8155021359</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition"
          >
            સમજાઈ ગયું (વિન્ડો બંધ કરો)
          </button>
        </div>

        {/* Reassurance Footer */}
        <div className="mt-4 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>અમારી ટીમ ટૂંક સમયમાં તમને કન્ફર્મેશન કોલ કરશે.</span>
        </div>

      </div>
    </div>
  );
};
