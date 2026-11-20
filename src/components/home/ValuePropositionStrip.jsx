import React from 'react';
import { BRAND_INFO } from '../../data/products';
import { useCurrency } from '../../context/CurrencyContext';

export default function ValuePropositionStrip() {
  const { selectedCountry } = useCurrency();

  return (
    <div className="border-b border-slate-100 bg-white select-none">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-left">
          
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 102 0m8 0a1 1 0 102 0" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 font-heading">Free Delivery</h4>
              <p className="text-[11px] text-slate-500 font-normal">To {selectedCountry.name}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 font-heading">Easy Returns</h4>
              <p className="text-[11px] text-slate-500 font-normal">30-day guarantee</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 font-heading">100% Genuine</h4>
              <p className="text-[11px] text-slate-500 font-normal">Verified factory stock</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 font-heading">Secure Checkout</h4>
              <p className="text-[11px] text-slate-500 font-normal">Encrypted in {selectedCountry.code}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 col-span-2 md:col-span-1">
            <div className="w-9 h-9 rounded-xl bg-[#E1EDF9] text-[#10367D] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900 font-heading">Direct Support</h4>
              <p className="text-[11px] text-slate-500 font-normal">{BRAND_INFO.email}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
