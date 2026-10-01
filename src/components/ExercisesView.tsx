import React from 'react';
import ScrivolingoLogo from './ScrivolingoLogo';

interface ExercisesViewProps {
  setView: (view: 'map' | 'publisher' | 'exercises') => void;
}

export default function ExercisesView({ setView }: ExercisesViewProps) {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-slate-800 text-[#3C3C3C] font-sans antialiased p-6 pb-32 min-h-screen relative">
      
      {/* WATERMARK BACKGROUND */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
        <span className="text-[15rem] md:text-[30rem] lg:text-[40rem] font-calligrafico text-white leading-none transform -rotate-12 select-none">
          象 形
        </span>
      </div>

      <header className="max-w-4xl mx-auto mb-10 text-center relative z-10">
        <div className="max-w-xs mx-auto mb-4">
          <ScrivolingoLogo />
        </div>
        <p className="text-[#1630D4] font-bold font-serif-custom text-lg">
          Clicca su un'app per aprire l'esercizio di scrittura interattivo.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-12 relative z-10">

        {/* LIVELLO 1 */}
        <section className="bg-[#e4dcd3] bg-[radial-gradient(#d5cbbd_1px,transparent_1px)] p-6 rounded-3xl border-2 border-[#E5E5E5] shadow-sm">
          <div className="bg-[#58CC02] text-white font-black px-6 py-3 rounded-2xl border-b-4 border-[#46A302] inline-block mb-8 font-serif-custom">
            LIVELLO 1 (一级)
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            
            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/animali.html" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                 🐼
              </a>
              <span className="text-sm sm:text-lg font-black uppercase tracking-wide text-[#777777] mt-2 font-cursive-custom">动物</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/famiglia.html" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🏡
              </a>
              <span className="text-sm sm:text-lg font-cursive-custom font-black uppercase tracking-wide text-[#777777] mt-2">家庭</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/famiglia2.html" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                 🏘
              </a>
              <span className="text-sm sm:text-lg font-black uppercase tracking-wide text-[#777777] mt-2 font-cursive-custom">家庭</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/natura.html" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🌿
              </a>
              <span className="text-sm sm:text-lg font-black font-cursive-custom uppercase tracking-wide text-[#777777] mt-2">自然</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/natura2.html" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🌲
              </a>
              <span className="text-sm sm:text-lg font-black font-cursive-custom uppercase tracking-wide text-[#777777] mt-2">自然</span>
            </div>

          </div>
        </section>

        {/* LIVELLO 2 */}
        <section className="bg-white p-6 rounded-3xl border-2 border-[#E5E5E5] shadow-sm">
          <div className="bg-[#1CB0F6] text-white font-black px-6 py-3 rounded-2xl border-b-4 border-[#1899D6] inline-block mb-8 font-serif-custom">
            LIVELLO 2 (二级)
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            
            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/dialoghi.html" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🎭
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Dialoghi</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/aggettivi.html" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                ⭐
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Aggettivi</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/aggettivi2.html" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🤪
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Aggettivi2</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/metafore.html" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🦄
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Metafore</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="app/incipit.html" className="duo-btn w-20 h-20 bg-[#FF9600] border-b-4 border-[#CC7800] shadow-[0_4px_0_#CC7800] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                👑
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">L'Incipit</span>
            </div>

          </div>
        </section>

      </main>

      {/* BARRA DI NAVIGAZIONE IN BASSO */}
      <nav className="bg-gradient-to-r from-red-700 to-red-600 text-white border-b-4 border-yellow-500 shadow-lg fixed bottom-0 left-0 right-0 p-3 z-50">
        <div className="max-w-xl mx-auto flex justify-around text-2xl">
          <a href="#map" onClick={(e) => { e.preventDefault(); setView('map'); }}>
            <button className="text-[#AFAFAF] hover:text-white font-bold text-md flex flex-col items-center cursor-pointer">
              🏠 <span className="text-lg font-cursive-custom">房屋</span>
            </button>
          </a>
          <a href="#publisher" onClick={(e) => { e.preventDefault(); setView('publisher'); }}>
            <button className="text-[#AFAFAF] hover:text-white font-bold text-md flex flex-col items-center cursor-pointer">
              🖨 <span className="text-lg font-cursive-custom">出版社</span>
            </button>
          </a>
          <a href="#exercises" onClick={(e) => { e.preventDefault(); setView('exercises'); }}>
            <button className="text-[#58CC02] font-bold text-md flex flex-col items-center cursor-pointer">
              🧧 <span className="text-lg font-cursive-custom">象形文字</span>
            </button>
          </a>
        </div>
      </nav>

    </div>
  );
}
