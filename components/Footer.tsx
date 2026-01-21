import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">JP Assessoria</h3>
            <p className="text-sm leading-relaxed">
              Soluções contábeis modernas para empresas que buscam crescimento e segurança jurídica.
            </p>
            <div className="pt-2">
              <p className="text-xs font-mono text-slate-500">CNPJ: 47.641.376/0001-49</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-accent-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-accent-500 transition-colors">Nossos Serviços</a></li>
              <li><a href="#nichos" className="hover:text-accent-500 transition-colors">Para Quem É</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent-500 shrink-0 mt-0.5" />
                <span>(11) 99907-8120</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-accent-500 shrink-0 mt-0.5" />
                <a href="https://wa.me/5511999078120" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Profissional
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent-500 shrink-0 mt-0.5" />
                <a href="mailto:jp.assessoriacont@gmail.com" className="hover:text-white transition-colors break-all">
                  jp.assessoriacont@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold mb-6">Localização</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-500 shrink-0 mt-0.5" />
                <span>
                  Avenida Rangel Pestana, 1.088<br />
                  4º andar – conj. 404<br />
                  Brás – São Paulo/SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} JP Assessoria Contábil & Administração LTDA. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <span className="text-red-500">♥</span> para empreendedores
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;