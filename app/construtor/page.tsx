'use client';

import React, { useState } from 'react';

export default function ConstrutorSitePage() {
  const [whatsapp, setWhatsapp] = useState('5591999999999');
  const [titulo, setTitulo] = useState('D&D Refrigeração & Elétrica');
  const [subtitulo, setSubtitulo] = useState(
    'Especialistas em Refrigeração Comercial, Industrial e PMOC em Belém e Região.'
  );

  // Lista de Fotos do Serviço (Editável)
  const [fotos, setFotos] = useState([
    {
      id: 1,
      titulo: 'Higienização de Split',
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      titulo: 'Instalação Comercial',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      titulo: 'Quadro Elétrico & VRF',
      url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80',
    },
  ]);

  const [novaFotoUrl, setNovaFotoUrl] = useState('');
  const [novaFotoTitulo, setNovaFotoTitulo] = useState('');

  const adicionarFoto = () => {
    if (!novaFotoUrl) return;
    setFotos([
      ...fotos,
      {
        id: Date.now(),
        titulo: novaFotoTitulo || 'Serviço D&D',
        url: novaFotoUrl,
      },
    ]);
    setNovaFotoUrl('');
    setNovaFotoTitulo('');
  };

  return (
    <div className="p-8 text-slate-100 max-w-7xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Gestor do Site & Landing Page Pública
          </h1>
          <p className="text-slate-400 text-sm">
            Edite em tempo real as fotos, textos e botões do seu site público.
          </p>
        </div>
        <a
          href={`https://wa.me/${whatsapp}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20D%26D%20Refrigeração!`}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow flex items-center gap-2"
        >
          <span>📲 Testar Botão WhatsApp</span>
        </a>
      </div>

      {/* Painel de Edição de Fotos e Textos */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-lg font-bold text-blue-400 mb-4">
          ⚙️ Painel de Edição Rápida
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
              Título Principal
            </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
              WhatsApp de Contato (Com DDD)
            </label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
              Adicionar Nova Foto (Link URL)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://..."
                value={novaFotoUrl}
                onChange={(e) => setNovaFotoUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white"
              />
              <button
                onClick={adicionarFoto}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 rounded-lg text-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pré-visualização ao Vivo da Landing Page */}
      <div className="bg-slate-950 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-8">
        <header className="border-b border-slate-800 pb-6 mb-8 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-400 tracking-wide">
            {titulo}
          </div>
          <div className="text-xs bg-slate-800 px-3 py-1.5 rounded-full text-slate-300 border border-slate-700">
            🟢 Atendimento 24h em Belém e Região
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-4 leading-tight">
            Soluções Profissionais em Ar-Condicionado, PMOC e Elétrica
          </h2>
          <p className="text-slate-300 text-lg mb-8">{subtitulo}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsapp}?text=Olá,%20vim%20pelo%20site%20e%20preciso%20de%20um%20orçamento!`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3.5 px-8 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              💬 Chamar no WhatsApp Agorinha
            </a>
          </div>
        </section>

        {/* Galeria de Fotos dos Serviços */}
        <section className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            Nossos Serviços e Galeria de Trabalhos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fotos.map((foto) => (
              <div
                key={foto.id}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-md group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={foto.url}
                    alt={foto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-white text-base">
                    {foto.titulo}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Executado com garantia D&D Refrigeração
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
