import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryPillsRow({ activeCategory, setActiveCategory }) {
  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 pt-10 select-none">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] font-heading">
            Shop by Department
          </h2>
          <p className="text-xs text-slate-500">
            Select a specialty category to filter verified products
          </p>
        </div>
        <Link to="/products" className="text-xs font-bold text-[#10367D] hover:underline">
          View all categories ›
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {/* Pill 1: All Products */}
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`flex items-center space-x-3 p-3.5 rounded-2xl border text-left transition-all ${
            activeCategory === 'all'
              ? 'bg-[#10367D] text-white border-[#10367D] shadow-md'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl ${
            activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-[#E1EDF9] text-[#10367D]'
          }`}>
            ⭐
          </div>
          <div>
            <span className="block text-xs font-black font-heading">All Specialties</span>
            <span className={`text-[11px] ${activeCategory === 'all' ? 'text-slate-200' : 'text-slate-500'}`}>
              5 verified items
            </span>
          </div>
        </button>

        {/* Pill 2: Extreme Sour Sweets */}
        <button
          type="button"
          onClick={() => setActiveCategory('sours')}
          className={`flex items-center space-x-3 p-3.5 rounded-2xl border text-left transition-all ${
            activeCategory === 'sours'
              ? 'bg-[#10367D] text-white border-[#10367D] shadow-md'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl ${
            activeCategory === 'sours' ? 'bg-white/20 text-white' : 'bg-[#E1EDF9] text-[#10367D]'
          }`}>
            🍬
          </div>
          <div>
            <span className="block text-xs font-black font-heading">British Mega Sours</span>
            <span className={`text-[11px] ${activeCategory === 'sours' ? 'text-slate-200' : 'text-slate-500'}`}>
              Barnetts UK Candy
            </span>
          </div>
        </button>

        {/* Pill 3: Historic Colognes */}
        <button
          type="button"
          onClick={() => setActiveCategory('cologne')}
          className={`flex items-center space-x-3 p-3.5 rounded-2xl border text-left transition-all ${
            activeCategory === 'cologne'
              ? 'bg-[#10367D] text-white border-[#10367D] shadow-md'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl ${
            activeCategory === 'cologne' ? 'bg-white/20 text-white' : 'bg-[#E1EDF9] text-[#10367D]'
          }`}>
            🌊
          </div>
          <div>
            <span className="block text-xs font-black font-heading">Florida Water 1808</span>
            <span className={`text-[11px] ${activeCategory === 'cologne' ? 'text-slate-200' : 'text-slate-500'}`}>
              Murray &amp; Lanman
            </span>
          </div>
        </button>

        {/* Pill 4: Mineral Oral Care */}
        <button
          type="button"
          onClick={() => setActiveCategory('oral')}
          className={`flex items-center space-x-3 p-3.5 rounded-2xl border text-left transition-all ${
            activeCategory === 'oral'
              ? 'bg-[#10367D] text-white border-[#10367D] shadow-md'
              : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl ${
            activeCategory === 'oral' ? 'bg-white/20 text-white' : 'bg-[#E1EDF9] text-[#10367D]'
          }`}>
            🪥
          </div>
          <div>
            <span className="block text-xs font-black font-heading">Mineral Oral Care</span>
            <span className={`text-[11px] ${activeCategory === 'oral' ? 'text-slate-200' : 'text-slate-500'}`}>
              Zion Health ClayBrite
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
