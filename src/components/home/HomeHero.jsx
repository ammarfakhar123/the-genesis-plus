import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../../data/products';
import { useCurrency } from '../../context/CurrencyContext';

export default function HomeHero() {
  const { selectedCountry } = useCurrency();

  return (
    <div className="relative w-full bg-white border-b border-slate-100 select-none overflow-hidden">
      <div
        className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] bg-cover bg-right lg:bg-center flex items-center"
        style={{ backgroundImage: `url('/hero-banner.jpg')` }}
      >
        {/* Subtle Light Gradient on the Left for Clean, Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/75 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Refined, Elegant Typography & Actions */}
            <div className="lg:col-span-7 space-y-5 text-left max-w-xl">
              
              {/* Clean Eyebrow (Elegant & Balanced, not chunky) */}
              <div className="flex items-center space-x-2.5 text-xs font-semibold tracking-wider text-[#10367D]">
                <span className="h-0.5 w-6 bg-[#10367D] rounded-full"></span>
                <span className="uppercase">{BRAND_INFO.name}</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#007185] uppercase">{BRAND_INFO.tagline}</span>
              </div>

              {/* Main Heading: Sophisticated font-bold, clean leading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-slate-900 leading-[1.18] font-heading tracking-tight">
                Curated Quality.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10367D] via-[#0062BD] to-[#00A3E0]">
                  Direct to Your Door.
                </span>
              </h1>

              {/* Subtitle: Natural font-normal, comfortable reading */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Discover authentic British confectionery, historic 1808 fragrances, and specialized mineral oral defense with verified worldwide &amp; North American delivery.
              </p>

              {/* Action Buttons: Clean font-semibold with balanced padding */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#deals"
                  className="inline-flex items-center space-x-2 bg-[#10367D] hover:bg-[#0C2B64] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <span>Shop Today's Deals</span>
                  <svg className="w-4 h-4 text-[#74B4DA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <Link
                  to="/products"
                  className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-400 shadow-xs transition-all"
                >
                  <span>Explore Catalog</span>
                </Link>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-3 border-t border-slate-200/70 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600">
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% Authentic Guaranteed</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Priority Dispatch to {selectedCountry.name}</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-[#00A3E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Safe Checkout ({selectedCountry.code})</span>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Glassmorphic Trust Badges (Tasteful & Refined) */}
            <div className="lg:col-span-5 hidden sm:flex flex-col items-end space-y-3.5">
              
              {/* Badge 1: Authenticity */}
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3.5 border border-white/80 shadow-md flex items-center space-x-3 max-w-xs transition-transform hover:scale-102">
                <div className="w-10 h-10 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center font-bold text-base shrink-0">
                  🛡️
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 font-heading">
                    100% Genuine Imports
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal">
                    Direct factory sealed original batches
                  </span>
                </div>
              </div>

              {/* Badge 2: Express Delivery */}
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3.5 border border-white/80 shadow-md flex items-center space-x-3 max-w-xs transition-transform hover:scale-102">
                <div className="w-10 h-10 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center font-bold text-base shrink-0">
                  🚚
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 font-heading">
                    Deliver to {selectedCountry.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal">
                    Tracked regional dispatch in {selectedCountry.code}
                  </span>
                </div>
              </div>

              {/* Badge 3: Customer Satisfaction */}
              <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3.5 border border-white/80 shadow-md flex items-center space-x-3 max-w-xs transition-transform hover:scale-102">
                <div className="w-10 h-10 rounded-xl bg-[#E1EDF9] text-amber-500 flex items-center justify-center font-bold text-base shrink-0">
                  ⭐
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-900 font-heading">
                    4.8 / 5 Verified Rating
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal">
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
