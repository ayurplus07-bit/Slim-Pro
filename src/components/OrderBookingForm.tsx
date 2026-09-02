import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  User, 
  AlertCircle,
  Package,
  Award,
  PhoneCall,
  MessageCircle
} from 'lucide-react';
import { Language, ProductPackage, OrderDetails } from '../types';
import { PRODUCT_PACKAGES } from '../data/productData';
import bottleSingleImg from '../assets/images/slim_pro_bottle_1788336637000.jpg';
import bottleBundleImg from '../assets/images/slim_pro_bundle_1788336656900.jpg';

interface OrderBookingFormProps {
  language: Language;
  selectedPackageId: string;
  onPackageChange: (packageId: string) => void;
  onOrderSuccess: (order: OrderDetails) => void;
}

export const OrderBookingForm: React.FC<OrderBookingFormProps> = ({
  language,
  selectedPackageId,
  onPackageChange,
  onOrderSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('ગુજરાત (Gujarat)');
  const [pincode, setPincode] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scarcity Timer
  const [timeLeft, setTimeLeft] = useState(892); // ~14 mins 52 secs
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const currentPackage = PRODUCT_PACKAGES.find((p) => p.id === selectedPackageId) || PRODUCT_PACKAGES[1];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim() || name.trim().length < 3) {
      newErrors.name = 'કૃપા કરીને તમારું પૂરું નામ લખો (ઓછામાં ઓછા ૩ અક્ષર).';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length !== 10) {
      newErrors.phone = 'કૃપા કરીને સાચો ૧૦ આંકડાનો મોબાઈલ નંબર દાખલ કરો.';
    }

    if (!address.trim() || address.trim().length < 10) {
      newErrors.address = 'કૃપા કરીને ડિલિવરી માટે પૂરું સરનામું (મકાન નં, સોસાયટી, વિસ્તાર) લખો.';
    }

    if (!city.trim()) {
      newErrors.city = 'કૃપા કરીને તમારા શહેર/ગામનું નામ લખો.';
    }

    const cleanPin = pincode.replace(/\D/g, '');
    if (!cleanPin || cleanPin.length !== 6) {
      newErrors.pincode = 'કૃપા કરીને સાચો ૬ આંકડાનો પિનકોડ લખો.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const orderId = `SLIM-GUJ-${Math.floor(100000 + Math.random() * 900000)}`;
    const today = new Date();
    const deliveryDate = new Date();
    deliveryDate.setDate(today.getDate() + 3);

    const orderData: OrderDetails = {
      orderId,
      customerName: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      city: city.trim(),
      state,
      pincode: pincode.trim(),
      packageId: currentPackage.id,
      packageName: currentPackage.nameGu,
      totalAmount: currentPackage.discountPrice,
      paymentMethod: 'COD',
      orderDate: today.toLocaleDateString('gu-IN'),
      expectedDelivery: deliveryDate.toLocaleDateString('gu-IN', {
        day: 'numeric',
        month: 'long',
        weekday: 'long',
      }),
    };

    // Perfex CRM Web to Lead Submission
    try {
      const crmUrl = 'https://crm.powerultra.shop/forms/wtl/60572c9fb98180a3ecd8a5e7feead093';
      const formData = new FormData();
      
      // CRM Lead form parameters
      formData.append('csrf_token_name', 'df498601d0f558807421ea0b2caa8169');
      formData.append('key', '60572c9fb98180a3ecd8a5e7feead093');
      formData.append('name', name.trim());
      formData.append('phonenumber', phone.trim());
      formData.append('phone', phone.trim());
      formData.append('address', address.trim());
      formData.append('city', city.trim());
      formData.append('state', state);
      formData.append('zip', pincode.trim());
      formData.append('country', '356'); // India
      formData.append(
        'description',
        `[SLIM PRO ORDER]\nOrder ID: ${orderId}\nPackage: ${currentPackage.nameGu} (${currentPackage.bottles} Bottle(s))\nAmount: ₹${currentPackage.discountPrice} (COD)\nDelivery: ${address.trim()}, ${city.trim()}, ${state} - ${pincode.trim()}\nPhone: ${phone.trim()}`
      );
      formData.append('title', `Order ${orderId} - ${currentPackage.nameGu}`);
      formData.append('company', 'Slim Pro Customer');

      // Attempt async submission to CRM
      await fetch(crmUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      }).catch((err) => {
        console.warn('CRM async post notification:', err);
      });

      // Also create a background iframe post if needed for standard CRM form reception
      try {
        const iframeName = `crm_iframe_${Date.now()}`;
        const iframe = document.createElement('iframe');
        iframe.name = iframeName;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        const hiddenForm = document.createElement('form');
        hiddenForm.target = iframeName;
        hiddenForm.action = crmUrl;
        hiddenForm.method = 'POST';
        hiddenForm.style.display = 'none';

        const fields: Record<string, string> = {
          csrf_token_name: 'df498601d0f558807421ea0b2caa8169',
          key: '60572c9fb98180a3ecd8a5e7feead093',
          name: name.trim(),
          phonenumber: phone.trim(),
          address: address.trim(),
          city: city.trim(),
          state: state,
          zip: pincode.trim(),
          description: `[SLIM PRO ORDER] Order ID: ${orderId} | Package: ${currentPackage.nameGu} | Amount: ₹${currentPackage.discountPrice} (COD) | Address: ${address.trim()}, ${city.trim()} - ${pincode.trim()}`,
        };

        Object.entries(fields).forEach(([k, v]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = k;
          input.value = v;
          hiddenForm.appendChild(input);
        });

        document.body.appendChild(hiddenForm);
        hiddenForm.submit();

        // Cleanup DOM after submission
        setTimeout(() => {
          hiddenForm.remove();
          iframe.remove();
        }, 2000);
      } catch (domErr) {
        console.warn('CRM iframe submission fallback:', domErr);
      }
    } catch (error) {
      console.error('Error submitting to CRM:', error);
    } finally {
      setIsSubmitting(false);
      onOrderSuccess(orderData);
    }
  };

  return (
    <section id="order-form" className="py-10 sm:py-14 bg-gradient-to-b from-slate-50 to-amber-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Scarcity / Countdown Header */}
        <div className="bg-[#631e50] text-white p-4 rounded-2xl mb-6 shadow-md text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
            <span className="font-black text-sm sm:text-base text-amber-200">
              ⚡ આજની ૫૦% છૂટ ઓફર સમાપ્ત થવામાં બાકી સમય:
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-base sm:text-lg font-black bg-black/40 px-4 py-1.5 rounded-xl border border-white/20">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden">
          
          <div className="bg-gradient-to-r from-slate-900 via-[#631e50] to-emerald-900 text-white p-5 sm:p-6 text-center">
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              ૧૦૦% કેશ ઓન ડિલિવરી (COD)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-['Noto_Sans_Gujarati','Anek_Gujarati']">
              સ્લિમ પ્રો પાવડર ઓર્ડર બુકિંગ ફોર્મ
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
              નીચે તમારી માહિતી ભરીને 'ઓર્ડર કન્ફર્મ કરો' બટન દબાવો. પાર્સલ મળે ત્યારે જ પૈસા આપો.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-6">
            
            {/* Step 1: Package Selection radio cards */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#631e50]" />
                <span>૧. તમારું મનપસંદ પેકેજ પસંદ કરો:</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRODUCT_PACKAGES.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => onPackageChange(pkg.id)}
                      className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#631e50] bg-[#631e50]/5 ring-1 ring-[#631e50]'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black text-slate-900">
                          {pkg.bottles} બોટલ પેક
                        </span>
                        <input
                          type="radio"
                          name="package"
                          checked={isSelected}
                          onChange={() => onPackageChange(pkg.id)}
                          className="accent-[#631e50] w-4 h-4"
                        />
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium mb-1">
                        {pkg.expectedLoss}
                      </p>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-black text-[#631e50]">
                          ₹{pkg.discountPrice}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ₹{pkg.originalPrice}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Customer Delivery Details */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#631e50]" />
                <span>૨. તમારી ડિલિવરી વિગતો (સરનામું):</span>
              </label>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ગ્રાહકનું પૂરું નામ (Full Name) *
                </label>
                <input
                  type="text"
                  placeholder="દા.ત. રમેશભાઈ પટેલ (Ramesh Patel)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50] ${
                    errors.name ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-600 font-bold mt-1">{errors.name}</p>}
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  મોબાઈલ નંબર (Mobile Number - ૧૦ આંકડા) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-bold text-slate-500">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98XXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className={`w-full bg-slate-50 border rounded-xl pl-14 pr-4 py-3 text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50] ${
                      errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-600 font-bold mt-1">{errors.phone}</p>}
                <p className="text-[11px] text-slate-500 mt-1 font-medium">
                  🔒 ઓર્ડર કન્ફર્મેશન અને ડિલિવરી ટ્રેકિંગ માટે આ નંબર પર SMS મળશે.
                </p>
              </div>

              {/* Delivery Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  પૂરું સરનામું (મકાન / ફ્લેટ નં., સોસાયટી, લેન્ડમાર્ક) *
                </label>
                <textarea
                  rows={2}
                  placeholder="દા.ત. ૧૦૨, શિવમ રેસિડેન્સી, રામ મંદિર પાસે, બોપલ..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50] ${
                    errors.address ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {errors.address && <p className="text-xs text-rose-600 font-bold mt-1">{errors.address}</p>}
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    શહેર / જિલ્લો (City) *
                  </label>
                  <input
                    type="text"
                    placeholder="દા.ત. અમદાવાદ, સુરત..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50] ${
                      errors.city ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.city && <p className="text-xs text-rose-600 font-bold mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    રાજ્ય (State) *
                  </label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                  >
                    <option value="ગુજરાત (Gujarat)">ગુજરાત (Gujarat)</option>
                    <option value="મહારાષ્ટ્ર (Maharashtra)">મહારાષ્ટ્ર (Maharashtra)</option>
                    <option value="રાજસ્થાન (Rajasthan)">રાજસ્થાન (Rajasthan)</option>
                    <option value="મધ્ય પ્રદેશ (Madhya Pradesh)">મધ્ય પ્રદેશ (MP)</option>
                    <option value="અન્ય રાજ્ય (All India)">અન્ય રાજ્ય (All India)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    પિનકોડ (Pincode) *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="380001"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#631e50] ${
                      errors.pincode ? 'border-rose-500' : 'border-slate-200'
                    }`}
                  />
                  {errors.pincode && <p className="text-xs text-rose-600 font-bold mt-1">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method - 100% Cash on Delivery Guarantee */}
            <div className="bg-emerald-50/80 border-2 border-emerald-300 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center text-xl font-bold shadow-xs">
                  💵
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-emerald-900">પેમેન્ટ મોડ: ૧૦૦% કેશ ઓન ડિલિવરી (COD)</p>
                  <p className="text-[11px] text-emerald-800 font-semibold">
                    તમારે અત્યારે ૧ રૂપિયો પણ ચૂકવવાનો નથી. પાર્સલ ઘરે મળે ત્યારે જ રોકડા પૈસા આપવાના છે.
                  </p>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-xs font-black text-emerald-900 bg-white px-2.5 py-1 rounded-md border border-emerald-200">
                  ફ્રી શિપિંગ (₹0)
                </span>
              </div>
            </div>

            {/* Total Order Summary */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={currentPackage.bottles === 3 ? bottleBundleImg : bottleSingleImg}
                  alt={currentPackage.nameGu}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-slate-200 shadow-xs shrink-0"
                />
                <div>
                  <span className="text-[11px] text-slate-500 font-bold uppercase block">પસંદ કરેલ પેકેજ:</span>
                  <span className="text-xs sm:text-sm text-slate-900 font-extrabold block">{currentPackage.nameGu}</span>
                  <span className="text-[11px] text-emerald-700 font-bold">{currentPackage.expectedLoss}</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-2xl sm:text-3xl font-black text-[#631e50]">
                  ₹{currentPackage.discountPrice}
                </span>
                <span className="text-[11px] text-emerald-700 font-bold block">
                  (ફ્રી હોમ ડિલિવરી)
                </span>
              </div>
            </div>

            {/* Big Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-700 via-[#631e50] to-emerald-800 hover:opacity-95 text-white py-4 px-6 rounded-2xl font-black text-base sm:text-lg uppercase tracking-wider shadow-xl hover:shadow-2xl active:scale-98 transition flex items-center justify-center gap-3 cursor-pointer"
            >
              {isSubmitting ? (
                <span>ઓર્ડર પ્રોસેસ થઈ રહ્યો છે...</span>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>ઓર્ડર કન્ફર્મ કરો (કેશ ઓન ડિલિવરી)</span>
                </>
              )}
            </button>

            {/* Quick Contact & Helpline Card */}
            <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xs">
              <div className="text-xs text-slate-700">
                <span className="font-extrabold text-[#631e50] block">
                  ઓર્ડર કરવામાં કોઈ પ્રશ્ન કે મુશ્કેલી છે?
                </span>
                <span className="text-[11px] text-slate-600">
                  અમારી હેલ્પલાઇન પર સીધો કોલ અથવા WhatsApp કરો: <strong className="text-slate-900">8155021359</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:+918155021359"
                  className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-3.5 py-2 rounded-xl text-xs shadow-xs transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>કોલ: 8155021359</span>
                </a>

                <a
                  href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20need%20help%20with%20ordering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-3.5 py-2 rounded-xl text-xs shadow-xs transition"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Trust Badges under Form */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs font-bold text-slate-500 pt-2">
              <div className="flex items-center justify-center gap-1">
                <Truck className="w-3.5 h-3.5 text-emerald-700" />
                <span>૩-૫ દિવસમાં ફાસ્ટ ડિલિવરી</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>૧૦૦% અસલ આયુર્વેદિક</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>ગુપ્ત અને સુરક્ષિત પેકિંગ</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
