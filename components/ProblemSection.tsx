
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 italic uppercase leading-tight">
              VOCÊ ESTÁ CANSADA DE <span className="text-red-600 underline decoration-blue-900">OLHAR NO ESPELHO</span> E NÃO GOSTAR DO QUE VÊ?
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              O pior não é o peso extra. É a falta de energia, a vergonha de colocar um biquíni e a frustração de tentar todas as dietas e falhar sempre no 5º dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-red-500 shadow-sm">
              <div className="text-red-500 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase">Efeito Sanfona Infinito</h3>
              <p className="text-slate-600">Perde 2kg na semana e ganha 3kg no final de semana porque o método era insustentável.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-red-500 shadow-sm">
              <div className="text-red-500 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase">Sem Tempo para Academia</h3>
              <p className="text-slate-600">Sua vida é corrida e você não tem 2 horas por dia para gastar em aparelhos chatos.</p>
            </div>
          </div>
          
          <div className="mt-16 bg-blue-900 p-10 md:p-16 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-3xl md:text-4xl font-black mb-6 italic italic uppercase">EXISTE UM CAMINHO MAIS INTELIGENTE</h3>
               <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                 O **Rotina Seca 30D** foi criado para pessoas comuns que precisam de um passo a passo real, testado e validado por especialistas em nutrição e fitness.
               </p>
               <a href="#pricing" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black text-xl py-5 px-10 rounded-2xl shadow-xl transition-all hover:scale-105">
                 ME MOSTRA O MÉTODO!
               </a>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
