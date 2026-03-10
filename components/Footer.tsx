
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f1d] text-slate-500 py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-8 grayscale brightness-200 opacity-50">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl italic">
              RS
            </div>
            <span className="font-black text-2xl italic text-white tracking-tighter">
              ROTINA <span className="text-red-600">SECA 30D</span>
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-[0.2em] mb-12">
            <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Aviso de Resultados</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </nav>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-[10px] leading-relaxed opacity-40 uppercase tracking-widest">
              © {new Date().getFullYear()} ALTO EQUILÍBRIO - TODOS OS DIREITOS RESERVADOS
            </p>
            
            <p className="text-[10px] leading-relaxed opacity-40">
              AVISO LEGAL: Os resultados mencionados acima são resultados individuais e podem variar de acordo com o metabolismo e dedicação de cada pessoa ao método. Este site não faz parte do site do Facebook ou da Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
            </p>
            
            <p className="text-[11px] font-bold text-slate-600 italic">
              Método validado pelo programa Alto Equilíbrio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
