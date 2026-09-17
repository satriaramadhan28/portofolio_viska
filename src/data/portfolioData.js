/**
 * ==============================================================================
 * BERKAS DATA UTAMA PORTOFOLIO (src/data/portfolioData.js)
 * ==============================================================================
 * Anda dapat mengubah semua teks, nama, foto, kontak, keahlian, dan proyek
 * portofolio Anda di berkas ini tanpa perlu mengutak-atik kode komponen!
 * ==============================================================================
 */

// 1. INFORMASI PRIBADI & PROFIL UTAMA
export const personalInfo = {
  // Nama panggilan yang muncul di logo & navbar
  name: "Viska",
  
  // Nama lengkap yang muncul di headline Hero Section
  fullName: "Viska Atalia Ramadhani",
  
  /**
   * FOTO PROFIL ANDA:
   * Cara 1: Taruh foto Anda di folder 'public/' (misal bernama: foto-viska.jpg), lalu isi: "/foto-viska.jpg"
   * Cara 2: Gunakan URL link foto online langsung di bawah ini.
   */
  avatar: "/foto_viska.jpg",

  // Slogan singkat di bawah nama Anda
  tagline: "Hai, Saya Viska Atalia Ramadhani, seorang Pelajar yang sangat tertarik pada Teknologi dan ingin terus berkembang dalam karir saya.",
  
  // Teks animasi mengetik (Typewriter) yang berganti-ganti secara otomatis
  roles: [
    "Pelajar & Tech Enthusiast",
    "Frontend Developer",
    "React & Tailwind Enthusiast",
    "UI/UX Design Explorer"
  ],
  
  // Deskripsi / biografi singkat tentang diri Anda
  bio: "Saya berfokus pada pembangunan antarmuka web modern, interaktif, responsif, dan berperforma tinggi dengan kode yang bersih dan terstruktur.",
  
  // Lokasi domisili Anda
  location: "Sidoarjo & Surabaya",
  
  // Alamat email aktif Anda (akan otomatis disalin saat tombol Salin Email diklik)
  email: "viskaataliarmadhani@gmail.com",
  
  // Nomor kontak / WhatsApp Anda
  phone: "089512476417",
  
  // Link langsung chat WhatsApp
  whatsappUrl: "https://wa.me/089512476417?text=Halo%20Viska,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda!",
  
  // Status ketersediaan kerja (muncul dengan badge hijau di Hero section)
  status: "Terbuka untuk Pekerjaan & Freelance",
  
  // Link file CV / resume Anda (bisa berupa URL Google Drive atau tautan file lokal)
  resumeUrl: "#",
  
  // Tautan akun Media Sosial Anda
  socials: {
    github: "https://github.com/viskaataliaramadhani",
    linkedin: "https://www.linkedin.com/in/viskaataliaramadhani/",
    instagram: "https://www.instagram.com/viskaatalia7/",
    twitter: "https://twitter.com",
  },
  
  // 4 Kotak Statistik Pencapaian di bagian "Tentang Saya"
  stats: [
    { label: "Tahun Belajar", value: "2+", suffix: "" },
    { label: "Proyek Selesai", value: "10+", suffix: "" },
    { label: "Dedikasi & Motivasi", value: "100%", suffix: "" },
    { label: "Teknologi Dipelajari", value: "8+", suffix: "" }
  ]
};

