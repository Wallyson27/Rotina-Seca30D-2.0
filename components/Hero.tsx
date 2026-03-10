
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0a0f1d] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-bounce">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="text-white text-xs md:text-sm font-bold tracking-wider uppercase">Vagas Limitadas para a Turma de 2024</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
          RECUPERE SUA <span className="text-red-500 italic">AUTOESTIMA</span> <br />
          E DERRETA ATÉ 8KG EM 30 DIAS!
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Sem dietas malucas, sem passar horas na academia. O método <span className="text-white font-bold underline decoration-red-500">Rotina Seca 30D</span> é o caminho mais rápido para o corpo que você sempre quis.
        </p>

        {/* Image Placeholder replacing VSL area */}
        <div className="max-w-4xl mx-auto mb-12 group relative">
          <div className="vsl-shadow bg-slate-800 rounded-3xl border-4 border-white/10 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-auto max-h-[500px] object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              alt="Resultado e Vitalidade Rotina Seca"
            />
            <div className="absolute bottom-6 left-6 right-6">
               <div className="bg-red-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl inline-block font-black italic shadow-xl">
                 MÉTODO COMPROVADO EM 30 DIAS
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a 
            href="#pricing"
            className="glow-button inline-block bg-red-600 hover:bg-red-700 text-white font-black text-xl md:text-3xl py-6 px-12 rounded-2xl transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            QUERO MEU ACESSO AGORA!
          </a>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="aluno" />
              ))}
            </div>
            <p className="text-xs md:text-sm font-semibold tracking-wide uppercase">Destaque de hoje: +327 novos inscritos</p>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
