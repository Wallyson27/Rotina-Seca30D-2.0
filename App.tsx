
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import InteractivePlanner from './components/InteractivePlanner';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <ProblemSection />
        <BenefitsSection />
        <InteractivePlanner />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      
      {/* Sticky Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-2xl z-50 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 line-through">De R$ 119,90</p>
          <p className="text-lg font-bold text-red-600">Por R$ 19,90</p>
        </div>
        <a 
          href="#oferta"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all text-sm transform active:scale-95"
        >
          QUERO SECAR AGORA
        </a>
      </div>
    </div>
  );
};

export default App;
