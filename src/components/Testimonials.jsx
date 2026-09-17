import React from 'react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION TESTIMONI KLIEN */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Testimoni Klien</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata <span className="gradient-text">Klien & Rekan</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Ulasan dari mereka yang telah berkolaborasi dalam proyek pengembangan web.
          </p>
        </div>

        {/* GRID KARTU TESTIMONI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Rating Bintang 5 */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Kutipan Ulasan Klien */}
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Data Profil Pengirim Testimoni */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
