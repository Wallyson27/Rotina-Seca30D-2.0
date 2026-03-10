
import React, { useEffect, useState } from 'react';

const PricingSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes timer

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="oferta" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Bonus Section within Pricing area for value stacking */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic">ISSO É TUDO O QUE VOCÊ VAI LEVAR:</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Valor total se comprado separadamente: <span className="text-red-600 line-through">R$ 297,00</span></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {[
                { title: "Guia Principal Rotina Seca 30D", val: "R$ 97,00", desc: "O passo a passo alimentar e de hábitos." },
                { title: "Manual de Treinos HIIT", val: "R$ 67,00", desc: "Treinos de 15 min para fazer em qualquer lugar." },
                { title: "BÔNUS 1: Grupo VIP no WhatsApp", val: "R$ 47,00", desc: "Suporte e motivação diária com a comunidade." },
                { title: "BÔNUS 2: Guia de Receitas Doces Fit", val: "R$ 37,00", desc: "Mate a vontade de doce sem sair da dieta." },
                { title: "BÔNUS 3: Lista de Compras Econômica", val: "R$ 49,00", desc: "Saiba o que comprar sem gastar fortunas no mercado." }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div>
                    <h4 className="font-bold text-blue-900">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                  <span className="text-slate-400 line-through font-bold text-sm">{item.val}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-2 rounded-full font-black text-sm rotate-12 glow-button">
                83% OFF
              </div>
              
              <div className="text-center mb-10">
                <p className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-4">OFERTA EXPIRA EM:</p>
                <div className="text-4xl font-black font-mono bg-blue-800/50 inline-block px-6 py-2 rounded-xl border border-blue-700">
                  {formatTime(timeLeft)}
                </div>
              </div>

              <div className="text-center space-y-2 mb-10">
                <span className="text-slate-400 line-through text-2xl">De R$ 119,90</span>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-bold text-blue-300">POR APENAS</span>
                  <div className="flex items-end justify-center">
                    <span className="text-2xl font-bold mb-4">R$</span>
                    <span className="text-7xl md:text-8xl font-black text-yellow-400 italic leading-none">19,90</span>
                  </div>
                  <p className="text-blue-200 text-sm mt-4 font-bold">PAGAMENTO ÚNICO - ACESSO VITALÍCIO</p>
                </div>
              </div>

              <a 
                href="#" 
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-black text-2xl md:text-3xl py-7 rounded-3xl shadow-2xl transition-all transform hover:-translate-y-2 glow-button uppercase"
              >
                QUERO MEU ACESSO AGORA!
              </a>

              <div className="mt-8 flex items-center justify-center gap-6 opacity-60">
                <div className="flex flex-col items-center gap-1 text-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" /></svg>
                  <span className="text-[10px] font-bold">PAGAMENTO SEGURO</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2v8h8c0-4.42-3.58-8-8-8zM11 2c-4.42 0-8 3.58-8 8h8V2zm-8 10c0 4.42 3.58 8 8 8v-8H3zm10 8c4.42 0 8-3.58 8-8h-8v8z" /></svg>
                  <span className="text-[10px] font-bold">ACESSO IMEDIATO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-shrink-0 relative">
              <div className="w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center text-blue-900 border-4 border-blue-900">
                <span className="text-4xl font-black">7</span>
                <span className="text-xs font-bold mt-4 ml-1">DIAS</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full border-2 border-white shadow-lg">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-blue-900 mb-3 uppercase">RISCO ZERO PARA VOCÊ</h3>
              <p className="text-slate-600 leading-relaxed">
                Eu tenho tanta confiança no meu método que te dou uma garantia incondicional de 7 dias. Se você não gostar do sabor de uma das receitas ou achar que os treinos não são para você, eu devolvo 100% do seu dinheiro. Sem letras miúdas, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
