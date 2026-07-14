import React from 'react';

interface PublisherViewProps {
  setView: (view: 'map' | 'publisher') => void;
}

export default function PublisherView({ setView }: PublisherViewProps) {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-slate-800 text-[#3C3C3C] font-sans antialiased pb-24 min-h-screen relative p-6">
      
      {/* WATERMARK BACKGROUND */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
        <span className="text-[15rem] md:text-[30rem] lg:text-[40rem] font-calligrafico text-white leading-none transform -rotate-12 select-none">
          出 版  社 
        </span>
      </div>

      <header className="max-w-4xl mx-auto mb-10 text-center relative z-10">
        <h1 className="mb-4">
          <div style={{ backgroundColor: '#000000', display: 'inline-block', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', padding: '24px' }}>
            <pre style={{ fontFamily: 'Courier New, Courier, monospace', fontSize: '9px', lineHeight: '1.1', letterSpacing: '-1.5px', margin: 0, whiteSpace: 'pre', wordWrap: 'normal', fontWeight: 'bold', background: 'none', border: 'none', filter: 'drop-shadow(0px 0px 12px #c1a51a)' }}>
              <span style={{ color: '#d7843a' }}>★</span>
              <span style={{ color: '#d7863a' }}>★</span>
              <span style={{ color: '#d7873b' }}>★</span>
              <span style={{ color: '#d7893b' }}>★</span>
              <span style={{ color: '#d78b3c' }}>★</span>
              <span style={{ color: '#d88d3d' }}>★</span>
              <span style={{ color: '#d88e3d' }}>★</span>
              <span style={{ color: '#d8903e' }}>★</span>
              <span style={{ color: '#d8923f' }}>★</span>
              <span style={{ color: '#d8943f' }}>★</span>
              <span style={{ color: '#d99540' }}>★</span>
              <span style={{ color: '#d99740' }}>★</span>
              <span style={{ color: '#d99941' }}>★</span>
              <span style={{ color: '#d99b42' }}>★</span>
              <span style={{ color: '#d99c42' }}>★</span>
              <span style={{ color: '#da9e43' }}>★</span>
              <span style={{ color: '#daa044' }}>★</span>
              <span style={{ color: '#daa144' }}>★</span>
              <span style={{ color: '#daa345' }}>★</span>
              <span style={{ color: '#daa545' }}>★</span>
              <span style={{ color: '#dba746' }}>★</span>
              <span style={{ color: '#dba847' }}>★</span>
              <span style={{ color: '#dbaa47' }}>★</span>
              <span style={{ color: '#dbac48' }}>★</span>
              <span style={{ color: '#dbae49' }}>★</span>
              <span style={{ color: '#dcaf49' }}>★</span>
              <span style={{ color: '#dcb14a' }}>★</span>
              <span style={{ color: '#dcb34a' }}>★</span>
              <span style={{ color: '#dcb54b' }}>★</span>
              <span style={{ color: '#dcb64c' }}>★</span>
              <span style={{ color: '#ddb84c' }}>★</span>
              <span style={{ color: '#ddba4d' }}>★</span>
              <span style={{ color: '#ddbb4e' }}>★</span>
              <span style={{ color: '#ddbd4e' }}>★</span>
              <span style={{ color: '#ddbf4f' }}>★</span>
              <span style={{ color: '#dec14f' }}>★</span>
              <span style={{ color: '#dec250' }}>★</span>
              <span style={{ color: '#dec451' }}>★</span>
              <span style={{ color: '#dec651' }}>★</span>
              <span style={{ color: '#dec852' }}>★</span>
              <span style={{ color: '#dfc953' }}>★</span>
              <span style={{ color: '#dfcb53' }}>★</span>
              <span style={{ color: '#dfcd54' }}>★</span>
              <span style={{ color: '#dfce54' }}>★</span>
              <span style={{ color: '#dfd055' }}>★</span>
              <span style={{ color: '#e0d256' }}>★</span>
              <span style={{ color: '#e0d456' }}>★</span>
              <span style={{ color: '#e0d557' }}>★</span>
              <span style={{ color: '#e0d758' }}>★</span>
              <span style={{ color: '#e1d958' }}>★</span>
              <span style={{ color: '#e1db59' }}>★</span>
              <span style={{ color: '#e1dc59' }}>★</span>
              <span style={{ color: '#e1de5a' }}>★</span>
              <span style={{ color: '#e1e05b' }}>★</span>
              <span style={{ color: '#e2e25b' }}>★</span>
              <span style={{ color: '#e2e35c' }}>★</span>
              <span style={{ color: '#e2e55d' }}>★</span>
              <span style={{ color: '#e2e75d' }}>★</span>
              <span style={{ color: '#e2e85e' }}>★</span>
              <span style={{ color: '#e3ea5e' }}>★</span>
              <span style={{ color: '#e3ec5f' }}>★</span>
              <span style={{ color: '#e3ee60' }}>★</span>
              <span style={{ color: '#e3ef60' }}>★</span>
              <span style={{ color: '#e3f161' }}>★</span>
              <span style={{ color: '#e4f362' }}>★</span>
              <span style={{ color: '#e4f562' }}>★</span>
              <span style={{ color: '#e4f663' }}>★</span>
              <span style={{ color: '#e4f863' }}>★</span>
              <span style={{ color: '#e4fa64' }}>★</span>
              <span style={{ color: '#e5fc65' }}>★</span>
              <span style={{ color: '#e5fd65' }}>★</span>
              <span style={{ color: '#e5ff66' }}>★</span>
              {"\n"}
              <span style={{ color: '#d3652e' }}>★</span>
              <span style={{ color: '#d3672f' }}>⠀</span>
              <span style={{ color: '#d36930' }}>⣤</span>
              <span style={{ color: '#d36a30' }}>⣶</span>
              <span style={{ color: '#d46c31' }}>⡒</span>
              <span style={{ color: '#d46e32' }}>⠲</span>
              <span style={{ color: '#d47032' }}>⠤</span>
              <span style={{ color: '#d47133' }}>⠀</span>
              <span style={{ color: '#d57333' }}>⢀</span>
              <span style={{ color: '#d57534' }}>⣀</span>
              <span style={{ color: '#d57735' }}>⣀</span>
              <span style={{ color: '#d57835' }}>⡀</span>
              <span style={{ color: '#d57a36' }}>⣀</span>
              <span style={{ color: '#d67c37' }}>⣀</span>
              <span style={{ color: '#d67e37' }}>⢀</span>
              <span style={{ color: '#d67f38' }}>⣀</span>
              <span style={{ color: '#d68138' }}>⣀</span>
              <span style={{ color: '#d68339' }}>⣶</span>
              <span style={{ color: '#d7843a' }}>⣆</span>
              <span style={{ color: '#d7863a' }}>⣀</span>
              <span style={{ color: '#d7883b' }}>⣀</span>
              <span style={{ color: '#d78a3c' }}>⡀</span>
              <span style={{ color: '#d78b3c' }}>⠀</span>
              <span style={{ color: '#d88d3d' }}>⣀</span>
              <span style={{ color: '#d88f3d' }}>⡀</span>
              <span style={{ color: '#d8913e' }}>⢀</span>
              <span style={{ color: '#d8923f' }}>⣀</span>
              <span style={{ color: '#d8943f' }}>⣀</span>
              <span style={{ color: '#d99640' }}>⡀</span>
              <span style={{ color: '#d99741' }}>⠐</span>
              <span style={{ color: '#d99941' }}>⣶</span>
              <span style={{ color: '#d99b42' }}>⣶</span>
              <span style={{ color: '#d99d42' }}>⢐</span>
              <span style={{ color: '#da9e43' }}>⣶</span>
              <span style={{ color: '#daa044' }}>⡂</span>
              <span style={{ color: '#daa244' }}>⣀</span>
              <span style={{ color: '#daa445' }}>⣀</span>
              <span style={{ color: '#daa546' }}>⣀</span>
              <span style={{ color: '#dba746' }}>⣀</span>
              <span style={{ color: '#dba947' }}>⡀</span>
              <span style={{ color: '#dbab47' }}>⠀</span>
              <span style={{ color: '#dbac48' }}>⢀</span>
              <span style={{ color: '#dbae49' }}>⣀</span>
              <span style={{ color: '#dcb049' }}>⣀</span>
              <span style={{ color: '#dcb14a' }}>⣀</span>
              <span style={{ color: '#dcb34b' }}>⡀</span>
              <span style={{ color: '#dcb54b' }}>⠀</span>
              <span style={{ color: '#dcb74c' }}>⣀</span>
              <span style={{ color: '#ddb84c' }}>⣀</span>
              <span style={{ color: '#ddba4d' }}>⡀</span>
              <span style={{ color: '#ddbc4e' }}>⠀</span>
              <span style={{ color: '#ddbe4e' }}>⠀</span>
              <span style={{ color: '#ddbf4f' }}>⠀</span>
              <span style={{ color: '#dec150' }}>⠐</span>
              <span style={{ color: '#dec350' }}>⣶</span>
              <span style={{ color: '#dec551' }}>⣦</span>
              <span style={{ color: '#dec651' }}>⣀</span>
              <span style={{ color: '#dfc852' }}>⣀</span>
              <span style={{ color: '#dfca53' }}>⠀</span>
              <span style={{ color: '#dfcb53' }}>⣀</span>
              <span style={{ color: '#dfcd54' }}>⣀</span>
              <span style={{ color: '#dfcf55' }}>⠀</span>
              <span style={{ color: '#e0d155' }}>⢀</span>
              <span style={{ color: '#e0d256' }}>⣀</span>
              <span style={{ color: '#e0d456' }}>⠀</span>
              <span style={{ color: '#e0d657' }}>⣶</span>
              <span style={{ color: '#e0d858' }}>⣶</span>
              <span style={{ color: '#e1d958' }}>⣀</span>
              <span style={{ color: '#e1db59' }}>⣀</span>
              <span style={{ color: '#e1dd5a' }}>⡀</span>
              <span style={{ color: '#e1df5a' }}>⠀</span>
              <span style={{ color: '#e1e05b' }}>★</span>
              {"\n"}
              <span style={{ color: '#cf4723' }}>★</span>
              <span style={{ color: '#cf4824' }}>⠀</span>
              <span style={{ color: '#d04a25' }}>⣌</span>
              <span style={{ color: '#d04c25' }}>⣉</span>
              <span style={{ color: '#d04d26' }}>⣛</span>
              <span style={{ color: '#d04f26' }}>⣻</span>
              <span style={{ color: '#d05127' }}>⣷</span>
              <span style={{ color: '#d15328' }}>⠺</span>
              <span style={{ color: '#d15428' }}>⣿</span>
              <span style={{ color: '#d15629' }}>⣇</span>
              <span style={{ color: '#d1582a' }}>⣀</span>
              <span style={{ color: '#d15a2a' }}>⣉</span>
              <span style={{ color: '#d25b2b' }}>⣹</span>
              <span style={{ color: '#d25d2b' }}>⣿</span>
              <span style={{ color: '#d25f2c' }}>⣏</span>
              <span style={{ color: '#d2602d' }}>⠉</span>
              <span style={{ color: '#d3622d' }}>⢁</span>
              <span style={{ color: '#d3642e' }}>⣿</span>
              <span style={{ color: '#d3662f' }}>⣿</span>
              <span style={{ color: '#d3672f' }}>⠈</span>
              <span style={{ color: '#d36930' }}>⠻</span>
              <span style={{ color: '#d46b30' }}>⣷</span>
              <span style={{ color: '#d46d31' }}>⡶</span>
              <span style={{ color: '#d46e32' }}>⠋</span>
              <span style={{ color: '#d47032' }}>⠸</span>
              <span style={{ color: '#d47233' }}>⣿</span>
              <span style={{ color: '#d57434' }}>⣇</span>
              <span style={{ color: '#d57534' }}>⣸</span>
              <span style={{ color: '#d57735' }}>⣿</span>
              <span style={{ color: '#d57935' }}>⢆</span>
              <span style={{ color: '#d57a36' }}>⣿</span>
              <span style={{ color: '#d67c37' }}>⣿</span>
              <span style={{ color: '#d67e37' }}>⣸</span>
              <span style={{ color: '#d68038' }}>⣿</span>
              <span style={{ color: '#d68139' }}>⣇</span>
              <span style={{ color: '#d68339' }}>⣿</span>
              <span style={{ color: '#d7853a' }}>⣿</span>
              <span style={{ color: '#d7873a' }}>⡇</span>
              <span style={{ color: '#d7883b' }}>⢸</span>
              <span style={{ color: '#d78a3c' }}>⣿</span>
              <span style={{ color: '#d78c3c' }}>⡇</span>
              <span style={{ color: '#d88e3d' }}>⣿</span>
              <span style={{ color: '#d88f3e' }}>⣿</span>
              <span style={{ color: '#d8913e' }}>⣼</span>
              <span style={{ color: '#d8933f' }}>⣟</span>
              <span style={{ color: '#d8943f' }}>⡃</span>
              <span style={{ color: '#d99640' }}>⣿</span>
              <span style={{ color: '#d99841' }}>⣿</span>
              <span style={{ color: '#d99a41' }}>⣸</span>
              <span style={{ color: '#d99b42' }}>⣿</span>
              <span style={{ color: '#d99d43' }}>⡇</span>
              <span style={{ color: '#da9f43' }}>⠀</span>
              <span style={{ color: '#daa144' }}>⠀</span>
              <span style={{ color: '#daa244' }}>⢀</span>
              <span style={{ color: '#daa445' }}>⣿</span>
              <span style={{ color: '#daa646' }}>⣿</span>
              <span style={{ color: '#dba846' }}>⢸</span>
              <span style={{ color: '#dba947' }}>⣿</span>
              <span style={{ color: '#dbab48' }}>⣿</span>
              <span style={{ color: '#dbad48' }}>⢿</span>
              <span style={{ color: '#dcae49' }}>⣿</span>
              <span style={{ color: '#dcb049' }}>⣇</span>
              <span style={{ color: '#dcb24a' }}>⣸</span>
              <span style={{ color: '#dcb44b' }}>⣿</span>
              <span style={{ color: '#dcb54b' }}>⡇</span>
              <span style={{ color: '#ddb74c' }}>⣿</span>
              <span style={{ color: '#ddb94d' }}>⣿</span>
              <span style={{ color: '#ddbb4d' }}>⣀</span>
              <span style={{ color: '#ddbc4e' }}>⣹</span>
              <span style={{ color: '#ddbe4e' }}>⡿</span>
              <span style={{ color: '#dec04f' }}>⠇</span>
              <span style={{ color: '#dec250' }}>★</span>
              {"\n"}
              <span style={{ color: '#cc2818' }}>★</span>
              <span style={{ color: '#cc2919' }}>⠀</span>
              <span style={{ color: '#cc2b19' }}>⠀</span>
              <span style={{ color: '#cc2d1a' }}>⠀</span>
              <span style={{ color: '#cc2f1b' }}>⠀</span>
              <span style={{ color: '#cd301b' }}>⠀</span>
              <span style={{ color: '#cd321c' }}>⠀</span>
              <span style={{ color: '#cd341d' }}>⠀</span>
              <span style={{ color: '#cd361d' }}>⠀</span>
              <span style={{ color: '#cd371e' }}>⠀</span>
              <span style={{ color: '#ce391e' }}>⠀</span>
              <span style={{ color: '#ce3b1f' }}>⠀</span>
              <span style={{ color: '#ce3d20' }}>⠀</span>
              <span style={{ color: '#ce3e20' }}>⠀</span>
              <span style={{ color: '#ce4021' }}>⠀</span>
              <span style={{ color: '#cf4222' }}>⠀</span>
              <span style={{ color: '#cf4322' }}>⠀</span>
              <span style={{ color: '#cf4523' }}>⠀</span>
              <span style={{ color: '#cf4723' }}>⠀</span>
              <span style={{ color: '#d04924' }}>⠀</span>
              <span style={{ color: '#d04a25' }}>⠀</span>
              <span style={{ color: '#d04c25' }}>⠀</span>
              <span style={{ color: '#d04e26' }}>⠀</span>
              <span style={{ color: '#d05027' }}>⠀</span>
              <span style={{ color: '#d15127' }}>⠀</span>
              <span style={{ color: '#d15328' }}>⠀</span>
              <span style={{ color: '#d15528' }}>⠀</span>
              <span style={{ color: '#d15729' }}>⠀</span>
              <span style={{ color: '#d1582a' }}>⠀</span>
              <span style={{ color: '#d25a2a' }}>⠀</span>
              <span style={{ color: '#d25c2b' }}>⠀</span>
              <span style={{ color: '#d25d2c' }}>⠀</span>
              <span style={{ color: '#d25f2c' }}>⠀</span>
              <span style={{ color: '#d2612d' }}>⠀</span>
              <span style={{ color: '#d3632d' }}>⠀</span>
              <span style={{ color: '#d3642e' }}>⠀</span>
              <span style={{ color: '#d3662f' }}>⠀</span>
              <span style={{ color: '#d3682f' }}>⠀</span>
              <span style={{ color: '#d36a30' }}>⠀</span>
              <span style={{ color: '#d46b31' }}>⠀</span>
              <span style={{ color: '#d46d31' }}>⠀</span>
              <span style={{ color: '#d46f32' }}>⠛</span>
              <span style={{ color: '#d47132' }}>⠋</span>
              <span style={{ color: '#d47233' }}>⠙</span>
              <span style={{ color: '#d57434' }}>⠛</span>
              <span style={{ color: '#d57634' }}>⠋</span>
              <span style={{ color: '#d57735' }}>⠀</span>
              <span style={{ color: '#d57936' }}>⠀</span>
              <span style={{ color: '#d57b36' }}>⠀</span>
              <span style={{ color: '#d67d37' }}>⠀</span>
              <span style={{ color: '#d67e37' }}>⠀</span>
              <span style={{ color: '#d68038' }}>⠀</span>
              <span style={{ color: '#d68239' }}>⠀</span>
              <span style={{ color: '#d68439' }}>⠀</span>
              <span style={{ color: '#d7853a' }}>⠀</span>
              <span style={{ color: '#d7873b' }}>⠀</span>
              <span style={{ color: '#d7893b' }}>⠀</span>
              <span style={{ color: '#d78a3c' }}>⠀</span>
              <span style={{ color: '#d78c3c' }}>⠀</span>
              <span style={{ color: '#d88e3d' }}>⠀</span>
              <span style={{ color: '#d8903e' }}>⠀</span>
              <span style={{ color: '#d8913e' }}>⠀</span>
              <span style={{ color: '#d8933f' }}>⠀</span>
              <span style={{ color: '#d89540' }}>⠀</span>
              <span style={{ color: '#d99740' }}>⠀</span>
              <span style={{ color: '#d99841' }}>⠀</span>
              <span style={{ color: '#d99a41' }}>⠀</span>
              <span style={{ color: '#d99c42' }}>⠀</span>
              <span style={{ color: '#da9e43' }}>⠀</span>
              <span style={{ color: '#da9f43' }}>⠀</span>
              <span style={{ color: '#daa144' }}>⠀</span>
              <span style={{ color: '#daa345' }}>★</span>
              {"\n"}
              <span style={{ color: '#c8090d' }}>★</span>
              <span style={{ color: '#c80b0e' }}>★</span>
              <span style={{ color: '#c80c0e' }}>★</span>
              <span style={{ color: '#c90e0f' }}>★</span>
              <span style={{ color: '#c91010' }}>★</span>
              <span style={{ color: '#c91210' }}>★</span>
              <span style={{ color: '#c91311' }}>★</span>
              <span style={{ color: '#c91511' }}>★</span>
              <span style={{ color: '#ca1712' }}>★</span>
              <span style={{ color: '#ca1913' }}>★</span>
              <span style={{ color: '#ca1a13' }}>★</span>
              <span style={{ color: '#ca1c14' }}>★</span>
              <span style={{ color: '#ca1e15' }}>★</span>
              <span style={{ color: '#cb2015' }}>★</span>
              <span style={{ color: '#cb2116' }}>★</span>
              <span style={{ color: '#cb2316' }}>★</span>
              <span style={{ color: '#cb2517' }}>★</span>
              <span style={{ color: '#cb2618' }}>★</span>
              <span style={{ color: '#cc2818' }}>★</span>
              <span style={{ color: '#cc2a19' }}>★</span>
              <span style={{ color: '#cc2c1a' }}>★</span>
              <span style={{ color: '#cc2d1a' }}>★</span>
              <span style={{ color: '#cc2f1b' }}>★</span>
              <span style={{ color: '#cd311b' }}>★</span>
              <span style={{ color: '#cd331c' }}>★</span>
              <span style={{ color: '#cd341d' }}>★</span>
              <span style={{ color: '#cd361d' }}>★</span>
              <span style={{ color: '#ce381e' }}>★</span>
              <span style={{ color: '#ce3a1f' }}>★</span>
              <span style={{ color: '#ce3b1f' }}>★</span>
              <span style={{ color: '#ce3d20' }}>★</span>
              <span style={{ color: '#ce3f20' }}>★</span>
              <span style={{ color: '#cf4021' }}>★</span>
              <span style={{ color: '#cf4222' }}>★</span>
              <span style={{ color: '#cf4422' }}>★</span>
              <span style={{ color: '#cf4623' }}>★</span>
              <span style={{ color: '#cf4724' }}>★</span>
              <span style={{ color: '#d04924' }}>★</span>
              <span style={{ color: '#d04b25' }}>★</span>
              <span style={{ color: '#d04d25' }}>★</span>
              <span style={{ color: '#d04e26' }}>★</span>
              <span style={{ color: '#d05027' }}>★</span>
              <span style={{ color: '#d15227' }}>★</span>
              <span style={{ color: '#d15328' }}>★</span>
              <span style={{ color: '#d15529' }}>★</span>
              <span style={{ color: '#d15729' }}>★</span>
              <span style={{ color: '#d1592a' }}>★</span>
              <span style={{ color: '#d25a2a' }}>★</span>
              <span style={{ color: '#d25c2b' }}>★</span>
              <span style={{ color: '#d25e2c' }}>★</span>
              <span style={{ color: '#d2602c' }}>★</span>
              <span style={{ color: '#d2612d' }}>★</span>
              <span style={{ color: '#d3632e' }}>★</span>
              <span style={{ color: '#d3652e' }}>★</span>
              <span style={{ color: '#d3672f' }}>★</span>
              <span style={{ color: '#d3682f' }}>★</span>
              <span style={{ color: '#d36a30' }}>★</span>
              <span style={{ color: '#d46c31' }}>★</span>
              <span style={{ color: '#d46d31' }}>★</span>
              <span style={{ color: '#d46f32' }}>★</span>
              <span style={{ color: '#d47133' }}>★</span>
              <span style={{ color: '#d47333' }}>★</span>
              <span style={{ color: '#d57434' }}>★</span>
              <span style={{ color: '#d57634' }}>★</span>
              <span style={{ color: '#d57835' }}>★</span>
              <span style={{ color: '#d57a36' }}>★</span>
              <span style={{ color: '#d57b36' }}>★</span>
              <span style={{ color: '#d67d37' }}>★</span>
              <span style={{ color: '#d67f38' }}>★</span>
              <span style={{ color: '#d68138' }}>★</span>
              <span style={{ color: '#d68239' }}>★</span>
              <span style={{ color: '#d7843a' }}>★</span>
            </pre>
          </div>
        </h1>
        <p className="text-[#1630D4] font-bold font-serif-custom">
          Clicca su un'app per scaricare o stampare il suo PDF predefinito.
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
              <a href="/pdf/animali.pdf" download="animali.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                 🐼
              </a>
              <span className="text-5xl font-black uppercase tracking-wide text-[#777777] mt-2 font-cursive-custom">动物</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/famiglia.pdf" download="famiglia.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🏡
              </a>
              <span className="text-5xl font-cursive-custom font-black uppercase tracking-wide text-[#777777] mt-2">家庭</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/famiglia2.pdf" download="famiglia2.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                 🏘
              </a>
              <span className="text-5xl font-black uppercase tracking-wide text-[#777777] mt-2 font-cursive-custom">家庭</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/natura.pdf" download="natura.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🌿
              </a>
              <span className="text-5xl font-black font-cursive-custom uppercase tracking-wide text-[#777777] mt-2">自然</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/natura2.pdf" download="natura2.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#58CC02] border-b-4 border-[#46A302] shadow-[0_4px_0_#46A302] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🌲
              </a>
              <span className="text-5xl font-black font-cursive-custom uppercase tracking-wide text-[#777777] mt-2">自然</span>
            </div>

          </div>
        </section>

        {/* LIVELLO 2 */}
        <section className="bg-white p-6 rounded-3xl border-2 border-[#E5E5E5] shadow-sm">
          <div className="bg-[#1CB0F6] text-white font-black px-6 py-3 rounded-2xl border-b-4 border-[#1899D6] inline-block mb-8">
            LIVELLO 2: LO STILE
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            
            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/dialoghi.pdf" download="dialoghi.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🎭
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Dialoghi</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/editing.pdf" download="editing.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                ✂️
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Editing</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/sensi.pdf" download="sensi.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                👁️
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Sensi</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/metafore.pdf" download="metafore.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#1CB0F6] border-b-4 border-[#1899D6] shadow-[0_4px_0_#1899D6] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                🦄
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">Metafore</span>
            </div>

            <div className="flex flex-col items-center justify-between h-36">
              <a href="/pdf/incipit.pdf" download="incipit.pdf" target="_blank" rel="noreferrer" className="duo-btn w-20 h-20 bg-[#FF9600] border-b-4 border-[#CC7800] shadow-[0_4px_0_#CC7800] rounded-full flex items-center justify-center text-3xl text-white hover:brightness-105">
                👑
              </a>
              <span className="text-xs font-black uppercase tracking-wide text-[#777777] mt-2">L'Incipit</span>
            </div>

          </div>
        </section>

      </main>

      {/* BOTTOM NAV BAR */}
      <nav className="bg-gradient-to-r from-red-700 to-red-600 text-white border-b-4 border-yellow-500 shadow-lg fixed bottom-0 left-0 right-0 p-3 z-50">
        <div className="max-w-xl mx-auto flex justify-around text-2xl">
          <a href="https://lingua-cinese.vercel.app/">
            <button className="text-[#58CC02] font-bold text-md flex flex-col items-center cursor-pointer">
              🏠 <span className="text-lg font-cursive-custom">房屋</span>
            </button>
          </a>
          <a href="#map" onClick={(e) => { e.preventDefault(); setView('map'); }}>
            <button className="text-[#AFAFAF] font-bold text-md flex flex-col items-center cursor-pointer">
              🧧 <span className="text-lg font-cursive-custom">汉字</span>
            </button>
          </a>
          <a href="https://lingua-cinese.vercel.app/caratteri.html">
            <button className="text-[#AFAFAF] font-bold text-md flex flex-col items-center cursor-pointer">
              🧧 <span className="text-lg font-cursive-custom">象形文字</span>
            </button>
          </a>
        </div>
      </nav>

    </div>
  );
}
