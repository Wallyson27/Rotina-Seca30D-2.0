
import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Mariana S.",
      result: "-7.4kg",
      text: "Eu nunca imaginei que conseguiria emagrecer tanto em tão pouco tempo. O Rotina Seca mudou minha forma de ver a dieta!",
      image: "https://picsum.photos/seed/user1/200/200"
    },
    {
      name: "Rodrigo M.",
      result: "-9.1kg",
      text: "Os treinos de 15 minutos são matadores. Perdi a barriga de cerveja e agora me sinto com muito mais energia.",
      image: "https://picsum.photos/seed/user2/200/200"
    },
    {
      name: "Carla P.",
      result: "-5.2kg",
      text: "Sempre sofria com efeito sanfona. Com o Rotina Seca, finalmente entendi como manter o peso. Recomendo demais!",
      image: "https://picsum.photos/seed/user3/200/200"
    }
  ];

  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 italic uppercase">
            QUEM <span className="text-red-600">SUOU,</span> APROVOU!
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Veja os resultados reais de pessoas que decidiram mudar de vida com o nosso método exclusivo de 30 dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] relative shadow-sm border border-slate-100 hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
              </div>
              <div className="mt-8 text-center">
                <div className="inline-block bg-red-600 text-white font-black px-4 py-1 rounded-full text-xs mb-4">
                  RESULTADO: {t.result}
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-4">{t.name}</h4>
                <p className="text-slate-600 text-sm italic leading-relaxed">"{t.text}"</p>
                <div className="flex justify-center mt-6 gap-1">
                  {[1, 2, 3, 4, 5].map(s => (
                    <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
