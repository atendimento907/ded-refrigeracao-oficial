'use client';

import React, { useState } from 'react';

export default function PontoEletronicoPage() {
  const [registros, setRegistros] = useState([
    {
      id: '1',
      tecnico: 'Carlos Eduardo',
      tipo: 'ENTRADA',
      hora: '08:00',
      local: 'Belém - PA (GPS OK)',
    },
    {
      id: '2',
      tecnico: 'Carlos Eduardo',
      tipo: 'SAÍDA',
      hora: '12:00',
      local: 'Belém - PA (GPS OK)',
    },
  ]);

  const registrarPonto = (tipo: string) => {
    const agora = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setRegistros([
      {
        id: Date.now().toString(),
        tecnico: 'Técnico Atual',
        tipo,
        hora: agora,
        local: 'Localização Capturada via GPS',
      },
      ...registros,
    ]);
  };

  return (
    <div className="p-8 text-slate-100 max-w-7xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Ponto Eletrônico com GPS
          </h1>
          <p className="text-slate-400 text-sm">
            Registro de jornada e presença dos técnicos em campo.
          </p>
        </div>
      </div>

      {/* Cartão de Marcação */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg mb-8 text-center max-w-md mx-auto">
        <h2 className="text-lg font-bold mb-2">Registrar Horário</h2>
        <p className="text-xs text-slate-400 mb-6">
          A geolocalização será vinculada ao registro atual.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => registrarPonto('ENTRADA')}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow"
          >
            Entrada / Início
          </button>
          <button
            onClick={() => registrarPonto('SAÍDA')}
            className="bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow"
          >
            Saída / Fim
          </button>
        </div>
      </div>

      {/* Histórico do Dia */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <div className="p-4 bg-slate-950/50 border-b border-slate-800 font-bold text-slate-300 text-sm">
          Registros do Dia
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-950/30">
              <th className="p-4">Técnico</th>
              <th className="p-4">Tipo</th>
              <th className="p-4">Horário</th>
              <th className="p-4">Geolocalização</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm">
            {registros.map((reg) => (
              <tr
                key={reg.id}
                className="hover:bg-slate-800/40 transition-colors"
              >
                <td className="p-4 font-medium text-white">{reg.tecnico}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      reg.tipo === 'ENTRADA'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                    }`}
                  >
                    {reg.tipo}
                  </span>
                </td>
                <td className="p-4 text-slate-300 font-mono">{reg.hora}</td>
                <td className="p-4 text-slate-400">{reg.local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
