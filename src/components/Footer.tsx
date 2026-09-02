import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Heart, Leaf, MessageCircle, Download, ExternalLink, Folder } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-10 sm:py-14 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#631e50] text-white flex items-center justify-center text-lg font-bold">
                🌿
              </div>
              <span className="text-xl font-black text-white tracking-wider font-['Anek_Gujarati']">
                SLIM PRO POWDER
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              ૧૦૦% શુદ્ધ પ્રાકૃતિક જડીબુટ્ટીઓ (તજ, હળદર, કાળા મરી, ત્રિફળા, ગાર્સિનિયા, ગૂગળ) દ્વારા તૈયાર કરાયેલ ભારતનું વિશ્વસનીય આયુર્વેદિક વજન નિયંત્રણ ફોર્મ્યુલા.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>AYUSH APPROVED & GMP CERTIFIED MANUFACTURING</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              ઉપયોગી લિંક્સ
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#article" className="hover:text-amber-400 transition">વિશેષ અહેવાલ</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition">BMI કેલ્ક્યુલેટર</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition">પેકેજીસ & કિંમત</a></li>
              <li><a href="#order-form" className="hover:text-amber-400 transition">ઓર્ડર ફોર્મ (COD)</a></li>
            </ul>
          </div>

          {/* Customer Helpline */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              હેલ્પલાઇન & સપોર્ટ
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+918155021359" className="hover:text-amber-400 font-bold transition">
                  +91 81550 21359 (કોલ કરો)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400/20" />
                <a 
                  href="https://wa.me/918155021359?text=Hello%20Slim%20Pro%20Team%2C%20I%20want%20to%20know%20more" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-bold transition"
                >
                  +91 81550 21359 (WhatsApp ચેટ)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>support@slimpropowder.online</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>જામનગર, ગુજરાત - ભારત 🇮🇳</span>
              </p>
            </div>
          </div>

        </div>

        {/* Ready-to-Use Website Package Download Box */}
        <div className="my-8 p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-400/20">
                  📁 READY-TO-USE FOLDER FORMAT
                </span>
                <span className="text-slate-400 text-xs font-semibold">100% Static HTML/CSS/JS</span>
              </div>
              <p className="text-white text-sm font-bold">
                Download Website Files (css, images, js, index.html, thankyou.html)
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 pt-1">
                <span className="inline-flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-cyan-400">
                  <Folder className="w-3 h-3" /> css/
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-cyan-400">
                  <Folder className="w-3 h-3" /> images/
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-cyan-400">
                  <Folder className="w-3 h-3" /> js/
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-amber-300">
                  index.html
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-emerald-400">
                  thankyou.html
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
              <a
                href="/thankyou.html"
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 px-3.5 py-2.5 rounded-xl font-bold text-xs transition border border-slate-700"
                title="Preview Thank You Page"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Preview thankyou.html</span>
              </a>

              <a
                href="/slim_pro_website.zip"
                download="slim_pro_website.zip"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs transition shadow-md active:scale-95"
                title="Download Ready ZIP for Direct Upload"
              >
                <Download className="w-4 h-4" />
                <span>Download ZIP (1-Click)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Medical & Advertorial Disclaimer */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>આયુર્વેદિક ડિસ્ક્લેમર:</strong> આ પેજ એક વિશ્લેષણાત્મક એડવર્ટોરિયલ (Advertorial) છે જે આયુર્વેદિક સંશોધન અને ગ્રાહકોના અનુભવો પર આધારિત છે. સ્લિમ પ્રો પાવડર ૧૦૦% આયુર્વેદિક આહાર પૂરક છે. વ્યક્તિગત પરિણામો દરેક વ્યક્તિના શરીર, ઉંમર અને જીવનશૈલી મુજબ અલગ હોઈ શકે છે. ગર્ભવતી મહિલાઓએ ઉપયોગ કરતા પહેલા તબીબી સલાહ લેવી.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 text-slate-600">
            <p>© {new Date().getFullYear()} Slim Pro Powder India. All Rights Reserved.</p>
            
            <p className="flex items-center gap-1">
              Made with pure Ayurvedic love in Gujarat, India
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
