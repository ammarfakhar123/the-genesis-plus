import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';

export default function BrandTrustStrip() {
  const { selectedCountry } = useCurrency();

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 pt-12">
      <div className="bg-[#10367D] text-white rounded-3xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center sm:text-left shadow-md">
        <div>
          <span className="block text-sm font-bold text-[#74B4DA]">100% Original</span>
          <span className="text-xs text-slate-200 font-normal">Verified factory stock</span>
        </div>
        <div>
          <span className="block text-sm font-bold text-[#74B4DA]">Fast Delivery</span>
          <span className="text-xs text-slate-200 font-normal">To {selectedCountry.name}</span>
        </div>
        <div>
          <span className="block text-sm font-bold text-[#74B4DA]">Secure Checkout</span>
          <span className="text-xs text-slate-200 font-normal">Encrypted in {selectedCountry.code}</span>
        </div>
        <div>
          <span className="block text-sm font-bold text-[#74B4DA]">30-Day Returns</span>
          <span className="text-xs text-slate-200 font-normal">Money-back guarantee</span>
        </div>
        <div className="col-span-2 md:col-span-1">
          <span className="block text-sm font-bold text-[#74B4DA]">Local Currency</span>
          <span className="text-xs text-slate-200 font-normal">{selectedCountry.flag} {selectedCountry.code} ({selectedCountry.symbol.trim()})</span>
        </div>
      </div>
    </div>
  );
}
