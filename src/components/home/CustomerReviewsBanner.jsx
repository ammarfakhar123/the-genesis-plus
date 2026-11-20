import React from 'react';
import { BRAND_INFO } from '../../data/products';

export default function CustomerReviewsBanner() {
  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 pt-12">
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-[#10367D] text-white flex items-center justify-center font-black text-base shadow-xs shrink-0">
            GP
          </div>
          <div>
            <h3 className="text-base font-black text-[#0F172A] font-heading">
              The Genesis Plus Quality Guarantee
            </h3>
            <p className="text-xs text-slate-500">
              {BRAND_INFO.tagline} • Every single product in our catalog is authentic, original, and backed by a 30-day satisfaction guarantee.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 shrink-0 text-right">
          <div>
            <div className="text-amber-500 font-black text-sm">★★★★★</div>
            <span className="text-xs text-slate-600 font-bold">4.8 out of 5 stars</span>
            <span className="block text-[11px] text-slate-400">Based on 24,000+ verified customer reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
