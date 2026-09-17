import React, { useState, useEffect } from 'react';
import { Menu, X, Send, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Daftar menu navigasi tautan halaman
const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Pengalaman', href: '#experience' },
  { name: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  // State untuk menu mobile (buka/tutup drawer)
  const [isOpen, setIsOpen] = useState(false);
  // State untuk efek latar belakang navbar saat di-scroll
  const [scrolled, setScrolled] = useState(false);
  // State untuk menandai menu yang sedang aktif dilihat pengguna
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Fungsi memantau posisi scroll pengguna
    const handleScroll = () => {
      // Tambahkan efek bayangan & background blur saat halaman di-scroll lebih dari 20px
      setScrolled(window.scrollY > 20);

      // Deteksi section mana yang sedang berada di layar
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-lg shadow-indigo-950/20' : 'bg-transparent'
        }`}>
          
          {/* LOGO BRAND */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                {/* Huruf inisial nama pertama */}
                <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  {personalInfo.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                {"Viska Atalia Ramadhani"}
                <span className="text-cyan-400 font-black">.dev</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">Portfolio</span>
            </div>
          </a>

          {/* MENU NAVIGASI TAMPILAN DESKTOP */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* TOMBOL AKSI CEPAT (WHATSAPP & HUBUNGI SAYA) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Tombol WhatsApp */}
            <a
              href={`https://wa.me/089512476417`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-300 hover:text-emerald-400 hover:bg-emerald-950/30 border border-transparent hover:border-emerald-500/30 transition-all"
              title="Chat via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Tombol Scroll ke Kontak */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* TOMBOL TOGGLE MENU UNTUK TAMPILAN HP (MOBILE) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* DRAWER MENU MOBILE (MUNCUL DI SMARTPHONE) */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4">
          <div className="glass-nav rounded-2xl p-5 border border-slate-800/80 shadow-2xl space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Tombol aksi cepat mobile */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={`https://wa.me/089512476417`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-md shadow-indigo-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
