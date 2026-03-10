
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const InteractivePlanner: React.FC = () => {
  const [goal, setGoal] = useState('perder-peso');
  const [level, setLevel] = useState('iniciante');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generatePreview = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Gere uma prévia de 1 dia de rotina para o infoproduto "Rotina Seca 30D". 
        Objetivo: ${goal}, Nível: ${level}. 
        Retorne um objeto JSON com as chaves: dayLabel, breakfast, lunch, dinner, exercise, healthTip. 
        Mantenha o tom motivador e fitness em Português.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              dayLabel: { type: Type.STRING },
              breakfast: { type: Type.STRING },
              lunch: { type: Type.STRING },
              dinner: { type: Type.STRING },
              exercise: { type: Type.STRING },
              healthTip: { type: Type.STRING },
            },
            required: ["dayLabel", "breakfast", "lunch", "dinner", "exercise", "healthTip"]
          }
        }
      });
      
      const data = JSON.parse(response.text);
      setResult(data);
    } catch (error) {
      console.error("Error generating routine:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="simulador" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-4 italic uppercase leading-tight">Simulador de Rotina Inteligente</h2>
           <p className="text-slate-500 max-w-2xl mx-auto">Personalize seu perfil e descubra como o Rotina Seca 30D vai se adaptar ao seu dia a dia.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-blue-900 p-8 text-white">
            <h3 className="text-2xl font-black mb-6 italic">CONFIGURAÇÃO</h3>
            <p className="text-blue-100 mb-8 text-sm">
              Descubra agora como seria um dia típico no seu novo estilo de vida.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Meu Objetivo</label>
                <select 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-blue-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="perder-peso">Perder Peso Rápido</option>
                  <option value="definir">Definição Muscular</option>
                  <option value="saude">Saúde & Bem-Estar</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Nível Atual</label>
                <select 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full bg-blue-800 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="iniciante">Iniciante (Sedentário)</option>
                  <option value="intermediario">Intermediário</option>
                  <option value="avancado">Avançado</option>
                </select>
              </div>

              <button 
                onClick={generatePreview}
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-black py-4 rounded-xl shadow-lg transition-all mt-4 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-blue-900/30 border-t-blue-900 rounded-full animate-spin"></div>
                ) : (
                  <>GERAR MINHA PRÉVIA</>
                )}
              </button>
            </div>
          </div>

          <div className="md:w-2/3 p-8 flex flex-col justify-center min-h-[400px]">
            {!result && !loading ? (
              <div className="text-center text-slate-400 flex flex-col items-center">
                <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4v2m0-6V4"></path></svg>
                <p className="font-medium italic">Selecione seu perfil e gere sua prévia personalizada acima!</p>
              </div>
            ) : loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-8 bg-slate-100 rounded w-1/3"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-2/3"></div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-lg text-xs uppercase italic">Exemplo {result.dayLabel}</span>
                  <div className="h-[2px] flex-grow bg-slate-100"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-green-500">
                      <h4 className="text-xs font-black text-slate-400 uppercase mb-1">Café da Manhã</h4>
                      <p className="text-sm font-semibold text-slate-700">{result.breakfast}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-yellow-500">
                      <h4 className="text-xs font-black text-slate-400 uppercase mb-1">Almoço</h4>
                      <p className="text-sm font-semibold text-slate-700">{result.lunch}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-xs font-black text-slate-400 uppercase mb-1">Jantar</h4>
                      <p className="text-sm font-semibold text-slate-700">{result.dinner}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-full flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-black text-blue-400 uppercase mb-3 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                          Treino do Dia
                        </h4>
                        <p className="text-base font-bold text-blue-900 leading-tight">{result.exercise}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-blue-200">
                        <p className="text-[10px] uppercase font-black text-blue-300 mb-1">Dica de Saúde</p>
                        <p className="text-xs italic text-blue-700">"{result.healthTip}"</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="mt-8 text-xs text-center text-slate-400 italic">
                  *Esta é apenas uma prévia gerada por IA. No guia completo você terá os 30 dias detalhados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePlanner;
