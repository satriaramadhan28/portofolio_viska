import React, { useState } from 'react';
import { 
  User, 
  Award, 
  GraduationCap, 
  Heart, 
  Code, 
  Compass, 
  CheckCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About() {
  // State untuk melacak tab yang sedang aktif dipilih ('story', 'values', 'education')
  const [activeTab, setActiveTab] = useState('story');

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER JUDUL SECTION TENTANG SAYA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tentang <span className="gradient-text-cyan">{personalInfo.fullName}</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Menggabungkan seni estetika desain modern dengan keandalan logika rekayasa perangkat lunak.
          </p>
        </div>

        {/* 4 KOTAK KARTU STATISTIK PENCAPAIAN */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card glass-card-hover rounded-2xl p-6 text-center border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-purple-400">
                {stat.value}{stat.suffix}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* KARTU KACA UTAMA DENGAN SISTEM TAB INTERAKTIF */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl">
          
          {/* TOMBOL-TOMBOL PILIHAN TAB */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pb-6 border-b border-slate-800">
            {/* Tab 1: Cerita Singkat */}
            <button
              onClick={() => setActiveTab('story')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'story'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Cerita Singkat</span>
            </button>

            {/* Tab 2: Prinsip Kerja */}
            <button
              onClick={() => setActiveTab('values')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'values'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Prinsip & Nilai Kerja</span>
            </button>

            {/* Tab 3: Pendidikan */}
            <button
              onClick={() => setActiveTab('education')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Pendidikan & Sertifikasi</span>
            </button>
          </div>

          {/* KONTEN MASING-MASING TAB */}
          <div className="pt-8">
            
            {/* KONTEN TAB 1: CERITA SINGKAT */}
            {activeTab === 'story' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Perjalanan saya di dunia rekayasa web dimulai dari ketertarikan mendalam pada bagaimana sebuah baris kode dapat menghasilkan pengalaman visual yang memikat dan memecahkan masalah nyata bagi jutaan orang.
                  </p>
                  <p>
                    Sebagai spesialis React.js dan ekosistem modern seperti Tailwind CSS & Next.js, saya mendedikasikan waktu saya untuk mempelajari arsitektur antarmuka yang bersih, modular, dan dapat diskalakan (*clean architecture*).
                  </p>
                  <p>
                    Saya tidak hanya membuat situs yang "terlihat bagus", tetapi juga fokus pada aksesibilitas, SEO, kecepatan loading kilat, dan kemudahan pemeliharaan (*maintainability*).
                  </p>

                  {/* Tag Hastag Nilai */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                      #CleanCode
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                      #UserCentric
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-medium">
                      #PerformanceFirst
                    </span>
                  </div>
                </div>

                {/* Kotak Sorotan Fokus Utama */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-cyan-950/40 border border-slate-700/60 space-y-4">
                    <h4 className="font-bold text-white text-base flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Fokus Utama Saya
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Desain responsif untuk semua layar (Mobile, Tablet, Desktop).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Micro-interactions & animasi dinamis yang memperkaya UX.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Integrasi API seamless & manajemen state yang efisien.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Kolaborasi erat dengan tim desainer dan backend engineer.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* KONTEN TAB 2: PRINSIP & NILAI KERJA */}
            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-white">Performa & Kecepatan</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Setiap milidetik berharga. Saya memastikan kode yang ditulis teroptimasi, aset terkompresi dengan baik, dan waktu render minimal.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-white">Struktur Kode Rapi</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Mengutamakan modularitas komponen, kemudahan pembacaan (*readability*), dan dokumentasi yang jelas agar mudah dikembangkan ke depan.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/40 transition-all space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-white">Pengalaman Pengguna (UX)</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Fokus pada kemudahan navigasi, hierarki visual intuitif, dan responsivitas elemen interaktif untuk kepuasan pengguna akhir.
                  </p>
                </div>
              </div>
            )}

            {/* KONTEN TAB 3: RIWAYAT PENDIDIKAN */}
            {activeTab === 'education' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-indigo-950/70 text-indigo-400 text-xs font-semibold border border-indigo-800/50">
                          {edu.year}
                        </span>
                        <GraduationCap className="w-5 h-5 text-slate-500" />
                      </div>
                      <h4 className="font-bold text-lg text-white pt-2">{edu.degree}</h4>
                      <p className="text-sm font-medium text-cyan-400">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                        {edu.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
