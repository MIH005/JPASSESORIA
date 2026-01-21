import React from 'react';
import { Clock, CheckCircle2, HeartHandshake, Scale } from 'lucide-react';

const features = [
  {
    icon: <HeartHandshake size={32} />,
    title: "Atendimento Personalizado",
    description: "Você não é apenas um número. Entendemos a realidade do seu negócio para oferecer as melhores soluções."
  },
  {
    icon: <Clock size={32} />,
    title: "Agilidade nos Processos",
    description: "Utilizamos tecnologia para acelerar aberturas e regularizações, poupando seu tempo precioso."
  },
  {
    icon: <Scale size={32} />,
    title: "Conformidade Legal",
    description: "Mantenha sua empresa 100% em dia com a legislação vigente, evitando multas e surpresas desagradáveis."
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "Suporte Completo",
    description: "Do nascimento da ideia à manutenção diária, estamos ao seu lado em cada etapa do crescimento."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-semibold tracking-wider uppercase text-sm">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mt-2 mb-4">
            Por que escolher a JP Assessoria?
          </h2>
          <p className="text-slate-600 text-lg">
            Mais do que contadores, somos parceiros estratégicos para o crescimento sustentável da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;