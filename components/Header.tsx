import React, { useState, useEffect } from 'react';
import { BarChart3 } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-900 p-2 rounded-lg text-white group-hover:bg-brand-800 transition-colors">
            <BarChart3 size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-brand-900' : 'text-brand-900 md:text-white'}`}>
              JP Assessoria
            </span>
            <span className={`text-xs font-medium tracking-wider ${isScrolled ? 'text-slate-600' : 'text-slate-600 md:text-blue-100'}`}>
              Contábil & Administração
            </span>
          </div>
        </a>

        {/* Desktop Nav - Reduced to just CTA */}
        <div className="flex items-center gap-8">
          <WhatsAppButton variant="outline" text="Fale Conosco" className={!isScrolled ? 'bg-white/10 border-white text-white hover:bg-white hover:text-brand-900' : ''} />
        </div>
      </div>
    </header>
  );
};

export default Header;