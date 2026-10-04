export default function Home() {
  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Sidebar de Navegação */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-400 mb-8">
            D&D Refrigeração
          </h1>
          <nav className="space-y-2">
            <a
              href="/"
              className="block py-2.5 px-4 rounded bg-blue-600 text-white font-medium"
            >
              Dashboard
            </a>
            <a
              href="/os"
              className="block py-2.5 px-4 rounded hover:bg-slate-700 text-slate-300"
            >
              Ordens de Serviço (OS)
            </a>
            <a
              href="/pmoc"
              className="block py-2.5 px-4 rounded hover:bg-slate-700 text-slate-300"
            >
              PMOC & Manutenção
            </a>
            <a
              href="/ponto"
              className="block py-2.5 px-4 rounded hover:bg-slate-700 text-slate-300"
            >
              Ponto Eletrônico / RH
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded hover:bg-slate-700 text-slate-300"
            >
              Notas Fiscais (SEFAZ-PA)
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded hover:bg-slate-700 text-slate-300"
            >
              Construtor de Site
            </a>
            <a
              href="#"
              className="block py-2.5 px-4 rounded hover:bg-slate-700 text-slate-300"
            >
              IA Generativa
            </a>
          </nav>
        </div>
        <div className="text-xs text-slate-500 border-t border-slate-700 pt-4">
          Conexão Segura AES-256 | D&D v1.0
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Painel do Gestor</h2>
            <p className="text-sm text-slate-400">
              Visão geral do sistema e indicadores operacionais
            </p>
          </div>
          <a
            href="/os"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow inline-block"
          >
            + Nova Ordem de Serviço
          </a>
        </header>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <span className="text-xs text-slate-400 font-semibold uppercase">
              OS Abertas
            </span>
            <p className="text-3xl font-bold text-blue-400 mt-2">18</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <span className="text-xs text-slate-400 font-semibold uppercase">
              Contratos PMOC Ativos
            </span>
            <p className="text-3xl font-bold text-emerald-400 mt-2">42</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <span className="text-xs text-slate-400 font-semibold uppercase">
              Faturamento Mensal
            </span>
            <p className="text-3xl font-bold text-amber-400 mt-2">R$ 84.500</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <span className="text-xs text-slate-400 font-semibold uppercase">
              Técnicos em Campo
            </span>
            <p className="text-3xl font-bold text-purple-400 mt-2">8/10</p>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-lg font-bold mb-2">
            Painel de Controle D&D Refrigeração
          </h3>
          <p className="text-slate-400 text-sm">
            Navegue pelos botões do menu lateral para gerenciar as Ordens de
            Serviço, o PMOC e o Ponto Eletrônico dos técnicos.
          </p>
        </div>
      </main>
    </div>
  );
}
