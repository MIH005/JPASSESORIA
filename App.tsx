import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Niches from './components/Niches';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Niches />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
}

export default App;