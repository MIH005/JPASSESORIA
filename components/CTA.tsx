import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Comece seu negócio do jeito certo!
            </h2>
            <p className="text-lg text-slate-300">
              Não perca tempo com burocracia. Conte com a JP Assessoria para cuidar de cada detalhe da sua empresa enquanto você foca em crescer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <WhatsAppButton className="w-full sm:w-auto text-lg px-8 py-4" text="Entrar em contato agora" />
            </div>
            
            <p className="text-sm text-slate-400 pt-4">
              Atendimento rápido via WhatsApp • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;