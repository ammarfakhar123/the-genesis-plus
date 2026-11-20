import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/products';

export default function HeroBanner() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-card border border-slate-200/80 bg-white">
      {/* Background Image Container */}
      <div
        className="relative w-full min-h-[520px] lg:min-h-[580px] bg-cover bg-right lg:bg-center flex items-center p-6 sm:p-10 lg:p-14"
        style={{ backgroundImage: `url('/hero-banner.jpg')` }}
      >
        {/* Soft Left Light Gradient Overlay to guarantee 100% text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none w-full lg:w-3/5"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-2xl">
            {/* Tag Pill */}
            <div className="inline-flex items-center space-x-2 bg-[#F0F7FF] text-[#10367D] border border-sky-200 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10367D] animate-ping"></span>
              <span>{BRAND_INFO.name.toUpperCase()} • OFFICIAL CATALOG</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.12] tracking-tight font-heading">
              Discover Curated Quality. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10367D] via-[#0062BD] to-[#00A3E0]">
                {BRAND_INFO.tagline}.
              </span>
            </h1>

            {/* Subhead Prose */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
              Authentic British confectionery handcrafted in copper pans since 1896, historic 1808 American colognes, and specialized mineral oral defense. Priority express dispatch across {BRAND_INFO.region}.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 pt-1">
              <div className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="text-emerald-600 font-black">✓</span>
                <span>100% Genuine Stock</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="text-amber-500 font-black">★</span>
                <span>4.8 / 5.0 (24,000+ Reviews)</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="text-[#10367D] font-black">⚡</span>
                <span>Fast North America Dispatch</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#products-section"
                className="inline-flex items-center space-x-2 bg-[#10367D] hover:bg-[#0C2B64] text-white font-extrabold text-xs sm:text-sm px-7 py-4 rounded-full shadow-lg shadow-blue-900/20 transition-all hover:scale-102"
              >
                <span>Shop Verified Products (5)</span>
                <svg className="w-4 h-4 text-[#74B4DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <Link
                to="/about"
                className="inline-flex items-center space-x-1.5 bg-white/95 hover:bg-white text-[#10367D] font-bold text-xs sm:text-sm px-6 py-4 rounded-full border border-slate-200 shadow-sm transition-all"
              >
                <span>About Our Standards</span>
              </Link>
            </div>
          </div>

          {/* Right Product Spotlight Glassmorphic Card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                <span className="font-extrabold text-[#10367D] uppercase tracking-wider">
                  Featured Spotlight
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                  In Stock
                </span>
              </div>

              {/* Central Featured Image */}
              <div className="relative aspect-square w-full bg-white rounded-2xl p-6 flex items-center justify-center border border-slate-100 shadow-inner overflow-hidden">
                <img
                  src="/products/barnetts-fruits-main.jpg"
                  alt="Barnetts Mega Sour Fruits"
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>

              {/* Spotlight Product Details */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Barnetts Confectioners</span>
                  <span className="text-base font-black text-[#10367D]">$9.99</span>
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 line-clamp-1">
                  Barnetts Mega Sour Fruits (104g)
                </h3>
                <p className="text-[11px] text-slate-500">
                  20-Second Extreme Sour Rush • Copper Pan UK Boiled
                </p>
              </div>

              <a
                href="#products-section"
                className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-[#F0F7FF] hover:bg-[#E0EFFF] text-[#10367D] font-extrabold text-xs transition-colors"
              >
                View Catalog Items
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
