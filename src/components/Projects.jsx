import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  // State untuk melacak kategori filter yang aktif ('all', 'web', 'mobile', 'uiux')
  const [activeFilter, setActiveFilter] = useState('all');
  
  // State untuk menyimpan data proyek yang sedang dibuka di modal popup
  const [selectedProject, setSelectedProject] = useState(null);

  // Daftar kategori filter proyek
  const filters = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile / PWA' },
    { id: 'uiux', label: 'UI/UX Design' },
  ];

  // Logika penyaringan proyek sesuai tombol kategori
  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION PROYEK */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Karya & Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proyek <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Kumpulan aplikasi web, rancangan UI/UX, dan solusi digital yang telah saya kembangkan dengan standar industri terbaik.
          </p>
        </div>

        {/* TOMBOL-TOMBOL FILTER KATEGORI PROYEK */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* GRID KARTU PROYEK PORTOFOLIO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* GAMBAR PROYEK DENGAN OVERLAY & HOVER ACTIONS */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Badge Label Kategori di pojok kiri atas */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-[11px] font-bold text-cyan-300 uppercase tracking-wider backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Tombol aksi cepat saat mouse diarahkan ke gambar (Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    {/* Tombol Lihat Detail */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold shadow-md transition-transform transform translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Detail</span>
                    </button>

                    {/* Tombol GitHub & Live Demo */}
                    <div className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 duration-300">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors"
                        title="Lihat Source Code GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold transition-colors shadow-md"
                        title="Buka Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* KONTEN TEKS KARTU PROYEK */}
                <div className="p-6 space-y-3">
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity shrink-0" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Tag-tag teknologi yang digunakan */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* TOMBOL BUKA DETAIL STUDI KASUS */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Pelajari Studi Kasus</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* MODAL POPUP DETAIL PROYEK (MUNCUL SAAT TOMBOL DETAIL DIKLIK) */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
