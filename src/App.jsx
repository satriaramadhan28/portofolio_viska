import React from 'react';
// Mengimpor semua komponen tampilan utama website portofolio
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Komponen Induk Aplikasi (App.jsx)
 * Merangkai seluruh bagian portofolio menjadi satu halaman penuh yang interaktif
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans relative selection:bg-indigo-500 selection:text-white">
      {/* 1. Efek Cahaya Latar Belakang (Ambient Glowing Orbs & Grid) */}
      <BackgroundEffects />

      {/* 2. Tata Letak Utama (Layout) */}
      <div className="relative z-10 flex flex-col">
        {/* Navigasi Mengambang (Navbar Glassmorphism) */}
        <Navbar />

        {/* Bagian Konten Utama */}
        <main className="flex-grow">
          {/* Section 1: Hero Pembuka (Nama, Animasi Ketik, Tombol CTA) */}
          <Hero />

          {/* Section 2: Tentang Saya (Profil, Statistik, Nilai Kerja) */}
          <About />

          {/* Section 3: Keahlian & Teknologi (Kategori, Skill Bars) */}
          <Skills />

          {/* Section 4: Galeri Proyek & Popup Modal Detail */}
          <Projects />

          {/* Section 5: Riwayat Pengalaman Kerja (Timeline) */}
          <Experience />

          {/* Section 6: Testimoni Klien & Rekan Kerja */}
          <Testimonials />

          {/* Section 7: Kontak & Formulir Kirim Pesan */}
          <Contact />
        </main>

        {/* 3. Footer (Hak Cipta & Tombol Kembali ke Atas) */}
        <Footer />
      </div>
    </div>
  );
}
