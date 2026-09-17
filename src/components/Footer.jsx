import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  // Fungsi kembali ke puncak halaman secara halus (Smooth Scroll to Top)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#060911] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          
          {/* KOLOM 1: IDENTITAS BRAND & BIO SINGKAT */}
          <div className="md:col-span-6 space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-base text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    {"viskaataliarmadhani".charAt(0)}
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {"viskaataliarmadhani"}
                <span className="text-cyan-400">.dev</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Membangun website dan aplikasi digital yang berfokus pada desain elegan, estetika modern, dan kecepatan performa.
            </p>

            {/* Ikon Media Sosial Footer */}
            <div className="flex items-center gap-3 pt-2">
              {/* GitHub */}
              <a
                href={"https://github.com/viskaataliarmadhani"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              {/* LinkedIn */}
              <a
                href={"https://linkedin.com/in/viskaataliaramadhani"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {/* Instagram */}
              <a
                href={"https://instagram.com/viskaatalia7"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-slate-700 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              {/* WhatsApp */}
              <a
                href={"https://wa.me/089512476417"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI CEPAT */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Navigasi Cepat</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Tentang Saya</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Keahlian & Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Galeri Proyek</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Pengalaman</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* KOLOM 3: INFORMASI TEKNOLOGI */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Dibangun Dengan</h4>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">React.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Lucide Icons</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Vite</span>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Dikembangkan dengan performa tinggi dan standar UI/UX modern.
            </p>
          </div>

        </div>

        {/* BAGIAN BAWAH FOOTER & TOMBOL KEMBALI KE ATAS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            © {currentYear} {"viskaataliaramadhani"}.
          </p>

          {/* Tombol Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all transform hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
