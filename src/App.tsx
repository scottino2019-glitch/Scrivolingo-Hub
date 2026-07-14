import React, { useState } from 'react';
import MapView from './components/MapView';
import PublisherView from './components/PublisherView';

export default function App() {
  const [view, setView] = useState<'map' | 'publisher'>('map');

  return (
    <>
      {/* Shared embedded style block for custom fonts and button interactions */}
      <style dangerouslySetInnerHTML={{ __html: `
        .font-serif-custom { font-family: 'Milonga', serif; }
        .font-cursive-custom { font-family: 'Ma Shan Zheng', cursive; }
        .font-calligrafico { font-family: 'Ma Shan Zheng', cursive; }
        
        /* L'effetto del tasto 3D che si schiaccia al click (Duolingo style) */
        .duo-btn {
          transition: all 0.1s ease;
          transform: translateY(-4px);
        }
        .duo-btn:active {
          transform: translateY(0px);
          box-shadow: 0 0px 0px transparent !important;
        }
        
        /* Positioning offsets for the map nodes layout */
        .nodo-sinistra { transform: translateX(-40px); }
        .nodo-destra { transform: translateX(40px); }
      `}} />

      {view === 'map' ? (
        <MapView setView={setView} />
      ) : (
        <PublisherView setView={setView} />
      )}
    </>
  );
}
