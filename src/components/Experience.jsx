import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION RIWAYAT KARIER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Riwayat Karier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Pengalaman <span className="gradient-text-cyan">Profesional</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Rekam jejak kontribusi dalam membangun ekosistem digital untuk startup dan korporasi.
          </p>
        </div>

        {/* STRUKTUR GARIS WAKTU (TIMELINE) */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Garis vertikal gradien penghubung timeline */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 transform sm:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Titik Lingkaran Node Timeline dengan Efek Berkedip (Ping) */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                    </div>
                  </div>

                  {/* Kartu Konten Pengalaman Kerja */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pl-10' : 'sm:pr-10'
                  }`}>
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative">
                      
                      {/* Periode Tahun & Tipe Kerja (Full-time / Contract) */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 text-indigo-400 text-xs font-bold border border-indigo-800/60">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>

                      {/* Posisi & Nama Perusahaan */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mb-4">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </p>

                      {/* Deskripsi Tanggung Jawab & Pencapaian */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