// 2. DAFTAR KEAHLIAN & TEKNOLOGI (SKILLS)
// Anda dapat menambah, menghapus, atau mengubah level persentase (0 - 100)
export const skillsData = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 90, icon: "Atom", color: "from-cyan-400 to-blue-500" },
      { name: "Tailwind CSS", level: 92, icon: "Palette", color: "from-teal-400 to-cyan-500" },
      { name: "JavaScript / ES6", level: 85, icon: "Code2", color: "from-amber-400 to-yellow-500" },
      { name: "HTML5 & Modern CSS3", level: 95, icon: "FileCode", color: "from-orange-400 to-rose-500" },
      { name: "Next.js", level: 75, icon: "Layers", color: "from-slate-200 to-slate-400" },
      { name: "Framer Motion", level: 80, icon: "Sparkles", color: "from-pink-400 to-purple-500" }
    ]
  },
  {
    category: "Backend & Database",
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: 75, icon: "Server", color: "from-emerald-400 to-green-600" },
      { name: "RESTful API Integration", level: 85, icon: "Network", color: "from-blue-400 to-indigo-500" },
      { name: "MySQL / Database", level: 70, icon: "Database", color: "from-sky-400 to-blue-600" },
      { name: "Firebase / Supabase", level: 78, icon: "Flame", color: "from-amber-400 to-orange-500" }
    ]
  },
  {
    category: "Tools & Design",
    icon: "Wrench",
    skills: [
      { name: "Figma (UI/UX)", level: 85, icon: "Figma", color: "from-purple-400 to-pink-500" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch", color: "from-orange-400 to-red-500" },
      { name: "VS Code & Vite", level: 90, icon: "Zap", color: "from-yellow-400 to-amber-500" },
      { name: "Postman API", level: 80, icon: "Send", color: "from-orange-400 to-rose-500" }
    ]
  }
];

