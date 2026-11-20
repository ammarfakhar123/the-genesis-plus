import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../../context/CurrencyContext';

export default function PromoQuadGrid() {
  const { selectedCountry } = useCurrency();

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 pt-10 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Barnetts Fruits */}
        <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-6 shadow-xs border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0062BD] block">
              Extreme UK Confectionery
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-heading">
              The 20-Second Sour Challenge
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Handcrafted British boiled sweets in traditional copper pans. Can you withstand the extreme malic acid rush?
            </p>
          </div>
          <div className="pt-5">
            <Link
              to="/products/barnetts-mega-sour-candy-fruits-104g"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#10367D] hover:text-[#0C2B64] hover:underline"
            >
              <span>Shop Mega Sours</span>
              <span>›</span>
            </Link>
          </div>
        </div>

        {/* Card 2: Florida Water */}
        <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-6 shadow-xs border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0062BD] block">
              Historic American Cologne
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-heading">
              Murray &amp; Lanman Heritage 1808
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Classic botanical splash cologne with fresh citrus, lavender, and orange blossom for body refreshment and spiritual cleanse.
            </p>
          </div>
          <div className="pt-5">
            <Link
              to="/products/florida-water-cologne-7-5oz"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#10367D] hover:text-[#0C2B64] hover:underline"
            >
              <span>Explore Florida Water</span>
              <span>›</span>
            </Link>
          </div>
        </div>

        {/* Card 3: ClayBrite Sensitive */}
        <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-6 shadow-xs border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0062BD] block">
              Natural Mineral Oral Care
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-heading">
              Gentle Enamel Mineral Defense
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Fluoride-free, unsweetened, and unflavored sensitive paste formulated with Calcium Hydroxyapatite and Montmorillonite ionic clay.
            </p>
          </div>
          <div className="pt-5">
            <Link
              to="/products/claybrite-sensitive-natural-toothpaste-4oz"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#10367D] hover:text-[#0C2B64] hover:underline"
            >
              <span>Explore Oral Wellness</span>
              <span>›</span>
            </Link>
          </div>
        </div>

        {/* Card 4: Direct Dispatch Guarantee */}
        <div className="bg-gradient-to-br from-white to-[#F8FAFC] rounded-2xl p-6 shadow-xs border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0062BD] block">
              The Genesis Plus Promise
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-heading">
              Direct Express Fulfillment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              100% factory original batches, fast delivery to {selectedCountry.name}, and 30-day hassle-free return protection.
            </p>
          </div>
          <div className="pt-5">
            <Link
              to="/products"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#10367D] hover:text-[#0C2B64] hover:underline"
            >
              <span>Browse Full Catalog</span>
              <span>›</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
