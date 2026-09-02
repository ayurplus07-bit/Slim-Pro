/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, OrderDetails } from './types';
import { AdvertorialHeader } from './components/AdvertorialHeader';
import { AdvertorialArticle } from './components/AdvertorialArticle';
import { BmiCalculator } from './components/BmiCalculator';
import { IngredientsSection } from './components/IngredientsSection';
import { PackagesSection } from './components/PackagesSection';
import { OrderBookingForm } from './components/OrderBookingForm';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyOrderBar } from './components/StickyOrderBar';
import { LiveOrderToast } from './components/LiveOrderToast';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { ThankYouPage } from './components/ThankYouPage';
import { FloatingContactButtons } from './components/FloatingContactButtons';

export default function App() {
  const [language, setLanguage] = useState<Language>('gu');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('bestseller-2');
  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'thankyou'>('home');

  // Handle URL routing / hash for thankyou page
  useEffect(() => {
    const handleLocation = () => {
      const isThankYou = 
        window.location.pathname.includes('thankyou') ||
        window.location.pathname.includes('thank-you') ||
        window.location.hash.includes('thankyou') ||
        window.location.search.includes('view=thankyou');

      if (isThankYou) {
        setCurrentView('thankyou');
      } else {
        setCurrentView('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  const scrollToOrderForm = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        const el = document.getElementById('order-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('order-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.history.pushState(null, '', '/');
      setTimeout(() => {
        const el = document.getElementById('calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageAndOrder = (packageId: string) => {
    setSelectedPackageId(packageId);
    scrollToOrderForm();
  };

  const handleOrderSuccess = (order: OrderDetails) => {
    setConfirmedOrder(order);
    setCurrentView('thankyou');
    window.history.pushState(null, '', '#thankyou');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.history.pushState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user is on the Thank You Page view
  if (currentView === 'thankyou') {
    return (
      <ThankYouPage 
        order={confirmedOrder}
        language={language}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-slate-900 flex flex-col font-['Noto_Sans_Gujarati','Anek_Gujarati','Plus_Jakarta_Sans',sans-serif] selection:bg-[#631e50] selection:text-white">
      
      {/* 1. Advertorial Newspaper Header */}
      <AdvertorialHeader 
        language={language}
        setLanguage={setLanguage}
        onOrderClick={scrollToOrderForm}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 2. Special Investigation Advertorial Story */}
        <AdvertorialArticle
          language={language}
          onOrderClick={scrollToOrderForm}
          onCalculateClick={scrollToCalculator}
        />

        {/* 3. Interactive Gujarati BMI & Fat Loss Target Calculator */}
        <BmiCalculator 
          language={language}
          onSelectPackage={handleSelectPackageAndOrder}
        />

        {/* 4. 8 Divine Ayurvedic Ingredients Detail Section */}
        <IngredientsSection 
          language={language}
        />

        {/* 5. Packages & 50% Discount Deals Section */}
        <PackagesSection
          language={language}
          selectedPackageId={selectedPackageId}
          onSelectPackage={handleSelectPackageAndOrder}
        />

        {/* 6. Instant Cash On Delivery (COD) Booking Form */}
        <OrderBookingForm
          language={language}
          selectedPackageId={selectedPackageId}
          onPackageChange={setSelectedPackageId}
          onOrderSuccess={handleOrderSuccess}
        />

        {/* 7. Verified Customer Reviews & Interactive Feedback Section */}
        <ReviewsSection 
          language={language}
        />

        {/* 8. Frequently Asked Questions (FAQs) in Gujarati */}
        <FaqSection 
          language={language}
        />

      </main>

      {/* 9. Ayurvedic & Legal Disclaimer Footer */}
      <Footer 
        language={language}
      />

      {/* 10. Sticky Mobile Order Action Bar */}
      <StickyOrderBar 
        language={language}
        onOrderClick={scrollToOrderForm}
      />

      {/* 11. Live Gujarati Order Notifications (Social Proof Toast) */}
      <LiveOrderToast />

      {/* 12. Order Confirmation Success Modal with WhatsApp link */}
      <OrderSuccessModal 
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
      />

      {/* 13. Persistent Floating WhatsApp & Call Helpline Buttons */}
      <FloatingContactButtons language={language} />

    </div>
  );
}
