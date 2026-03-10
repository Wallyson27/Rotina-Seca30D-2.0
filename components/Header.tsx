
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0f1d]/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl italic shadow-lg">
            RS
          </div>
          <span className="font-black text-xl italic text-white tracking-tighter">
            ROTINA <span className="text-red-500 italic">SECA 30D</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#simulador" className="font-semibold text-white/80 hover:text-white transition-colors">Benefícios</a>
          <a href="#resultados" className="font-semibold text-white/80 hover:text-white transition-colors">Resultados</a>
          <a href="#oferta" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
            COMEÇAR AGORA
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
