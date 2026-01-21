import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-brand-800 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 px-3 py-1 rounded-full border border-blue-700 backdrop-blur-sm">
            <ShieldCheck size={16} className="text-accent-500" />
            <span className="text-blue-100 text-xs md:text-sm font-medium">Contabilidade segura e digital</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Pensando em abrir ou <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-green-300">regularizar sua empresa</span>?
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Nós cuidamos de toda a parte contábil e burocrática para você, com agilidade, segurança e atendimento profissional. Foque no seu negócio, a burocracia é nossa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <WhatsAppButton className="w-full sm:w-auto" />
            <a 
              href="#servicos" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium border border-blue-400 hover:bg-blue-800/50 transition-colors"
            >
              Conhecer serviços <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-blue-200/60 text-sm font-medium">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-accent-500"></div> Abertura Grátis*
             </div>
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-accent-500"></div> Atendimento Humanizado
             </div>
          </div>
        </div>

        <div className="hidden md:block relative">
             <img 
               src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
               alt="Equipe profissional analisando documentos" 
               className="rounded-2xl shadow-2xl relative z-10 border-4 border-white/10"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 max-w-xs animate-bounce-slow">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Empresa 100% Regular</p>
                  <p className="text-xs text-slate-500">CNPJ Ativo e sem pendências</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;