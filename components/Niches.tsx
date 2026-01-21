import React from 'react';
import { Monitor, Briefcase, Key, Store } from 'lucide-react';

const niches = [
  { 
    name: "Prestadores de Serviços", 
    icon: <Briefcase size={28} />,
    desc: "PJ, Consultores e Autônomos"
  },
  { 
    name: "Técnicos de Informática", 
    icon: <Monitor size={28} />,
    desc: "Devs, TI e Suporte"
  },
  { 
    name: "Corretores de Imóveis", 
    icon: <Key size={28} />,
    desc: "Imobiliárias e Corretores"
  },
  { 
    name: "MEI", 
    icon: <Store size={28} />,
    desc: "Microempreendedores"
  },
];

const Niches: React.FC = () => {
  return (
    <section id="nichos" className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Especialistas no seu segmento
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Entendemos as particularidades fiscais e tributárias de diversas áreas, garantindo a melhor estratégia para pagar menos impostos dentro da lei.
            </p>
            <div className="hidden lg:block h-1 w-20 bg-accent-500 rounded"></div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {niches.map((niche, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 rounded-xl p-6 text-center transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 mx-auto bg-blue-800 rounded-full flex items-center justify-center text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                    {niche.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1">{niche.name}</h3>
                  <p className="text-xs text-blue-200">{niche.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Niches;