import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // Menutup modal dengan tombol Escape pada keyboard dan mengunci scroll body
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden'; // Kunci scroll background
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto'; // Kembalikan scroll saat modal ditutup
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* WADAH UTAMA MODAL POPUP */}
      <div 
        className="relative w-full max-w-3xl glass-card rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-auto animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* TOMBOL TUTUP (SILANG X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors shadow-lg"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* GAMBAR HEADER PROYEK */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/40 to-transparent"></div>
          
          {/* Label Kategori */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* ISI KONTEN MODAL */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Judul & Subtitle Proyek */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-slate-400 text-sm sm:text-base">
              {project.subtitle}
            </p>
          </div>

          {/* Deskripsi Lengkap */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Ikhtisar Proyek
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Fitur Utama & Pencapaian (Highlights) */}
          {project.highlights && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Fitur Utama & Pencapaian
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tag Teknologi yang Dipakai */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tombol Tautan Source Code & Live Demo */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            {/* Tombol GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>

            {/* Tombol Buka Live Demo */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Buka Live Demo</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
