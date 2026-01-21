import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  className?: string;
  text?: string;
  variant?: 'primary' | 'outline' | 'floating';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  className = '', 
  text = 'Falar com um contador agora',
  variant = 'primary'
}) => {
  const phoneNumber = "5511999078120";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da JP Assessoria Contábil.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500";
  
  const variants = {
    primary: "bg-accent-500 hover:bg-accent-600 text-white shadow-lg hover:shadow-xl px-6 py-3 text-base md:text-lg",
    outline: "border-2 border-accent-500 text-accent-600 hover:bg-accent-50 px-6 py-2 text-sm md:text-base",
    floating: "fixed bottom-6 right-6 z-50 bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-2xl hover:scale-110"
  };

  if (variant === 'floating') {
    return (
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${baseStyles} ${variants.floating} ${className}`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    );
  }

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {text}
    </a>
  );
};

export default WhatsAppButton;