
import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Guia Alimentar Passo a Passo",
      desc: "Saiba exatamente o que comer no café, almoço e jantar sem mistérios.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: "Treinos HIIT de 15 Minutos",
      desc: "Exercícios que queimam gordura por até 24h após a execução.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      )
    },
    {
      title: "Lista de Compras Inteligente",
      desc: "Economize no mercado comprando apenas o que é essencial para secar.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "Sucos Detox Exclusivos",
      desc: "Receitas deliciosas para desinchar e eliminar toxinas do corpo.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.322a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 000 2.828l1.16 1.16a2 2 0 002.828 0l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.322-.644a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022l-1.16-1.16a2 2 0 00-2.828 0l-1.16 1.16a2 2 0 000 2.828l1.16 1.16z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/healthy_food/800/800" 
              alt="Alimentação Saudável" 
              className="rounded-[3rem] shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-8 italic">
              O QUE VOCÊ VAI RECEBER NO <span className="text-red-600">ROTINA SECA 30D</span>
            </h2>
            <div className="space-y-8">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{b.title}</h3>
                    <p className="text-slate-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
