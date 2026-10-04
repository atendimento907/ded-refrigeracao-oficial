'use client';

import React, { useState } from 'react';

export default function IAPage() {
  const [prompt, setPrompt] = useState('');
  const [resposta, setResposta] = useState('');
  const [gerando, setGerando] = useState(false);

  const gerandoLaudo = () => {
    if (!prompt) return;
    setGerando(true);
    setResposta('');
    setTimeout(() => {
      setResposta(
        `LAUDO TÉCNICO GERADO VIA IA (D&D Refrigeração)\n\n` +
          `Diagnóstico: ${prompt}\n\n` +
          `Recomendação Técnica:\n` +
          `- Realizar limpeza química profunda na evaporadora.\n` +
          `- Verificar pressão de gás fluido R410A e corrigir vazamento na flange.\n` +
          `- Substituir capacitor de partida do compressor.\n\n` +
          `Status de Segurança Operacional: Adequado após reparos.\n` +
          `Responsável Técnico: D&D Refrigeração & Elétrica`
      );
      setGerando(false);
    }, 1500);
  };

  return (
    <div className="p-8 text-slate-100 max-w-7xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            IA Generativa & Assistente Técnico
          </h1>
          <p className="text-slate-400 text-sm">
            Geração automática de laudos técnicos, diagnósticos e orçamentos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário de Entrada */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-bold text-white mb-4">
            Descreva o Problema ou Serviço
          </h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Cliente relatou que o ar-condicionado de 36.000 BTUs do auditório não está gelando e apresenta ruído na condensadora..."
            className="w-full h-40 bg-slate-950 border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-blue-500 mb-4 resize-none"
          />
          <button
            onClick={gerandoLaudo}
            disabled={gerando}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors shadow flex justify-center items-center gap-2"
          >
            {gerando
              ? 'Gerando Laudo com IA...'
              : '✨ Gerar Laudo Técnico Automático'}
          </button>
        </div>

        {/* Resultado Gerado */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">
              Resultado / Laudo Prontinho
            </h2>
            {resposta ? (
              <pre className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-slate-300 text-sm whitespace-pre-wrap font-sans">
                {resposta}
              </pre>
            ) : (
              <div className="h-40 flex items-center justify-center text-slate-500 text-sm border border-dashed border-slate-800 rounded-lg">
                O laudo gerado pela IA aparecerá aqui.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
