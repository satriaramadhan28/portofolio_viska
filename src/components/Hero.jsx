import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  MessageCircle, 
  Sparkles, 
  Code2, 
  Layers, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  // State untuk melacak teks animasi ketik (Typewriter effect)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Efek animasi mengetik otomatis untuk daftar peran di personalInfo.roles
  useEffect(() => {
    const fullRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Mengetik huruf per huruf
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000); // Tunggu 2 detik sebelum mulai menghapus
        }
      } else {
        // Menghapus huruf per huruf
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Teks Pembuka & Profil */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Ketersediaan Kerja (Badge Hijau) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Headline Nama Utama */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Halo, Saya{' '}
                <span className="gradient-text block sm:inline">
                  {personalInfo.fullName}
                </span>
              </h1>
              
              {/* Teks Peran dengan Animasi Ketik (Typewriter) */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
                  Saya seorang{' '}
                </span>
                <span className="ml-2 text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                  {currentText}
                </span>
              </div>
            </div>

            {/* Deskripsi & Slogan */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline} {personalInfo.bio}
            </p>

            {/* Tombol Aksi / Call to Action */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Tombol Lihat Proyek */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Jelajahi Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Tombol Hubungi Saya */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all transform hover:-translate-y-0.5"
              >
                <span>Hubungi Saya</span>
              </a>

              {/* Tombol Unduh CV */}
              <a
                href={personalInfo.resumeUrl}
                onClick={(e) => {
                  if (personalInfo.resumeUrl === '#') {
                    e.preventDefault();
                    alert('Tautan file CV Anda dapat dimasukkan pada properti resumeUrl di src/data/portfolioData.js!');
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 transition-all"
                title="Download Curriculum Vitae"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Unduh CV</span>
              </a>
            </div>

            {/* Ikon Tautan Media Sosial */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-2">Media Sosial:</span>
              
              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-all hover:scale-110"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all hover:scale-110"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-950/30 transition-all hover:scale-110"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-950/30 transition-all hover:scale-110"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Kartu Profil Interaktif Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Efek Cahaya / Glowing Halo Latar Belakang */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 rounded-3xl blur-2xl opacity-40 animate-pulse-slow"></div>

              {/* Kartu Kaca Utama (Glass Card) */}
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
                
                {/* Bagian Foto Profil dan Nama */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px]">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center overflow-hidden">
                        {/* FOTO PROFIL (Bisa diganti di src/data/portfolioData.js pada properti avatar) */}
                        <img 
                          src={personalInfo.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"} 
                          alt={personalInfo.fullName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{personalInfo.fullName}</h3>
                    <p className="text-sm text-cyan-400 font-medium">Frontend & UI Specialist</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                      <span>📍</span>
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                {/* Sorotan Keahlian di dalam Kartu */}
                <div className="py-6 space-y-4">
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <span>Keahlian Unggulan</span>
                    <span className="text-indigo-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Modern Stack
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Framework</p>
                        <p className="text-sm font-bold text-white">React.js</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Styling</p>
                        <p className="text-sm font-bold text-white">Tailwind CSS</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Full-Stack</p>
                        <p className="text-sm font-bold text-white">Next.js</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">Animation</p>
                        <p className="text-sm font-bold text-white">Framer</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Bagian Bawah Kartu */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Clean Code Architecture</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 font-medium">
                    100% Responsive
                  </span>
                </div>

              </div>

              {/* Badge Melayang Tambahan (Floating Badges) */}
              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-xs font-bold text-white">Fast Performance 🚀</span>
              </div>

              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-purple-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-white">Modern UI/UX ✨</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
