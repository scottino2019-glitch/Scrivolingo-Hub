import React from 'react';
import ScrivolingoLogo from './ScrivolingoLogo';

interface MapViewProps {
  setView: (view: 'map' | 'publisher') => void;
}

export default function MapView({ setView }: MapViewProps) {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-slate-800 text-[#3C3C3C] font-sans antialiased pb-24 min-h-screen relative">
      
      {/* BARRA SUPERIORE (STATISTICHE STATICHE) */}
      <header className="bg-gradient-to-r from-red-700 to-red-600 text-white border-b-4 border-yellow-500 shadow-lg p-4 sticky top-0 z-50">
        <div className="max-w-xl mx-auto flex justify-between items-center gap-4">
          
          <div className="flex-1 min-w-0">
            <ScrivolingoLogo />
          </div>

          <div className="flex space-x-6 font-bold text-sm text-[#777777] shrink-0">
            <span className="flex items-center font-cursive-custom text-[#1CB0F6] text-2xl">🈸 <span className="ml-1">文</span></span>
            <span className="flex items-center font-cursive-custom text-[#1CB0F6] text-2xl">汉<span className="ml-1"> 字</span></span>
          </div>
        </div>
      </header>

      {/* WATERMARK BACKGROUND */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
        <span className="text-[15rem] md:text-[30rem] lg:text-[40rem] font-calligrafico text-white leading-none transform -rotate-12 select-none">
          汉字
        </span>
      </div>

      {/* CONTENITORE PRINCIPALE DELLA MAPPA */}
      <main className="max-w-xl mx-auto px-4 py-8 flex flex-col items-center space-y-16 relative z-10">

        {/* ================= LIVELLO 1 ================= */}
        <div className="w-full flex flex-col items-center space-y-10">
          
          {/* Intestazione Livello 1 */}
          <div className="bg-[#58CC02] text-white text-center font-black px-6 py-4 rounded-2xl border-b-4 border-[#46A302] w-full max-w-sm shadow-sm font-serif-custom">
            LIVELLO 1 (一级)
          </div>

          {/* App 1 (Centro) */}
          <div className="flex flex-col items-center">
            <a href="/app/animali.html">
              <button className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
               🐼
              </button>
            </a>
            <span className="text-xs font-black mt-2 uppercase tracking-wide text-[#430C69] font-serif-custom">Animali</span>
          </div>

          {/* App 2 (Sinistra) */}
          <div className="nodo-sinistra flex flex-col items-center">
            <a href="/app/famiglia.html">
              <button className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
                🏡
              </button>
            </a>
            <span className="text-xs font-black font-serif-custom mt-2 uppercase tracking-wide text-[#430C69]">Family</span>
          </div>

          {/* App 3 (Destra) */}
          <div className="nodo-destra flex flex-col items-center">
            <a href="/app/famiglia2.html">
              <button className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
              🏘
              </button>
            </a>
            <span className="text-xs font-black font-serif-custom mt-2 uppercase tracking-wide text-[#430C69]">Famiglia2</span>
          </div>

          {/* App 4 (Sinistra) */}
          <div className="nodo-sinistra flex flex-col items-center">
            <a href="/app/natura.html">
              <button className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
                  🌿
              </button>
            </a>
            <span className="text-xs font-black font-serif-custom mt-2 uppercase tracking-wide text-[#430C69]">Natura</span>
          </div>

          {/* App 5 (Centro) */}
          <div className="flex flex-col items-center">
            <a href="/app/natura2.html">
              <button className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
                🌲
              </button>
            </a>
            <span className="text-xs font-black font-serif-custom mt-2 uppercase tracking-wide text-[#430C69]">Natura2</span>
          </div>

        </div>

        {/* Separatore tra i livelli */}
        <hr className="w-full border-[#E5E5E5] border-t-2" />

        {/* ================= LIVELLO 2 ================= */}
        <div className="w-full flex flex-col items-center space-y-10">
          
          {/* Intestazione Livello 2 */}
          <div className="bg-[#1CB0F6] text-white text-center font-serif-custom font-black px-6 py-4 rounded-2xl border-b-4 border-[#1899D6] w-full max-w-sm shadow-sm">
            LIVELLO 2 (二级)
          </div>

          {/* App 6 (Centro) */}
          <div className="flex flex-col items-center">
    <a href="/app/aggettivi1.html">        <button className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
              🤩
            </button></a>
            <span className="text-xs font-black mt-2 uppercase tracking-wide text-[#777777]">Aggettivi1</span>
          </div>

          {/* App 7 (Sinistra) */}
          <div className="nodo-sinistra flex flex-col items-center">
   <a href="/app/aggettivi2.html">         <button className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
              🤩
            </button></a>
            <span className="text-xs font-black mt-2 uppercase tracking-wide text-[#777777]">Aggettivi2</span>
          </div>

          {/* App 8 (Destra) */}
          <div className="nodo-destra flex flex-col items-center">
            <button className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
              👁️
            </button>
            <span className="text-xs font-black mt-2 uppercase tracking-wide text-[#777777]">Sensi</span>
          </div>

          {/* App 9 (Sinistra) */}
          <div className="nodo-sinistra flex flex-col items-center">
            <button className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
              🦄
            </button>
            <span className="text-xs font-black mt-2 uppercase tracking-wide text-[#777777]">Metafore</span>
          </div>

          {/* App 10 (Centro) */}
          <div className="flex flex-col items-center">
            {/* Bottone Arancione per la sfida "Boss" finale del livello */}
            <button className="duo-btn w-20 h-20 bg-[#FF9600] border-b-4 border-[#CC7800] shadow-[0_4px_0_#CC7800] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105 cursor-pointer">
              👑
            </button>
            <span className="text-xs font-black mt-2 uppercase tracking-wide text-[#777777]">L'Incipit</span>
          </div>

        </div>

      </main>
      
      {/* BOTTOM NAV BAR */}
      <nav className="bg-gradient-to-r from-red-700 to-red-600 text-white border-b-4 border-yellow-500 shadow-lg fixed bottom-0 left-0 right-0 p-3 z-50">
        <div className="max-w-xl mx-auto flex justify-around text-2xl">
          <a href="https://lingua-cinese.vercel.app/">
            <button className="text-[#58CC02] font-bold text-md flex flex-col items-center cursor-pointer">🏠 <span className="text-lg font-cursive-custom">房屋</span></button>
          </a>
          <a href="#publisher" onClick={(e) => { e.preventDefault(); setView('publisher'); }}>
            <button className="text-[#AFAFAF] font-bold text-md flex flex-col items-center cursor-pointer">🖨 <span className="text-lg font-cursive-custom">出版社</span></button>
          </a>
          <a href="https://lingua-cinese.vercel.app/caratteri.html">
            <button className="text-[#AFAFAF] font-bold text-md flex flex-col items-center cursor-pointer">🧧<span className="text-lg font-cursive-custom">象形文字</span></button>
          </a>
        </div>
      </nav>

    </div>
  );
}
