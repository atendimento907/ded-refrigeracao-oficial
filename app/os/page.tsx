import React from 'react';

// Dados simulados de Ordens de Serviço
const ordensDeServico = [
  { id: 'OS-001', cliente: 'Mercado Silva', servico: 'Manutenção Preventiva', data: '2026-10-01', valor: 'R$ 450,00', status: 'CONCLUIDA' },
  { id: 'OS-002', cliente: 'Farmácia Vida', servico: 'Instalação de AC Split', data: '2026-10-02', valor: 'R$ 800,00', status: 'EM ANDAMENTO' },
  { id: 'OS-003', cliente: 'Padaria Panetti', servico: 'Carga de Gás R410A', data: '2026-10-03', valor: 'R$ 350,00', status: 'PENDENTE' },
  { id: 'OS-004', cliente: 'Clínica Saúde', servico: 'Higienização e PMOC', data: '2026-10-04', valor: 'R$ 1.200,00', status: 'CONCLUIDA' },
];

export default function OSPage() {
  return (
    <div className="p-8 text-slate-100 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Ordens de Serviço (OS)</h1>
          <p className="text-slate-400 text-sm">Gerencie todos os atendimentos e manutenções ativas.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
          + Nova Ordem de Serviço
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-950/50">
              <th className="p-4">Nº OS</th>
              <th className="p-4">Cliente</th>
              <th className="p-4">Serviço</th>
              <th className="p-4">Data</th>
              <th className="p-4">Valor</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm">
            {ordensDeServico.map((os) => (
              <tr key={os.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="p-4 font-mono font-semibold text-blue-400">{os.id}</td>
                <td className="p-4 font-medium text-white">{os.cliente}</td>
                <td className="p-4 text-slate-300">{os.servico}</td>
                <td className="p-4 text-slate-400">{os.data}</td>
                <td className="p-4 font-semibold text-emerald-400">{os.valor}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    os.status === 'CONCLUIDA'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : os.status === 'EM ANDAMENTO'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}>
                    {os.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}