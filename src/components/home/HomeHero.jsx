import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../../data/products';
import { useCurrency } from '../../context/CurrencyContext';

export default function HomeHero() {
  const { selectedCountry } = useCurrency();

  return (
    <div className="relative w-full bg-white border-b border-slate-100 select-none overflow-hidden">
      <div
        className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] bg-cover bg-right lg:bg-center flex items-center"
        style={{ backgroundImage: `url('/hero-banner.jpg')` }}
      >
        {/* Subtle White Gradient on the Left for Ultra-Crisp Typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/70 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Bold Typography & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left max-w-2xl">
              
              {/* Clean Editorial Kicker (No bubble pill border) */}
              <div className="flex items-center space-x-2.5 text-xs font-black uppercase tracking-widest text-[#10367D]">
                <span className="h-0.5 w-7 bg-[#10367D] rounded-full"></span>
                <span className="font-heading">THE GENESIS PLUS</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#00A3E0] font-heading">{BRAND_INFO.tagline.toUpperCase()}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-tight font-heading tracking-tight">
                Curated Quality.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10367D] via-[#0062BD] to-[#00A3E0]">
                  Direct to Your Door.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-medium max-w-xl">
                Discover authentic British confectionery, historic 1808 fragrances, and specialized mineral oral defense with verified worldwide &amp; North American delivery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#deals"
                  className="inline-flex items-center space-x-2.5 bg-[#10367D] hover:bg-[#0C2B64] text-white font-black text-sm px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Shop Today's Deals</span>
                  <svg className="w-4 h-4 text-[#74B4DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <Link
                  to="/products"
                  className="inline-flex items-center space-x-2 bg-white/95 hover:bg-white text-[#10367D] font-black text-sm px-7 py-4 rounded-xl border-2 border-[#10367D] shadow-xs hover:border-[#0C2B64] transition-all"
                >
                  <span>Explore Catalog</span>
                </Link>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700">
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% Authentic Guaranteed</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Express Priority Dispatch to {selectedCountry.name}</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-[#00A3E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Safe SSL Checkout ({selectedCountry.code})</span>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Glassmorphic Trust Badges (No Product Images or Prices) */}
            <div className="lg:col-span-5 hidden sm:flex flex-col items-end space-y-4">
              
              {/* Badge 1: Authenticity */}
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center space-x-3.5 max-w-xs transform hover:scale-102 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center font-black text-lg shrink-0">
                  🛡️
                </div>
                <div className="text-left">
                  <span className="block text-xs font-black text-[#0F172A] font-heading">
                    100% Genuine Imports
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Direct factory sealed original batches
                  </span>
                </div>
              </div>

              {/* Badge 2: Express Delivery */}
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center space-x-3.5 max-w-xs transform hover:scale-102 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center font-black text-lg shrink-0">
                  🚚
                </div>
                <div className="text-left">
                  <span className="block text-xs font-black text-[#0F172A] font-heading">
                    Deliver to {selectedCountry.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Fast, tracked delivery in {selectedCountry.code}
                  </span>
                </div>
              </div>

              {/* Badge 3: Customer Satisfaction */}
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-lg flex items-center space-x-3.5 max-w-xs transform hover:scale-102 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-[#E1EDF9] text-amber-500 flex items-center justify-center font-black text-lg shrink-0">
                  ⭐
                </div>
                <div className="text-left">
                  <span className="block text-xs font-black text-[#0F172A] font-heading">
                    4.8 / 5 Verified Rating
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    24,000+ verified customer reviews
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