// 3. DAFTAR KARYA / PROYEK PORTOFOLIO
// Kategori yang tersedia: 'web' (Web App), 'mobile' (Mobile / PWA), 'uiux' (UI/UX Design)
export const projectsData = [
  {
    id: "zenith-dashboard",
    title: "Zenith SaaS Analytics Platform",
    subtitle: "Enterprise analytics dashboard dengan visualisasi data real-time.",
    category: "web",
    categoryLabel: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    tags: ["React", "Tailwind CSS", "Chart.js", "Framer Motion", "Vite"],
    description: "Platform analitik dashboard SaaS komprehensif yang dirancang untuk memantau metrik performa bisnis, traffic penjualan, dan konversi secara real-time dengan antarmuka dark-mode modern yang interaktif.",
    highlights: [
      "Visualisasi chart interaktif dengan filter rentang waktu dinamis",
      "Mode dark/light glassmorphism yang responsif untuk berbagai resolusi layar",
      "Manajemen state performa tinggi tanpa lag",
      "Export laporan ke format CSV dan PDF instan"
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/viskaataliaramadhani"
  },
  {
    id: "pulse-ecommerce",
    title: "PulseStore - Next-Gen E-Commerce",
    subtitle: "Toko online modern dengan cart interaktif & checkout seamless.",
    category: "web",
    categoryLabel: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    tags: ["React", "Tailwind CSS", "Redux Toolkit", "Stripe API"],
    description: "Aplikasi e-commerce modern dengan katalog produk berfilter canggih, keranjang belanja interaktif animasi, integrasi gateway pembayaran Stripe, dan sistem ulasan pengguna real-time.",
    highlights: [
      "Fitur pencarian instan dengan fuzzy matching & filter multi-kategori",
      "Animasi drawer shopping cart yang mulus menggunakan Framer Motion",
      "Sistem kalkulasi diskon, ongkos kirim, dan pajak otomatis",
      "Desain antarmuka mobile-first ultra responsif"
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/viskaataliaramadhani"
  },
  {
    id: "aura-fitness-app",
    title: "Aura Habit & Fitness Tracker",
    subtitle: "Aplikasi pelacak kebiasaan hidup sehat dan jadwal olahraga.",
    category: "mobile",
    categoryLabel: "Mobile & PWA",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    tags: ["React PWA", "Tailwind CSS", "IndexedDB", "Lucide Icons"],
    description: "Aplikasi progressive web app (PWA) untuk membantu pengguna melacak rutinitas olahraga harian, target kalori, serta asupan air dengan sistem reward gamifikasi.",
    highlights: [
      "Dapat diinstall di Android & iOS sebagai PWA dengan dukungan offline",
      "Gamifikasi badge dan streak pencapaian target harian",
      "Penyimpanan lokal cepat dan aman via IndexedDB",
      "Notifikasi pengingat latihan berbasis browser"
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/viskaataliaramadhani"
  },
  {
    id: "nova-design-system",
    title: "Nova UI - Modern Design System",
    subtitle: "Koleksi komponen UI reusable dan sistem desain elegan di Figma.",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    tags: ["Figma", "Design Tokens", "Auto Layout", "Design System"],
    description: "Design system lengkap mencakup 100+ varian komponen, sistem tipografi, palet warna aksesibel (WCAG AAA), icon set kustom, dan prototipe interaktif untuk aplikasi web & mobile.",
    highlights: [
      "Struktur token desain scalable untuk tim pengembang dan desainer",
      "Komponen auto-layout fleksibel dengan mode dark & light bawaan",
      "Dokumentasi panduan penggunaan komponen yang interaktif",
      "Aset siap ekspor langsung ke kode Tailwind CSS"
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/viskaataliaramadhani"
  },
  {
    id: "cryptoview-app",
    title: "CryptoView - Market Live Tracker",
    subtitle: "Pantau harga cryptocurrency secara real-time dengan WebSocket API.",
    category: "web",
    categoryLabel: "Web App",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    tags: ["React", "Tailwind CSS", "CoinGecko API", "WebSockets"],
    description: "Aplikasi pemantau harga crypto langsung dengan grafik candlestick interaktif, kalkulator konversi mata uang, dan bookmark koin favorit.",
    highlights: [
      "Pembaruan data harga real-time tanpa perlu reload halaman",
      "Grafik candlestick interaktif dengan interval 24 jam hingga 1 tahun",
      "Filter tren koin terpopuler, top gainers, dan top losers"
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/viskaataliaramadhani"
  },
  {
    id: "minimalist-portfolio",
    title: "Artisan Creative Portfolio Template",
    subtitle: "Template portofolio kreatif untuk fotografer dan desainer grafis.",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    tags: ["Figma", "Tailwind CSS", "Minimalism", "Portfolio"],
    description: "Desain portofolio minimalis dengan layout editorial mewah, transisi halaman sinematik, dan galeri masonry yang memukau.",
    highlights: [
      "Layout editorial modern dengan tipografi berkelas",
      "Efek hover gambar interaktif dengan transisi halus",
      "Skema warna monokrom beraksen aksen lembut"
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/viskaataliaramadhani"
  }
];

// 4. RIWAYAT PENGALAMAN KARIER (TIMELINE)
export const experienceData = [
  {
    period: "2024 - Sekarang",
    role: "Frontend Web Developer & Learner",
    company: "Proyek Pribadi & Freelance",
    type: "Freelance",
    description: "Membangun antarmuka web modern dengan React.js dan Tailwind CSS, mengeksplorasi integrasi API, serta merancang desain UI/UX interaktif."
  },
  {
    period: "2023 - 2024",
    role: "Pelajar Teknik Informatika / Rekayasa Perangkat Lunak",
    company: "Pendidikan Vokasi / Formal",
    type: "Studi",
    description: "Mempelajari dasar-dasar pemrograman web, algoritma, desain grafis antarmuka (UI/UX), dan pengembangan proyek kolaboratif."
  }
];

// 5. RIWAYAT PENDIDIKAN & SERTIFIKASI
export const educationData = [
  {
    year: "Sedang Berjalan",
    degree: "Pendidikan Formal & Kejuruan Teknologi Informasi",
    institution: "Sekolah / Lembaga Pendidikan",
    detail: "Fokus pada Pemrograman Web, Frontend Development, dan UI/UX Design."
  },
  {
    year: "2023 - 2024",
    degree: "Frontend React & Modern Web Course",
    institution: "Online Certification & Self-Taught",
    detail: "Penguasaan React.js, Tailwind CSS, JavaScript Modern ES6, dan Version Control Git/GitHub."
  }
];

// 6. TESTIMONI KLIEN & REKAN KERJA
export const testimonialsData = [
  {
    name: "Rekan Kolaborasi",
    role: "Web Developer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    content: "Viska memiliki semangat belajar yang luar biasa tinggi dan selalu detail dalam menata tampilan web agar terlihat modern dan rapi."
  },
  {
    name: "Mentor / Pengajar",
    role: "Tech Lead",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    content: "Kreativitas Viska dalam memadukan warna dan animasi Tailwind CSS patut diacungi jempol. Kode yang dihasilkan terstruktur dengan sangat baik."
  }
];
