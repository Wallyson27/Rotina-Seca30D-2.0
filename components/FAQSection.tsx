
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "Como recebo o acesso ao produto?",
      a: "O acesso é imediato! Assim que o seu pagamento for aprovado, você receberá um e-mail com o link para baixar o seu guia em PDF e os bônus exclusivos."
    },
    {
      q: "Preciso de equipamentos para treinar?",
      a: "Não! Os treinos foram desenhados para serem feitos em casa, usando apenas o peso do seu próprio corpo. Mas se tiver pesos leves, eles podem ser usados para intensificar os resultados."
    },
    {
      q: "Os alimentos são caros ou difíceis de achar?",
      a: "De forma alguma. Priorizamos alimentos naturais, acessíveis e que você encontra em qualquer supermercado ou feira do seu bairro."
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Se sentir que o método não é para você, basta nos enviar um e-mail e faremos o reembolso total."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-black text-center text-blue-900 mb-12 italic uppercase">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-white rounded-2xl p-6 shadow-sm cursor-pointer group">
              <summary className="font-bold text-lg text-blue-900 list-none flex justify-between items-center group-open:mb-4">
                {faq.q}
                <svg className="w-5 h-5 text-red-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </summary>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
