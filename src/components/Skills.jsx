import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Palette, 
  Server, 
  Database, 
  Wrench, 
  Zap, 
  Sparkles, 
  CheckCircle,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Pemetaan nama ikon string ke komponen ikon Lucide
const iconMap = {
  Layout: Layers,
  Server: Server,
  Wrench: Wrench,
  Code2: Code2,
  Layers: Layers,
  Palette: Palette,
  Atom: Code2,
  FileCode: Code2,
  Sparkles: Sparkles,
  Network: Server,
  Database: Database,
  Flame: Zap,
  Zap: Zap,
  Send: Zap
};

export default function Skills() {
  // State untuk filter kategori keahlian
  const [activeCategory, setActiveCategory] = useState('all');

  // Daftar tombol filter kategori
  const categories = [
    { id: 'all', label: 'Semua Keahlian' },
    { id: 'Frontend Development', label: 'Frontend & UI' },
    { id: 'Backend & Database', label: 'Backend & DB' },
    { id: 'Tools & Design', label: 'Tools & Design' },
  ];

  // Logika penyaringan data berdasarkan filter yang dipilih
  const filteredData = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(cat => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION KEAHLIAN */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Keahlian & <span className="gradient-text">Teknologi</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Rangkaian teknologi modern yang saya gunakan untuk mewujudkan ide menjadi produk digital berkualitas tinggi.
          </p>
        </div>

        {/* TOMBOL-TOMBOL FILTER KATEGORI */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID KARTU KEAHLIAN & PROGRESS BAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((categoryGroup, index) => {
            const CatIcon = iconMap[categoryGroup.icon] || Layers;
            return (
              <div 
                key={index} 
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Judul Grup Kategori */}
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-800/80 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white">{categoryGroup.category}</h3>
                      <p className="text-xs text-slate-400">{categoryGroup.skills.length} Teknologi Utama</p>
                    </div>
                  </div>

                  {/* Daftar Skill dan Bar Kemampuan (Progress Bar) */}
                  <div className="space-y-5">
                    {categoryGroup.skills.map((skill, sIdx) => {
                      return (
                        <div key={sIdx} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-slate-200 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                              {skill.name}
                            </span>
                            {/* Angka persentase kemahiran */}
                            <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
                          </div>

                          {/* Garis Bar Kemahiran (Gradien Animasi) */}
                          <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800 p-[1px]">
                            <div 
                              className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bagian Bawah Kartu */}
                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" /> Berpengalaman
                  </span>
                  <span>Modern Standards</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* KUMPULAN BADGE EKOSISTEM TEKNOLOGI TAMBAHAN */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Ekosistem & Framework Tambahan yang Sering Digunakan
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "React Hooks", "Context API", "Redux Toolkit", "Zustand", "Tailwind Plugins",
              "CSS Grid & Flexbox", "Responsive Web Design", "REST APIs", "GraphQL Client",
              "Axios", "Vite", "ESLint", "Prettier", "Git Flow", "Vercel / Netlify", "Docker Basics"
            ].map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
