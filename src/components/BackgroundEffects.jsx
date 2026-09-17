import React from 'react';

/**
 * Komponen Efek Latar Belakang Animasi Ambient Orbs & Grid
 * Berfungsi memberikan kesan futuristic cyber & glowing neon pada latar belakang gelap
 */
export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Lingkaran Cahaya Gradien (Glowing Ambient Orbs) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-40 left-1/3 w-[32rem] h-[32rem] bg-purple-600/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Pola Grid Titik Halus (Subtle Dot Grid Pattern) */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
}
