import React from 'react';
import { FileText, Calculator, Users, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Abertura e Regularização",
    description: "Orientação completa e acompanhamento em todos os trâmites legais junto aos órgãos públicos e privados. Cuidamos do CNPJ, Contrato Social e Alvarás.",
    color: "bg-blue-500"
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Contabilidade Completa",
    description: "Gestão das rotinas contábeis essenciais para manter sua empresa regular. Balancetes, DRE, Livros Contábeis e relatórios gerenciais.",
    color: "bg-indigo-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Gestão de RH",
    description: "Folha de pagamento, eSocial, admissões, demissões e todas as obrigações trabalhistas para garantir a segurança jurídica da sua equipe.",
    color: "bg-emerald-500"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Fiscal e Tributário",
    description: "Cálculo de impostos, cumprimento das obrigações acessórias e planejamento tributário inteligente para você pagar apenas o justo.",
    color: "bg-orange-500"
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
            Soluções completas para sua empresa
          </h2>
          <p className="text-slate-600">
            Simplificamos a burocracia para que você possa focar no que realmente importa: o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-brand-500 flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className={`p-4 rounded-xl ${service.color} text-white shadow-lg shrink-0`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;