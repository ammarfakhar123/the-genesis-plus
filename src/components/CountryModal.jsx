import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext';

export default function CountryModal() {
  const { countries, selectedCountry, setSelectedCountry, isModalOpen, setIsModalOpen } = useCurrency();
  const [tempSelected, setTempSelected] = useState(selectedCountry.id);
  const [search, setSearch] = useState('');

  if (!isModalOpen) return null;

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleApply = () => {
    const chosen = countries.find((c) => c.id === tempSelected);
    if (chosen) {
      setSelectedCountry(chosen);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs select-none">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#F8FAFC]">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-[#10367D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-base font-black text-[#0F172A] font-heading">
              Choose your delivery location &amp; currency
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            Select your country to view local currency prices, localized delivery speeds, and verified regional dispatch options.
          </p>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country or currency (e.g. Pakistan, USD, PKR)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10367D] focus:bg-white transition-all text-slate-800 placeholder-slate-400"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
          </div>

          {/* Quick Select Grid */}
          <div className="space-y-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
              Available Destinations &amp; Currencies
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredCountries.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setTempSelected(c.id)}
                  className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                    tempSelected === c.id
                      ? 'border-[#10367D] bg-[#E1EDF9]/70 ring-1 ring-[#10367D]'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="text-xl shrink-0">{c.flag}</span>
                    <div>
                      <span className="block text-xs font-black text-slate-900 font-heading">
                        {c.name}
                      </span>
                      <span className="text-[11px] text-slate-500 font-bold">
                        {c.code} ({c.symbol.trim()})
                      </span>
                    </div>
                  </div>
                  {tempSelected === c.id && (
                    <span className="text-[#10367D] font-black text-sm">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-[#F8FAFC]">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="px-6 py-2.5 rounded-xl bg-[#10367D] hover:bg-[#0C2B64] text-white text-xs font-black shadow-md transition-all font-heading"
          >
            Done &amp; Apply
          </button>
        </div>
      </div>
    </div>
  );
}
